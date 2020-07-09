"use strict";
cc._RF.push(module, '96640Aj+u9JFoOE0RHvspEW', 'TweenAnim_HandClick');
// script/framework/tween/TweenAnim_HandClick.ts

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
var ToolsUseful_1 = require("../utils/ToolsUseful");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TweenAnim_HandClick = /** @class */ (function (_super) {
    __extends(TweenAnim_HandClick, _super);
    function TweenAnim_HandClick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetPos = null;
        _this.targetScale = 0.5;
        _this.dur = 1;
        _this.repeat = -1;
        return _this;
    }
    TweenAnim_HandClick.prototype.Excute = function () {
        var posSrc = this.node.position;
        var targetPos = ToolsUseful_1.default.LocalPositionToNode(this.node, this.targetPos);
        var tween = cc.tween(this.node);
        var repeatTween = tween.to(this.dur, {
            position: this.targetPos.position,
            scale: this.targetScale
        }, { easing: "sineIn" })
            .to(this.dur, {
            position: posSrc,
            scale: 1,
        }, { easing: "sineOut" });
        if (this.repeat < 0) {
            this.repeat = Number.MAX_SAFE_INTEGER;
        }
        tween.repeat(this.repeat, repeatTween);
        tween.start();
    };
    __decorate([
        property(cc.Node)
    ], TweenAnim_HandClick.prototype, "targetPos", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_HandClick.prototype, "targetScale", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_HandClick.prototype, "dur", void 0);
    __decorate([
        property(cc.Integer)
    ], TweenAnim_HandClick.prototype, "repeat", void 0);
    TweenAnim_HandClick = __decorate([
        ccclass
    ], TweenAnim_HandClick);
    return TweenAnim_HandClick;
}(PlayOppBaseComponent_1.default));
exports.default = TweenAnim_HandClick;

cc._RF.pop();