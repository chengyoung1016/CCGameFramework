"use strict";
cc._RF.push(module, '1ea02YIsppDUqNeIAvHnbpz', 'TweenAnim_Rotate');
// script/framework/tween/TweenAnim_Rotate.ts

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
var TweenAnim_Rotate = /** @class */ (function (_super) {
    __extends(TweenAnim_Rotate, _super);
    function TweenAnim_Rotate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 开始前延迟（秒），对永久执行的动作无效
        _this.delay = 0;
        // 执行一次的时间（秒）
        _this.duration = 1;
        // 改变角度
        _this.angle = 1;
        // 循环次数，-1为一直循环
        _this.repeate = 1;
        // 是to还是by
        _this.isTo = false;
        return _this;
    }
    TweenAnim_Rotate.prototype.Excute = function () {
        _super.prototype.Excute.call(this);
        // TKLog.LogInfo("TweenRotate:" + this.delay + "," + this.duration + "," + this.angle + "," + this.repeate + "," + this.isTo)
        var tween = cc.tween(this.node);
        if (this.repeate < 0) {
            this.repeate = Number.MAX_SAFE_INTEGER;
        }
        else {
            tween = tween.delay(this.delay);
        }
        // tween = tween.repeat(this.repeate);
        if (this.isTo) {
            tween = tween.to(this.duration, { angle: this.angle });
        }
        else {
            tween = tween.by(this.duration, { angle: this.angle });
        }
        tween = tween.repeat(this.repeate).start();
    };
    __decorate([
        property(cc.Float)
    ], TweenAnim_Rotate.prototype, "delay", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Rotate.prototype, "duration", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_Rotate.prototype, "angle", void 0);
    __decorate([
        property(cc.Integer)
    ], TweenAnim_Rotate.prototype, "repeate", void 0);
    __decorate([
        property(cc.Boolean)
    ], TweenAnim_Rotate.prototype, "isTo", void 0);
    TweenAnim_Rotate = __decorate([
        ccclass
    ], TweenAnim_Rotate);
    return TweenAnim_Rotate;
}(PlayOppBaseComponent_1.default));
exports.default = TweenAnim_Rotate;

cc._RF.pop();