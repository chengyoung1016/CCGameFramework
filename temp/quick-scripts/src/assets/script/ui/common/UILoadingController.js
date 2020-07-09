"use strict";
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