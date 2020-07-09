"use strict";
cc._RF.push(module, '7faa0omo39ICIqtKnOgD0Sp', 'UIRoot');
// script/framework/ui/UIRoot.ts

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
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIRoot = /** @class */ (function (_super) {
    __extends(UIRoot, _super);
    function UIRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pannelRoot = null;
        _this.uiCam = null;
        _this._lstPannel = [];
        return _this;
    }
    UIRoot_1 = UIRoot;
    UIRoot.getInstance = function () {
        return this._instance;
    };
    UIRoot.prototype.onLoad = function () {
        // TKLog.LogInfo("UIRoot.onLoad");
        if (UIRoot_1._instance == null) {
            UIRoot_1._instance = this;
        }
        else {
            // TKLog.LogWarn("有多余的UIRoot,删除这个");
            this.destroy();
            return;
        }
        this._lstPannel = [];
        var pannels = this.pannelRoot.getComponentsInChildren("UIPannel");
        for (var index = 0; index < pannels.length; index++) {
            var element = pannels[index];
            this._lstPannel.push(element);
        }
        this._lstPannel.sort(function (p1, p2) {
            var index1 = p1.node.getSiblingIndex();
            var index2 = p2.node.getSiblingIndex();
            return (index1 == index2) ? 0 : (index1 > index2 ? 1 : -1);
        });
        TKLog_1.default.LogInfo("UIRoot.onLoad pannel数量为:" + this._lstPannel.length);
        //把该节点设置为常驻节点
        // cc.game.addPersistRootNode(this.node);
    };
    UIRoot.prototype.start = function () {
        // this._lstPannel.forEach(pannel=>{
        //     TKLog.LogInfo("pannel:" + pannel.name);
        // })
    };
    UIRoot.prototype.onDestroy = function () {
        UIRoot_1._instance = null;
    };
    /**
     * 获取指定索引的Pannel
     * @param index 索引
     */
    UIRoot.prototype.GetPannel = function (index) {
        if (index < 0 || index >= this._lstPannel.length) {
            return null;
        }
        return this._lstPannel[index];
    };
    var UIRoot_1;
    UIRoot._instance = null;
    __decorate([
        property(cc.Node)
    ], UIRoot.prototype, "pannelRoot", void 0);
    __decorate([
        property(cc.Camera)
    ], UIRoot.prototype, "uiCam", void 0);
    UIRoot = UIRoot_1 = __decorate([
        ccclass
    ], UIRoot);
    return UIRoot;
}(cc.Component));
exports.default = UIRoot;

cc._RF.pop();