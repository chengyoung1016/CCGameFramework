"use strict";
cc._RF.push(module, '5cb220qsI5HX4Soqz+EcrRd', 'INetManager');
// script/tools/net/INetManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetEventType = void 0;
var NetEventType;
(function (NetEventType) {
    // 建立连接成功触发
    NetEventType["OnOpen"] = "NetEventType_OnOpen";
    // 网络关闭时触发
    NetEventType["OnClose"] = "NetEventType_OnClose";
    // 系统级别的错误
    // 参数：err(Error)
    NetEventType["OnError"] = "NetEventType_OnError";
    // 收到网络消息时触发，事件名称实际为 NetEventType_OnMessage_【msgcode】 的形式
    // 参数:消息的JSONObj对象(any),err(NetMessageError)
    NetEventType["OnMessage"] = "NetEventType_OnMessage";
    //用户在其他设备登录了
    NetEventType["Unauthorized"] = "NetEventType_Unauthorized";
})(NetEventType = exports.NetEventType || (exports.NetEventType = {}));

cc._RF.pop();