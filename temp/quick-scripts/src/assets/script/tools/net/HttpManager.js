"use strict";
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