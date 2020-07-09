
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tools/net/WSManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbHMvbmV0L1dTTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNkNBQTBEO0FBRTFELGtEQUF1RDtBQUd2RCxzREFBcUQ7QUFDckQsMkNBQW9DO0FBQ3BDLHlDQUFzQztBQUV0Qyw2REFBd0Q7QUFDeEQseURBQW9EO0FBQ3BELG1EQUE4QztBQUM5QyxrRUFBNkQ7QUFFN0QsU0FBUyxHQUFHLEtBQUksQ0FBQztBQUFBLENBQUM7QUFDbEIsU0FBUyxhQUFhLENBQUUsS0FBSztJQUN6QixJQUFJLEtBQUssRUFBRTtRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsU0FBUztZQUN4QyxnRkFBZ0Y7WUFDaEYsMERBQTBEO1lBQzFELDhCQUE4QjtZQUM5QixJQUFJO1FBQ1IsQ0FBQyxDQUFDLENBQUE7S0FDTDtBQUNMLENBQUM7QUFDSyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBUztJQUFoRDtRQUFBLHFFQXdPQztRQXRPRyxXQUFLLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDdEIsWUFBTSxHQUFTLElBQUksQ0FBQztRQUNwQixxQkFBcUI7UUFDckIsY0FBUSxHQUF3QixFQUFFLENBQUM7UUFHbkMsVUFBSSxHQUFhLElBQUksQ0FBQzs7SUFnTzFCLENBQUM7a0JBeE9vQixTQUFTO0lBVTFCLFdBQVc7SUFDWCx1Q0FBbUIsR0FBbkIsVUFBb0IsT0FBZSxFQUFFLFFBQWtCLEVBQUUsT0FBWTtRQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQywwQkFBWSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBQ0QseUNBQXFCLEdBQXJCLFVBQXNCLE9BQWUsRUFBRSxRQUFrQixFQUFFLE9BQVk7UUFDbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsMEJBQVksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUNELDhDQUEwQixHQUExQixVQUEyQixRQUFrQixFQUFFLE9BQVk7UUFDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsMEJBQVksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCw4QkFBVSxHQUFWLFVBQVcsTUFBWTtRQUNuQixJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBRyxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxTQUFTLEVBQUM7WUFDN0IsZUFBSyxDQUFDLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQ2hELE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksSUFBSSxDQUFDO1FBQ3pELHdCQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBTyxDQUNqQixFQUFFO1FBQ0YsZ0NBQWdDO1FBQ2hDLGdDQUFnQztVQUMvQjtZQUNELFVBQVUsRUFBRSxRQUFRO1lBQ3BCLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLFFBQVEsRUFBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1RCxlQUFlLEVBQUMsQ0FBQztTQUNwQixDQUFDLENBQUM7UUFDSCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsTUFBTTtZQUN0QyxJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUM7Z0JBQ1QsZUFBSyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRyxNQUFNLENBQUMsQ0FBQzthQUNoRDtZQUNELFdBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsS0FBSyxFQUFFLE9BQU87WUFDOUMsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFDO2dCQUNULGVBQUssQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLENBQUM7YUFDL0M7WUFDRCxXQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQTtRQUNyRSxDQUFDLENBQUMsQ0FBQTtRQUNGLGVBQWU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEVBQUMsQ0FBQztZQUNqQyxJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUM7Z0JBQ1QsZUFBSyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN6QztZQUNELFdBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUE7UUFDRixlQUFlO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztZQUMvQixXQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLHlCQUF5QjtRQUM3QixDQUFDLENBQUMsQ0FBQTtRQUNGLG9CQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxxQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFDRDs7Ozs7Ozs7Ozs7T0FXRztJQUNILDBCQUFNLEdBQU4sVUFBTyxPQUFlO1FBQ2xCLElBQUcsSUFBSSxDQUFDLElBQUksRUFBQztZQUNULGVBQUssQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUE7U0FDOUM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywwQkFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsMkJBQU8sR0FBUCxVQUFRLE9BQWU7UUFDbkIsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywwQkFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0Q7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0gsNkJBQVMsR0FBVCxVQUFVLE9BQVk7UUFDbEIsSUFBSSxHQUFZLENBQUM7UUFDakIsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQztRQUN4QixJQUFJLEtBQUssR0FBWSxLQUFLLENBQUM7UUFDM0IsSUFBSSxPQUFPLEdBQVksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLElBQUksT0FBTyxHQUFHLGNBQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSTtZQUNBLElBQUksTUFBTSxHQUFhLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkQsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzNDLElBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBQztnQkFDbkIsS0FBSyxHQUFHLENBQUMsQ0FBQTthQUNaO2lCQUFJO2dCQUNELElBQUksVUFBVSxHQUFZLEVBQUUsQ0FBQTtnQkFDNUIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUNwRCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzlCLFVBQVUsSUFBSSxPQUFPLENBQUE7b0JBQ3JCLElBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO3dCQUN6QixVQUFVLElBQUksR0FBRyxDQUFBO3FCQUNwQjtpQkFDSjtnQkFDRCxPQUFPLEdBQUcsVUFBVSxDQUFBO2FBQ3ZCO1lBRUQsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFDO2dCQUNULGVBQUssQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxHQUFHLFdBQVcsR0FBRyxPQUFPLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDO2FBQ2xHO1lBRUQsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxLQUFLO2dCQUMvRCxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNiLEdBQUcsR0FBRyx3QkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzVFO2lCQUFNLEVBQUMsU0FBUztnQkFDYixHQUFHLEdBQUcsd0JBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQzthQUM3RTtTQUNKO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsNkJBQU8sT0FBTyxvQkFBSyxDQUFDLHNCQUFZLE9BQVMsQ0FBQyxDQUFDO1lBQzdELElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFDLGdDQUFnQztnQkFDNUMsb0JBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuRCxPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLE9BQU07U0FDVDtRQUNELElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFDLGdDQUFnQztZQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLG9CQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLEtBQUssRUFBRSxFQUFDLFFBQVE7WUFDaEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUNELDJCQUFPLEdBQVAsVUFBUSxPQUFlO1FBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLGVBQUssQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywwQkFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILCtCQUFXLEdBQVgsVUFBWSxHQUFlO1FBQ3ZCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLGVBQUssQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDL0M7UUFDRCxPQUFPLG9CQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsOEJBQVUsR0FBVixVQUFXLE1BQWUsRUFBRSxRQUF3QjtRQUNoRCxJQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQ3BELE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFDO1lBQ1QsZUFBSyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksT0FBTyxTQUFTLElBQUksV0FBVyxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUU7WUFDbkQsT0FBTztTQUNWO1FBQ0Qsc0RBQXNEO1FBQ3RELElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUNyQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUcsSUFBSSxDQUFDLElBQUksRUFBQztnQkFDVCxlQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDdEQ7WUFDRCxJQUFJLE9BQU87Z0JBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUcsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRztZQUN2QixJQUFJLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUN6QixRQUFRLEVBQUMsS0FBSztZQUNkLEdBQUcsRUFBRSxNQUFNO1lBQ1gsRUFBRSxFQUFFLFFBQVEsSUFBSSxHQUFHO1lBQ25CLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUM7SUFDTixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILCtCQUFXLEdBQVgsVUFBWSxHQUFtQjtRQUMzQixJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUM7WUFDVCxlQUFLLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxvQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILG9DQUFnQixHQUFoQixVQUFpQixPQUFlOztRQUFFLGNBQVk7YUFBWixVQUFZLEVBQVoscUJBQVksRUFBWixJQUFZO1lBQVosNkJBQVk7O1FBQzFDLElBQUcsSUFBSSxDQUFDLElBQUksRUFBQztZQUNULGVBQUssQ0FBQyxPQUFPLENBQUMsNEJBQTRCLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDeEQ7UUFDRCxDQUFBLEtBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLElBQUksMkJBQUMsMEJBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxHQUFLLElBQUksR0FBRTtJQUM5RCxDQUFDO0lBRUQscUNBQWlCLEdBQWpCLFVBQWtCLE9BQWdCLEVBQUUsR0FBYTtRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywwQkFBWSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2hFLENBQUM7O0lBdk9nQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBd083QjtJQUFELGdCQUFDO0NBeE9ELEFBd09DLENBeE9zQyxtQkFBUyxHQXdPL0M7a0JBeE9vQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBJTmV0TWFuYWdlciwgeyBOZXRFdmVudFR5cGUgfSBmcm9tIFwiLi9JTmV0TWFuYWdlclwiO1xuXG5pbXBvcnQge01xdHRDbGllbnQsIGNvbm5lY3R9IGZyb20gXCIuLi9saWIvbXF0dC5taW4uanNcIjtcblxuaW1wb3J0IHtOZXRCYXNlLCBOZXRCYXNlTWVzc2FnZSwgTmV0QmFzZVJlcX0gZnJvbSBcIi4uLy4uL25ldE1lc3NhZ2UvTWVzc2FnZVwiO1xuaW1wb3J0IHtDb2RlRm9ybWF0fSBmcm9tIFwiLi4vLi4vbmV0TWVzc2FnZS9JQnVpbGRlclwiO1xuaW1wb3J0IFRLU3RyZWFtIGZyb20gXCIuL1JwY1Byb21pc2VcIjtcbmltcG9ydCB7QnVmZmVyfSBmcm9tIFwiLi4vYnVmZmVyL2luZGV4XCJcbmltcG9ydCB7IFJlc3AgfSBmcm9tIFwiLi4vLi4vbmV0TWVzc2FnZS9QQk1lc3NhZ2VcIjtcbmltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay91dGlscy9TaW5nbGV0b25cIjtcbmltcG9ydCBFbWl0dGVyIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvZXZlbnQvRW1pdHRlclwiO1xuaW1wb3J0IFRLTG9nIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvbG9nL1RLTG9nXCI7XG5pbXBvcnQgTWVzc2FnZUJ1aWxkZXIgZnJvbSBcIi4uLy4uL25ldE1lc3NhZ2UvTWVzc2FnZUJ1aWxkZXJcIjtcblxuZnVuY3Rpb24gbm9wKCkge307XG5mdW5jdGlvbiBmbHVzaFZvbGF0aWxlIChxdWV1ZSkge1xuICAgIGlmIChxdWV1ZSkge1xuICAgICAgT2JqZWN0LmtleXMocXVldWUpLmZvckVhY2goZnVuY3Rpb24gKG1lc3NhZ2VJZCkge1xuICAgICAgICAgICAgLy8gaWYgKHF1ZXVlW21lc3NhZ2VJZF0udm9sYXRpbGUgJiYgdHlwZW9mIHF1ZXVlW21lc3NhZ2VJZF0uY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vICAgICBxdWV1ZVttZXNzYWdlSWRdLmNiKG5ldyBFcnJvcignQ29ubmVjdGlvbiBjbG9zZWQnKSlcbiAgICAgICAgICAgIC8vICAgICBkZWxldGUgcXVldWVbbWVzc2FnZUlkXVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9KVxuICAgIH1cbn1cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1NNYW5hZ2VyIGV4dGVuZHMgU2luZ2xldG9uIGltcGxlbWVudHMgSU5ldE1hbmFnZXJ7XG5cbiAgICBldmVudCA9IG5ldyBFbWl0dGVyKCk7XG4gICAgY2xpZW50IDogYW55ID0gbnVsbDtcbiAgICAvLyBJbmZsaWdodCBjYWxsYmFja3NcbiAgICByZXF1ZXN0cyA6IHtbazogbnVtYmVyXTogYW55fSA9IHt9O1xuICAgIHJlcXVlc3RzVGltZW91dDogbnVtYmVyO1xuXG4gICAgX2xvZyA6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLy8g5rOo5YaM5LiA6Iis5raI5oGv55uR5ZCsXG4gICAgUmVnaXN0ZXJNc2dMaXN0ZW5lcihtc2dDb2RlOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgY29udGV4dDogYW55KSB7XG4gICAgICAgIHRoaXMuZXZlbnQucmVnaXN0ZXIoTmV0RXZlbnRUeXBlLk9uTWVzc2FnZSArIFwiX1wiICsgbXNnQ29kZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgIH1cbiAgICBVblJlZ2lzdGVyTXNnTGlzdGVuZXIobXNnQ29kZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIGNvbnRleHQ6IGFueSkge1xuICAgICAgICB0aGlzLmV2ZW50LnJlbW92ZShOZXRFdmVudFR5cGUuT25NZXNzYWdlICsgXCJfXCIgKyBtc2dDb2RlLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgfVxuICAgIFJlZ2lzdGVyRGVmYXVsdE1zZ0xpc3RlbmVyKGNhbGxiYWNrOiBGdW5jdGlvbiwgY29udGV4dDogYW55KSB7XG4gICAgICAgIHRoaXMuZXZlbnQucmVnaXN0ZXIoTmV0RXZlbnRUeXBlLk9uTWVzc2FnZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgIH1cblxuICAgIENyZWF0ZUluaXQocGFyYW1zIDogYW55KSB7XG4gICAgICAgIGxldCBpcCA9IHBhcmFtc1tcImlwXCJdO1xuICAgICAgICBpZihpcCA9PSBudWxsIHx8IGlwID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBUS0xvZy5Mb2dFcnIoXCJXU01hbmFnZXIuQ3JlYXRlSW5pdOmUmeivr++8jOmcgOimgeS8oOWFpWlw5Y+C5pWwXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVxdWVzdHNUaW1lb3V0ID0gcGFyYW1zW1wicmVxdWVzdHNUaW1lb3V0XCJdIHx8IDgwMDA7XG4gICAgICAgIE1lc3NhZ2VCdWlsZGVyLmdldEluc3RhbmNlKCkuaW5pdChDb2RlRm9ybWF0LlByb3RvYnVmKTtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBjb25uZWN0KFxuICAgICAgICAgICAgaXBcbiAgICAgICAgICAgIC8vXCJ3czovLzE5Mi4xNjguMS4yNTozNjUzL21xYW50XCJcbiAgICAgICAgICAgIC8vXCJ3czovLzE5Mi4xNjguMS40MzozNjUzL21xYW50XCJcbiAgICAgICAgICAgICx7XG4gICAgICAgICAgICBwcm90b2NvbElkOiAnTVFJc2RwJyxcbiAgICAgICAgICAgIHByb3RvY29sVmVyc2lvbjogMyxcbiAgICAgICAgICAgIGNsaWVudElkOidtcXR0anNfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnN1YnN0cigyLCA4KSxcbiAgICAgICAgICAgIHJlY29ubmVjdFBlcmlvZDowLCAvL+S4jeiHquWKqOmHjei/nlxuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29ubmVjdChQYWNrZXQpXG4gICAgICAgIHRoaXMuY2xpZW50Lm9uKCdjb25uZWN0JywgZnVuY3Rpb24gKHBhY2tldCkge1xuICAgICAgICAgICAgaWYodGhpcy5fbG9nKXtcbiAgICAgICAgICAgICAgICBUS0xvZy5Mb2dJbmZvKFwiV1NNYW5hZ2VyIGNvbm5lY3QgXCIgLCBwYWNrZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgV1NNYW5hZ2VyLmdldEluc3RhbmNlKCkuT25PcGVuKHBhY2tldCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBtZXNzYWdlKFRvcGljLCBNZXNzYWdlLFBhY2tldClcbiAgICAgICAgdGhpcy5jbGllbnQub24oXCJtZXNzYWdlXCIsIGZ1bmN0aW9uICh0b3BpYywgcGF5bG9hZCkge1xuICAgICAgICAgICAgaWYodGhpcy5fbG9nKXtcbiAgICAgICAgICAgICAgICBUS0xvZy5Mb2dJbmZvKFwiV1NNYW5hZ2VyIG1lc3NhZ2UgXCIgKyB0b3BpYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXU01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5Pbk1lc3NhZ2Uoe3RvcGljOnRvcGljLCBwYXlsb2FkOnBheWxvYWR9KVxuICAgICAgICB9KVxuICAgICAgICAvLyBjbG9zZShFdmVudClcbiAgICAgICAgdGhpcy5jbGllbnQub24oJ2Nsb3NlJywgZnVuY3Rpb24gKGUsYikge1xuICAgICAgICAgICAgaWYodGhpcy5fbG9nKXtcbiAgICAgICAgICAgICAgICBUS0xvZy5Mb2dJbmZvKFwiV1NNYW5hZ2VyIGNsb3NlIFwiICsgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXU01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5PbkNsb3NlKGUpO1xuICAgICAgICB9KVxuICAgICAgICAvLyBlcnJvcihFcnJvcilcbiAgICAgICAgdGhpcy5jbGllbnQub24oJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIFdTTWFuYWdlci5nZXRJbnN0YW5jZSgpLk9uRXJyb3IoZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhcmd1bWVudHMpXG4gICAgICAgIH0pXG4gICAgICAgIFRLU3RyZWFtLmdldEluc3RhbmNlKCkuaW5pdCh0aGlzLmNsaWVudCwgdGhpcy5yZXF1ZXN0c1RpbWVvdXQsIENvZGVGb3JtYXQuUHJvdG9idWYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZXNzYWdlIHBhY2tldCA9IHtcbiAgICBjbWQ6ICd0eXBlJyxcbiAgICB0b3BpYzogdG9waWMsXG4gICAgcGF5bG9hZDogbWVzc2FnZSxcbiAgICBxb3M6IG9wdHMucW9zLFxuICAgIHJldGFpbjogb3B0cy5yZXRhaW4sXG4gICAgbWVzc2FnZUlkOiB0aGlzLl9uZXh0SWQoKSxcbiAgICBkdXA6IG9wdHMuZHVwXG4gIH1cbiAgICAgKi9cbiAgICBPbk9wZW4obWVzc2FnZTogb2JqZWN0KSB7XG4gICAgICAgIGlmKHRoaXMuX2xvZyl7XG4gICAgICAgICAgICBUS0xvZy5Mb2dJbmZvKFwiV1NNYW5hZ2VyLk9uT3BlbiBcIiwgbWVzc2FnZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50LmZpcmUoTmV0RXZlbnRUeXBlLk9uT3BlbiwgbWVzc2FnZSk7XG4gICAgfVxuICAgIE9uQ2xvc2UobWVzc2FnZTogb2JqZWN0KSB7XG4gICAgICAgIGZsdXNoVm9sYXRpbGUodGhpcy5yZXF1ZXN0cylcbiAgICAgICAgdGhpcy5ldmVudC5maXJlKE5ldEV2ZW50VHlwZS5PbkNsb3NlLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogbWVzc2FnZeWMheWQq+S4pOmDqOWIhntcbiAgICAgKiAgdG9waWMgOiBcIm1zZ19jb2RlXCJcbiAgICAgKiAgcGF5bG9hZCA6IFwianNvblwiXG4gICAgICogfVxuICAgICAqIOWFtuS4rXBheWxvYWTlsLHmmK/mtojmga/mnKzlnLDvvIzpnIDopoHlho3mrKFKU09O6L2s5o2i77yM57uT5p6E5Li6OlxuICAgICAqIHtcbiAgICAgKiAgICAgRXJyb3IgOiBcIlwiLFxuICAgICAqICAgICBSZXN1bHQgOiBcIlwiXG4gICAgICogfVxuICAgICAqIOWFtuS4rVJlc3VsdOebtOaOpeaYr+S4gOS4qkpTT07lr7nosaFcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSDmtojmga9cbiAgICAgKi9cbiAgICBPbk1lc3NhZ2UobWVzc2FnZTogYW55KSB7XG4gICAgICAgIGxldCByc3A6IE5ldEJhc2U7XG4gICAgICAgIGxldCBtc2dJZDogbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IGVycm9yOiBFcnJvciA9IG51bGw7XG4gICAgICAgIGxldCBpc01zZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBsZXQgbXNnQ29kZSAgOiBzdHJpbmc9IG1lc3NhZ2VbXCJ0b3BpY1wiXTtcbiAgICAgICAgbGV0IHBheWxvYWQgPSBCdWZmZXIuZnJvbShtZXNzYWdlW1wicGF5bG9hZFwiXSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdG9waWNzOiBzdHJpbmdbXSA9IG1lc3NhZ2VbXCJ0b3BpY1wiXS5zcGxpdChcIi9cIik7XG4gICAgICAgICAgICBtc2dJZCA9IHBhcnNlSW50KHRvcGljc1t0b3BpY3MubGVuZ3RoIC0gMV0pXG4gICAgICAgICAgICBpZihOdW1iZXIuaXNOYU4obXNnSWQpKXtcbiAgICAgICAgICAgICAgICBtc2dJZCA9IDBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGxldCBuZXdNc2dDb2RlIDogc3RyaW5nID0gXCJcIlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b3BpY3MubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdG9waWNzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgbmV3TXNnQ29kZSArPSBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGlmKGluZGV4IDwgdG9waWNzLmxlbmd0aCAtIDIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXNnQ29kZSArPSBcIi9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1zZ0NvZGUgPSBuZXdNc2dDb2RlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuX2xvZyl7XG4gICAgICAgICAgICAgICAgVEtMb2cuTG9nSW5mbyhcIldTTWFuYWdlciBPbk1lc3NhZ2UgaWQ6IFwiICsgbXNnSWQgKyBcIiBtc2dDb2RlPVwiICsgbXNnQ29kZSArIFwiIHRvcGljOlwiICsgdG9waWNzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1zZ0NvZGUuaW5jbHVkZXMoXCJIRF9NU0dfXCIpIHx8IG1zZ0NvZGUuaW5jbHVkZXMoXCJNU0dfXCIpKSB7Ly/mtojmga/nsbtcbiAgICAgICAgICAgICAgICBpc01zZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcnNwID0gTWVzc2FnZUJ1aWxkZXIuZ2V0SW5zdGFuY2UoKS5CdWlsZE1lc3NhZ2UobXNnQ29kZSwgbXNnSWQsIHBheWxvYWQpO1xuICAgICAgICAgICAgfSBlbHNlIHsvL3JwY+eahOWTjeW6lOWMhVxuICAgICAgICAgICAgICAgIHJzcCA9IE1lc3NhZ2VCdWlsZGVyLmdldEluc3RhbmNlKCkuQnVpbGRSZXNwb25zZShtc2dDb2RlLCBtc2dJZCwgcGF5bG9hZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKGDop6PmnpDmtojmga8ke21zZ0NvZGV95byC5bi4JHtlfe+8jHBheWxvYWQ9JHtwYXlsb2FkfWApO1xuICAgICAgICAgICAgaWYgKG1zZ0lkID4gMCkgey8v5a+5bXNnSWTnmoTlk43lupTvvIjljIXmi6xycGPnmoRyZXNwb25zZeWSjOWQjOatpea2iOaBr++8iVxuICAgICAgICAgICAgICAgIFRLU3RyZWFtLmdldEluc3RhbmNlKCkub25QYWNrZXRFcnJvcihtc2dJZCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuT25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAobXNnSWQgPiAwKSB7Ly/lr7ltc2dJZOeahOWTjeW6lO+8iOWMheaLrHJwY+eahHJlc3BvbnNl5ZKM5ZCM5q2l5raI5oGv77yJXG4gICAgICAgICAgICB0aGlzLkZpcmVBTWVzc2FnZUV2ZW50KG1zZ0NvZGUsIHJzcCk7XG4gICAgICAgICAgICBUS1N0cmVhbS5nZXRJbnN0YW5jZSgpLm9uUGFja2V0KG1zZ0lkLCByc3ApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc01zZykgey8v5byC5q2l55qE5raI5oGv5YyFXG4gICAgICAgICAgICB0aGlzLkZpcmVBTWVzc2FnZUV2ZW50KG1zZ0NvZGUsIHJzcCk7XG4gICAgICAgICAgICB0aGlzLkZpcmVNZXNzYWdlRXZlbnQobXNnQ29kZSwgcnNwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPbkVycm9yKG1lc3NhZ2U6IG9iamVjdCkge1xuICAgICAgICBpZiAodGhpcy5fbG9nKSB7XG4gICAgICAgICAgICBUS0xvZy5Mb2dFcnIoXCJXU01hbmFnZXIuT25FcnJvciBcIiArIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnQuZmlyZShOZXRFdmVudFR5cGUuT25FcnJvciwgbWVzc2FnZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWPkemAgeivt+axgua2iOaBr1xuICAgICAqIEBwYXJhbSBOZXRCYXNlUmVxIHJlcSBycGPor7fmsYJcbiAgICAgKiBAcmV0dXJuIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIFNlbmRSZXF1ZXN0KHJlcTogTmV0QmFzZVJlcSk6IFByb21pc2U8UmVzcD4ge1xuICAgICAgICBpZiAodGhpcy5fbG9nKSB7XG4gICAgICAgICAgICBUS0xvZy5Mb2dJbmZvKFwiV1NNYW5hZ2VyLlNlbmRSZXF1ZXN0XCIsIHJlcSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFRLU3RyZWFtLmdldEluc3RhbmNlKCkuc2VuZChyZXEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7otoXml7ZcbiAgICAgKiBAcGFyYW0gTmV0QmFzZSBwYWNrZXRcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCD5Ye95pWw77yM5Y+v6YCJXG4gICAgICovXG4gICAgc2V0VGltZW91dChwYWNrZXQ6IE5ldEJhc2UsIGNhbGxiYWNrOiBGdW5jdGlvbnwgbnVsbCkge1xuICAgICAgICBpZiAoY2FsbGJhY2sgPT0gbnVsbCB8fCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCByZXF1ZXN0SWQgPSBwYWNrZXQuZ2V0SWQoKTtcbiAgICAgICAgaWYodGhpcy5fbG9nKXtcbiAgICAgICAgICAgIFRLTG9nLkxvZ0luZm8oXCJzZXRUaW1lb3V0IHdpdGg6IGlkPVwiICsgcmVxdWVzdElkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3RJZCA9PSAndW5kZWZpbmVkJyB8fCByZXF1ZXN0SWQgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHJlc3BvbnNlIGZvciB4IHNlY29uZCwgcmV0dXJuIHJlc3VsdFxuICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHNlbGYucmVxdWVzdHNbcmVxdWVzdElkXTtcbiAgICAgICAgICAgIGlmKHRoaXMuX2xvZyl7XG4gICAgICAgICAgICAgICAgVEtMb2cuTG9nSW5mbyhcInRpbWVvdXQgOj1cIiArIHNlbGYucmVxdWVzdHNUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXF1ZXN0KSByZXF1ZXN0LmNiKG5ldyBFcnJvcigndGltZW91dCByZWFjaGVkIHdoaWxlIHdhaXRpbmcgZm9yIGNsaWVudHMgcmVzcG9uc2UnKSwgcmVxdWVzdC5yZXEsIG51bGwpO1xuICAgICAgICAgICAgZGVsZXRlIHNlbGYucmVxdWVzdHNbcmVxdWVzdElkXTtcbiAgICAgICAgfSwgdGhpcy5yZXF1ZXN0c1RpbWVvdXQpO1xuICAgICAgICBzZWxmLnJlcXVlc3RzW3JlcXVlc3RJZF0gPSB7XG4gICAgICAgICAgICB0eXBlOiBwYWNrZXQuZ2V0TXNnQ29kZSgpLFxuICAgICAgICAgICAgdm9sYXRpbGU6ZmFsc2UsXG4gICAgICAgICAgICByZXE6IHBhY2tldCxcbiAgICAgICAgICAgIGNiOiBjYWxsYmFjayB8fCBub3AsXG4gICAgICAgICAgICB0aW1lb3V0OiB0aW1lb3V0XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWQkeacjeWKoeWZqOaPkOS6pOa2iOaBr1xuICAgICAqIEBwYXJhbSBOZXRCYXNlTWVzc2FnZSDmtojmga9cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCD5Ye95pWw77yM5Y+v6YCJXG4gICAgICovXG4gICAgUG9zdE1lc3NhZ2UobXNnOiBOZXRCYXNlTWVzc2FnZSk6IFByb21pc2U8YW55PntcbiAgICAgICAgaWYodGhpcy5fbG9nKXtcbiAgICAgICAgICAgIFRLTG9nLkxvZ0luZm8oXCJXU01hbmFnZXIuUG9zdE1lc3NhZ2VcIiwgbXNnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVEtTdHJlYW0uZ2V0SW5zdGFuY2UoKS5zZW5kKG1zZyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOinpuWPkeaUtuWIsOacjeWKoeWZqOa2iOaBr+S6i+S7tlxuICAgICAqIEBwYXJhbSBtc2dDb2RlIOa2iOaBr+exu+Wei1xuICAgICAqIEBwYXJhbSBhcmdzIOS8oOWFpeeahOa2iOaBr+WPguaVsFxuICAgICAqL1xuICAgIEZpcmVNZXNzYWdlRXZlbnQobXNnQ29kZTogc3RyaW5nLCAuLi5hcmdzOiBhbnkpIHtcbiAgICAgICAgaWYodGhpcy5fbG9nKXtcbiAgICAgICAgICAgIFRLTG9nLkxvZ0luZm8oXCJXU01hbmFnZXIuRmlyZU1lc3NhZ2VFdmVudFwiLCBtc2dDb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50LmZpcmUoTmV0RXZlbnRUeXBlLk9uTWVzc2FnZSwgbXNnQ29kZSwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgRmlyZUFNZXNzYWdlRXZlbnQobXNnQ29kZSA6IHN0cmluZywgbXNnIDogTmV0QmFzZSl7XG4gICAgICAgIHRoaXMuZXZlbnQuZmlyZShOZXRFdmVudFR5cGUuT25NZXNzYWdlICsgXCJfXCIgKyBtc2dDb2RlLCBtc2cpXG4gICAgfVxufVxuIl19