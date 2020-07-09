
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/log/TKLogNone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL2xvZy9US0xvZ05vbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTREO0FBRzVEO0lBQUE7UUFFYyxhQUFRLEdBQWMsaUJBQVEsQ0FBQyxJQUFJLENBQUM7UUFDcEMsWUFBTyxHQUFhLEtBQUssQ0FBQztRQUUxQixjQUFTLEdBQXNCLEVBQUUsQ0FBQTtJQWdEL0MsQ0FBQztJQTlDRywrQkFBVyxHQUFYLFVBQVksS0FBZTtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsOEJBQVUsR0FBVixVQUFXLFNBQWtCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFDRCwyQkFBTyxHQUFQLFVBQVEsR0FBUTtRQUFFLGVBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsOEJBQWU7O1FBQzdCLE9BQU8sQ0FBQyxHQUFHLE9BQVgsT0FBTyxrQkFBSyxHQUFHLEdBQUssS0FBSyxHQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLE9BQWhCLElBQUksa0JBQWEsaUJBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFLLEtBQUssR0FBQztJQUNsRCxDQUFDO0lBQ0QsNEJBQVEsR0FBUixVQUFTLEdBQVE7UUFBRSxlQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDhCQUFlOztRQUM5QixPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sa0JBQUssR0FBRyxHQUFLLEtBQUssR0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxPQUFoQixJQUFJLGtCQUFhLGlCQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBSyxLQUFLLEdBQUM7SUFDbkQsQ0FBQztJQUNELDJCQUFPLEdBQVAsVUFBUSxHQUFRO1FBQUUsZUFBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw4QkFBZTs7UUFDN0IsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLGtCQUFNLEdBQUcsR0FBSyxLQUFLLEdBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsT0FBaEIsSUFBSSxrQkFBYSxpQkFBUSxDQUFDLElBQUksRUFBRSxHQUFHLEdBQUssS0FBSyxHQUFDO0lBQ2xELENBQUM7SUFDRCwwQkFBTSxHQUFOLFVBQU8sR0FBUTtRQUFFLGVBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsOEJBQWU7O1FBQzVCLE9BQU8sQ0FBQyxLQUFLLE9BQWIsT0FBTyxrQkFBTyxHQUFHLEdBQUssS0FBSyxHQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLE9BQWhCLElBQUksa0JBQWEsaUJBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFLLEtBQUssR0FBQztJQUNuRCxDQUFDO0lBQ0Qsd0JBQUksR0FBSixVQUFLLEdBQVE7UUFBRSxlQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDhCQUFlOztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELDBCQUFNLEdBQU4sVUFBTyxHQUFXLEVBQUUsR0FBUTtRQUFFLGVBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsOEJBQWU7O1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUVELHVDQUFtQixHQUFuQixVQUFvQixRQUEyQztRQUMzRCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDMUMsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBQztnQkFDN0IsT0FBTTthQUNUO1NBQ0o7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBQ0QseUNBQXFCLEdBQXJCLFVBQXNCLFFBQTJDO1FBQzdELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssUUFBUSxFQUFqQixDQUFpQixDQUFDLENBQUE7SUFDckUsQ0FBQztJQUVPLCtCQUFXLEdBQW5CLFVBQW9CLEtBQWdCLEVBQUUsR0FBUzs7UUFBRSxlQUFnQjthQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7WUFBaEIsOEJBQWdCOztRQUM3RCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDMUMsQ0FBQSxLQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxPQUFPLDJCQUFDLEtBQUssRUFBRSxHQUFHLEdBQUssS0FBSyxHQUFDO1NBQ2xEO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FyREEsQUFxREMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJVEtMb2csIHsgTG9nTGV2ZWwsIElUS0xvZ0xpc3RlbmVyIH0gZnJvbSBcIi4vSVRLTG9nXCI7XG5pbXBvcnQgRW1pdHRlciBmcm9tIFwiLi4vZXZlbnQvRW1pdHRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUS0xvZ05vbmUgaW1wbGVtZW50cyBJVEtMb2d7XG4gICAgXG4gICAgcHJvdGVjdGVkIGxvZ0xldmVsIDogTG9nTGV2ZWwgPSBMb2dMZXZlbC5JbmZvO1xuICAgIHByb3RlY3RlZCBsb2dGaWxlIDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJvdGVjdGVkIGxpc3RlbmVycyA6IElUS0xvZ0xpc3RlbmVyW10gPSBbXVxuXG4gICAgU2V0TG9nTGV2ZWwobGV2ZWw6IExvZ0xldmVsKSB7XG4gICAgICAgIHRoaXMubG9nTGV2ZWwgPSBsZXZlbDtcbiAgICB9XG4gICAgU2V0TG9nRmlsZShsb2dUb0ZpbGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5sb2dGaWxlID0gbG9nVG9GaWxlO1xuICAgIH1cbiAgICBMb2dJbmZvKG1zZzogYW55LCAuLi5zdWJzdDogYW55W10pIHtcbiAgICAgICAgY29uc29sZS5sb2cobXNnLCAuLi5zdWJzdClcbiAgICAgICAgdGhpcy5sb2dDYWxsYmFjayhMb2dMZXZlbC5JbmZvLCBtc2csIC4uLnN1YnN0KVxuICAgIH1cbiAgICBMb2dEZWJ1Zyhtc2c6IGFueSwgLi4uc3Vic3Q6IGFueVtdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1zZywgLi4uc3Vic3QpXG4gICAgICAgIHRoaXMubG9nQ2FsbGJhY2soTG9nTGV2ZWwuRGVidWcsIG1zZywgLi4uc3Vic3QpXG4gICAgfVxuICAgIExvZ1dhcm4obXNnOiBhbnksIC4uLnN1YnN0OiBhbnlbXSkge1xuICAgICAgICBjb25zb2xlLndhcm4obXNnLCAuLi5zdWJzdClcbiAgICAgICAgdGhpcy5sb2dDYWxsYmFjayhMb2dMZXZlbC5XYXJuLCBtc2csIC4uLnN1YnN0KVxuICAgIH1cbiAgICBMb2dFcnIobXNnOiBhbnksIC4uLnN1YnN0OiBhbnlbXSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZywgLi4uc3Vic3QpXG4gICAgICAgIHRoaXMubG9nQ2FsbGJhY2soTG9nTGV2ZWwuRXJyb3IsIG1zZywgLi4uc3Vic3QpXG4gICAgfVxuICAgIFRvRG8obXNnOiBhbnksIC4uLnN1YnN0OiBhbnlbXSkge1xuICAgICAgICB0aGlzLkxvZ1dhcm4oXCJUb29vb0Rvb29vbzpcIittc2csIHN1YnN0KTtcbiAgICB9XG4gICAgVGFnTG9nKHRhZzogc3RyaW5nLCBtc2c6IGFueSwgLi4uc3Vic3Q6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuTG9nSW5mbyh0YWcrXCI6XCIgKyBtc2csIHN1YnN0KVxuICAgIH1cblxuICAgIFJlZ2lzdGVyTG9nTGlzdGVuZXIobGlzdGVuZXI6IGltcG9ydChcIi4vSVRLTG9nXCIpLklUS0xvZ0xpc3RlbmVyKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7ICsraSl7XG4gICAgICAgICAgICBpZih0aGlzLmxpc3RlbmVyc1tpXSA9PSBsaXN0ZW5lcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgICB9XG4gICAgVW5SZWdpc3RlckxvZ0xpc3RlbmVyKGxpc3RlbmVyOiBpbXBvcnQoXCIuL0lUS0xvZ1wiKS5JVEtMb2dMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGxpc3RlbmVyKVxuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGxvZ0NhbGxiYWNrKGxldmVsIDogTG9nTGV2ZWwsIG1zZyA6IGFueSwgLi4uc3Vic3QgOiBhbnlbXSkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyArK2kpe1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbaV0uT25Mb2dlZChsZXZlbCwgbXNnLCAuLi5zdWJzdClcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=