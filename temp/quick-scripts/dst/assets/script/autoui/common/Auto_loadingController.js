
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/autoui/common/Auto_loadingController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYXV0b3VpL2NvbW1vbi9BdXRvX2xvYWRpbmdDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQW9ELDBDQUFZO0lBQWhFOztJQWFBLENBQUM7SUFORyx1Q0FBTSxHQUFOO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7UUFDbEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUUxRSxDQUFDO0lBUFUsMEJBQUcsR0FBVSw4REFBOEQsQ0FBQTtJQUxyRSxzQkFBc0I7UUFEMUMsT0FBTztPQUNhLHNCQUFzQixDQWExQztJQUFELDZCQUFDO0NBYkQsQUFhQyxDQWJtRCxFQUFFLENBQUMsU0FBUyxHQWEvRDtrQkFib0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b19sb2FkaW5nQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cdGxvYWRpbmdDb250cm9sbGVyOiBjYy5Ob2RlO1xuXHRiZzogY2MuTm9kZTtcblx0bG9hZGluZ1Nwcml0ZTogY2MuTm9kZTtcblxuXHRwdWJsaWMgc3RhdGljIFVSTDpzdHJpbmcgPSBcImRiOi8vYXNzZXRzL3Jlc291cmNlcy9wcmVmYWIvY29tbW9uL2xvYWRpbmdDb250cm9sbGVyLnByZWZhYlwiXG5cbiAgICBvbkxvYWQgKCkge1xuXHRcdHRoaXMubG9hZGluZ0NvbnRyb2xsZXIgPSB0aGlzLm5vZGVcblx0XHR0aGlzLmJnID0gdGhpcy5sb2FkaW5nQ29udHJvbGxlci5nZXRDaGlsZEJ5TmFtZShcImJnXCIpO1xuXHRcdHRoaXMubG9hZGluZ1Nwcml0ZSA9IHRoaXMubG9hZGluZ0NvbnRyb2xsZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsb2FkaW5nU3ByaXRlXCIpO1xuXG4gICAgfVxufVxuIl19