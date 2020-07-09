import INetManager, { NetEventType } from "./INetManager";
import Emitter from "../../framework/event/Emitter";
import Singleton from "../../framework/utils/Singleton";
import TKLog from "../../framework/log/TKLog";
import NetMessageError from "../../netMessage/NetMessageError";
import { CodeFormat } from "../../netMessage/IBuilder";
import { NetBaseReq, NetBaseMessage } from "../../netMessage/Message";

// import FSMState from "../FSM/FSMState";
// import NetBaseReq from "./NetBaseReq";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HttpManager extends Singleton implements INetManager {
    event = new Emitter();

    url : string = "";
    token : string = "";

    log : boolean = true;

    // 消息码-重试次数
    resendCount : {[code:number]:number} = {};
    // 超时时间，毫秒
    checkTimeOut : number = 1000;

    constructor(){
        super()
        // this.log = GameDefineManager.getInstance().GetGameDefineFirstValueNumber(998001, 0) == 0 ? false : true;
    }
    PostMessage(message: NetBaseMessage, callback: Function): void {
        throw new Error("Method not implemented.");
    }
    RegisterDefaultMsgListener(callback: Function, context: any) {
        throw new Error("Method not implemented.");
    }

    SetToken(token : string){
        this.token = token;
        if(this.log){
            TKLog.LogInfo("重新设置token:" + token)
        }
    }

    CreateInit(params: any) {
        let ip = params["ip"];
        if(ip == null || ip == undefined){
            TKLog.LogErr("HttpManager.CreateInit错误，需要传入ip参数");
            return;
        }
        this.url = ip;
    }    
    OnOpen(message: any) {
        // this.event.fire(NetEventType.OnOpen, message);
        // throw new Error("Method not implemented.");
    }
    OnClose(message: any) {
        // this.event.fire(NetEventType.OnClose, message);
        // throw new Error("Method not implemented.");
    }
    OnMessage(message: any) {
        let topic = message["topic"]
        let payload = message["payload"]

        if(this.log){
            TKLog.LogInfo("OnMessage", message);
        }
        try{
            let errCode : number = payload["err"]
            let errMsg:string = payload["message"];
            let resultObj = payload["dat"];
            if (resultObj == undefined) {
                TKLog.LogWarn("获取到的数据没有dat结构：", payload);
                resultObj = {"err":1}
            }

            let errObj = new NetMessageError(errCode == undefined ? 0 : errCode, errMsg == undefined ? "" : errMsg);

            //用户在其他设备登录
            if(errObj.err == 401) {
                this.event.fire(NetEventType.Unauthorized);
                // return;
            }
            // TKLog.ToDo("解析:" + topic + "成功", payload)
            this.event.fire(NetEventType.OnMessage+"_"+topic, resultObj, errObj);
        }catch(e){
            this.OnError(new Error(`解析消息${topic}异常${e}，payload=${payload}`))
        }
    }
    OnError(message: any) {
        this.event.fire(NetEventType.OnError, message);
    }
    SendRequest(req: NetBaseReq) {
        let content = req.Serialize(CodeFormat.JSON);

        if(this.log){
            TKLog.LogInfo("HttpManager.Send("+req.getMsgCode()+")", req);
        }

        this._postA(this.url+"/" + req.getMsgCode(), content, req)
    }
    reSend(req: NetBaseReq){
        if (req == null || req == undefined){
            return
        }

        if (!this.resendCount[req.getMsgCode()]){
            this.resendCount[req.getMsgCode()] = 0
        }
        this.resendCount[req.getMsgCode()]++
        if (this.resendCount[req.getMsgCode()] >= 3){
            HttpManager.getInstance().OnError(new Error("网络请求超时"))
            TKLog.LogWarn("请求消息超时", req)
        }else{
            TKLog.LogWarn("重新请求消息", this.resendCount[req.getMsgCode()], req)
            this.SendRequest(req)
        }
    }
    // 注册一般消息监听
    RegisterMsgListener(msgCode: string, callback: Function, context: any) {
        this.event.register(NetEventType.OnMessage + "_" + msgCode, callback, context);
    }
    UnRegisterMsgListener(msgCode: string, callback: Function, context: any) {
        this.event.remove(NetEventType.OnMessage + "_" + msgCode, callback, context);
    }
    // 注册服务器错误监听
    RegisterErrorListener(callback : Function, context : any){
        this.event.register(NetEventType.OnError, callback, context);
    }
    UnRegisterErrorListener(callback : Function, context : any){
        this.event.remove(NetEventType.OnError, callback, context);
    }

    //注册401错误监听
    RegisterUnauthorizedListener(callback: Function, context: any) {
        this.event.register(NetEventType.Unauthorized, callback, context);
    }
    UnRegisterUnauthorizedListener(callback: Function, context: any) {
        this.event.remove(NetEventType.Unauthorized, callback, context);
    }

    protected _postA(url: string, body: string,req: NetBaseReq) {
        try {
            let xhr = cc.loader.getXMLHttpRequest();
            xhr.responseType = "json";
            xhr.open("POST", url, true);
            // 超时时间（毫秒）
            xhr.timeout = this.checkTimeOut;
            xhr.setRequestHeader("Content-Type", "application/json");
            TKLog.LogInfo("header:token", url, this.token);
            if(this.token.length > 0){
                xhr.setRequestHeader("Authorization", "Bearer " + this.token);
            }
            xhr.onerror = (pe : ProgressEvent) => { 
                HttpManager.getInstance().OnError(new Error("网络请求失败"))
                TKLog.LogInfo("onerror:", xhr.statusText, url, pe)
            }
            xhr.ontimeout = (pe) => {
                // HttpManager.getInstance().OnError(new Error("网络请求超时"))
                this.reSend(req)
                TKLog.LogInfo("ontimeout:", url, xhr.timeout, xhr.statusText, xhr.status)
                }
            xhr.onreadystatechange = () => {
                if (xhr.readyState != 4) { return }
                if (xhr.status >= 200 && xhr.status < 400) {
                    // res(xhr.response)
                    // TKLog.LogInfo("OK", xhr.response)
                    if (this.resendCount[req.getMsgCode()]){
                        TKLog.LogInfo("重置重发次数",req.getMsgCode())
                        this.resendCount[req.getMsgCode()]= 0
                    }
                    this.OnMessage({"topic":req.getMsgCode(), "payload":xhr.response})
                } else {
                    TKLog.LogInfo("onreadystatechange:", xhr.statusText, url, xhr)
                    HttpManager.getInstance().OnError(new Error("服务器连接错误"+xhr.status))
                    // reject(new Error("服务器连接错误"))
                    // throw n ew Error("xhr-status-not-200-400")
                }
            }
            xhr.send(body)
        }catch(error){
            TKLog.LogInfo("catche error :", error)
            throw new Error("HttpMangaer._post Error:" + error + url);
        }
        
    }
    // 发送数据喽
    // protected async _post(url: string, body: string): Promise<object> {
    //     return await new Promise<object>((res,reject) => {
    //         try {
    //             let xhr = cc.loader.getXMLHttpRequest();
    //             xhr.responseType = "json";
    //             xhr.open("POST", url, true);
    //             // 超时时间（毫秒）
    //             xhr.timeout = this.checkTimeOut;
    //             xhr.setRequestHeader("Content-Type", "application/json");
    //             TKLog.LogInfo("header:token", url, this.token);
    //             if(this.token.length > 0){
    //                 xhr.setRequestHeader("Authorization", "Bearer " + this.token);
    //             }
    //             xhr.onerror = (pe : ProgressEvent) => { 
    //                 HttpManager.getInstance().OnError(new Error("网络请求失败"))
    //                 TKLog.LogInfo("onerror:", xhr.statusText, url, pe)
    //             }
    //             xhr.ontimeout = (pe) => {
    //                 HttpManager.getInstance().OnError(new Error("网络请求超时"))
    //                 TKLog.LogInfo("ontimeout:", url, xhr.timeout, xhr.statusText, xhr.status)
    //              }
    //             xhr.onreadystatechange = () => {
    //                 if (xhr.readyState != 4) { return }
    //                 if (xhr.status >= 200 && xhr.status < 400) {
    //                     res(xhr.response)
    //                 } else {
    //                     TKLog.LogInfo("onreadystatechange:", xhr.statusText, url, xhr)
    //                     HttpManager.getInstance().OnError(new Error("服务器连接错误"))
    //                 }
    //             }
    //             xhr.send(body)
    //         } catch (error) {
    //             TKLog.LogInfo("catch err:", error)
    //             reject(error);
    //         }
    //     }).catch(e=>{
    //         // HttpManager.getInstance().OnError(new Error("服务器连接错误"))
    //         throw new Error("HttpMangaer._post Error:" + e + url);
    //     });
    // }
}