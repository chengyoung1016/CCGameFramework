"use strict";
cc._RF.push(module, 'e21edgF2VlHrbxoi3G0xZHD', 'Auto_loadingController');
// script/autoui/common/Auto_loadingController.ts

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
var ccclass = cc._decorator.ccclass;
var Auto_loadingController = /** @class */ (function (_super) {
    __extends(Auto_loadingController, _super);
    function Auto_loadingController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Auto_loadingController.prototype.onLoad = function () {
        this.loadingController = this.node;
        this.bg = this.loadingController.getChildByName("bg");
        this.loadingSprite = this.loadingController.getChildByName("loadingSprite");
    };
    Auto_loadingController.URL = "db://assets/resources/prefab/common/loadingController.prefab";
    Auto_loadingController = __decorate([
        ccclass
    ], Auto_loadingController);
    return Auto_loadingController;
}(cc.Component));
exports.default = Auto_loadingController;

cc._RF.pop();