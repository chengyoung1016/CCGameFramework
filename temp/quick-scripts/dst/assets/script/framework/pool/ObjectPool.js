
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/pool/ObjectPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5938977K+dCwroHH5VmH41m', 'ObjectPool');
// script/framework/pool/ObjectPool.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PoolableComponent_1 = require("./PoolableComponent");
var ObjectPool = /** @class */ (function () {
    function ObjectPool(prefab) {
        this._pool = null;
        this._prefabPoolObj = null;
        this._prefabPoolObj = prefab.getComponent(PoolableComponent_1.default);
        this._pool = new cc.NodePool(PoolableComponent_1.default);
        for (var i = 0; i < this._prefabPoolObj.preloadCount; ++i) {
            this._NewPooledInstance();
        }
    }
    ObjectPool.prototype.GetPooledInstance = function () {
        // TKLog.LogInfo(this._GetLogPrefix()+".GetPooledInstance, 当前size:" + this._pool.size() + " 将要取出一个");
        if (this._pool.size() > 0) {
            return this._pool.get();
        }
        else {
            // 实例化一个新的
            this._NewPooledInstance();
        }
        return this._pool.get();
    };
    ObjectPool.prototype.Destroy = function (poolObj) {
        // TKLog.LogInfo("ObjectPool.Destroy("+poolObj.PoolID+"),poolSizePre="+this._pool.size());
        this._pool.put(poolObj.node);
        //初始化节点
        poolObj.node.setPosition(cc.v2(0, 0));
        // TKLog.LogInfo("poolSizeAfter:" + this._pool.size());
    };
    // 实例化一个对象并放到池子中
    ObjectPool.prototype._NewPooledInstance = function (position, rotation) {
        // TKLog.LogInfo("实例化"+this._prefabPoolObj.PoolID+"的一个对象并放入到池子中");
        var go = null;
        go = cc.instantiate(this._prefabPoolObj.node).getComponent(PoolableComponent_1.default);
        if (position != null) {
            go.node.setPosition(position);
        }
        if (rotation != null) {
            go.node.setRotation(rotation, 0, 0, 0);
        }
        go._createdWithPoolController = true;
        go._myPool = this;
        this._pool.put(go.node);
        //go.node.emit("OnPoolableInstanceOnLoad");
        return go;
    };
    ObjectPool._GetPool = function (prefabPoolComponent) {
        // TKLog.LogInfo("ObjectPool._GetPool("+prefabPoolComponent.PoolID+")");
        var pool = null;
        var prefab = prefabPoolComponent.node;
        if (this._pools[prefabPoolComponent.PoolID] == null) {
            // TKLog.LogInfo("还不存在ID为"+prefabPoolComponent.PoolID+"的内存池，先创建");
            pool = new ObjectPool(prefab);
            this._pools[prefabPoolComponent.PoolID] = pool;
        }
        return this._pools[prefabPoolComponent.PoolID];
    };
    ObjectPool.prototype._GetLogPrefix = function () {
        if (this._prefabPoolObj == null) {
            return "ObjectPool";
        }
        else {
            return "ObjectPool(" + this._prefabPoolObj.PoolID + ")";
        }
    };
    ObjectPool._pools = {};
    return ObjectPool;
}());
exports.default = ObjectPool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3Bvb2wvT2JqZWN0UG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUdwRDtJQUtJLG9CQUFZLE1BQWdCO1FBSHBCLFVBQUssR0FBaUIsSUFBSSxDQUFDO1FBQzNCLG1CQUFjLEdBQXVCLElBQUksQ0FBQztRQUc5QyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsMkJBQWlCLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQywyQkFBaUIsQ0FBQyxDQUFDO1FBRWhELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsRUFBQztZQUNyRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFRCxzQ0FBaUIsR0FBakI7UUFDSSxxR0FBcUc7UUFDckcsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBQztZQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDM0I7YUFDRztZQUNBLFVBQVU7WUFDVixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsNEJBQU8sR0FBUCxVQUFRLE9BQTJCO1FBQy9CLDBGQUEwRjtRQUMxRixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsT0FBTztRQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsdURBQXVEO0lBQzNELENBQUM7SUFFRCxnQkFBZ0I7SUFDUix1Q0FBa0IsR0FBMUIsVUFBMkIsUUFBbUIsRUFBRSxRQUFtQjtRQUMvRCxrRUFBa0U7UUFFbEUsSUFBSSxFQUFFLEdBQXVCLElBQUksQ0FBQztRQUNsQyxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQywyQkFBaUIsQ0FBQyxDQUFDO1FBQzlFLElBQUcsUUFBUSxJQUFJLElBQUksRUFBQztZQUNoQixFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUcsUUFBUSxJQUFJLElBQUksRUFBQztZQUNoQixFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMxQztRQUVELEVBQUUsQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUM7UUFDckMsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLDJDQUEyQztRQUUzQyxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFHTSxtQkFBUSxHQUFmLFVBQWdCLG1CQUF1QztRQUNuRCx3RUFBd0U7UUFFeEUsSUFBSSxJQUFJLEdBQWdCLElBQUksQ0FBQztRQUM3QixJQUFJLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7UUFFdEMsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBQztZQUMvQyxrRUFBa0U7WUFDbEUsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ2xEO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTyxrQ0FBYSxHQUFyQjtRQUNJLElBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLEVBQUM7WUFDM0IsT0FBTyxZQUFZLENBQUM7U0FDdkI7YUFDRztZQUNBLE9BQU8sYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztTQUMzRDtJQUNMLENBQUM7SUF0Qk0saUJBQU0sR0FBOEIsRUFBRSxDQUFDO0lBdUJsRCxpQkFBQztDQS9FRCxBQStFQyxJQUFBO2tCQS9Fb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb29sYWJsZUNvbXBvbmVudCBmcm9tIFwiLi9Qb29sYWJsZUNvbXBvbmVudFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFBvb2wge1xuXG4gICAgcHJpdmF0ZSBfcG9vbCA6IGNjLk5vZGVQb29sID0gbnVsbDtcbiAgICBwcml2YXRlIF9wcmVmYWJQb29sT2JqIDogUG9vbGFibGVDb21wb25lbnQgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJlZmFiIDogY2MuTm9kZSl7XG4gICAgICAgIHRoaXMuX3ByZWZhYlBvb2xPYmogPSBwcmVmYWIuZ2V0Q29tcG9uZW50KFBvb2xhYmxlQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5fcG9vbCA9IG5ldyBjYy5Ob2RlUG9vbChQb29sYWJsZUNvbXBvbmVudCk7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuX3ByZWZhYlBvb2xPYmoucHJlbG9hZENvdW50OyArK2kpe1xuICAgICAgICAgICAgdGhpcy5fTmV3UG9vbGVkSW5zdGFuY2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEdldFBvb2xlZEluc3RhbmNlKCk6Y2MuTm9kZSB7XG4gICAgICAgIC8vIFRLTG9nLkxvZ0luZm8odGhpcy5fR2V0TG9nUHJlZml4KCkrXCIuR2V0UG9vbGVkSW5zdGFuY2UsIOW9k+WJjXNpemU6XCIgKyB0aGlzLl9wb29sLnNpemUoKSArIFwiIOWwhuimgeWPluWHuuS4gOS4qlwiKTtcbiAgICAgICAgaWYodGhpcy5fcG9vbC5zaXplKCkgPiAwKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wb29sLmdldCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAvLyDlrp7kvovljJbkuIDkuKrmlrDnmoRcbiAgICAgICAgICAgIHRoaXMuX05ld1Bvb2xlZEluc3RhbmNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvb2wuZ2V0KCk7XG4gICAgfVxuXG4gICAgRGVzdHJveShwb29sT2JqIDogUG9vbGFibGVDb21wb25lbnQpe1xuICAgICAgICAvLyBUS0xvZy5Mb2dJbmZvKFwiT2JqZWN0UG9vbC5EZXN0cm95KFwiK3Bvb2xPYmouUG9vbElEK1wiKSxwb29sU2l6ZVByZT1cIit0aGlzLl9wb29sLnNpemUoKSk7XG4gICAgICAgIHRoaXMuX3Bvb2wucHV0KHBvb2xPYmoubm9kZSk7XG4gICAgICAgIC8v5Yid5aeL5YyW6IqC54K5XG4gICAgICAgIHBvb2xPYmoubm9kZS5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XG4gICAgICAgIC8vIFRLTG9nLkxvZ0luZm8oXCJwb29sU2l6ZUFmdGVyOlwiICsgdGhpcy5fcG9vbC5zaXplKCkpO1xuICAgIH1cblxuICAgIC8vIOWunuS+i+WMluS4gOS4quWvueixoeW5tuaUvuWIsOaxoOWtkOS4rVxuICAgIHByaXZhdGUgX05ld1Bvb2xlZEluc3RhbmNlKHBvc2l0aW9uID86IGNjLlZlYzIsIHJvdGF0aW9uID86IGNjLlF1YXQpIDogUG9vbGFibGVDb21wb25lbnR7XG4gICAgICAgIC8vIFRLTG9nLkxvZ0luZm8oXCLlrp7kvovljJZcIit0aGlzLl9wcmVmYWJQb29sT2JqLlBvb2xJRCtcIueahOS4gOS4quWvueixoeW5tuaUvuWFpeWIsOaxoOWtkOS4rVwiKTtcblxuICAgICAgICBsZXQgZ28gOiBQb29sYWJsZUNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIGdvID0gY2MuaW5zdGFudGlhdGUodGhpcy5fcHJlZmFiUG9vbE9iai5ub2RlKS5nZXRDb21wb25lbnQoUG9vbGFibGVDb21wb25lbnQpO1xuICAgICAgICBpZihwb3NpdGlvbiAhPSBudWxsKXtcbiAgICAgICAgICAgIGdvLm5vZGUuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmKHJvdGF0aW9uICE9IG51bGwpe1xuICAgICAgICAgICAgZ28ubm9kZS5zZXRSb3RhdGlvbihyb3RhdGlvbiwgMCwgMCwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBnby5fY3JlYXRlZFdpdGhQb29sQ29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIGdvLl9teVBvb2wgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuX3Bvb2wucHV0KGdvLm5vZGUpO1xuICAgICAgICAvL2dvLm5vZGUuZW1pdChcIk9uUG9vbGFibGVJbnN0YW5jZU9uTG9hZFwiKTtcblxuICAgICAgICByZXR1cm4gZ287XG4gICAgfVxuXG4gICAgc3RhdGljIF9wb29scyA6IHtbaWQ6c3RyaW5nXTpPYmplY3RQb29sfSA9IHt9O1xuICAgIHN0YXRpYyBfR2V0UG9vbChwcmVmYWJQb29sQ29tcG9uZW50IDogUG9vbGFibGVDb21wb25lbnQpIDogT2JqZWN0UG9vbHtcbiAgICAgICAgLy8gVEtMb2cuTG9nSW5mbyhcIk9iamVjdFBvb2wuX0dldFBvb2woXCIrcHJlZmFiUG9vbENvbXBvbmVudC5Qb29sSUQrXCIpXCIpO1xuXG4gICAgICAgIGxldCBwb29sIDogT2JqZWN0UG9vbCA9IG51bGw7XG4gICAgICAgIGxldCBwcmVmYWIgPSBwcmVmYWJQb29sQ29tcG9uZW50Lm5vZGU7XG5cbiAgICAgICAgaWYodGhpcy5fcG9vbHNbcHJlZmFiUG9vbENvbXBvbmVudC5Qb29sSURdID09IG51bGwpe1xuICAgICAgICAgICAgLy8gVEtMb2cuTG9nSW5mbyhcIui/mOS4jeWtmOWcqElE5Li6XCIrcHJlZmFiUG9vbENvbXBvbmVudC5Qb29sSUQrXCLnmoTlhoXlrZjmsaDvvIzlhYjliJvlu7pcIik7XG4gICAgICAgICAgICBwb29sID0gbmV3IE9iamVjdFBvb2wocHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMuX3Bvb2xzW3ByZWZhYlBvb2xDb21wb25lbnQuUG9vbElEXSA9IHBvb2w7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvb2xzW3ByZWZhYlBvb2xDb21wb25lbnQuUG9vbElEXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9HZXRMb2dQcmVmaXgoKXtcbiAgICAgICAgaWYodGhpcy5fcHJlZmFiUG9vbE9iaiA9PSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybiBcIk9iamVjdFBvb2xcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIFwiT2JqZWN0UG9vbChcIiArIHRoaXMuX3ByZWZhYlBvb2xPYmouUG9vbElEICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=