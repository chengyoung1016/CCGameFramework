
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/log/TKLog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL2xvZy9US0xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQXdDO0FBQ3hDLHVDQUFrQztBQUNsQyw2Q0FBd0M7QUFDeEMseUNBQW9DO0FBR3BDLElBQVksUUFHWDtBQUhELFdBQVksUUFBUTtJQUNoQiw2Q0FBTyxDQUFBO0lBQ1AsbUNBQUUsQ0FBQTtBQUNOLENBQUMsRUFIVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUduQjtBQUVEO0lBQUE7SUF1RUEsQ0FBQztJQWxFa0IsZUFBUyxHQUF4QjtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3RCO1FBRUQsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVztnQkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQTtnQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtnQkFDMUIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7WUFDNUIsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWM7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxrQkFBUSxFQUFFLENBQUE7Z0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQ3hCLE1BQU07WUFDVjtnQkFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDO29CQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUkscUJBQVcsRUFBRSxDQUFBO29CQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2lCQUMxQjtxQkFBSTtvQkFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksbUJBQVMsRUFBRSxDQUFBO29CQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2lCQUMxQjtnQkFDRCxNQUFNO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUVNLGlCQUFXLEdBQWxCLFVBQW1CLFFBQW1CO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUNNLGdCQUFVLEdBQWpCLFVBQWtCLE9BQWlCO1FBQy9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUVELG9CQUFvQjtJQUNiLGNBQVEsR0FBZixVQUFnQixHQUFTOztRQUFFLGVBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsOEJBQWM7O1FBQ3JDLENBQUEsS0FBQSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUEsQ0FBQyxRQUFRLDJCQUFDLEdBQUcsR0FBSyxLQUFLLEdBQUM7SUFDNUMsQ0FBQztJQUVNLGFBQU8sR0FBZCxVQUFlLEdBQVE7O1FBQUUsZUFBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw4QkFBZTs7UUFDcEMsQ0FBQSxLQUFBLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQSxDQUFDLE9BQU8sMkJBQUMsR0FBRyxHQUFLLEtBQUssR0FBQztJQUMzQyxDQUFDO0lBRU0sYUFBTyxHQUFkLFVBQWUsR0FBTzs7UUFBRSxlQUFnQjthQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7WUFBaEIsOEJBQWdCOztRQUNwQyxDQUFBLEtBQUEsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBLENBQUMsT0FBTywyQkFBQyxHQUFHLEdBQUssS0FBSyxHQUFDO0lBQzNDLENBQUM7SUFFTSxZQUFNLEdBQWIsVUFBYyxHQUFPOztRQUFFLGVBQWdCO2FBQWhCLFVBQWdCLEVBQWhCLHFCQUFnQixFQUFoQixJQUFnQjtZQUFoQiw4QkFBZ0I7O1FBQ25DLENBQUEsS0FBQSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUEsQ0FBQyxNQUFNLDJCQUFDLEdBQUcsR0FBSyxLQUFLLEdBQUM7SUFDMUMsQ0FBQztJQUVNLFVBQUksR0FBWCxVQUFZLEdBQVM7O1FBQUUsZUFBZ0I7YUFBaEIsVUFBZ0IsRUFBaEIscUJBQWdCLEVBQWhCLElBQWdCO1lBQWhCLDhCQUFnQjs7UUFDbkMsQ0FBQSxLQUFBLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQSxDQUFDLElBQUksMkJBQUMsR0FBRyxHQUFLLEtBQUssR0FBQztJQUN4QyxDQUFDO0lBRU0sWUFBTSxHQUFiLFVBQWMsR0FBWSxFQUFFLEdBQVM7O1FBQUUsZUFBZ0I7YUFBaEIsVUFBZ0IsRUFBaEIscUJBQWdCLEVBQWhCLElBQWdCO1lBQWhCLDhCQUFnQjs7UUFDbkQsQ0FBQSxLQUFBLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQSxDQUFDLE1BQU0sMkJBQUMsR0FBRyxFQUFFLEdBQUcsR0FBSyxLQUFLLEdBQUM7SUFDL0MsQ0FBQztJQUVNLHlCQUFtQixHQUExQixVQUEyQixRQUF5QjtRQUNoRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUNNLDJCQUFxQixHQUE1QixVQUE2QixRQUF5QjtRQUNsRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDcEQsQ0FBQztJQXJFRCw4Q0FBOEM7SUFDOUMsaURBQWlEO0lBRWxDLFlBQU0sR0FBWSxJQUFJLENBQUM7SUFtRTFDLFlBQUM7Q0F2RUQsQUF1RUMsSUFBQTtrQkF2RW9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSVRLTG9nLCB7IExvZ0xldmVsLCBJVEtMb2dMaXN0ZW5lciB9IGZyb20gXCIuL0lUS0xvZ1wiO1xuaW1wb3J0IFRLTG9nV1hNaW5pIGZyb20gXCIuL1RLTG9nV1hNaW5pXCI7XG5pbXBvcnQgVEtMb2dXZWIgZnJvbSBcIi4vVEtMb2dXZWJcIjtcbmltcG9ydCBUS0xvZ05hdGl2ZSBmcm9tIFwiLi9US0xvZ05hdGl2ZVwiO1xuaW1wb3J0IFRLTG9nTm9uZSBmcm9tIFwiLi9US0xvZ05vbmVcIjtcblxuXG5leHBvcnQgZW51bSBMb2dUcmFjZSB7XG4gICAgY29uc29sZSxcbiAgICB3eCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVEtMb2cge1xuICAgIC8vIHN0YXRpYyBsb2dMZXZlbCA6IExvZ0xldmVsID0gTG9nTGV2ZWwuSW5mbztcbiAgICAvLyBzdGF0aWMgbG9nVHJhY2UgOiBMb2dUcmFjZSA9IExvZ1RyYWNlLmNvbnNvbGU7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBsb2dnZXIgOiBJVEtMb2cgPSBudWxsO1xuICAgIHByaXZhdGUgc3RhdGljIGdldExvZ2dlcigpIDogSVRLTG9nIHtcbiAgICAgICAgaWYgKHRoaXMubG9nZ2VyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvZ2dlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoY2Muc3lzLnBsYXRmb3JtKXtcbiAgICAgICAgICAgIGNhc2UgY2Muc3lzLldFQ0hBVF9HQU1FOlxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyID0gbmV3IFRLTG9nV1hNaW5pKClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW+ruS/oeWwj+a4uOaIj2xvZ2dlclwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5zeXMuREVTS1RPUF9CUk9XU0VSOlxuICAgICAgICAgICAgY2FzZSBjYy5zeXMuTU9CSUxFX0JST1dTRVI6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgVEtMb2dXZWIoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5rWP6KeI5ZmobG9nZ2VyXCIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlciA9IG5ldyBUS0xvZ05hdGl2ZSgpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Y6f55SfbG9nZ2VyXCIpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyID0gbmV3IFRLTG9nTm9uZSgpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6buY6K6kbG9nZ2VyXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlclxuICAgIH1cblxuICAgIHN0YXRpYyBTZXRMb2dMZXZlbChsb2dMZXZlbCA6IExvZ0xldmVsKSB7XG4gICAgICAgIHRoaXMuZ2V0TG9nZ2VyKCkuU2V0TG9nTGV2ZWwobG9nTGV2ZWwpXG4gICAgfVxuICAgIHN0YXRpYyBTZXRMb2dGaWxlKGxvZ0ZpbGUgOiBib29sZWFuKXtcbiAgICAgICAgdGhpcy5nZXRMb2dnZXIoKS5TZXRMb2dGaWxlKGxvZ0ZpbGUpXG4gICAgfVxuXG4gICAgLy8g5Y+q5omT5Y2w5ZyoY29uc29sZeS4reeahOiwg+ivleS/oeaBr1xuICAgIHN0YXRpYyBMb2dEZWJ1Zyhtc2cgOiBhbnksIC4uLnN1YnN0OmFueVtdKSB7XG4gICAgICAgIHRoaXMuZ2V0TG9nZ2VyKCkuTG9nRGVidWcobXNnLCAuLi5zdWJzdClcbiAgICB9XG5cbiAgICBzdGF0aWMgTG9nSW5mbyhtc2c6IGFueSwgLi4uc3Vic3Q6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZ2V0TG9nZ2VyKCkuTG9nSW5mbyhtc2csIC4uLnN1YnN0KVxuICAgIH1cblxuICAgIHN0YXRpYyBMb2dXYXJuKG1zZzphbnksIC4uLnN1YnN0IDogYW55W10pe1xuICAgICAgICB0aGlzLmdldExvZ2dlcigpLkxvZ1dhcm4obXNnLCAuLi5zdWJzdClcbiAgICB9XG5cbiAgICBzdGF0aWMgTG9nRXJyKG1zZzphbnksIC4uLnN1YnN0IDogYW55W10pe1xuICAgICAgICB0aGlzLmdldExvZ2dlcigpLkxvZ0Vycihtc2csIC4uLnN1YnN0KVxuICAgIH1cblxuICAgIHN0YXRpYyBUb0RvKG1zZyA6IGFueSwgLi4uc3Vic3QgOiBhbnlbXSl7XG4gICAgICAgIHRoaXMuZ2V0TG9nZ2VyKCkuVG9Ebyhtc2csIC4uLnN1YnN0KVxuICAgIH1cblxuICAgIHN0YXRpYyBUYWdMb2codGFnIDogc3RyaW5nLCBtc2cgOiBhbnksIC4uLnN1YnN0IDogYW55W10pe1xuICAgICAgICB0aGlzLmdldExvZ2dlcigpLlRhZ0xvZyh0YWcsIG1zZywgLi4uc3Vic3QpXG4gICAgfVxuXG4gICAgc3RhdGljIFJlZ2lzdGVyTG9nTGlzdGVuZXIobGlzdGVuZXIgOiBJVEtMb2dMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmdldExvZ2dlcigpLlJlZ2lzdGVyTG9nTGlzdGVuZXIobGlzdGVuZXIpXG4gICAgfVxuICAgIHN0YXRpYyBVblJlZ2lzdGVyTG9nTGlzdGVuZXIobGlzdGVuZXIgOiBJVEtMb2dMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmdldExvZ2dlcigpLlVuUmVnaXN0ZXJMb2dMaXN0ZW5lcihsaXN0ZW5lcilcbiAgICB9XG59XG4iXX0=