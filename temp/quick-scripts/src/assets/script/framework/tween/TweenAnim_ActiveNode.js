"use strict";
cc._RF.push(module, '6b05bo+TZ5Llq2tnE04k7lK', 'TweenAnim_ActiveNode');
// script/framework/tween/TweenAnim_ActiveNode.ts

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
var TweenAnim_ActiveNode = /** @class */ (function (_super) {
    __extends(TweenAnim_ActiveNode, _super);
    function TweenAnim_ActiveNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delay = 0;
        _this.target = null;
        _this.targetActive = false;
        return _this;
    }
    TweenAnim_ActiveNode.prototype.Excute = function () {
        var _this = this;
        if (this.target == null) {
            return;
        }
        this.scheduleOnce(function () {
            _this.target.active = _this.targetActive;
        }, this.delay);
    };
    __decorate([
        property(cc.Float)
    ], TweenAnim_ActiveNode.prototype, "delay", void 0);
    __decorate([
        property(cc.Node)
    ], TweenAnim_ActiveNode.prototype, "target", void 0);
    __decorate([
        property(cc.Boolean)
    ], TweenAnim_ActiveNode.prototype, "targetActive", void 0);
    TweenAnim_ActiveNode = __decorate([
        ccclass
    ], TweenAnim_ActiveNode);
    return TweenAnim_ActiveNode;
}(PlayOppBaseComponent_1.default));
exports.default = TweenAnim_ActiveNode;

cc._RF.pop();