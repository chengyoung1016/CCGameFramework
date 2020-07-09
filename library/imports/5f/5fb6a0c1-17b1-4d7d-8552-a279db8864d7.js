"use strict";
cc._RF.push(module, '5fb6aDBF7FNfYVSonnbiGTX', 'TKLogWeb');
// script/framework/log/TKLogWeb.ts

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
var TKLogWeb = /** @class */ (function (_super) {
    __extends(TKLogWeb, _super);
    function TKLogWeb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TKLogWeb.prototype.SetLogFile = function (logToFile) {
        if (logToFile) {
            this.LogWarn("Web暂不支持写日志到文件");
        }
        else {
            _super.prototype.SetLogFile.call(this, logToFile);
        }
    };
    TKLogWeb.prototype.LogInfo = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        if (this.logLevel <= ITKLog_1.LogLevel.Info) {
            _super.prototype.LogInfo.apply(this, __spreadArrays([msg], subst));
        }
    };
    TKLogWeb.prototype.LogDebug = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        if (this.logLevel <= ITKLog_1.LogLevel.Debug) {
            _super.prototype.LogDebug.apply(this, __spreadArrays([msg], subst));
        }
    };
    TKLogWeb.prototype.LogWarn = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        if (this.logLevel <= ITKLog_1.LogLevel.Warn) {
            _super.prototype.LogWarn.apply(this, __spreadArrays([msg], subst));
        }
    };
    TKLogWeb.prototype.LogErr = function (msg) {
        var subst = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            subst[_i - 1] = arguments[_i];
        }
        if (this.logLevel <= ITKLog_1.LogLevel.Error) {
            _super.prototype.LogErr.apply(this, __spreadArrays([msg], subst));
        }
    };
    return TKLogWeb;
}(TKLogNone_1.default));
exports.default = TKLogWeb;

cc._RF.pop();