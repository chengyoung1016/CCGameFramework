
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/pool/PoolableComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3Bvb2wvUG9vbGFibGVDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFvQkM7UUFsQkcsWUFBTSxHQUFHLFVBQVUsQ0FBQTtRQUVuQixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUVqQixhQUFPLEdBQWdCLElBQUksQ0FBQztRQUU1QixlQUFlO1FBQ2YsZ0NBQTBCLEdBQWEsS0FBSyxDQUFDOztJQVdqRCxDQUFDO0lBVEcsaUNBQUssR0FBTDtRQUNJLGlDQUFpQztRQUNqQyx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFDSSxrQ0FBa0M7UUFDbEMsdUNBQXVDO0lBQzNDLENBQUM7SUFqQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDRDtJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzJEQUNKO0lBSkEsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FvQnJDO0lBQUQsd0JBQUM7Q0FwQkQsQUFvQkMsQ0FwQjhDLEVBQUUsQ0FBQyxTQUFTLEdBb0IxRDtrQkFwQm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPYmplY3RQb29sIGZyb20gXCIuL09iamVjdFBvb2xcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb29sYWJsZUNvbXBvbmVudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBQb29sSUQgPSBcIumdnuW4uOmHjeimgemcgOimgeWUr+S4gFwiXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgcHJlbG9hZENvdW50ID0gMDtcblxuICAgIF9teVBvb2wgOiBPYmplY3RQb29sID0gbnVsbDtcblxuICAgIC8vIOagh+iusOaYr+WQpuaYr+mAmui/h+axoOWtkOWIm+W7uueahFxuICAgIF9jcmVhdGVkV2l0aFBvb2xDb250cm9sbGVyIDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgdW51c2UoKXtcbiAgICAgICAgLy8gdGhpcy5ub2RlLmVtaXQoXCJPblB1dFRvUG9vbFwiKTtcbiAgICAgICAgLy8gVEtMb2cuTG9nSW5mbyhcInVudXNlOlwiICsgdGhpcy5uYW1lKTtcbiAgICB9XG5cbiAgICByZXVzZSgpe1xuICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdChcIk9uR2V0RnJvbVBvb2xcIilcbiAgICAgICAgLy8gVEtMb2cuTG9nSW5mbyhcInJldXNlOlwiICsgdGhpcy5uYW1lKTtcbiAgICB9XG59XG4iXX0=