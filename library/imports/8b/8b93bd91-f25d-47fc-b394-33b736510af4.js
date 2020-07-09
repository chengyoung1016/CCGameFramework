"use strict";
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