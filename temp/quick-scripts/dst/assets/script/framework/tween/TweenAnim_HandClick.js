
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/tween/TweenAnim_HandClick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3R3ZWVuL1R3ZWVuQW5pbV9IYW5kQ2xpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWlFO0FBQ2pFLG9EQUErQztBQUV6QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpRCx1Q0FBb0I7SUFBckU7UUFBQSxxRUFvQ0M7UUFsQ0csZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixpQkFBVyxHQUFHLEdBQUcsQ0FBQztRQUdsQixTQUFHLEdBQUcsQ0FBQyxDQUFDO1FBR1IsWUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQXlCaEIsQ0FBQztJQXZCRyxvQ0FBTSxHQUFOO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxTQUFTLEdBQUcscUJBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUxRSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQy9CO1lBQ0ksUUFBUSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNoQyxLQUFLLEVBQUMsSUFBSSxDQUFDLFdBQVc7U0FDekIsRUFBQyxFQUFDLE1BQU0sRUFBRyxRQUFRLEVBQUMsQ0FBQzthQUN6QixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLFFBQVEsRUFBRyxNQUFNO1lBQ2pCLEtBQUssRUFBRyxDQUFDO1NBQ1osRUFBQyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFBO1FBRXJCLElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7WUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztTQUN6QztRQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUV2QyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQWhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NERBQ0Q7SUFHbEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDWDtJQUdSO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7dURBQ1Q7SUFYSyxtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQW9DdkM7SUFBRCwwQkFBQztDQXBDRCxBQW9DQyxDQXBDZ0QsOEJBQW9CLEdBb0NwRTtrQkFwQ29CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5T3BwQmFzZUNvbXBvbmVudCBmcm9tIFwiLi4vdXRpbHMvUGxheU9wcEJhc2VDb21wb25lbnRcIjtcbmltcG9ydCBUb29sc1VzZWZ1bCBmcm9tIFwiLi4vdXRpbHMvVG9vbHNVc2VmdWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VlbkFuaW1fSGFuZENsaWNrIGV4dGVuZHMgUGxheU9wcEJhc2VDb21wb25lbnR7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFyZ2V0UG9zIDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgdGFyZ2V0U2NhbGUgPSAwLjU7XG5cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgZHVyID0gMTtcblxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHJlcGVhdCA9IC0xO1xuXG4gICAgRXhjdXRlKCl7XG4gICAgICAgIGxldCBwb3NTcmMgPSB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgICAgIGxldCB0YXJnZXRQb3MgPSBUb29sc1VzZWZ1bC5Mb2NhbFBvc2l0aW9uVG9Ob2RlKHRoaXMubm9kZSx0aGlzLnRhcmdldFBvcyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdHdlZW4gPSBjYy50d2Vlbih0aGlzLm5vZGUpO1xuICAgICAgICBsZXQgcmVwZWF0VHdlZW4gPSB0d2Vlbi50byh0aGlzLmR1ciwgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246dGhpcy50YXJnZXRQb3MucG9zaXRpb24sXG4gICAgICAgICAgICAgICAgc2NhbGU6dGhpcy50YXJnZXRTY2FsZVxuICAgICAgICAgICAgfSx7ZWFzaW5nIDogXCJzaW5lSW5cIn0pXG4gICAgICAgIC50byh0aGlzLmR1ciwge1xuICAgICAgICAgICAgcG9zaXRpb24gOiBwb3NTcmMsXG4gICAgICAgICAgICBzY2FsZSA6IDEsXG4gICAgICAgIH0se2Vhc2luZzpcInNpbmVPdXRcIn0pXG5cbiAgICAgICAgaWYodGhpcy5yZXBlYXQgPCAwKXtcbiAgICAgICAgICAgIHRoaXMucmVwZWF0ID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgICAgIH1cbiAgICAgICAgdHdlZW4ucmVwZWF0KHRoaXMucmVwZWF0LCByZXBlYXRUd2Vlbik7XG4gICAgICAgIFxuICAgICAgICB0d2Vlbi5zdGFydCgpO1xuICAgIH1cblxufSJdfQ==