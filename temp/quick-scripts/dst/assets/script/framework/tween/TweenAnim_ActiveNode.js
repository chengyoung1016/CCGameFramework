
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/tween/TweenAnim_ActiveNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3R3ZWVuL1R3ZWVuQW5pbV9BY3RpdmVOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUFpRTtBQUczRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrRCx3Q0FBb0I7SUFBdEU7UUFBQSxxRUFrQkM7UUFoQkcsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUdWLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsa0JBQVksR0FBRyxLQUFLLENBQUM7O0lBVXpCLENBQUM7SUFSRyxxQ0FBTSxHQUFOO1FBQUEsaUJBT0M7UUFORyxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFDO1lBQ25CLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQWZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ1Q7SUFHVjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7OERBQ0E7SUFSSixvQkFBb0I7UUFEeEMsT0FBTztPQUNhLG9CQUFvQixDQWtCeEM7SUFBRCwyQkFBQztDQWxCRCxBQWtCQyxDQWxCaUQsOEJBQW9CLEdBa0JyRTtrQkFsQm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5T3BwQmFzZUNvbXBvbmVudCBmcm9tIFwiLi4vdXRpbHMvUGxheU9wcEJhc2VDb21wb25lbnRcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuQW5pbV9BY3RpdmVOb2RlIGV4dGVuZHMgUGxheU9wcEJhc2VDb21wb25lbnR7XG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIGRlbGF5ID0gMDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldCA6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gICAgdGFyZ2V0QWN0aXZlID0gZmFsc2U7XG5cbiAgICBFeGN1dGUoKXtcbiAgICAgICAgaWYodGhpcy50YXJnZXQgPT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmFjdGl2ZSA9IHRoaXMudGFyZ2V0QWN0aXZlO1xuICAgICAgICB9LCB0aGlzLmRlbGF5KTtcbiAgICB9XG59Il19