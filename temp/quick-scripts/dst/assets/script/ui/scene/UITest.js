
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ui/scene/UITest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '175975p5XNEvJxWU6aPXMmL', 'UITest');
// script/ui/scene/UITest.ts

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
var Auto_Test_1 = require("../../autoui/scene/Auto_Test");
var UIFrame_1 = require("../../framework/ui/UIFrame");
var _a = cc._decorator, ccclass = _a.ccclass, menu = _a.menu, property = _a.property;
var UITest = /** @class */ (function (_super) {
    __extends(UITest, _super);
    function UITest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui = null;
        return _this;
    }
    UITest.prototype.onLoad = function () {
        this.ui = this.node.addComponent(Auto_Test_1.default);
    };
    UITest.prototype.start = function () {
    };
    UITest.prototype.onEnable = function () {
    };
    UITest.prototype.update = function () {
    };
    UITest.prototype.onDisable = function () {
    };
    UITest.prototype.onDestroy = function () {
    };
    UITest.prefabUrl = "";
    UITest.className = "UITest";
    UITest = __decorate([
        ccclass,
        menu("UI/scene/UITest")
    ], UITest);
    return UITest;
}(UIFrame_1.default));
exports.default = UITest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdWkvc2NlbmUvVUlUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCxzREFBaUQ7QUFFM0MsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJbEQ7SUFBb0MsMEJBQU87SUFBM0M7UUFBQSxxRUE2QkM7UUE1QkEsUUFBRSxHQUFjLElBQUksQ0FBQzs7SUE0QnRCLENBQUM7SUF2QkEsdUJBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsdUJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCwwQkFBUyxHQUFUO0lBRUEsQ0FBQztJQUVELDBCQUFTLEdBQVQ7SUFFQSxDQUFDO0lBekJnQixnQkFBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLGdCQUFTLEdBQUcsUUFBUSxDQUFDO0lBSmxCLE1BQU07UUFGMUIsT0FBTztRQUNQLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztPQUNILE1BQU0sQ0E2QjFCO0lBQUQsYUFBQztDQTdCRCxBQTZCQyxDQTdCbUMsaUJBQU8sR0E2QjFDO2tCQTdCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRvX1Rlc3QgZnJvbSBcIi4uLy4uL2F1dG91aS9zY2VuZS9BdXRvX1Rlc3RcIjtcbmltcG9ydCBVSUZyYW1lIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdWkvVUlGcmFtZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIG1lbnUsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuQG1lbnUoXCJVSS9zY2VuZS9VSVRlc3RcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJVGVzdCBleHRlbmRzIFVJRnJhbWUge1xuXHR1aTogQXV0b19UZXN0ID0gbnVsbDtcblxuXHRwcm90ZWN0ZWQgc3RhdGljIHByZWZhYlVybCA9IFwiXCI7XG5cdHByb3RlY3RlZCBzdGF0aWMgY2xhc3NOYW1lID0gXCJVSVRlc3RcIjtcblxuXHRvbkxvYWQoKSB7XG5cdFx0dGhpcy51aSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoQXV0b19UZXN0KTtcblx0fVxuXG5cdHN0YXJ0KCkge1xuXHRcdFxuXHR9XG5cblx0b25FbmFibGUoKSB7XG5cblx0fVxuXG5cdHVwZGF0ZSgpIHtcblxuXHR9XG5cblx0b25EaXNhYmxlKCkge1xuXG5cdH1cblxuXHRvbkRlc3Ryb3koKSB7XG5cdFx0XG5cdH1cbn0iXX0=