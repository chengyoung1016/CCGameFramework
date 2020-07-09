
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ui/scene/UIMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9250BWJiNExoMB9OZSQ5R+', 'UIMain');
// script/ui/scene/UIMain.ts

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
var Auto_Main_1 = require("../../autoui/scene/Auto_Main");
var UIFrame_1 = require("../../framework/ui/UIFrame");
var UIModule_1 = require("../../framework/ui/UIModule");
var UILoadingController_1 = require("../common/UILoadingController");
var _a = cc._decorator, ccclass = _a.ccclass, menu = _a.menu, property = _a.property;
var UIMain = /** @class */ (function (_super) {
    __extends(UIMain, _super);
    function UIMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui = null;
        return _this;
    }
    UIMain.prototype.onLoad = function () {
        this.ui = this.node.addComponent(Auto_Main_1.default);
    };
    UIMain.prototype.start = function () {
        UIModule_1.default.getInstance().OpenWindow(UILoadingController_1.default);
        this.scheduleOnce(function () {
            UIModule_1.default.getInstance().DestroyWindow(UILoadingController_1.default);
            // UIModule.getInstance().DestroyAllWindow();
        }, 4);
    };
    UIMain.prototype.onEnable = function () {
    };
    UIMain.prototype.update = function () {
    };
    UIMain.prototype.onDisable = function () {
    };
    UIMain.prototype.onDestroy = function () {
    };
    UIMain.prefabUrl = "";
    UIMain.className = "UIMain";
    UIMain = __decorate([
        ccclass,
        menu("UI/scene/UIMain")
    ], UIMain);
    return UIMain;
}(UIFrame_1.default));
exports.default = UIMain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdWkvc2NlbmUvVUlNYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCxzREFBaUQ7QUFDakQsd0RBQW1EO0FBQ25ELHFFQUFnRTtBQUUxRCxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUlsRDtJQUFvQywwQkFBTztJQUEzQztRQUFBLHFFQWlDQztRQWhDQSxRQUFFLEdBQWMsSUFBSSxDQUFDOztJQWdDdEIsQ0FBQztJQTNCQSx1QkFBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHNCQUFLLEdBQUw7UUFDQyxrQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyw2QkFBbUIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDakIsa0JBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUMsNkJBQW1CLENBQUMsQ0FBQztZQUMxRCw2Q0FBNkM7UUFDOUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlCQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsdUJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCwwQkFBUyxHQUFUO0lBRUEsQ0FBQztJQUVELDBCQUFTLEdBQVQ7SUFFQSxDQUFDO0lBN0JnQixnQkFBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLGdCQUFTLEdBQUcsUUFBUSxDQUFDO0lBSmxCLE1BQU07UUFGMUIsT0FBTztRQUNQLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztPQUNILE1BQU0sQ0FpQzFCO0lBQUQsYUFBQztDQWpDRCxBQWlDQyxDQWpDbUMsaUJBQU8sR0FpQzFDO2tCQWpDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRvX01haW4gZnJvbSBcIi4uLy4uL2F1dG91aS9zY2VuZS9BdXRvX01haW5cIjtcbmltcG9ydCBVSUZyYW1lIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdWkvVUlGcmFtZVwiO1xuaW1wb3J0IFVJTW9kdWxlIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdWkvVUlNb2R1bGVcIjtcbmltcG9ydCBVSUxvYWRpbmdDb250cm9sbGVyIGZyb20gXCIuLi9jb21tb24vVUlMb2FkaW5nQ29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIG1lbnUsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuQG1lbnUoXCJVSS9zY2VuZS9VSU1haW5cIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTWFpbiBleHRlbmRzIFVJRnJhbWUge1xuXHR1aTogQXV0b19NYWluID0gbnVsbDtcblxuXHRwcm90ZWN0ZWQgc3RhdGljIHByZWZhYlVybCA9IFwiXCI7XG5cdHByb3RlY3RlZCBzdGF0aWMgY2xhc3NOYW1lID0gXCJVSU1haW5cIjtcblxuXHRvbkxvYWQoKSB7XG5cdFx0dGhpcy51aSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoQXV0b19NYWluKTtcblx0fVxuXG5cdHN0YXJ0KCkge1xuXHRcdFVJTW9kdWxlLmdldEluc3RhbmNlKCkuT3BlbldpbmRvdyhVSUxvYWRpbmdDb250cm9sbGVyKTtcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG5cdFx0XHRVSU1vZHVsZS5nZXRJbnN0YW5jZSgpLkRlc3Ryb3lXaW5kb3coVUlMb2FkaW5nQ29udHJvbGxlcik7XG5cdFx0XHQvLyBVSU1vZHVsZS5nZXRJbnN0YW5jZSgpLkRlc3Ryb3lBbGxXaW5kb3coKTtcblx0XHR9LCA0KTtcblx0fVxuXG5cdG9uRW5hYmxlKCkge1xuXG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cblx0fVxuXG5cdG9uRGlzYWJsZSgpIHtcblxuXHR9XG5cblx0b25EZXN0cm95KCkge1xuXHRcdFxuXHR9XG59Il19