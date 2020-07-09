"use strict";
cc._RF.push(module, '6f1b7YOmYJD7bbwyEx69RZ3', 'TKLogNone');
// script/framework/log/TKLogNone.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ITKLog_1 = require("./ITKLog");
var TKLogNone = /** @class */ (function () {
    function TKLogNone() {
        this.logLevel = ITKLog_1.LogLevel.Info;
        this.logFile = false;
        this.listeners = [];
    }
    TKLogNone.prototype.SetLogLevel = function (level) {
        this.logLevel = level;
    };
    TKLogNone.prototype.SetLogFile = function (logToFile) {
        this.logFile = logToFile;
    };
    TKLogNone.prototype.LogInfo = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        console.log.apply(console, __spreadArrays([msg], subst));
        this.logCallback.apply(this, __spreadArrays([ITKLog_1.LogLevel.Info, msg], subst));
    };
    TKLogNone.prototype.LogDebug = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        console.log.apply(console, __spreadArrays([msg], subst));
        this.logCallback.apply(this, __spreadArrays([ITKLog_1.LogLevel.Debug, msg], subst));
    };
    TKLogNone.prototype.LogWarn = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        console.warn.apply(console, __spreadArrays([msg], subst));
        this.logCallback.apply(this, __spreadArrays([ITKLog_1.LogLevel.Warn, msg], subst));
    };
    TKLogNone.prototype.LogErr = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        console.error.apply(console, __spreadArrays([msg], subst));
        this.logCallback.apply(this, __spreadArrays([ITKLog_1.LogLevel.Error, msg], subst));
    };
    TKLogNone.prototype.ToDo = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        this.LogWarn("TooooDooooo:" + msg, subst);
    };
    TKLogNone.prototype.TagLog = function (tag, msg) {
        var subst = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            subst[_i - 2] = arguments[_i];
        }
        this.LogInfo(tag + ":" + msg, subst);
    };
    TKLogNone.prototype.RegisterLogListener = function (listener) {
        for (var i = 0; i < this.listeners.length; ++i) {
            if (this.listeners[i] == listener) {
                return;
            }
        }
        this.listeners.push(listener);
    };
    TKLogNone.prototype.UnRegisterLogListener = function (listener) {
        this.listeners = this.listeners.filter(function (item) { return item !== listener; });
    };
    TKLogNone.prototype.logCallback = function (level, msg) {
        var _a;
        var subst = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            subst[_i - 2] = arguments[_i];
        }
        for (var i = 0; i < this.listeners.length; ++i) {
            (_a = this.listeners[i]).OnLoged.apply(_a, __spreadArrays([level, msg], subst));
        }
    };
    return TKLogNone;
}());
exports.default = TKLogNone;

cc._RF.pop();