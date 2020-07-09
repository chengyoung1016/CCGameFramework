"use strict";
cc._RF.push(module, '571b2zft05GAJPPYbPmeVLI', 'TweenAnim_Alpha');
// script/framework/tween/TweenAnim_Alpha.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TweenAnim_Wave = /** @class */ (function (_super) {
    __extends(TweenAnim_Wave, _super);
    function TweenAnim_Wave() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startAlpha = 1;
        _this.goalAlhpa = 0;
        _this.delay = 0;
        _this.dur = 1;
        _this.repeate = 0;
        _this.isReverse = true;
        return _this;
    }
    TweenAnim_Wave.prototype.Excute = function () {
        var _this = this;
        this.scheduleOnce(function () {
            var tween = cc.tween(_this.node).to(_this.dur, { opacity: _this.goalAlhpa * 255 });
            _this.node.opacity = 255 * _this.startAlpha;
            // let item = tween.to(this.dur, {opacity: this.goalAlhpa * 255})
            //                 .to(this.dur, {opacity : this.startAlpha * 255});
            //需要reverse一遍
            var item;
            if (_this.isReverse) {
                item = tween.to(_this.dur, { opacity: _this.startAlpha * 255 });
            }
            else {
                item = tween;
            }
            if (_this.repeate < 0) {
                _this.repeate = Number.MAX_SAFE_INTEGER;
            }
            tween.repeat(_this.repeate, item);
            tween.start();
        }, this.delay);
    };
    __decorate([
        property(cc.Float)
    ], TweenAnim_Wave.prototype, "startAlpha", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Wave.prototype, "goalAlhpa", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Wave.prototype, "delay", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Wave.prototype, "dur", void 0);
    __decorate([
        property(cc.Integer)
    ], TweenAnim_Wave.prototype, "repeate", void 0);
    __decorate([
        property(cc.Boolean)
    ], TweenAnim_Wave.prototype, "isReverse", void 0);
    TweenAnim_Wave = __decorate([
        ccclass
    ], TweenAnim_Wave);
    return TweenAnim_Wave;
}(PlayOppBaseComponent_1.default));
exports.default = TweenAnim_Wave;

cc._RF.pop();