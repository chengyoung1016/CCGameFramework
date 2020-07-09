"use strict";
cc._RF.push(module, '697a8xf5v1Hm4zBfIqLtZaz', 'UIFrame');
// script/framework/ui/UIFrame.ts

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
var TKLog_1 = require("../log/TKLog");
var UIModule_1 = require("./UIModule");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PREFAB_UI_DIR = "prefab/";
var UIFrame = /** @class */ (function (_super) {
    __extends(UIFrame, _super);
    function UIFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 所在pannel的索引，从0开始，如果超出UIRoot的pannel范围，则用0号索引
        _this.PannelIndex = 0;
        _this.UITemplateName = "";
        _this.UIName = "";
        return _this;
    }
    /**
     * 获取prefab路径，相对于resources目录
     */
    UIFrame.getUrl = function () {
        return PREFAB_UI_DIR + this.prefabUrl;
    };
    /**
     * 获取类名，用于给UI命名
     */
    UIFrame.getName = function () {
        return this.className;
    };
    /**
     * 初始化，会在加载完成后调用
     * 只会调用一次
     */
    UIFrame.prototype.OnInit = function () {
        // TKLog.LogInfo("UIFrame OnInit");
    };
    /**
     * 在实际打开之前先执行
     * @param doOpen 在打开之前先执行一些不可告人的事情
     * @param openArgs 参数
     */
    UIFrame.prototype.BeforeOpen = function (doOpen) {
        var openArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            openArgs[_i - 1] = arguments[_i];
        }
        // TKLog.LogInfo("UIFrame BeforeOpen");
        if (doOpen != null) {
            doOpen();
        }
    };
    /**
     * 在打开窗口时显示
     * @param args 参数
     */
    UIFrame.prototype.OnOpen = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    /**
     * 在关闭窗口时执行
     */
    UIFrame.prototype.OnClose = function () {
        TKLog_1.default.LogInfo("UIFrame OnClose");
    };
    UIFrame.prototype.OpenWindow = function (uiClass) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        UIModule_1.default.getInstance().OpenWindow(uiClass, args);
    };
    UIFrame.prototype.CloseWindow = function (uiClass) {
        //UIModule.getInstance().CloseWindow(uiName.length == 0 ? this.UIName : uiName);
        UIModule_1.default.getInstance().CloseWindow(uiClass);
    };
    __decorate([
        property(cc.Integer)
    ], UIFrame.prototype, "PannelIndex", void 0);
    UIFrame = __decorate([
        ccclass
    ], UIFrame);
    return UIFrame;
}(cc.Component));
exports.default = UIFrame;

cc._RF.pop();