
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/tween/TweenAnim_MoveToTarget.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3R3ZWVuL1R3ZWVuQW5pbV9Nb3ZlVG9UYXJnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWlFO0FBQ2pFLG9EQUErQztBQUV6QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvRCwwQ0FBb0I7SUFBeEU7UUFBQSxxRUFlQztRQWJHLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsU0FBRyxHQUFHLENBQUMsQ0FBQztRQUdSLFdBQUssR0FBRyxDQUFDLENBQUM7O0lBT2QsQ0FBQztJQUxHLHVDQUFNLEdBQU47UUFDSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLFNBQVMsR0FBRyxxQkFBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEUsQ0FBQztJQVpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDWDtJQUdSO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ1Q7SUFSTyxzQkFBc0I7UUFEMUMsT0FBTztPQUNhLHNCQUFzQixDQWUxQztJQUFELDZCQUFDO0NBZkQsQUFlQyxDQWZtRCw4QkFBb0IsR0FldkU7a0JBZm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5T3BwQmFzZUNvbXBvbmVudCBmcm9tIFwiLi4vdXRpbHMvUGxheU9wcEJhc2VDb21wb25lbnRcIjtcbmltcG9ydCBUb29sc1VzZWZ1bCBmcm9tIFwiLi4vdXRpbHMvVG9vbHNVc2VmdWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VlbkFuaW1fTW92ZVRvVGFyZ2V0IGV4dGVuZHMgUGxheU9wcEJhc2VDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldCA6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIGR1ciA9IDE7XG5cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgZGVsYXkgPSAxO1xuXG4gICAgRXhjdXRlKCl7XG4gICAgICAgIGxldCB0d2VlbiA9IGNjLnR3ZWVuKHRoaXMubm9kZSk7XG4gICAgICAgIGxldCB0YXJnZXRQb3MgPSBUb29sc1VzZWZ1bC5Mb2NhbFBvc2l0aW9uVG9Ob2RlKHRoaXMubm9kZSwgdGhpcy50YXJnZXQpO1xuICAgICAgICB0d2Vlbi5kZWxheSh0aGlzLmRlbGF5KS50byh0aGlzLmR1ciwge3Bvc2l0aW9uOiB0YXJnZXRQb3N9KS5zdGFydCgpO1xuICAgIH1cbn1cbiJdfQ==