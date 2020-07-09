"use strict";
cc._RF.push(module, 'd3e53o+IAdBC5rnPzCcXX8l', 'TweenAnim_Scale');
// script/framework/tween/TweenAnim_Scale.ts

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
var TweenAnim_Scale = /** @class */ (function (_super) {
    __extends(TweenAnim_Scale, _super);
    function TweenAnim_Scale() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initFrom = false;
        _this.from = -1;
        _this.target = 2;
        _this.dur = 1;
        _this.delay = 1;
        _this.repeate = 1;
        _this.yoyo = false;
        _this.toEase = "sineIn";
        _this.reverseEase = "sineOut";
        _this.tween = null;
        _this.isPlaying = false;
        return _this;
    }
    TweenAnim_Scale.prototype.Excute = function () {
        var _this = this;
        if (this.isPlaying) {
            TKLog_1.default.LogInfo("正在播放中tweenScale中，不再接受执行播放");
            return;
        }
        if (this.tween != null) {
            this.tween.stop();
        }
        if (this.initFrom) {
            this.node.scale = this.from;
        }
        this.tween = cc.tween(this.node);
        var srcScale = this.node.scale;
        var scaleTween = this.tween.to(this.dur, { scale: this.target }, { easing: this.toEase });
        if (this.yoyo) {
            scaleTween.to(this.dur, { scale: srcScale }, { easing: this.reverseEase });
        }
        else if (this.repeate > 0) {
            scaleTween.call(function () {
                _this.node.scale = srcScale;
            });
        }
        if (this.repeate < 0) {
            this.repeate = Number.MAX_SAFE_INTEGER;
        }
        this.tween.repeat(this.repeate, scaleTween).call(function () {
            _this.isPlaying = false;
        });
        this.isPlaying = true;
        this.tween.start();
    };
    __decorate([
        property(cc.Boolean)
    ], TweenAnim_Scale.prototype, "initFrom", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Scale.prototype, "from", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Scale.prototype, "target", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Scale.prototype, "dur", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Scale.prototype, "delay", void 0);
    __decorate([
        property(cc.Integer)
    ], TweenAnim_Scale.prototype, "repeate", void 0);
    __decorate([
        property(cc.Boolean)
    ], TweenAnim_Scale.prototype, "yoyo", void 0);
    __decorate([
        property(cc.String)
    ], TweenAnim_Scale.prototype, "toEase", void 0);
    __decorate([
        property(cc.String)
    ], TweenAnim_Scale.prototype, "reverseEase", void 0);
    TweenAnim_Scale = __decorate([
        ccclass
    ], TweenAnim_Scale);
    return TweenAnim_Scale;
}(PlayOppBaseComponent_1.default));
exports.default = TweenAnim_Scale;

cc._RF.pop();