

import INetManager, { NetEventType } from "./INetManager";

import {MqttClient, connect} from "../lib/mqtt.min.js";

import {NetBase, NetBaseMessage, NetBaseReq} from "../../netMessage/Message";
import {CodeFormat} from "../../netMessage/IBuilder";
import TKStream from "./RpcPromise";
import {Buffer} from "../buffer/index"
import { Resp } from "../../netMessage/PBMessage";
import Singleton from "../../framework/utils/Singleton";
import Emitter from "../../framework/event/Emitter";
import TKLog from "../../framework/log/TKLog";
import MessageBuilder from "../../netMessage/MessageBuilder";

function nop() {};
function flushVolatile (queue) {
    if (queue) {
      Object.keys(queue).forEach(function (messageId) {
            // if (queue[messageId].volatile && typeof queue[messageId].cb === 'function') {
            //     queue[messageId].cb(new Error('Connection closed'))
            //     delete queue[messageId]
            // }
        })
    }
}
const {ccclass, property} = cc._decorator;

@ccclass
export default class WSManager extends Singleton implements INetManager{

    event = new Emitter();
    client : any = null;
    // Inflight callbacks
    requests : {[k: number]: any} = {};
    requestsTimeout: number;

    _log : boolean = true;

    // 注册一般消息监听
    RegisterMsgListener(msgCode: string, callback: Function, context: any) {
        this.event.register(NetEventType.OnMessage + "_" + msgCode, callback, context);
    }
    UnRegisterMsgListener(msgCode: string, callback: Function, context: any) {
        this.event.remove(NetEventType.OnMessage + "_" + msgCode, callback, context);
    }
    RegisterDefaultMsgListener(callback: Function, context: any) {
        this.event.register(NetEventType.OnMessage, callback, context);
    }

