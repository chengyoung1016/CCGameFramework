"use strict";
cc._RF.push(module, 'aad74U57mlHnLiHKX5REbXC', 'PoolableComponent');
// script/framework/pool/PoolableComponent.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PoolableComponent = /** @class */ (function (_super) {
    __extends(PoolableComponent, _super);
    function PoolableComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PoolID = "非常重要需要唯一";
        _this.preloadCount = 0;
        _this._myPool = null;
        // 标记是否是通过池子创建的
        _this._createdWithPoolController = false;
        return _this;
    }
    PoolableComponent.prototype.unuse = function () {
        // this.node.emit("OnPutToPool");
        // TKLog.LogInfo("unuse:" + this.name);
    };
    PoolableComponent.prototype.reuse = function () {
        // this.node.emit("OnGetFromPool")
        // TKLog.LogInfo("reuse:" + this.name);
    };
    __decorate([
        property(cc.String)
    ], PoolableComponent.prototype, "PoolID", void 0);
    __decorate([
        property(cc.Integer)
    ], PoolableComponent.prototype, "preloadCount", void 0);
    PoolableComponent = __decorate([
        ccclass
    ], PoolableComponent);
    return PoolableComponent;
}(cc.Component));
exports.default = PoolableComponent;

cc._RF.pop();