"use strict";
cc._RF.push(module, 'ceab8dQdMpIVbGdTnjAKzjE', 'TKLogWXMini');
// script/framework/log/TKLogWXMini.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ITKLog_1 = require("./ITKLog");
var TKLogNone_1 = require("./TKLogNone");
var TKLogWXMini = /** @class */ (function (_super) {
    __extends(TKLogWXMini, _super);
    function TKLogWXMini() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TKLogWXMini.prototype.SetLogFile = function (logToFile) {
        this.ToDo("还没有实现写入日志文件");
    };
    TKLogWXMini.prototype.LogInfo = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        if (this.logLevel <= ITKLog_1.LogLevel.Info) {
            var lm = this.getLogManager();
            if (lm && lm.log) {
                lm.log.apply(lm, __spreadArrays([msg], subst));
                _super.prototype.LogInfo.apply(this, __spreadArrays([msg], subst));
            }
            else {
                _super.prototype.LogInfo.apply(this, __spreadArrays([msg], subst));
            }
        }
    };
    TKLogWXMini.prototype.LogDebug = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        if (this.logLevel <= ITKLog_1.LogLevel.Debug) {
            var lm = this.getLogManager();
            if (lm && lm.log) {
                lm.log.apply(lm, __spreadArrays([msg], subst));
                _super.prototype.LogDebug.apply(this, __spreadArrays([msg], subst));
            }
            else {
                _super.prototype.LogDebug.apply(this, __spreadArrays([msg], subst));
            }
        }
    };
    TKLogWXMini.prototype.LogWarn = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        if (this.logLevel <= ITKLog_1.LogLevel.Warn) {
            var lm = this.getLogManager();
            if (lm && lm.log) {
                lm.log.apply(lm, __spreadArrays([msg], subst));
                _super.prototype.LogWarn.apply(this, __spreadArrays([msg], subst));
            }
            else {
                _super.prototype.LogWarn.apply(this, __spreadArrays([msg], subst));
            }
        }
    };
    TKLogWXMini.prototype.LogErr = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        if (this.logLevel <= ITKLog_1.LogLevel.Error) {
            var lm = this.getLogManager();
            if (lm && lm.log) {
                lm.log.apply(lm, __spreadArrays([msg], subst));
                _super.prototype.LogErr.apply(this, __spreadArrays([msg], subst));
            }
            else {
                _super.prototype.LogErr.apply(this, __spreadArrays([msg], subst));
            }
        }
    };
    TKLogWXMini.prototype.getLogManager = function () {
        if (wx.getLogManager) {
            return wx.getLogManager({ level: 0 });
        }
        return null;
    };
    return TKLogWXMini;
}(TKLogNone_1.default));
exports.default = TKLogWXMini;

cc._RF.pop();