    CreateInit(params : any) {
        let ip = params["ip"];
        if(ip == null || ip == undefined){
            TKLog.LogErr("WSManager.CreateInit错误，需要传入ip参数");
            return;
        }
        this.requestsTimeout = params["requestsTimeout"] || 8000;
        MessageBuilder.getInstance().init(CodeFormat.Protobuf);
        this.client = connect(
            ip
            //"ws://192.168.1.25:3653/mqant"
            //"ws://192.168.1.43:3653/mqant"
            ,{
            protocolId: 'MQIsdp',
            protocolVersion: 3,
            clientId:'mqttjs_' + Math.random().toString(16).substr(2, 8),
            reconnectPeriod:0, //不自动重连
        });
        // connect(Packet)
        this.client.on('connect', function (packet) {
            if(this._log){
                TKLog.LogInfo("WSManager connect " , packet);
            }
            WSManager.getInstance().OnOpen(packet);
        });
        // message(Topic, Message,Packet)
        this.client.on("message", function (topic, payload) {
            if(this._log){
                TKLog.LogInfo("WSManager message " + topic);
            }
            WSManager.getInstance().OnMessage({topic:topic, payload:payload})
        })
        // close(Event)
        this.client.on('close', function (e,b) {
            if(this._log){
                TKLog.LogInfo("WSManager close " + e);
            }
            WSManager.getInstance().OnClose(e);
        })
        // error(Error)
        this.client.on('error', function (e) {
            WSManager.getInstance().OnError(e);
            // console.log(arguments)
        })
        TKStream.getInstance().init(this.client, this.requestsTimeout, CodeFormat.Protobuf);
    }
    /**
     *
     * @param message packet = {
    cmd: 'type',
    topic: topic,
    payload: message,
    qos: opts.qos,
    retain: opts.retain,
    messageId: this._nextId(),
    dup: opts.dup
  }
     */
    OnOpen(message: object) {
        if(this._log){
            TKLog.LogInfo("WSManager.OnOpen ", message)
        }
        this.event.fire(NetEventType.OnOpen, message);
    }
    OnClose(message: object) {
        flushVolatile(this.requests)
        this.event.fire(NetEventType.OnClose, message);
    }
    /**
     * message包含两部分{
     *  topic : "msg_code"
     *  payload : "json"
     * }
     * 其中payload就是消息本地，需要再次JSON转换，结构为:
     * {
     *     Error : "",
     *     Result : ""
     * }
     * 其中Result直接是一个JSON对象
     * @param message 消息
     */
    OnMessage(message: any) {
        let rsp: NetBase;
        let msgId: number = 0;
        let error: Error = null;
        let isMsg: boolean = false;
        let msgCode  : string= message["topic"];
        let payload = Buffer.from(message["payload"]);
        try {
            let topics: string[] = message["topic"].split("/");
            msgId = parseInt(topics[topics.length - 1])
            if(Number.isNaN(msgId)){
                msgId = 0
            }else{
                let newMsgCode : string = ""
                for (let index = 0; index < topics.length - 1; index++) {
                    const element = topics[index];
                    newMsgCode += element
                    if(index < topics.length - 2){
                        newMsgCode += "/"
                    }
                }
                msgCode = newMsgCode
            }

            if(this._log){
                TKLog.LogInfo("WSManager OnMessage id: " + msgId + " msgCode=" + msgCode + " topic:" + topics);
            }

            if (msgCode.includes("HD_MSG_") || msgCode.includes("MSG_")) {//消息类
                isMsg = true;
                rsp = MessageBuilder.getInstance().BuildMessage(msgCode, msgId, payload);
            } else {//rpc的响应包
                rsp = MessageBuilder.getInstance().BuildResponse(msgCode, msgId, payload);
            }
        } catch (e) {
            error = new Error(`解析消息${msgCode}异常${e}，payload=${payload}`);
            if (msgId > 0) {//对msgId的响应（包括rpc的response和同步消息）
                TKStream.getInstance().onPacketError(msgId, error);
                return;
            }
            this.OnError(error);
            return
        }
        if (msgId > 0) {//对msgId的响应（包括rpc的response和同步消息）
            this.FireAMessageEvent(msgCode, rsp);
            TKStream.getInstance().onPacket(msgId, rsp);
            return;
        }
        if (isMsg) {//异步的消息包
            this.FireAMessageEvent(msgCode, rsp);
            this.FireMessageEvent(msgCode, rsp);
        }
    }
    OnError(message: object) {
        if (this._log) {
            TKLog.LogErr("WSManager.OnError " + message);
        }
        this.event.fire(NetEventType.OnError, message);
    }
    /**
     * 发送请求消息
     * @param NetBaseReq req rpc请求
     * @return Promise<any>
     */
    SendRequest(req: NetBaseReq): Promise<Resp> {
        if (this._log) {
            TKLog.LogInfo("WSManager.SendRequest", req);
        }
        return TKStream.getInstance().send(req);
    }
    /**
     * 设置超时
     * @param NetBase packet
     * @param callback 回调函数，可选
     */
    setTimeout(packet: NetBase, callback: Function| null) {
        if (callback == null || typeof callback !== 'function') {
            return;
        }
        let self = this;
        let requestId = packet.getId();
        if(this._log){
            TKLog.LogInfo("setTimeout with: id=" + requestId);
        }
        if (typeof requestId == 'undefined' || requestId <= 0) {
            return;
        }
        // if there is no response for x second, return result
        let timeout = setTimeout(function() {
            var request = self.requests[requestId];
            if(this._log){
                TKLog.LogInfo("timeout :=" + self.requestsTimeout);
            }
            if (request) request.cb(new Error('timeout reached while waiting for clients response'), request.req, null);
            delete self.requests[requestId];
        }, this.requestsTimeout);
        self.requests[requestId] = {
            type: packet.getMsgCode(),
            volatile:false,
            req: packet,
            cb: callback || nop,
            timeout: timeout
        };
    }
    /**
     * 向服务器提交消息
     * @param NetBaseMessage 消息
     * @param callback 回调函数，可选
     */
    PostMessage(msg: NetBaseMessage): Promise<any>{
        if(this._log){
            TKLog.LogInfo("WSManager.PostMessage", msg);
        }
        return TKStream.getInstance().send(msg);
    }
    /**
     * 触发收到服务器消息事件
     * @param msgCode 消息类型
     * @param args 传入的消息参数
     */
    FireMessageEvent(msgCode: string, ...args: any) {
        if(this._log){
            TKLog.LogInfo("WSManager.FireMessageEvent", msgCode);
        }
        this.event.fire(NetEventType.OnMessage, msgCode, ...args);
    }

    FireAMessageEvent(msgCode : string, msg : NetBase){
        this.event.fire(NetEventType.OnMessage + "_" + msgCode, msg)
    }
}
