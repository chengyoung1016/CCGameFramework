"use strict";
cc._RF.push(module, '03a84bK/mZGdaFZjHuvttet', 'TKLog');
// script/framework/log/TKLog.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogTrace = void 0;
var TKLogWXMini_1 = require("./TKLogWXMini");
var TKLogWeb_1 = require("./TKLogWeb");
var TKLogNative_1 = require("./TKLogNative");
var TKLogNone_1 = require("./TKLogNone");
var LogTrace;
(function (LogTrace) {
    LogTrace[LogTrace["console"] = 0] = "console";
    LogTrace[LogTrace["wx"] = 1] = "wx";
})(LogTrace = exports.LogTrace || (exports.LogTrace = {}));
var TKLog = /** @class */ (function () {
    function TKLog() {
    }
    TKLog.getLogger = function () {
        if (this.logger != null) {
            return this.logger;
        }
        switch (cc.sys.platform) {
            case cc.sys.WECHAT_GAME:
                this.logger = new TKLogWXMini_1.default();
                console.log("微信小游戏logger");
                break;
            case cc.sys.DESKTOP_BROWSER:
            case cc.sys.MOBILE_BROWSER:
                this.logger = new TKLogWeb_1.default();
                console.log("浏览器logger");
                break;
            default:
                if (cc.sys.isNative) {
                    this.logger = new TKLogNative_1.default();
                    console.log("原生logger");
                }
                else {
                    this.logger = new TKLogNone_1.default();
                    console.log("默认logger");
                }
                break;
        }
        return this.logger;
    };
    TKLog.SetLogLevel = function (logLevel) {
        this.getLogger().SetLogLevel(logLevel);
    };
    TKLog.SetLogFile = function (logFile) {
        this.getLogger().SetLogFile(logFile);
    };
    // 只打印在console中的调试信息
    TKLog.LogDebug = function (msg) {
        var _a;
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        (_a = this.getLogger()).LogDebug.apply(_a, __spreadArrays([msg], subst));
    };
    TKLog.LogInfo = function (msg) {
        var _a;
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        (_a = this.getLogger()).LogInfo.apply(_a, __spreadArrays([msg], subst));
    };
    TKLog.LogWarn = function (msg) {
        var _a;
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        (_a = this.getLogger()).LogWarn.apply(_a, __spreadArrays([msg], subst));
    };
    TKLog.LogErr = function (msg) {
        var _a;
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        (_a = this.getLogger()).LogErr.apply(_a, __spreadArrays([msg], subst));
    };
    TKLog.ToDo = function (msg) {
        var _a;
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        (_a = this.getLogger()).ToDo.apply(_a, __spreadArrays([msg], subst));
    };
    TKLog.TagLog = function (tag, msg) {
        var _a;
        var subst = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            subst[_i - 2] = arguments[_i];
        }
        (_a = this.getLogger()).TagLog.apply(_a, __spreadArrays([tag, msg], subst));
    };
    TKLog.RegisterLogListener = function (listener) {
        this.getLogger().RegisterLogListener(listener);
    };
    TKLog.UnRegisterLogListener = function (listener) {
        this.getLogger().UnRegisterLogListener(listener);
    };
    // static logLevel : LogLevel = LogLevel.Info;
    // static logTrace : LogTrace = LogTrace.console;
    TKLog.logger = null;
    return TKLog;
}());
exports.default = TKLog;

cc._RF.pop();