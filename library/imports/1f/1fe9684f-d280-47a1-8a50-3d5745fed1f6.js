"use strict";
cc._RF.push(module, '1fe96hP0oBHoYpQPVdF/tH2', 'WSManager');
// script/tools/net/WSManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var INetManager_1 = require("./INetManager");
var mqtt_min_js_1 = require("../lib/mqtt.min.js");
var IBuilder_1 = require("../../netMessage/IBuilder");
var RpcPromise_1 = require("./RpcPromise");
var index_1 = require("../buffer/index");
var Singleton_1 = require("../../framework/utils/Singleton");
var Emitter_1 = require("../../framework/event/Emitter");
var TKLog_1 = require("../../framework/log/TKLog");
var MessageBuilder_1 = require("../../netMessage/MessageBuilder");
function nop() { }
;
function flushVolatile(queue) {
    if (queue) {
        Object.keys(queue).forEach(function (messageId) {
            // if (queue[messageId].volatile && typeof queue[messageId].cb === 'function') {
            //     queue[messageId].cb(new Error('Connection closed'))
            //     delete queue[messageId]
            // }
        });
    }
}
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WSManager = /** @class */ (function (_super) {
    __extends(WSManager, _super);
    function WSManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.event = new Emitter_1.default();
        _this.client = null;
        // Inflight callbacks
        _this.requests = {};
        _this._log = true;
        return _this;
    }
    WSManager_1 = WSManager;
    // 注册一般消息监听
    WSManager.prototype.RegisterMsgListener = function (msgCode, callback, context) {
        this.event.register(INetManager_1.NetEventType.OnMessage + "_" + msgCode, callback, context);
    };
    WSManager.prototype.UnRegisterMsgListener = function (msgCode, callback, context) {
        this.event.remove(INetManager_1.NetEventType.OnMessage + "_" + msgCode, callback, context);
    };
    WSManager.prototype.RegisterDefaultMsgListener = function (callback, context) {
        this.event.register(INetManager_1.NetEventType.OnMessage, callback, context);
    };
    WSManager.prototype.CreateInit = function (params) {
        var ip = params["ip"];
        if (ip == null || ip == undefined) {
            TKLog_1.default.LogErr("WSManager.CreateInit错误，需要传入ip参数");
            return;
        }
        this.requestsTimeout = params["requestsTimeout"] || 8000;
        MessageBuilder_1.default.getInstance().init(IBuilder_1.CodeFormat.Protobuf);
        this.client = mqtt_min_js_1.connect(ip
        //"ws://192.168.1.25:3653/mqant"
        //"ws://192.168.1.43:3653/mqant"
        , {
            protocolId: 'MQIsdp',
            protocolVersion: 3,
            clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
            reconnectPeriod: 0,
        });
        // connect(Packet)
        this.client.on('connect', function (packet) {
            if (this._log) {
                TKLog_1.default.LogInfo("WSManager connect ", packet);
            }
            WSManager_1.getInstance().OnOpen(packet);
        });
        // message(Topic, Message,Packet)
        this.client.on("message", function (topic, payload) {
            if (this._log) {
                TKLog_1.default.LogInfo("WSManager message " + topic);
            }
            WSManager_1.getInstance().OnMessage({ topic: topic, payload: payload });
        });
        // close(Event)
        this.client.on('close', function (e, b) {
            if (this._log) {
                TKLog_1.default.LogInfo("WSManager close " + e);
            }
            WSManager_1.getInstance().OnClose(e);
        });
        // error(Error)
        this.client.on('error', function (e) {
            WSManager_1.getInstance().OnError(e);
            // console.log(arguments)
        });
        RpcPromise_1.default.getInstance().init(this.client, this.requestsTimeout, IBuilder_1.CodeFormat.Protobuf);
    };
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
    WSManager.prototype.OnOpen = function (message) {
        if (this._log) {
            TKLog_1.default.LogInfo("WSManager.OnOpen ", message);
        }
        this.event.fire(INetManager_1.NetEventType.OnOpen, message);
    };
    WSManager.prototype.OnClose = function (message) {
        flushVolatile(this.requests);
        this.event.fire(INetManager_1.NetEventType.OnClose, message);
    };
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
    WSManager.prototype.OnMessage = function (message) {
        var rsp;
        var msgId = 0;
        var error = null;
        var isMsg = false;
        var msgCode = message["topic"];
        var payload = index_1.Buffer.from(message["payload"]);
        try {
            var topics = message["topic"].split("/");
            msgId = parseInt(topics[topics.length - 1]);
            if (Number.isNaN(msgId)) {
                msgId = 0;
            }
            else {
                var newMsgCode = "";
                for (var index = 0; index < topics.length - 1; index++) {
                    var element = topics[index];
                    newMsgCode += element;
                    if (index < topics.length - 2) {
                        newMsgCode += "/";
                    }
                }
                msgCode = newMsgCode;
            }
            if (this._log) {
                TKLog_1.default.LogInfo("WSManager OnMessage id: " + msgId + " msgCode=" + msgCode + " topic:" + topics);
            }
            if (msgCode.includes("HD_MSG_") || msgCode.includes("MSG_")) { //消息类
                isMsg = true;
                rsp = MessageBuilder_1.default.getInstance().BuildMessage(msgCode, msgId, payload);
            }
            else { //rpc的响应包
                rsp = MessageBuilder_1.default.getInstance().BuildResponse(msgCode, msgId, payload);
            }
        }
        catch (e) {
            error = new Error("\u89E3\u6790\u6D88\u606F" + msgCode + "\u5F02\u5E38" + e + "\uFF0Cpayload=" + payload);
            if (msgId > 0) { //对msgId的响应（包括rpc的response和同步消息）
                RpcPromise_1.default.getInstance().onPacketError(msgId, error);
                return;
            }
            this.OnError(error);
            return;
        }
        if (msgId > 0) { //对msgId的响应（包括rpc的response和同步消息）
            this.FireAMessageEvent(msgCode, rsp);
            RpcPromise_1.default.getInstance().onPacket(msgId, rsp);
            return;
        }
        if (isMsg) { //异步的消息包
            this.FireAMessageEvent(msgCode, rsp);
            this.FireMessageEvent(msgCode, rsp);
        }
    };
    WSManager.prototype.OnError = function (message) {
        if (this._log) {
            TKLog_1.default.LogErr("WSManager.OnError " + message);
        }
        this.event.fire(INetManager_1.NetEventType.OnError, message);
    };
    /**
     * 发送请求消息
     * @param NetBaseReq req rpc请求
     * @return Promise<any>
     */
    WSManager.prototype.SendRequest = function (req) {
        if (this._log) {
            TKLog_1.default.LogInfo("WSManager.SendRequest", req);
        }
        return RpcPromise_1.default.getInstance().send(req);
    };
    /**
     * 设置超时
     * @param NetBase packet
     * @param callback 回调函数，可选
     */
    WSManager.prototype.setTimeout = function (packet, callback) {
        if (callback == null || typeof callback !== 'function') {
            return;
        }
        var self = this;
        var requestId = packet.getId();
        if (this._log) {
            TKLog_1.default.LogInfo("setTimeout with: id=" + requestId);
        }
        if (typeof requestId == 'undefined' || requestId <= 0) {
            return;
        }
        // if there is no response for x second, return result
        var timeout = setTimeout(function () {
            var request = self.requests[requestId];
            if (this._log) {
                TKLog_1.default.LogInfo("timeout :=" + self.requestsTimeout);
            }
            if (request)
                request.cb(new Error('timeout reached while waiting for clients response'), request.req, null);
            delete self.requests[requestId];
        }, this.requestsTimeout);
        self.requests[requestId] = {
            type: packet.getMsgCode(),
            volatile: false,
            req: packet,
            cb: callback || nop,
            timeout: timeout
        };
    };
    /**
     * 向服务器提交消息
     * @param NetBaseMessage 消息
     * @param callback 回调函数，可选
     */
    WSManager.prototype.PostMessage = function (msg) {
        if (this._log) {
            TKLog_1.default.LogInfo("WSManager.PostMessage", msg);
        }
        return RpcPromise_1.default.getInstance().send(msg);
    };
    /**
     * 触发收到服务器消息事件
     * @param msgCode 消息类型
     * @param args 传入的消息参数
     */
    WSManager.prototype.FireMessageEvent = function (msgCode) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this._log) {
            TKLog_1.default.LogInfo("WSManager.FireMessageEvent", msgCode);
        }
        (_a = this.event).fire.apply(_a, __spreadArrays([INetManager_1.NetEventType.OnMessage, msgCode], args));
    };
    WSManager.prototype.FireAMessageEvent = function (msgCode, msg) {
        this.event.fire(INetManager_1.NetEventType.OnMessage + "_" + msgCode, msg);
    };
    var WSManager_1;
    WSManager = WSManager_1 = __decorate([
        ccclass
    ], WSManager);
    return WSManager;
}(Singleton_1.default));
exports.default = WSManager;

cc._RF.pop();