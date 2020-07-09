
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/tween/TweenAnim_MoveBy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3R3ZWVuL1R3ZWVuQW5pbV9Nb3ZlQnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWlFO0FBRTNELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFvQjtJQUFsRTtRQUFBLHFFQTZCQztRQTNCRyxnQkFBVSxHQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBR3BDLFNBQUcsR0FBRyxDQUFDLENBQUM7UUFHUixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBR1YsWUFBTSxHQUFHLFNBQVMsQ0FBQTtRQUVsQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBQzNCLGFBQU8sR0FBUyxJQUFJLENBQUM7O0lBZXpCLENBQUM7SUFiRyxzQ0FBVyxHQUFYLFVBQVksU0FBb0IsRUFBRSxPQUFhO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQUEsaUJBT0M7UUFORyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNGLElBQUcsS0FBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksS0FBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUM7Z0JBQzdDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwQztRQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQTFCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNrQjtJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNYO0lBR1I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDVDtJQUdWO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ0Y7SUFYRCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQTZCcEM7SUFBRCx1QkFBQztDQTdCRCxBQTZCQyxDQTdCNkMsOEJBQW9CLEdBNkJqRTtrQkE3Qm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5T3BwQmFzZUNvbXBvbmVudCBmcm9tIFwiLi4vdXRpbHMvUGxheU9wcEJhc2VDb21wb25lbnRcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VlbkFuaW1fTW92ZUJ5IGV4dGVuZHMgUGxheU9wcEJhc2VDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5WZWMzKVxuICAgIGJ5RGlzdGFuY2UgOiBjYy5WZWMzID0gY2MuVmVjMy5aRVJPO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIGR1ciA9IDE7XG5cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgZGVsYXkgPSAxO1xuXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBlYXNpbmcgPSBcInNpbmVPdXRcIlxuXG4gICAgY2FsbGJhY2sgOiBGdW5jdGlvbiA9IG51bGw7XG4gICAgY29udGV4dCA6IGFueSA9IG51bGw7XG5cbiAgICBTZXRDYWxsYmFjayhjYWxsYmFja3MgOiBGdW5jdGlvbiwgY29udGV4dCA6IGFueSl7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFja3M7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuXG4gICAgRXhjdXRlKCl7XG4gICAgICAgIGxldCB0d2VlbiA9IGNjLnR3ZWVuKHRoaXMubm9kZSk7XG4gICAgICAgIHR3ZWVuLmRlbGF5KHRoaXMuZGVsYXkpLmJ5KHRoaXMuZHVyLCB7cG9zaXRpb246IHRoaXMuYnlEaXN0YW5jZX0sIHtlYXNpbmcgOiB0aGlzLmVhc2luZ30pLmNhbGwoKCk9PntcbiAgICAgICAgICAgIGlmKHRoaXMuY2FsbGJhY2sgIT0gbnVsbCAmJiB0aGlzLmNvbnRleHQgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjay5jYWxsKHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxufSJdfQ==