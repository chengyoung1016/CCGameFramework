
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/tween/TweenAnim_Number.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b93b2R8l1H/LOUM7c2UQr0', 'TweenAnim_Number');
// script/framework/tween/TweenAnim_Number.ts

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
var PlayOppBaseComponent_1 = require("../utils/PlayOppBaseComponent");
var TKLog_1 = require("../log/TKLog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 改变数字
 * 从startNum变化动goalNum
 * 并可以通过回调函数来回调变化过程值
 */
var TweenAnim_Number = /** @class */ (function (_super) {
    __extends(TweenAnim_Number, _super);
    function TweenAnim_Number() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startNum = 0;
        _this.goalNum = 100;
        _this.dur = 1;
        _this.delay = 0;
        // 保留有效小数位数
        _this.fixed = 0;
        // 是否输出到Label上，如果为null则不输出到label
        _this.toLabel = null;
        // 输出到label上的前缀，比如 “当前：”
        _this.preLabel = "";
        // 输出到label上的后缀，比如 %
        _this.suffixLabel = "";
        _this.numChangedCallback = null;
        _this.isStart = false;
        _this.numObj = { num: 0 };
        return _this;
    }
    TweenAnim_Number.prototype.start = function () {
        if (this.opp == PlayOppBaseComponent_1.PlayOpp.Update) {
            TKLog_1.default.LogWarn("此tweenAnim不建议使用Update执行！！！！！");
        }
        _super.prototype.start.call(this);
    };
    TweenAnim_Number.prototype.Init = function (startNum, goalNum, dur, delay) {
        this.startNum = startNum;
        this.goalNum = goalNum;
        this.dur = dur;
        this.delay = delay;
        this.isStart = false;
    };
    TweenAnim_Number.prototype.Excute = function () {
        var _this = this;
        this.numObj.num = this.startNum;
        cc.tween(this.numObj).delay(this.delay).to(this.dur, { num: this.goalNum }).call(function () {
            if (_this.numChangedCallback != null) {
                _this.numChangedCallback(_this.goalNum);
            }
            _this.isStart = false;
            if (_this.toLabel != null) {
                _this.toLabel.string = _this.preLabel + _this.goalNum.toString() + _this.suffixLabel;
            }
        }).start();
        this.isStart = true;
    };
    TweenAnim_Number.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
        if (this.isStart) {
            var curNum = this.numObj.num.toFixed(this.fixed);
            if (this.numChangedCallback != null) {
                this.numChangedCallback(curNum);
            }
            if (this.toLabel != null) {
                this.toLabel.string = this.preLabel + curNum.toString() + this.suffixLabel;
            }
        }
    };
    __decorate([
        property(cc.Float)
    ], TweenAnim_Number.prototype, "startNum", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Number.prototype, "goalNum", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Number.prototype, "dur", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Number.prototype, "delay", void 0);
    __decorate([
        property(cc.Integer)
    ], TweenAnim_Number.prototype, "fixed", void 0);
    __decorate([
        property(cc.Label)
    ], TweenAnim_Number.prototype, "toLabel", void 0);
    __decorate([
        property(cc.String)
    ], TweenAnim_Number.prototype, "preLabel", void 0);
    __decorate([
        property(cc.String)
    ], TweenAnim_Number.prototype, "suffixLabel", void 0);
    TweenAnim_Number = __decorate([
        ccclass
    ], TweenAnim_Number);
    return TweenAnim_Number;
}(PlayOppBaseComponent_1.default));
exports.default = TweenAnim_Number;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3R3ZWVuL1R3ZWVuQW5pbV9OdW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQThFO0FBQzlFLHNDQUFpQztBQUUzQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQzs7OztHQUlHO0FBRUg7SUFBOEMsb0NBQW9CO0lBQWxFO1FBQUEscUVBdUVDO1FBcEVhLGNBQVEsR0FBSSxDQUFDLENBQUM7UUFFZCxhQUFPLEdBQUcsR0FBRyxDQUFDO1FBRWQsU0FBRyxHQUFHLENBQUMsQ0FBQztRQUVSLFdBQUssR0FBRyxDQUFDLENBQUM7UUFFcEIsV0FBVztRQUVYLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixnQ0FBZ0M7UUFFaEMsYUFBTyxHQUFjLElBQUksQ0FBQztRQUMxQix3QkFBd0I7UUFFeEIsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLG9CQUFvQjtRQUVwQixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUVQLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUNwQyxhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU0sR0FBRyxFQUFDLEdBQUcsRUFBRyxDQUFDLEVBQUMsQ0FBQTs7SUE2Q2hDLENBQUM7SUEzQ0csZ0NBQUssR0FBTDtRQUNJLElBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSw4QkFBTyxDQUFDLE1BQU0sRUFBQztZQUMxQixlQUFLLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUE7U0FDaEQ7UUFDRCxpQkFBTSxLQUFLLFdBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsK0JBQUksR0FBSixVQUFLLFFBQWlCLEVBQUUsT0FBZ0IsRUFBRSxHQUFZLEVBQUUsS0FBYztRQUNsRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQUEsaUJBYUM7UUFaRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRWhDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFHLEVBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNFLElBQUcsS0FBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksRUFBQztnQkFDL0IsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN6QztZQUNELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUcsS0FBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3BGO1FBQ04sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxpQkFBTSxNQUFNLFlBQUMsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ1osSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVqRCxJQUFHLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLEVBQUM7Z0JBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuQztZQUNELElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDOUU7U0FDSjtJQUNMLENBQUM7SUFuRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ0Q7SUFFbEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDQztJQUlwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO21EQUNYO0lBR1Y7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNOO0lBR2Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDSDtJQXRCQSxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXVFcEM7SUFBRCx1QkFBQztDQXZFRCxBQXVFQyxDQXZFNkMsOEJBQW9CLEdBdUVqRTtrQkF2RW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5T3BwQmFzZUNvbXBvbmVudCwgeyBQbGF5T3BwIH0gZnJvbSBcIi4uL3V0aWxzL1BsYXlPcHBCYXNlQ29tcG9uZW50XCI7XG5pbXBvcnQgVEtMb2cgZnJvbSBcIi4uL2xvZy9US0xvZ1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbi8qKlxuICog5pS55Y+Y5pWw5a2XXG4gKiDku45zdGFydE51beWPmOWMluWKqGdvYWxOdW1cbiAqIOW5tuWPr+S7pemAmui/h+Wbnuiwg+WHveaVsOadpeWbnuiwg+WPmOWMlui/h+eoi+WAvFxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW5BbmltX051bWJlciBleHRlbmRzIFBsYXlPcHBCYXNlQ29tcG9uZW50e1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBwcm90ZWN0ZWQgc3RhcnROdW0gID0gMDtcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgcHJvdGVjdGVkIGdvYWxOdW0gPSAxMDA7XG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHByb3RlY3RlZCBkdXIgPSAxO1xuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBwcm90ZWN0ZWQgZGVsYXkgPSAwO1xuXG4gICAgLy8g5L+d55WZ5pyJ5pWI5bCP5pWw5L2N5pWwXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgZml4ZWQgPSAwO1xuICAgIC8vIOaYr+WQpui+k+WHuuWIsExhYmVs5LiK77yM5aaC5p6c5Li6bnVsbOWImeS4jei+k+WHuuWIsGxhYmVsXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRvTGFiZWwgOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgLy8g6L6T5Ye65YiwbGFiZWzkuIrnmoTliY3nvIDvvIzmr5TlpoIg4oCc5b2T5YmN77ya4oCdXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBwcmVMYWJlbCA9IFwiXCI7XG4gICAgLy8g6L6T5Ye65YiwbGFiZWzkuIrnmoTlkI7nvIDvvIzmr5TlpoIgJVxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgc3VmZml4TGFiZWwgPSBcIlwiO1xuXG4gICAgcHJvdGVjdGVkIG51bUNoYW5nZWRDYWxsYmFjayA6IEZ1bmN0aW9uID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgIGlzU3RhcnQgPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgbnVtT2JqID0ge251bSA6IDB9XG5cbiAgICBzdGFydCgpe1xuICAgICAgICBpZih0aGlzLm9wcCA9PSBQbGF5T3BwLlVwZGF0ZSl7XG4gICAgICAgICAgICBUS0xvZy5Mb2dXYXJuKFwi5q2kdHdlZW5Bbmlt5LiN5bu66K6u5L2/55SoVXBkYXRl5omn6KGM77yB77yB77yB77yB77yBXCIpXG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBJbml0KHN0YXJ0TnVtIDogbnVtYmVyLCBnb2FsTnVtIDogbnVtYmVyLCBkdXIgOiBudW1iZXIsIGRlbGF5IDogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5zdGFydE51bSA9IHN0YXJ0TnVtO1xuICAgICAgICB0aGlzLmdvYWxOdW0gPSBnb2FsTnVtO1xuICAgICAgICB0aGlzLmR1ciA9IGR1cjtcbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICB0aGlzLmlzU3RhcnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBFeGN1dGUoKXtcbiAgICAgICB0aGlzLm51bU9iai5udW0gPSB0aGlzLnN0YXJ0TnVtO1xuXG4gICAgICAgY2MudHdlZW4odGhpcy5udW1PYmopLmRlbGF5KHRoaXMuZGVsYXkpLnRvKHRoaXMuZHVyLCB7bnVtIDogdGhpcy5nb2FsTnVtfSkuY2FsbCgoKT0+e1xuICAgICAgICAgICAgaWYodGhpcy5udW1DaGFuZ2VkQ2FsbGJhY2sgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1DaGFuZ2VkQ2FsbGJhY2sodGhpcy5nb2FsTnVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNTdGFydCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYodGhpcy50b0xhYmVsICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHRoaXMudG9MYWJlbC5zdHJpbmcgPSB0aGlzLnByZUxhYmVsICsgdGhpcy5nb2FsTnVtLnRvU3RyaW5nKCkgKyB0aGlzLnN1ZmZpeExhYmVsO1xuICAgICAgICAgICAgfVxuICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpe1xuICAgICAgICBzdXBlci51cGRhdGUoZHQpO1xuICAgICAgICBpZih0aGlzLmlzU3RhcnQpe1xuICAgICAgICAgICAgbGV0IGN1ck51bSA9IHRoaXMubnVtT2JqLm51bS50b0ZpeGVkKHRoaXMuZml4ZWQpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMubnVtQ2hhbmdlZENhbGxiYWNrICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHRoaXMubnVtQ2hhbmdlZENhbGxiYWNrKGN1ck51bSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLnRvTGFiZWwgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b0xhYmVsLnN0cmluZyA9IHRoaXMucHJlTGFiZWwgKyBjdXJOdW0udG9TdHJpbmcoKSArIHRoaXMuc3VmZml4TGFiZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19