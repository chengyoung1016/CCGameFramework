
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ui/common/UILoadingController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36bc617ndJFAIT1tekDU8Sy', 'UILoadingController');
// script/ui/common/UILoadingController.ts

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
var Auto_loadingController_1 = require("../../autoui/common/Auto_loadingController");
var UIFrame_1 = require("../../framework/ui/UIFrame");
var _a = cc._decorator, ccclass = _a.ccclass, menu = _a.menu, property = _a.property;
var UILoadingController = /** @class */ (function (_super) {
    __extends(UILoadingController, _super);
    function UILoadingController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui = null;
        return _this;
    }
    UILoadingController.prototype.onLoad = function () {
        this.ui = this.node.addComponent(Auto_loadingController_1.default);
    };
    UILoadingController.prototype.start = function () {
    };
    UILoadingController.prototype.onEnable = function () {
        this.show();
    };
    UILoadingController.prototype.show = function () {
        var _this = this;
        this.node.active = true;
        //背景从透明边半透明
        this.ui.bg.stopAllActions();
        this.ui.bg.opacity = 0;
        this.ui.bg.runAction(cc.fadeTo(0.24, 180));
        //一直旋转
        this.ui.loadingSprite.stopAllActions();
        cc.tween(this.ui.loadingSprite)
            .by(1, { angle: -360 })
            .repeatForever()
            .start();
        this.scheduleOnce(function () {
            _this.node.active = false;
        }, 10);
    };
    UILoadingController.prototype.hide = function () {
        var _this = this;
        // 背景从半透明变透明，之后隐藏节点
        this.ui.bg.stopAllActions();
        this.ui.bg.runAction(cc.sequence(cc.fadeTo(0.24, 0), cc.callFunc(function () {
            _this.node.active = false;
        })));
        //停止旋转
        this.ui.loadingSprite.stopAllActions();
    };
    UILoadingController.prototype.update = function () {
    };
    UILoadingController.prototype.onDisable = function () {
    };
    UILoadingController.prototype.onDestroy = function () {
    };
    UILoadingController.prefabUrl = "common/loadingController";
    UILoadingController.className = "UILoadingController";
    UILoadingController = __decorate([
        ccclass,
        menu("UI/common/UILoadingController")
    ], UILoadingController);
    return UILoadingController;
}(UIFrame_1.default));
exports.default = UILoadingController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdWkvY29tbW9uL1VJTG9hZGluZ0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQWdGO0FBQ2hGLHNEQUFpRDtBQUUzQyxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUlsRDtJQUFpRCx1Q0FBTztJQUF4RDtRQUFBLHFFQWdFQztRQS9EQSxRQUFFLEdBQTJCLElBQUksQ0FBQzs7SUErRG5DLENBQUM7SUExREEsb0NBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0NBQXNCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsbUNBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELGtDQUFJLEdBQUo7UUFBQSxpQkFrQkM7UUFqQkEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXhCLFdBQVc7UUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTNDLE1BQU07UUFDTixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQzdCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUMsQ0FBQzthQUNwQixhQUFhLEVBQUU7YUFDZixLQUFLLEVBQUUsQ0FBQTtRQUVULElBQUksQ0FBQyxZQUFZLENBQUM7WUFDakIsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNQLENBQUM7SUFFRCxrQ0FBSSxHQUFKO1FBQUEsaUJBYUM7UUFaQSxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUNuQixFQUFFLENBQUMsUUFBUSxDQUNWLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUNsQixFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1gsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUNGLENBQ0QsQ0FBQztRQUNGLE1BQU07UUFDTixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsb0NBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCx1Q0FBUyxHQUFUO0lBRUEsQ0FBQztJQUVELHVDQUFTLEdBQVQ7SUFFQSxDQUFDO0lBNURnQiw2QkFBUyxHQUFHLDBCQUEwQixDQUFDO0lBQ3ZDLDZCQUFTLEdBQUcscUJBQXFCLENBQUM7SUFKL0IsbUJBQW1CO1FBRnZDLE9BQU87UUFDUCxJQUFJLENBQUMsK0JBQStCLENBQUM7T0FDakIsbUJBQW1CLENBZ0V2QztJQUFELDBCQUFDO0NBaEVELEFBZ0VDLENBaEVnRCxpQkFBTyxHQWdFdkQ7a0JBaEVvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0b19sb2FkaW5nQ29udHJvbGxlciBmcm9tIFwiLi4vLi4vYXV0b3VpL2NvbW1vbi9BdXRvX2xvYWRpbmdDb250cm9sbGVyXCI7XG5pbXBvcnQgVUlGcmFtZSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3VpL1VJRnJhbWVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBtZW51LCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbkBtZW51KFwiVUkvY29tbW9uL1VJTG9hZGluZ0NvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTG9hZGluZ0NvbnRyb2xsZXIgZXh0ZW5kcyBVSUZyYW1lIHtcblx0dWk6IEF1dG9fbG9hZGluZ0NvbnRyb2xsZXIgPSBudWxsO1xuXG5cdHByb3RlY3RlZCBzdGF0aWMgcHJlZmFiVXJsID0gXCJjb21tb24vbG9hZGluZ0NvbnRyb2xsZXJcIjtcblx0cHJvdGVjdGVkIHN0YXRpYyBjbGFzc05hbWUgPSBcIlVJTG9hZGluZ0NvbnRyb2xsZXJcIjtcblxuXHRvbkxvYWQoKSB7XG5cdFx0dGhpcy51aSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoQXV0b19sb2FkaW5nQ29udHJvbGxlcik7XG5cdH1cblxuXHRzdGFydCgpIHtcblxuXHR9XG5cblx0b25FbmFibGUoKSB7XG5cdFx0dGhpcy5zaG93KCk7XG5cdH1cblxuXHRzaG93KCkge1xuXHRcdHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG5cdFx0Ly/og4zmma/ku47pgI/mmI7ovrnljYrpgI/mmI5cblx0XHR0aGlzLnVpLmJnLnN0b3BBbGxBY3Rpb25zKCk7XG5cdFx0dGhpcy51aS5iZy5vcGFjaXR5ID0gMDtcblx0XHR0aGlzLnVpLmJnLnJ1bkFjdGlvbihjYy5mYWRlVG8oMC4yNCwgMTgwKSk7XG5cblx0XHQvL+S4gOebtOaXi+i9rFxuXHRcdHRoaXMudWkubG9hZGluZ1Nwcml0ZS5zdG9wQWxsQWN0aW9ucygpO1xuXHRcdGNjLnR3ZWVuKHRoaXMudWkubG9hZGluZ1Nwcml0ZSlcblx0XHRcdC5ieSgxLCB7YW5nbGU6IC0zNjB9KVxuXHRcdFx0LnJlcGVhdEZvcmV2ZXIoKVxuXHRcdFx0LnN0YXJ0KClcblxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcblx0XHRcdHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcblx0XHR9LCAxMClcblx0fVxuXG5cdGhpZGUoKSB7XG5cdFx0Ly8g6IOM5pmv5LuO5Y2K6YCP5piO5Y+Y6YCP5piO77yM5LmL5ZCO6ZqQ6JeP6IqC54K5XG5cdFx0dGhpcy51aS5iZy5zdG9wQWxsQWN0aW9ucygpO1xuXHRcdHRoaXMudWkuYmcucnVuQWN0aW9uKFxuXHRcdFx0Y2Muc2VxdWVuY2UoXG5cdFx0XHRcdGNjLmZhZGVUbygwLjI0LCAwKSxcblx0XHRcdFx0Y2MuY2FsbEZ1bmMoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHQpO1xuXHRcdC8v5YGc5q2i5peL6L2sXG5cdFx0dGhpcy51aS5sb2FkaW5nU3ByaXRlLnN0b3BBbGxBY3Rpb25zKCk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cblx0fVxuXG5cdG9uRGlzYWJsZSgpIHtcblxuXHR9XG5cblx0b25EZXN0cm95KCkge1xuXHRcdFxuXHR9XG59Il19