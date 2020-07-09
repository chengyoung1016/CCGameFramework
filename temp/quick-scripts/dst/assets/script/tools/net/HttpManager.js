
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tools/net/HttpManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d55cGzKyNLErgECEOEfJNJ', 'HttpManager');
// script/tools/net/HttpManager.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var INetManager_1 = require("./INetManager");
var Emitter_1 = require("../../framework/event/Emitter");
var Singleton_1 = require("../../framework/utils/Singleton");
var TKLog_1 = require("../../framework/log/TKLog");
var NetMessageError_1 = require("../../netMessage/NetMessageError");
var IBuilder_1 = require("../../netMessage/IBuilder");
// import FSMState from "../FSM/FSMState";
// import NetBaseReq from "./NetBaseReq";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HttpManager = /** @class */ (function (_super) {
    __extends(HttpManager, _super);
    function HttpManager() {
        var _this = _super.call(this) || this;
        _this.event = new Emitter_1.default();
        _this.url = "";
        _this.token = "";
        _this.log = true;
        // 消息码-重试次数
        _this.resendCount = {};
        // 超时时间，毫秒
        _this.checkTimeOut = 1000;
        return _this;
        // this.log = GameDefineManager.getInstance().GetGameDefineFirstValueNumber(998001, 0) == 0 ? false : true;
    }
    HttpManager_1 = HttpManager;
    HttpManager.prototype.PostMessage = function (message, callback) {
        throw new Error("Method not implemented.");
    };
    HttpManager.prototype.RegisterDefaultMsgListener = function (callback, context) {
        throw new Error("Method not implemented.");
    };
    HttpManager.prototype.SetToken = function (token) {
        this.token = token;
        if (this.log) {
            TKLog_1.default.LogInfo("重新设置token:" + token);
        }
    };
    HttpManager.prototype.CreateInit = function (params) {
        var ip = params["ip"];
        if (ip == null || ip == undefined) {
            TKLog_1.default.LogErr("HttpManager.CreateInit错误，需要传入ip参数");
            return;
        }
        this.url = ip;
    };
    HttpManager.prototype.OnOpen = function (message) {
        // this.event.fire(NetEventType.OnOpen, message);
        // throw new Error("Method not implemented.");
    };
    HttpManager.prototype.OnClose = function (message) {
        // this.event.fire(NetEventType.OnClose, message);
        // throw new Error("Method not implemented.");
    };
    HttpManager.prototype.OnMessage = function (message) {
        var topic = message["topic"];
        var payload = message["payload"];
        if (this.log) {
            TKLog_1.default.LogInfo("OnMessage", message);
        }
        try {
            var errCode = payload["err"];
            var errMsg = payload["message"];
            var resultObj = payload["dat"];
            if (resultObj == undefined) {
                TKLog_1.default.LogWarn("获取到的数据没有dat结构：", payload);
                resultObj = { "err": 1 };
            }
            var errObj = new NetMessageError_1.default(errCode == undefined ? 0 : errCode, errMsg == undefined ? "" : errMsg);
            //用户在其他设备登录
            if (errObj.err == 401) {
                this.event.fire(INetManager_1.NetEventType.Unauthorized);
                // return;
            }
            // TKLog.ToDo("解析:" + topic + "成功", payload)
            this.event.fire(INetManager_1.NetEventType.OnMessage + "_" + topic, resultObj, errObj);
        }
        catch (e) {
            this.OnError(new Error("\u89E3\u6790\u6D88\u606F" + topic + "\u5F02\u5E38" + e + "\uFF0Cpayload=" + payload));
        }
    };
    HttpManager.prototype.OnError = function (message) {
        this.event.fire(INetManager_1.NetEventType.OnError, message);
    };
    HttpManager.prototype.SendRequest = function (req) {
        var content = req.Serialize(IBuilder_1.CodeFormat.JSON);
        if (this.log) {
            TKLog_1.default.LogInfo("HttpManager.Send(" + req.getMsgCode() + ")", req);
        }
        this._postA(this.url + "/" + req.getMsgCode(), content, req);
    };
    HttpManager.prototype.reSend = function (req) {
        if (req == null || req == undefined) {
            return;
        }
        if (!this.resendCount[req.getMsgCode()]) {
            this.resendCount[req.getMsgCode()] = 0;
        }
        this.resendCount[req.getMsgCode()]++;
        if (this.resendCount[req.getMsgCode()] >= 3) {
            HttpManager_1.getInstance().OnError(new Error("网络请求超时"));
            TKLog_1.default.LogWarn("请求消息超时", req);
        }
        else {
            TKLog_1.default.LogWarn("重新请求消息", this.resendCount[req.getMsgCode()], req);
            this.SendRequest(req);
        }
    };
    // 注册一般消息监听
    HttpManager.prototype.RegisterMsgListener = function (msgCode, callback, context) {
        this.event.register(INetManager_1.NetEventType.OnMessage + "_" + msgCode, callback, context);
    };
    HttpManager.prototype.UnRegisterMsgListener = function (msgCode, callback, context) {
        this.event.remove(INetManager_1.NetEventType.OnMessage + "_" + msgCode, callback, context);
    };
    // 注册服务器错误监听
    HttpManager.prototype.RegisterErrorListener = function (callback, context) {
        this.event.register(INetManager_1.NetEventType.OnError, callback, context);
    };
    HttpManager.prototype.UnRegisterErrorListener = function (callback, context) {
        this.event.remove(INetManager_1.NetEventType.OnError, callback, context);
    };
    //注册401错误监听
    HttpManager.prototype.RegisterUnauthorizedListener = function (callback, context) {
        this.event.register(INetManager_1.NetEventType.Unauthorized, callback, context);
    };
    HttpManager.prototype.UnRegisterUnauthorizedListener = function (callback, context) {
        this.event.remove(INetManager_1.NetEventType.Unauthorized, callback, context);
    };
    HttpManager.prototype._postA = function (url, body, req) {
        var _this = this;
        try {
            var xhr_1 = cc.loader.getXMLHttpRequest();
            xhr_1.responseType = "json";
            xhr_1.open("POST", url, true);
            // 超时时间（毫秒）
            xhr_1.timeout = this.checkTimeOut;
            xhr_1.setRequestHeader("Content-Type", "application/json");
            TKLog_1.default.LogInfo("header:token", url, this.token);
            if (this.token.length > 0) {
                xhr_1.setRequestHeader("Authorization", "Bearer " + this.token);
            }
            xhr_1.onerror = function (pe) {
                HttpManager_1.getInstance().OnError(new Error("网络请求失败"));
                TKLog_1.default.LogInfo("onerror:", xhr_1.statusText, url, pe);
            };
            xhr_1.ontimeout = function (pe) {
                // HttpManager.getInstance().OnError(new Error("网络请求超时"))
                _this.reSend(req);
                TKLog_1.default.LogInfo("ontimeout:", url, xhr_1.timeout, xhr_1.statusText, xhr_1.status);
            };
            xhr_1.onreadystatechange = function () {
                if (xhr_1.readyState != 4) {
                    return;
                }
                if (xhr_1.status >= 200 && xhr_1.status < 400) {
                    // res(xhr.response)
                    // TKLog.LogInfo("OK", xhr.response)
                    if (_this.resendCount[req.getMsgCode()]) {
                        TKLog_1.default.LogInfo("重置重发次数", req.getMsgCode());
                        _this.resendCount[req.getMsgCode()] = 0;
                    }
                    _this.OnMessage({ "topic": req.getMsgCode(), "payload": xhr_1.response });
                }
                else {
                    TKLog_1.default.LogInfo("onreadystatechange:", xhr_1.statusText, url, xhr_1);
                    HttpManager_1.getInstance().OnError(new Error("服务器连接错误" + xhr_1.status));
                    // reject(new Error("服务器连接错误"))
                    // throw n ew Error("xhr-status-not-200-400")
                }
            };
            xhr_1.send(body);
        }
        catch (error) {
            TKLog_1.default.LogInfo("catche error :", error);
            throw new Error("HttpMangaer._post Error:" + error + url);
        }
    };
    var HttpManager_1;
    HttpManager = HttpManager_1 = __decorate([
        ccclass
    ], HttpManager);
    return HttpManager;
}(Singleton_1.default));
exports.default = HttpManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbHMvbmV0L0h0dHBNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUEwRDtBQUMxRCx5REFBb0Q7QUFDcEQsNkRBQXdEO0FBQ3hELG1EQUE4QztBQUM5QyxvRUFBK0Q7QUFDL0Qsc0RBQXVEO0FBR3ZELDBDQUEwQztBQUMxQyx5Q0FBeUM7QUFFbkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVM7SUFhOUM7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFmRCxXQUFLLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFFdEIsU0FBRyxHQUFZLEVBQUUsQ0FBQztRQUNsQixXQUFLLEdBQVksRUFBRSxDQUFDO1FBRXBCLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFFckIsV0FBVztRQUNYLGlCQUFXLEdBQTRCLEVBQUUsQ0FBQztRQUMxQyxVQUFVO1FBQ1Ysa0JBQVksR0FBWSxJQUFJLENBQUM7O1FBSXpCLDJHQUEyRztJQUMvRyxDQUFDO29CQWhCZ0IsV0FBVztJQWlCNUIsaUNBQVcsR0FBWCxVQUFZLE9BQXVCLEVBQUUsUUFBa0I7UUFDbkQsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxnREFBMEIsR0FBMUIsVUFBMkIsUUFBa0IsRUFBRSxPQUFZO1FBQ3ZELE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLEtBQWM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBRyxJQUFJLENBQUMsR0FBRyxFQUFDO1lBQ1IsZUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUE7U0FDdEM7SUFDTCxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLE1BQVc7UUFDbEIsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUcsRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksU0FBUyxFQUFDO1lBQzdCLGVBQUssQ0FBQyxNQUFNLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNsRCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0QsNEJBQU0sR0FBTixVQUFPLE9BQVk7UUFDZixpREFBaUQ7UUFDakQsOENBQThDO0lBQ2xELENBQUM7SUFDRCw2QkFBTyxHQUFQLFVBQVEsT0FBWTtRQUNoQixrREFBa0Q7UUFDbEQsOENBQThDO0lBQ2xELENBQUM7SUFDRCwrQkFBUyxHQUFULFVBQVUsT0FBWTtRQUNsQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDNUIsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRWhDLElBQUcsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUNSLGVBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBRztZQUNDLElBQUksT0FBTyxHQUFZLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNyQyxJQUFJLE1BQU0sR0FBVSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkMsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLElBQUksU0FBUyxJQUFJLFNBQVMsRUFBRTtnQkFDeEIsZUFBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDekMsU0FBUyxHQUFHLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFBO2FBQ3hCO1lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSx5QkFBZSxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFeEcsV0FBVztZQUNYLElBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDBCQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzNDLFVBQVU7YUFDYjtZQUNELDRDQUE0QztZQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywwQkFBWSxDQUFDLFNBQVMsR0FBQyxHQUFHLEdBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN4RTtRQUFBLE9BQU0sQ0FBQyxFQUFDO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyw2QkFBTyxLQUFLLG9CQUFLLENBQUMsc0JBQVksT0FBUyxDQUFDLENBQUMsQ0FBQTtTQUNuRTtJQUNMLENBQUM7SUFDRCw2QkFBTyxHQUFQLFVBQVEsT0FBWTtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywwQkFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsaUNBQVcsR0FBWCxVQUFZLEdBQWU7UUFDdkIsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxxQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdDLElBQUcsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUNSLGVBQUssQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEdBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoRTtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBQ0QsNEJBQU0sR0FBTixVQUFPLEdBQWU7UUFDbEIsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUM7WUFDaEMsT0FBTTtTQUNUO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDekM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUE7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBQztZQUN4QyxhQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7WUFDdEQsZUFBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FDL0I7YUFBSTtZQUNELGVBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDaEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUN4QjtJQUNMLENBQUM7SUFDRCxXQUFXO0lBQ1gseUNBQW1CLEdBQW5CLFVBQW9CLE9BQWUsRUFBRSxRQUFrQixFQUFFLE9BQVk7UUFDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsMEJBQVksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUNELDJDQUFxQixHQUFyQixVQUFzQixPQUFlLEVBQUUsUUFBa0IsRUFBRSxPQUFZO1FBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLDBCQUFZLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFDRCxZQUFZO0lBQ1osMkNBQXFCLEdBQXJCLFVBQXNCLFFBQW1CLEVBQUUsT0FBYTtRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQywwQkFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELDZDQUF1QixHQUF2QixVQUF3QixRQUFtQixFQUFFLE9BQWE7UUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsMEJBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxXQUFXO0lBQ1gsa0RBQTRCLEdBQTVCLFVBQTZCLFFBQWtCLEVBQUUsT0FBWTtRQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQywwQkFBWSxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUNELG9EQUE4QixHQUE5QixVQUErQixRQUFrQixFQUFFLE9BQVk7UUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsMEJBQVksQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFUyw0QkFBTSxHQUFoQixVQUFpQixHQUFXLEVBQUUsSUFBWSxFQUFDLEdBQWU7UUFBMUQsaUJBNENDO1FBM0NHLElBQUk7WUFDQSxJQUFJLEtBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDeEMsS0FBRyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7WUFDMUIsS0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVCLFdBQVc7WUFDWCxLQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEMsS0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3pELGVBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0MsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7Z0JBQ3JCLEtBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqRTtZQUNELEtBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBQyxFQUFrQjtnQkFDN0IsYUFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO2dCQUN0RCxlQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUN0RCxDQUFDLENBQUE7WUFDRCxLQUFHLENBQUMsU0FBUyxHQUFHLFVBQUMsRUFBRTtnQkFDZix5REFBeUQ7Z0JBQ3pELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2hCLGVBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxLQUFHLENBQUMsT0FBTyxFQUFFLEtBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3pFLENBQUMsQ0FBQTtZQUNMLEtBQUcsQ0FBQyxrQkFBa0IsR0FBRztnQkFDckIsSUFBSSxLQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtvQkFBRSxPQUFNO2lCQUFFO2dCQUNuQyxJQUFJLEtBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLEtBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO29CQUN2QyxvQkFBb0I7b0JBQ3BCLG9DQUFvQztvQkFDcEMsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFDO3dCQUNuQyxlQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTt3QkFDeEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRSxDQUFDLENBQUE7cUJBQ3hDO29CQUNELEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLFNBQVMsRUFBQyxLQUFHLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQTtpQkFDckU7cUJBQU07b0JBQ0gsZUFBSyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxLQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFHLENBQUMsQ0FBQTtvQkFDOUQsYUFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLEdBQUMsS0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7b0JBQ2xFLCtCQUErQjtvQkFDL0IsNkNBQTZDO2lCQUNoRDtZQUNMLENBQUMsQ0FBQTtZQUNELEtBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDakI7UUFBQSxPQUFNLEtBQUssRUFBQztZQUNULGVBQUssQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDdEMsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDN0Q7SUFFTCxDQUFDOztJQTVLZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXNOL0I7SUFBRCxrQkFBQztDQXRORCxBQXNOQyxDQXROd0MsbUJBQVMsR0FzTmpEO2tCQXROb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJTmV0TWFuYWdlciwgeyBOZXRFdmVudFR5cGUgfSBmcm9tIFwiLi9JTmV0TWFuYWdlclwiO1xuaW1wb3J0IEVtaXR0ZXIgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9ldmVudC9FbWl0dGVyXCI7XG5pbXBvcnQgU2luZ2xldG9uIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdXRpbHMvU2luZ2xldG9uXCI7XG5pbXBvcnQgVEtMb2cgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9sb2cvVEtMb2dcIjtcbmltcG9ydCBOZXRNZXNzYWdlRXJyb3IgZnJvbSBcIi4uLy4uL25ldE1lc3NhZ2UvTmV0TWVzc2FnZUVycm9yXCI7XG5pbXBvcnQgeyBDb2RlRm9ybWF0IH0gZnJvbSBcIi4uLy4uL25ldE1lc3NhZ2UvSUJ1aWxkZXJcIjtcbmltcG9ydCB7IE5ldEJhc2VSZXEsIE5ldEJhc2VNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL25ldE1lc3NhZ2UvTWVzc2FnZVwiO1xuXG4vLyBpbXBvcnQgRlNNU3RhdGUgZnJvbSBcIi4uL0ZTTS9GU01TdGF0ZVwiO1xuLy8gaW1wb3J0IE5ldEJhc2VSZXEgZnJvbSBcIi4vTmV0QmFzZVJlcVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBNYW5hZ2VyIGV4dGVuZHMgU2luZ2xldG9uIGltcGxlbWVudHMgSU5ldE1hbmFnZXIge1xuICAgIGV2ZW50ID0gbmV3IEVtaXR0ZXIoKTtcblxuICAgIHVybCA6IHN0cmluZyA9IFwiXCI7XG4gICAgdG9rZW4gOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgbG9nIDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAvLyDmtojmga/noIEt6YeN6K+V5qyh5pWwXG4gICAgcmVzZW5kQ291bnQgOiB7W2NvZGU6bnVtYmVyXTpudW1iZXJ9ID0ge307XG4gICAgLy8g6LaF5pe25pe26Ze077yM5q+r56eSXG4gICAgY2hlY2tUaW1lT3V0IDogbnVtYmVyID0gMTAwMDtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgLy8gdGhpcy5sb2cgPSBHYW1lRGVmaW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpLkdldEdhbWVEZWZpbmVGaXJzdFZhbHVlTnVtYmVyKDk5ODAwMSwgMCkgPT0gMCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG4gICAgUG9zdE1lc3NhZ2UobWVzc2FnZTogTmV0QmFzZU1lc3NhZ2UsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgUmVnaXN0ZXJEZWZhdWx0TXNnTGlzdGVuZXIoY2FsbGJhY2s6IEZ1bmN0aW9uLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuXG4gICAgU2V0VG9rZW4odG9rZW4gOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgICAgIGlmKHRoaXMubG9nKXtcbiAgICAgICAgICAgIFRLTG9nLkxvZ0luZm8oXCLph43mlrDorr7nva50b2tlbjpcIiArIHRva2VuKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQ3JlYXRlSW5pdChwYXJhbXM6IGFueSkge1xuICAgICAgICBsZXQgaXAgPSBwYXJhbXNbXCJpcFwiXTtcbiAgICAgICAgaWYoaXAgPT0gbnVsbCB8fCBpcCA9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgVEtMb2cuTG9nRXJyKFwiSHR0cE1hbmFnZXIuQ3JlYXRlSW5pdOmUmeivr++8jOmcgOimgeS8oOWFpWlw5Y+C5pWwXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXJsID0gaXA7XG4gICAgfSAgICBcbiAgICBPbk9wZW4obWVzc2FnZTogYW55KSB7XG4gICAgICAgIC8vIHRoaXMuZXZlbnQuZmlyZShOZXRFdmVudFR5cGUuT25PcGVuLCBtZXNzYWdlKTtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIE9uQ2xvc2UobWVzc2FnZTogYW55KSB7XG4gICAgICAgIC8vIHRoaXMuZXZlbnQuZmlyZShOZXRFdmVudFR5cGUuT25DbG9zZSwgbWVzc2FnZSk7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBPbk1lc3NhZ2UobWVzc2FnZTogYW55KSB7XG4gICAgICAgIGxldCB0b3BpYyA9IG1lc3NhZ2VbXCJ0b3BpY1wiXVxuICAgICAgICBsZXQgcGF5bG9hZCA9IG1lc3NhZ2VbXCJwYXlsb2FkXCJdXG5cbiAgICAgICAgaWYodGhpcy5sb2cpe1xuICAgICAgICAgICAgVEtMb2cuTG9nSW5mbyhcIk9uTWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBsZXQgZXJyQ29kZSA6IG51bWJlciA9IHBheWxvYWRbXCJlcnJcIl1cbiAgICAgICAgICAgIGxldCBlcnJNc2c6c3RyaW5nID0gcGF5bG9hZFtcIm1lc3NhZ2VcIl07XG4gICAgICAgICAgICBsZXQgcmVzdWx0T2JqID0gcGF5bG9hZFtcImRhdFwiXTtcbiAgICAgICAgICAgIGlmIChyZXN1bHRPYmogPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgVEtMb2cuTG9nV2FybihcIuiOt+WPluWIsOeahOaVsOaNruayoeaciWRhdOe7k+aehO+8mlwiLCBwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICByZXN1bHRPYmogPSB7XCJlcnJcIjoxfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZXJyT2JqID0gbmV3IE5ldE1lc3NhZ2VFcnJvcihlcnJDb2RlID09IHVuZGVmaW5lZCA/IDAgOiBlcnJDb2RlLCBlcnJNc2cgPT0gdW5kZWZpbmVkID8gXCJcIiA6IGVyck1zZyk7XG5cbiAgICAgICAgICAgIC8v55So5oi35Zyo5YW25LuW6K6+5aSH55m75b2VXG4gICAgICAgICAgICBpZihlcnJPYmouZXJyID09IDQwMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQuZmlyZShOZXRFdmVudFR5cGUuVW5hdXRob3JpemVkKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUS0xvZy5Ub0RvKFwi6Kej5p6QOlwiICsgdG9waWMgKyBcIuaIkOWKn1wiLCBwYXlsb2FkKVxuICAgICAgICAgICAgdGhpcy5ldmVudC5maXJlKE5ldEV2ZW50VHlwZS5Pbk1lc3NhZ2UrXCJfXCIrdG9waWMsIHJlc3VsdE9iaiwgZXJyT2JqKTtcbiAgICAgICAgfWNhdGNoKGUpe1xuICAgICAgICAgICAgdGhpcy5PbkVycm9yKG5ldyBFcnJvcihg6Kej5p6Q5raI5oGvJHt0b3BpY33lvILluLgke2V977yMcGF5bG9hZD0ke3BheWxvYWR9YCkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgT25FcnJvcihtZXNzYWdlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5ldmVudC5maXJlKE5ldEV2ZW50VHlwZS5PbkVycm9yLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgU2VuZFJlcXVlc3QocmVxOiBOZXRCYXNlUmVxKSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gcmVxLlNlcmlhbGl6ZShDb2RlRm9ybWF0LkpTT04pO1xuXG4gICAgICAgIGlmKHRoaXMubG9nKXtcbiAgICAgICAgICAgIFRLTG9nLkxvZ0luZm8oXCJIdHRwTWFuYWdlci5TZW5kKFwiK3JlcS5nZXRNc2dDb2RlKCkrXCIpXCIsIHJlcSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wb3N0QSh0aGlzLnVybCtcIi9cIiArIHJlcS5nZXRNc2dDb2RlKCksIGNvbnRlbnQsIHJlcSlcbiAgICB9XG4gICAgcmVTZW5kKHJlcTogTmV0QmFzZVJlcSl7XG4gICAgICAgIGlmIChyZXEgPT0gbnVsbCB8fCByZXEgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnJlc2VuZENvdW50W3JlcS5nZXRNc2dDb2RlKCldKXtcbiAgICAgICAgICAgIHRoaXMucmVzZW5kQ291bnRbcmVxLmdldE1zZ0NvZGUoKV0gPSAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNlbmRDb3VudFtyZXEuZ2V0TXNnQ29kZSgpXSsrXG4gICAgICAgIGlmICh0aGlzLnJlc2VuZENvdW50W3JlcS5nZXRNc2dDb2RlKCldID49IDMpe1xuICAgICAgICAgICAgSHR0cE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5PbkVycm9yKG5ldyBFcnJvcihcIue9kee7nOivt+axgui2heaXtlwiKSlcbiAgICAgICAgICAgIFRLTG9nLkxvZ1dhcm4oXCLor7fmsYLmtojmga/otoXml7ZcIiwgcmVxKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIFRLTG9nLkxvZ1dhcm4oXCLph43mlrDor7fmsYLmtojmga9cIiwgdGhpcy5yZXNlbmRDb3VudFtyZXEuZ2V0TXNnQ29kZSgpXSwgcmVxKVxuICAgICAgICAgICAgdGhpcy5TZW5kUmVxdWVzdChyZXEpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5rOo5YaM5LiA6Iis5raI5oGv55uR5ZCsXG4gICAgUmVnaXN0ZXJNc2dMaXN0ZW5lcihtc2dDb2RlOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgY29udGV4dDogYW55KSB7XG4gICAgICAgIHRoaXMuZXZlbnQucmVnaXN0ZXIoTmV0RXZlbnRUeXBlLk9uTWVzc2FnZSArIFwiX1wiICsgbXNnQ29kZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgIH1cbiAgICBVblJlZ2lzdGVyTXNnTGlzdGVuZXIobXNnQ29kZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIGNvbnRleHQ6IGFueSkge1xuICAgICAgICB0aGlzLmV2ZW50LnJlbW92ZShOZXRFdmVudFR5cGUuT25NZXNzYWdlICsgXCJfXCIgKyBtc2dDb2RlLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgfVxuICAgIC8vIOazqOWGjOacjeWKoeWZqOmUmeivr+ebkeWQrFxuICAgIFJlZ2lzdGVyRXJyb3JMaXN0ZW5lcihjYWxsYmFjayA6IEZ1bmN0aW9uLCBjb250ZXh0IDogYW55KXtcbiAgICAgICAgdGhpcy5ldmVudC5yZWdpc3RlcihOZXRFdmVudFR5cGUuT25FcnJvciwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgIH1cbiAgICBVblJlZ2lzdGVyRXJyb3JMaXN0ZW5lcihjYWxsYmFjayA6IEZ1bmN0aW9uLCBjb250ZXh0IDogYW55KXtcbiAgICAgICAgdGhpcy5ldmVudC5yZW1vdmUoTmV0RXZlbnRUeXBlLk9uRXJyb3IsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICAvL+azqOWGjDQwMemUmeivr+ebkeWQrFxuICAgIFJlZ2lzdGVyVW5hdXRob3JpemVkTGlzdGVuZXIoY2FsbGJhY2s6IEZ1bmN0aW9uLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgdGhpcy5ldmVudC5yZWdpc3RlcihOZXRFdmVudFR5cGUuVW5hdXRob3JpemVkLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgfVxuICAgIFVuUmVnaXN0ZXJVbmF1dGhvcml6ZWRMaXN0ZW5lcihjYWxsYmFjazogRnVuY3Rpb24sIGNvbnRleHQ6IGFueSkge1xuICAgICAgICB0aGlzLmV2ZW50LnJlbW92ZShOZXRFdmVudFR5cGUuVW5hdXRob3JpemVkLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9wb3N0QSh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLHJlcTogTmV0QmFzZVJlcSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwianNvblwiO1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAvLyDotoXml7bml7bpl7TvvIjmr6vnp5LvvIlcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gdGhpcy5jaGVja1RpbWVPdXQ7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgICAgICBUS0xvZy5Mb2dJbmZvKFwiaGVhZGVyOnRva2VuXCIsIHVybCwgdGhpcy50b2tlbik7XG4gICAgICAgICAgICBpZih0aGlzLnRva2VuLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIHRoaXMudG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAocGUgOiBQcm9ncmVzc0V2ZW50KSA9PiB7IFxuICAgICAgICAgICAgICAgIEh0dHBNYW5hZ2VyLmdldEluc3RhbmNlKCkuT25FcnJvcihuZXcgRXJyb3IoXCLnvZHnu5zor7fmsYLlpLHotKVcIikpXG4gICAgICAgICAgICAgICAgVEtMb2cuTG9nSW5mbyhcIm9uZXJyb3I6XCIsIHhoci5zdGF0dXNUZXh0LCB1cmwsIHBlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IChwZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEh0dHBNYW5hZ2VyLmdldEluc3RhbmNlKCkuT25FcnJvcihuZXcgRXJyb3IoXCLnvZHnu5zor7fmsYLotoXml7ZcIikpXG4gICAgICAgICAgICAgICAgdGhpcy5yZVNlbmQocmVxKVxuICAgICAgICAgICAgICAgIFRLTG9nLkxvZ0luZm8oXCJvbnRpbWVvdXQ6XCIsIHVybCwgeGhyLnRpbWVvdXQsIHhoci5zdGF0dXNUZXh0LCB4aHIuc3RhdHVzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9IDQpIHsgcmV0dXJuIH1cbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXMoeGhyLnJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAvLyBUS0xvZy5Mb2dJbmZvKFwiT0tcIiwgeGhyLnJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNlbmRDb3VudFtyZXEuZ2V0TXNnQ29kZSgpXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBUS0xvZy5Mb2dJbmZvKFwi6YeN572u6YeN5Y+R5qyh5pWwXCIscmVxLmdldE1zZ0NvZGUoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZW5kQ291bnRbcmVxLmdldE1zZ0NvZGUoKV09IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLk9uTWVzc2FnZSh7XCJ0b3BpY1wiOnJlcS5nZXRNc2dDb2RlKCksIFwicGF5bG9hZFwiOnhoci5yZXNwb25zZX0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgVEtMb2cuTG9nSW5mbyhcIm9ucmVhZHlzdGF0ZWNoYW5nZTpcIiwgeGhyLnN0YXR1c1RleHQsIHVybCwgeGhyKVxuICAgICAgICAgICAgICAgICAgICBIdHRwTWFuYWdlci5nZXRJbnN0YW5jZSgpLk9uRXJyb3IobmV3IEVycm9yKFwi5pyN5Yqh5Zmo6L+e5o6l6ZSZ6K+vXCIreGhyLnN0YXR1cykpXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlamVjdChuZXcgRXJyb3IoXCLmnI3liqHlmajov57mjqXplJnor69cIikpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRocm93IG4gZXcgRXJyb3IoXCJ4aHItc3RhdHVzLW5vdC0yMDAtNDAwXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeGhyLnNlbmQoYm9keSlcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIFRLTG9nLkxvZ0luZm8oXCJjYXRjaGUgZXJyb3IgOlwiLCBlcnJvcilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkh0dHBNYW5nYWVyLl9wb3N0IEVycm9yOlwiICsgZXJyb3IgKyB1cmwpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICAvLyDlj5HpgIHmlbDmja7llr1cbiAgICAvLyBwcm90ZWN0ZWQgYXN5bmMgX3Bvc3QodXJsOiBzdHJpbmcsIGJvZHk6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgLy8gICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZTxvYmplY3Q+KChyZXMscmVqZWN0KSA9PiB7XG4gICAgLy8gICAgICAgICB0cnkge1xuICAgIC8vICAgICAgICAgICAgIGxldCB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvLyAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gXCJqc29uXCI7XG4gICAgLy8gICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XG4gICAgLy8gICAgICAgICAgICAgLy8g6LaF5pe25pe26Ze077yI5q+r56eS77yJXG4gICAgLy8gICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSB0aGlzLmNoZWNrVGltZU91dDtcbiAgICAvLyAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgLy8gICAgICAgICAgICAgVEtMb2cuTG9nSW5mbyhcImhlYWRlcjp0b2tlblwiLCB1cmwsIHRoaXMudG9rZW4pO1xuICAgIC8vICAgICAgICAgICAgIGlmKHRoaXMudG9rZW4ubGVuZ3RoID4gMCl7XG4gICAgLy8gICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIHRoaXMudG9rZW4pO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB4aHIub25lcnJvciA9IChwZSA6IFByb2dyZXNzRXZlbnQpID0+IHsgXG4gICAgLy8gICAgICAgICAgICAgICAgIEh0dHBNYW5hZ2VyLmdldEluc3RhbmNlKCkuT25FcnJvcihuZXcgRXJyb3IoXCLnvZHnu5zor7fmsYLlpLHotKVcIikpXG4gICAgLy8gICAgICAgICAgICAgICAgIFRLTG9nLkxvZ0luZm8oXCJvbmVycm9yOlwiLCB4aHIuc3RhdHVzVGV4dCwgdXJsLCBwZSlcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IChwZSkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBIdHRwTWFuYWdlci5nZXRJbnN0YW5jZSgpLk9uRXJyb3IobmV3IEVycm9yKFwi572R57uc6K+35rGC6LaF5pe2XCIpKVxuICAgIC8vICAgICAgICAgICAgICAgICBUS0xvZy5Mb2dJbmZvKFwib250aW1lb3V0OlwiLCB1cmwsIHhoci50aW1lb3V0LCB4aHIuc3RhdHVzVGV4dCwgeGhyLnN0YXR1cylcbiAgICAvLyAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPSA0KSB7IHJldHVybiB9XG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXMoeGhyLnJlc3BvbnNlKVxuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgVEtMb2cuTG9nSW5mbyhcIm9ucmVhZHlzdGF0ZWNoYW5nZTpcIiwgeGhyLnN0YXR1c1RleHQsIHVybCwgeGhyKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgSHR0cE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5PbkVycm9yKG5ldyBFcnJvcihcIuacjeWKoeWZqOi/nuaOpemUmeivr1wiKSlcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB4aHIuc2VuZChib2R5KVxuICAgIC8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgICAgICAgICAgICBUS0xvZy5Mb2dJbmZvKFwiY2F0Y2ggZXJyOlwiLCBlcnJvcilcbiAgICAvLyAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KS5jYXRjaChlPT57XG4gICAgLy8gICAgICAgICAvLyBIdHRwTWFuYWdlci5nZXRJbnN0YW5jZSgpLk9uRXJyb3IobmV3IEVycm9yKFwi5pyN5Yqh5Zmo6L+e5o6l6ZSZ6K+vXCIpKVxuICAgIC8vICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSHR0cE1hbmdhZXIuX3Bvc3QgRXJyb3I6XCIgKyBlICsgdXJsKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxufSJdfQ==