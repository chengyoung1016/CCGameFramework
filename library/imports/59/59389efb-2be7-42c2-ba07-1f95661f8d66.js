"use strict";
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