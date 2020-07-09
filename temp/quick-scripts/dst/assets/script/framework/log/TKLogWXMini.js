
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/log/TKLogWXMini.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL2xvZy9US0xvZ1dYTWluaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTRDO0FBQzVDLHlDQUFvQztBQUVwQztJQUF5QywrQkFBUztJQUFsRDs7SUF5REEsQ0FBQztJQXZERyxnQ0FBVSxHQUFWLFVBQVcsU0FBa0I7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBQ0QsNkJBQU8sR0FBUCxVQUFRLEdBQVE7UUFBRSxlQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDhCQUFlOztRQUM3QixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksaUJBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDaEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1lBQzdCLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsRUFBRSxDQUFDLEdBQUcsT0FBTixFQUFFLGtCQUFLLEdBQUcsR0FBSyxLQUFLLEdBQUM7Z0JBQ3JCLGlCQUFNLE9BQU8sNkJBQUMsR0FBRyxHQUFLLEtBQUssR0FBQzthQUMvQjtpQkFBTTtnQkFDSCxpQkFBTSxPQUFPLDZCQUFDLEdBQUcsR0FBSyxLQUFLLEdBQUM7YUFDL0I7U0FDSjtJQUNMLENBQUM7SUFDRCw4QkFBUSxHQUFSLFVBQVMsR0FBUTtRQUFFLGVBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsOEJBQWU7O1FBQzlCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxpQkFBUSxDQUFDLEtBQUssRUFBRTtZQUNqQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7WUFDN0IsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxFQUFFLENBQUMsR0FBRyxPQUFOLEVBQUUsa0JBQUssR0FBRyxHQUFLLEtBQUssR0FBQztnQkFDckIsaUJBQU0sUUFBUSw2QkFBQyxHQUFHLEdBQUssS0FBSyxHQUFDO2FBQ2hDO2lCQUFNO2dCQUNILGlCQUFNLFFBQVEsNkJBQUMsR0FBRyxHQUFLLEtBQUssR0FBQzthQUNoQztTQUNKO0lBQ0wsQ0FBQztJQUNELDZCQUFPLEdBQVAsVUFBUSxHQUFRO1FBQUUsZUFBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw4QkFBZTs7UUFDN0IsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLGlCQUFRLENBQUMsSUFBSSxFQUFFO1lBQ2hDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtZQUM3QixJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFO2dCQUNkLEVBQUUsQ0FBQyxHQUFHLE9BQU4sRUFBRSxrQkFBSyxHQUFHLEdBQUssS0FBSyxHQUFDO2dCQUNyQixpQkFBTSxPQUFPLDZCQUFDLEdBQUcsR0FBSyxLQUFLLEdBQUM7YUFDL0I7aUJBQU07Z0JBQ0gsaUJBQU0sT0FBTyw2QkFBQyxHQUFHLEdBQUssS0FBSyxHQUFDO2FBQy9CO1NBQ0o7SUFDTCxDQUFDO0lBQ0QsNEJBQU0sR0FBTixVQUFPLEdBQVE7UUFBRSxlQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDhCQUFlOztRQUM1QixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksaUJBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDakMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1lBQzdCLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsRUFBRSxDQUFDLEdBQUcsT0FBTixFQUFFLGtCQUFLLEdBQUcsR0FBSyxLQUFLLEdBQUM7Z0JBQ3JCLGlCQUFNLE1BQU0sNkJBQUMsR0FBRyxHQUFLLEtBQUssR0FBQzthQUM5QjtpQkFBTTtnQkFDSCxpQkFBTSxNQUFNLDZCQUFDLEdBQUcsR0FBSyxLQUFLLEdBQUM7YUFDOUI7U0FDSjtJQUNMLENBQUM7SUFFTyxtQ0FBYSxHQUFyQjtRQUNJLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUNsQixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQTtTQUNyQztRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0F6REEsQUF5REMsQ0F6RHdDLG1CQUFTLEdBeURqRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJVEtMb2csIHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JVEtMb2dcIjtcbmltcG9ydCBUS0xvZ05vbmUgZnJvbSBcIi4vVEtMb2dOb25lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRLTG9nV1hNaW5pIGV4dGVuZHMgVEtMb2dOb25le1xuICAgIFxuICAgIFNldExvZ0ZpbGUobG9nVG9GaWxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuVG9EbyhcIui/mOayoeacieWunueOsOWGmeWFpeaXpeW/l+aWh+S7tlwiKVxuICAgIH1cbiAgICBMb2dJbmZvKG1zZzogYW55LCAuLi5zdWJzdDogYW55W10pIHtcbiAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPD0gTG9nTGV2ZWwuSW5mbykge1xuICAgICAgICAgICAgdmFyIGxtID0gdGhpcy5nZXRMb2dNYW5hZ2VyKClcbiAgICAgICAgICAgIGlmIChsbSAmJiBsbS5sb2cpIHtcbiAgICAgICAgICAgICAgICBsbS5sb2cobXNnLCAuLi5zdWJzdClcbiAgICAgICAgICAgICAgICBzdXBlci5Mb2dJbmZvKG1zZywgLi4uc3Vic3QpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1cGVyLkxvZ0luZm8obXNnLCAuLi5zdWJzdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2dEZWJ1Zyhtc2c6IGFueSwgLi4uc3Vic3Q6IGFueVtdKSB7XG4gICAgICAgIGlmICh0aGlzLmxvZ0xldmVsIDw9IExvZ0xldmVsLkRlYnVnKSB7XG4gICAgICAgICAgICB2YXIgbG0gPSB0aGlzLmdldExvZ01hbmFnZXIoKVxuICAgICAgICAgICAgaWYgKGxtICYmIGxtLmxvZykge1xuICAgICAgICAgICAgICAgIGxtLmxvZyhtc2csIC4uLnN1YnN0KVxuICAgICAgICAgICAgICAgIHN1cGVyLkxvZ0RlYnVnKG1zZywgLi4uc3Vic3QpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1cGVyLkxvZ0RlYnVnKG1zZywgLi4uc3Vic3QpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgTG9nV2Fybihtc2c6IGFueSwgLi4uc3Vic3Q6IGFueVtdKSB7XG4gICAgICAgIGlmICh0aGlzLmxvZ0xldmVsIDw9IExvZ0xldmVsLldhcm4pIHtcbiAgICAgICAgICAgIHZhciBsbSA9IHRoaXMuZ2V0TG9nTWFuYWdlcigpXG4gICAgICAgICAgICBpZiAobG0gJiYgbG0ubG9nKSB7XG4gICAgICAgICAgICAgICAgbG0ubG9nKG1zZywgLi4uc3Vic3QpXG4gICAgICAgICAgICAgICAgc3VwZXIuTG9nV2Fybihtc2csIC4uLnN1YnN0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdXBlci5Mb2dXYXJuKG1zZywgLi4uc3Vic3QpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgTG9nRXJyKG1zZzogYW55LCAuLi5zdWJzdDogYW55W10pIHtcbiAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPD0gTG9nTGV2ZWwuRXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBsbSA9IHRoaXMuZ2V0TG9nTWFuYWdlcigpXG4gICAgICAgICAgICBpZiAobG0gJiYgbG0ubG9nKSB7XG4gICAgICAgICAgICAgICAgbG0ubG9nKG1zZywgLi4uc3Vic3QpXG4gICAgICAgICAgICAgICAgc3VwZXIuTG9nRXJyKG1zZywgLi4uc3Vic3QpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1cGVyLkxvZ0Vycihtc2csIC4uLnN1YnN0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMb2dNYW5hZ2VyKCkgOiBMb2dNYW5hZ2VyIHtcbiAgICAgICAgaWYgKHd4LmdldExvZ01hbmFnZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3eC5nZXRMb2dNYW5hZ2VyKHtsZXZlbDowfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBcbn0iXX0=