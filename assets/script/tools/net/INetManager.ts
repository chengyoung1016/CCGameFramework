import { NetBaseReq, NetBaseMessage } from "../../netMessage/Message";

export enum NetEventType {
    // 建立连接成功触发
    OnOpen = "NetEventType_OnOpen",
    // 网络关闭时触发
    OnClose = "NetEventType_OnClose",
    // 系统级别的错误
    // 参数：err(Error)
    OnError = "NetEventType_OnError",
    // 收到网络消息时触发，事件名称实际为 NetEventType_OnMessage_【msgcode】 的形式
    // 参数:消息的JSONObj对象(any),err(NetMessageError)
    OnMessage = "NetEventType_OnMessage",
    //用户在其他设备登录了
    Unauthorized = "NetEventType_Unauthorized"
}

export default interface INetManager {
    CreateInit(params : any);
    OnOpen(message : any);
    OnClose(message : any);
    OnMessage(message : any);
    OnError(message : any);
    SendRequest(req : NetBaseReq);
    PostMessage(message : NetBaseMessage, callback: Function|null): void;

    RegisterMsgListener(msgCode : string, callback : Function, context : any);
    UnRegisterMsgListener(msgCode : string, callback : Function, context : any);

    RegisterDefaultMsgListener(callback : Function, context : any);
}
