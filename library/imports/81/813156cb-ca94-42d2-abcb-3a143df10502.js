"use strict";
cc._RF.push(module, '81315bLypRC0qvLOhQ98QUC', 'TweenAnim_MoveBy');
// script/framework/tween/TweenAnim_MoveBy.ts

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
var TweenAnim_MoveBy = /** @class */ (function (_super) {
    __extends(TweenAnim_MoveBy, _super);
    function TweenAnim_MoveBy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.byDistance = cc.Vec3.ZERO;
        _this.dur = 1;
        _this.delay = 1;
        _this.easing = "sineOut";
        _this.callback = null;
        _this.context = null;
        return _this;
    }
    TweenAnim_MoveBy.prototype.SetCallback = function (callbacks, context) {
        this.callback = callbacks;
        this.context = context;
    };
    TweenAnim_MoveBy.prototype.Excute = function () {
        var _this = this;
        var tween = cc.tween(this.node);
        tween.delay(this.delay).by(this.dur, { position: this.byDistance }, { easing: this.easing }).call(function () {
            if (_this.callback != null && _this.context != null) {
                _this.callback.call(_this.context);
            }
        }).start();
    };
    __decorate([
        property(cc.Vec3)
    ], TweenAnim_MoveBy.prototype, "byDistance", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_MoveBy.prototype, "dur", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_MoveBy.prototype, "delay", void 0);
    __decorate([
        property(cc.String)
    ], TweenAnim_MoveBy.prototype, "easing", void 0);
    TweenAnim_MoveBy = __decorate([
        ccclass
    ], TweenAnim_MoveBy);
    return TweenAnim_MoveBy;
}(PlayOppBaseComponent_1.default));
exports.default = TweenAnim_MoveBy;

cc._RF.pop();