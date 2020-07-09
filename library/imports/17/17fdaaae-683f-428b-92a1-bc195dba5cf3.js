"use strict";
cc._RF.push(module, '17fdaquaD9Ci5KhvBldulzz', 'TweenAnim_MoveToTarget');
// script/framework/tween/TweenAnim_MoveToTarget.ts

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
var TweenAnim_MoveToTarget = /** @class */ (function (_super) {
    __extends(TweenAnim_MoveToTarget, _super);
    function TweenAnim_MoveToTarget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.dur = 1;
        _this.delay = 1;
        return _this;
    }
    TweenAnim_MoveToTarget.prototype.Excute = function () {
        var tween = cc.tween(this.node);
        var targetPos = ToolsUseful_1.default.LocalPositionToNode(this.node, this.target);
        tween.delay(this.delay).to(this.dur, { position: targetPos }).start();
    };
    __decorate([
        property(cc.Node)
    ], TweenAnim_MoveToTarget.prototype, "target", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_MoveToTarget.prototype, "dur", void 0);
    __decorate([
        property(cc.Float)
    ], TweenAnim_MoveToTarget.prototype, "delay", void 0);
    TweenAnim_MoveToTarget = __decorate([
        ccclass
    ], TweenAnim_MoveToTarget);
    return TweenAnim_MoveToTarget;
}(PlayOppBaseComponent_1.default));
exports.default = TweenAnim_MoveToTarget;

cc._RF.pop();