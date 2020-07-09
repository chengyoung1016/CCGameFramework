
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/log/TKLogWeb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL2xvZy9US0xvZ1dlYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTRDO0FBQzVDLHlDQUFvQztBQUVwQztJQUFzQyw0QkFBUztJQUEvQzs7SUE2QkEsQ0FBQztJQTNCRyw2QkFBVSxHQUFWLFVBQVcsU0FBa0I7UUFDekIsSUFBSSxTQUFTLEVBQUM7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1NBQ2hDO2FBQUk7WUFDRCxpQkFBTSxVQUFVLFlBQUMsU0FBUyxDQUFDLENBQUE7U0FDOUI7SUFDTCxDQUFDO0lBQ0QsMEJBQU8sR0FBUCxVQUFRLEdBQVE7UUFBRSxlQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDhCQUFlOztRQUM3QixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksaUJBQVEsQ0FBQyxJQUFJLEVBQUM7WUFDL0IsaUJBQU0sT0FBTyw2QkFBQyxHQUFHLEdBQUssS0FBSyxHQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUNELDJCQUFRLEdBQVIsVUFBUyxHQUFRO1FBQUUsZUFBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw4QkFBZTs7UUFDOUIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLGlCQUFRLENBQUMsS0FBSyxFQUFDO1lBQ2hDLGlCQUFNLFFBQVEsNkJBQUMsR0FBRyxHQUFLLEtBQUssR0FBQztTQUNoQztJQUNMLENBQUM7SUFDRCwwQkFBTyxHQUFQLFVBQVEsR0FBUTtRQUFFLGVBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsOEJBQWU7O1FBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxpQkFBUSxDQUFDLElBQUksRUFBQztZQUMvQixpQkFBTSxPQUFPLDZCQUFDLEdBQUcsR0FBSyxLQUFLLEdBQUM7U0FDL0I7SUFDTCxDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFPLEdBQVE7UUFBRSxlQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDhCQUFlOztRQUM1QixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksaUJBQVEsQ0FBQyxLQUFLLEVBQUM7WUFDaEMsaUJBQU0sTUFBTSw2QkFBQyxHQUFHLEdBQUssS0FBSyxHQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQTdCQSxBQTZCQyxDQTdCcUMsbUJBQVMsR0E2QjlDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElUS0xvZywgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lUS0xvZ1wiO1xuaW1wb3J0IFRLTG9nTm9uZSBmcm9tIFwiLi9US0xvZ05vbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVEtMb2dXZWIgZXh0ZW5kcyBUS0xvZ05vbmUge1xuICAgXG4gICAgU2V0TG9nRmlsZShsb2dUb0ZpbGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGxvZ1RvRmlsZSl7XG4gICAgICAgICAgICB0aGlzLkxvZ1dhcm4oXCJXZWLmmoLkuI3mlK/mjIHlhpnml6Xlv5fliLDmlofku7ZcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzdXBlci5TZXRMb2dGaWxlKGxvZ1RvRmlsZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2dJbmZvKG1zZzogYW55LCAuLi5zdWJzdDogYW55W10pIHtcbiAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPD0gTG9nTGV2ZWwuSW5mbyl7XG4gICAgICAgICAgICBzdXBlci5Mb2dJbmZvKG1zZywgLi4uc3Vic3QpXG4gICAgICAgIH1cbiAgICB9XG4gICAgTG9nRGVidWcobXNnOiBhbnksIC4uLnN1YnN0OiBhbnlbXSkge1xuICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA8PSBMb2dMZXZlbC5EZWJ1Zyl7XG4gICAgICAgICAgICBzdXBlci5Mb2dEZWJ1Zyhtc2csIC4uLnN1YnN0KVxuICAgICAgICB9XG4gICAgfVxuICAgIExvZ1dhcm4obXNnOiBhbnksIC4uLnN1YnN0OiBhbnlbXSkge1xuICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA8PSBMb2dMZXZlbC5XYXJuKXtcbiAgICAgICAgICAgIHN1cGVyLkxvZ1dhcm4obXNnLCAuLi5zdWJzdClcbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2dFcnIobXNnOiBhbnksIC4uLnN1YnN0OiBhbnlbXSkge1xuICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA8PSBMb2dMZXZlbC5FcnJvcil7XG4gICAgICAgICAgICBzdXBlci5Mb2dFcnIobXNnLCAuLi5zdWJzdClcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=