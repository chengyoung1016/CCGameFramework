"use strict";
cc._RF.push(module, 'a55bcEOnMxAbJAe+d6PK/T7', 'ObjectPoolController');
// script/framework/pool/ObjectPoolController.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PoolableComponent_1 = require("./PoolableComponent");
var ObjectPool_1 = require("./ObjectPool");
var TKLog_1 = require("../log/TKLog");
var ResLoadManager_1 = require("../utils/ResLoadManager");
var ObjectPoolController = /** @class */ (function () {
    function ObjectPoolController() {
    }
    // 异步实例化指定路径的prefab
    ObjectPoolController.InstantiateWithPathAsync = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            ResLoadManager_1.default.getInstance().LoadRes(path, cc.Prefab)
                .then(function (asset) {
                if (asset == null) {
                    TKLog_1.default.LogWarn("实例化对象" + path + "失败，找不到资源");
                    resolve(null);
                }
                else {
                    resolve(_this.Instantiate(asset));
                }
            })
                .catch(function (e) {
                TKLog_1.default.LogErr("实例化对象" + path + " 失败 :" + e);
                reject(new Error("实例化对象" + path + "失败:" + e));
            });
        });
    };
    // 读取resources路径下prefab进行实例化
    ObjectPoolController.InstantiateWithPath = function (path, context, loadCompleteCallBack) {
        var _this = this;
        ResLoadManager_1.default.getInstance().LoadRes(path, cc.Prefab)
            .then(function (asset) {
            if (asset == null) {
                TKLog_1.default.LogWarn("实例化对象" + path + "失败，找不到资源");
                return;
            }
            if (loadCompleteCallBack != null) {
                loadCompleteCallBack.call(context, _this.Instantiate(asset));
            }
        })
            .catch(function (e) {
            TKLog_1.default.LogErr("实例化对象" + path + " 失败 :" + e);
            if (loadCompleteCallBack != null) {
                loadCompleteCallBack.call(context, null);
            }
        });
    };
    //不管是否放入对象池的预制体，都用这个方法统一实例化
    ObjectPoolController.Instantiate = function (prefab) {
        // TKLog.LogInfo("ObjectPoolController.Instantiate(" +prefab.name+")");
        var prefabPool = prefab.data.getComponent("PoolableComponent");
        if (prefabPool == null) {
            // TKLog.LogWarn(prefab.name+"中找不到PoolableComponent,直接进行实例化");
            return cc.instantiate(prefab);
        }
        var go = ObjectPool_1.default._GetPool(prefabPool).GetPooledInstance();
        if (go != null) {
            return go;
        }
        else {
            // TKLog.LogWarn(prefab.name+"没有通过pool获取到，将直接实例化")
            return this.InstantiateWithoutPool(prefab);
        }
    };
    ObjectPoolController.InstantiateWithPos = function (prefab, position) {
        //TKLog.LogInfo("ObjectPoolController.InstantiateWithPos(" + prefab.name + ").position(" + position + ")");
        var go = this.Instantiate(prefab);
        go.setPosition(position);
        return go;
    };
    ObjectPoolController.InstantiateWithoutPool = function (prefab) {
        // TKLog.LogInfo("ObjectPoolController.InstantiateWithoutPool(" + prefab.name +")");
        return this.InstantiateWithoutPoolWithPos(prefab, cc.Vec2.ZERO);
    };
    ObjectPoolController.InstantiateWithoutPoolWithPos = function (prefab, position) {
        // TKLog.LogInfo("ObjectPoolController.InstantiateWithoutPoolWithPos("+prefab.name+").position(" + position + ")");
        var go = cc.instantiate(prefab);
        go.setPosition(position);
        // go.setRotation(quaternion, 0, 0, 0);
        var pool = go.getComponent(PoolableComponent_1.default);
        if (pool) {
            pool._createdWithPoolController = true;
            go.removeComponent(PoolableComponent_1.default);
        }
        return go;
    };
    ObjectPoolController.Destroy = function (obj) {
        // TKLog.LogInfo("ObjectPoolController.Destroy(" + obj.name + ")");
        var poolObj = obj.getComponent(PoolableComponent_1.default);
        if (poolObj == null) {
            // TKLog.LogInfo("对象(" + obj.name + ")中找不到PoolableComponent，所以直接销毁");
            obj.destroy();
            return;
        }
        if (poolObj._myPool != null) {
            poolObj._myPool.Destroy(poolObj);
        }
        else {
            if (!poolObj._createdWithPoolController) {
                TKLog_1.default.LogWarn("池中物" + obj.name + " 不是通过ObjectPoolController实例化的,将直接销毁");
            }
            obj.destroy();
        }
    };
    return ObjectPoolController;
}());
exports.default = ObjectPoolController;

cc._RF.pop();