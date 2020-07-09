
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/pool/ObjectPoolController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3Bvb2wvT2JqZWN0UG9vbENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFDcEQsMkNBQXNDO0FBQ3RDLHNDQUFpQztBQUNqQywwREFBcUQ7QUFFckQ7SUFBQTtJQXVHQSxDQUFDO0lBdEdHLG1CQUFtQjtJQUNaLDZDQUF3QixHQUEvQixVQUFnQyxJQUFhO1FBQTdDLGlCQWdCQztRQWZHLE9BQU8sSUFBSSxPQUFPLENBQVUsVUFBQyxPQUFPLEVBQUMsTUFBTTtZQUN2Qyx3QkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQztpQkFDcEQsSUFBSSxDQUFDLFVBQUEsS0FBSztnQkFDUCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7b0JBQ2YsZUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUMsSUFBSSxHQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN2QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQ2hCO3FCQUFJO29CQUNELE9BQU8sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7aUJBQ25DO1lBQ0wsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLENBQUM7Z0JBQ0osZUFBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDMUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDakQsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCw0QkFBNEI7SUFDckIsd0NBQW1CLEdBQTFCLFVBQTJCLElBQWEsRUFBRSxPQUFhLEVBQUUsb0JBQStC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WUFDZixxRUFBcUU7WUFDckUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2QsT0FBTztTQUNWO1FBQ0QsSUFBRyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksRUFBQztZQUN2QixPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQzthQUFJO1lBQ0QsSUFBRyxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsRUFBQztnQkFDbkMsZUFBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxxQ0FBcUMsQ0FBQyxDQUFDO2FBQzNFO1lBQ0QsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0F2R0EsQUF1R0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb29sYWJsZUNvbXBvbmVudCBmcm9tIFwiLi9Qb29sYWJsZUNvbXBvbmVudFwiO1xuaW1wb3J0IE9iamVjdFBvb2wgZnJvbSBcIi4vT2JqZWN0UG9vbFwiO1xuaW1wb3J0IFRLTG9nIGZyb20gXCIuLi9sb2cvVEtMb2dcIjtcbmltcG9ydCBSZXNMb2FkTWFuYWdlciBmcm9tIFwiLi4vdXRpbHMvUmVzTG9hZE1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0UG9vbENvbnRyb2xsZXIge1xuICAgIC8vIOW8guatpeWunuS+i+WMluaMh+Wumui3r+W+hOeahHByZWZhYlxuICAgIHN0YXRpYyBJbnN0YW50aWF0ZVdpdGhQYXRoQXN5bmMocGF0aCA6IHN0cmluZykgOiBQcm9taXNlPGNjLk5vZGU+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGNjLk5vZGU+KChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgICAgIFJlc0xvYWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuTG9hZFJlcyhwYXRoLCBjYy5QcmVmYWIpXG4gICAgICAgICAgICAudGhlbihhc3NldD0+e1xuICAgICAgICAgICAgICAgIGlmIChhc3NldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIFRLTG9nLkxvZ1dhcm4oXCLlrp7kvovljJblr7nosaFcIitwYXRoK1wi5aSx6LSl77yM5om+5LiN5Yiw6LWE5rqQXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5JbnN0YW50aWF0ZShhc3NldCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlPT57XG4gICAgICAgICAgICAgICAgVEtMb2cuTG9nRXJyKFwi5a6e5L6L5YyW5a+56LGhXCIgKyBwYXRoICsgXCIg5aSx6LSlIDpcIiArIGUpXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIuWunuS+i+WMluWvueixoVwiICsgcGF0aCArIFwi5aSx6LSlOlwiICsgZSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8g6K+75Y+WcmVzb3VyY2Vz6Lev5b6E5LiLcHJlZmFi6L+b6KGM5a6e5L6L5YyWXG4gICAgc3RhdGljIEluc3RhbnRpYXRlV2l0aFBhdGgocGF0aCA6IHN0cmluZywgY29udGV4dCA6IGFueSwgbG9hZENvbXBsZXRlQ2FsbEJhY2sgOiBGdW5jdGlvbikge1xuICAgICAgICBSZXNMb2FkTWFuYWdlci5nZXRJbnN0YW5jZSgpLkxvYWRSZXMocGF0aCwgY2MuUHJlZmFiKVxuICAgICAgICAudGhlbihhc3NldD0+e1xuICAgICAgICAgICAgaWYgKGFzc2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBUS0xvZy5Mb2dXYXJuKFwi5a6e5L6L5YyW5a+56LGhXCIrcGF0aCtcIuWksei0pe+8jOaJvuS4jeWIsOi1hOa6kFwiKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxvYWRDb21wbGV0ZUNhbGxCYWNrICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxvYWRDb21wbGV0ZUNhbGxCYWNrLmNhbGwoY29udGV4dCwgdGhpcy5JbnN0YW50aWF0ZShhc3NldCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlPT57XG4gICAgICAgICAgICBUS0xvZy5Mb2dFcnIoXCLlrp7kvovljJblr7nosaFcIiArIHBhdGggKyBcIiDlpLHotKUgOlwiICsgZSlcbiAgICAgICAgICAgIGlmKGxvYWRDb21wbGV0ZUNhbGxCYWNrICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxvYWRDb21wbGV0ZUNhbGxCYWNrLmNhbGwoY29udGV4dCxudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvL+S4jeeuoeaYr+WQpuaUvuWFpeWvueixoeaxoOeahOmihOWItuS9k++8jOmDveeUqOi/meS4quaWueazlee7n+S4gOWunuS+i+WMllxuICAgIHN0YXRpYyBJbnN0YW50aWF0ZShwcmVmYWIgOiBjYy5QcmVmYWIpIDogY2MuTm9kZXtcbiAgICAgICAgLy8gVEtMb2cuTG9nSW5mbyhcIk9iamVjdFBvb2xDb250cm9sbGVyLkluc3RhbnRpYXRlKFwiICtwcmVmYWIubmFtZStcIilcIik7XG5cbiAgICAgICAgbGV0IHByZWZhYlBvb2wgPSBwcmVmYWIuZGF0YS5nZXRDb21wb25lbnQoXCJQb29sYWJsZUNvbXBvbmVudFwiKTtcbiAgICAgICAgaWYocHJlZmFiUG9vbCA9PSBudWxsKXtcbiAgICAgICAgICAgIC8vIFRLTG9nLkxvZ1dhcm4ocHJlZmFiLm5hbWUrXCLkuK3mib7kuI3liLBQb29sYWJsZUNvbXBvbmVudCznm7TmjqXov5vooYzlrp7kvovljJZcIik7XG4gICAgICAgICAgICByZXR1cm4gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBnbyA9IE9iamVjdFBvb2wuX0dldFBvb2wocHJlZmFiUG9vbCkuR2V0UG9vbGVkSW5zdGFuY2UoKTtcbiAgICAgICAgaWYoZ28gIT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm4gZ287XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy8gVEtMb2cuTG9nV2FybihwcmVmYWIubmFtZStcIuayoeaciemAmui/h3Bvb2zojrflj5bliLDvvIzlsIbnm7TmjqXlrp7kvovljJZcIilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkluc3RhbnRpYXRlV2l0aG91dFBvb2wocHJlZmFiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBJbnN0YW50aWF0ZVdpdGhQb3MocHJlZmFiIDogY2MuUHJlZmFiLCBwb3NpdGlvbiA6IGNjLlZlYzIpIDogY2MuTm9kZXtcbiAgICAgICAgLy9US0xvZy5Mb2dJbmZvKFwiT2JqZWN0UG9vbENvbnRyb2xsZXIuSW5zdGFudGlhdGVXaXRoUG9zKFwiICsgcHJlZmFiLm5hbWUgKyBcIikucG9zaXRpb24oXCIgKyBwb3NpdGlvbiArIFwiKVwiKTtcblxuICAgICAgICBsZXQgZ28gPSB0aGlzLkluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgIGdvLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIGdvO1xuICAgIH1cblxuICAgIHN0YXRpYyBJbnN0YW50aWF0ZVdpdGhvdXRQb29sKHByZWZhYiA6IGNjLlByZWZhYikgOiBjYy5Ob2Rle1xuICAgICAgICAvLyBUS0xvZy5Mb2dJbmZvKFwiT2JqZWN0UG9vbENvbnRyb2xsZXIuSW5zdGFudGlhdGVXaXRob3V0UG9vbChcIiArIHByZWZhYi5uYW1lICtcIilcIik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5JbnN0YW50aWF0ZVdpdGhvdXRQb29sV2l0aFBvcyhwcmVmYWIsIGNjLlZlYzIuWkVSTyk7XG4gICAgfVxuXG4gICAgc3RhdGljIEluc3RhbnRpYXRlV2l0aG91dFBvb2xXaXRoUG9zKHByZWZhYiA6IGNjLlByZWZhYiwgcG9zaXRpb24gOiBjYy5WZWMyKSA6IGNjLk5vZGV7XG4gICAgICAgIC8vIFRLTG9nLkxvZ0luZm8oXCJPYmplY3RQb29sQ29udHJvbGxlci5JbnN0YW50aWF0ZVdpdGhvdXRQb29sV2l0aFBvcyhcIitwcmVmYWIubmFtZStcIikucG9zaXRpb24oXCIgKyBwb3NpdGlvbiArIFwiKVwiKTtcblxuICAgICAgICBsZXQgZ28gPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICBnby5zZXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIC8vIGdvLnNldFJvdGF0aW9uKHF1YXRlcm5pb24sIDAsIDAsIDApO1xuICAgICAgICBsZXQgcG9vbCA9IGdvLmdldENvbXBvbmVudChQb29sYWJsZUNvbXBvbmVudCk7XG4gICAgICAgIGlmKHBvb2wpe1xuICAgICAgICAgICAgcG9vbC5fY3JlYXRlZFdpdGhQb29sQ29udHJvbGxlciA9IHRydWU7XG4gICAgICAgICAgICBnby5yZW1vdmVDb21wb25lbnQoUG9vbGFibGVDb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnbztcbiAgICB9XG5cbiAgICBzdGF0aWMgRGVzdHJveShvYmogOiBjYy5Ob2RlKXtcbiAgICAgICAgLy8gVEtMb2cuTG9nSW5mbyhcIk9iamVjdFBvb2xDb250cm9sbGVyLkRlc3Ryb3koXCIgKyBvYmoubmFtZSArIFwiKVwiKTtcblxuICAgICAgICBsZXQgcG9vbE9iaiA9IG9iai5nZXRDb21wb25lbnQoUG9vbGFibGVDb21wb25lbnQpO1xuICAgICAgICBpZihwb29sT2JqID09IG51bGwpe1xuICAgICAgICAgICAgLy8gVEtMb2cuTG9nSW5mbyhcIuWvueixoShcIiArIG9iai5uYW1lICsgXCIp5Lit5om+5LiN5YiwUG9vbGFibGVDb21wb25lbnTvvIzmiYDku6Xnm7TmjqXplIDmr4FcIik7XG4gICAgICAgICAgICBvYmouZGVzdHJveSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKHBvb2xPYmouX215UG9vbCAhPSBudWxsKXtcbiAgICAgICAgICAgIHBvb2xPYmouX215UG9vbC5EZXN0cm95KHBvb2xPYmopO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKCFwb29sT2JqLl9jcmVhdGVkV2l0aFBvb2xDb250cm9sbGVyKXtcbiAgICAgICAgICAgICAgICBUS0xvZy5Mb2dXYXJuKFwi5rGg5Lit54mpXCIgKyBvYmoubmFtZSArIFwiIOS4jeaYr+mAmui/h09iamVjdFBvb2xDb250cm9sbGVy5a6e5L6L5YyW55qELOWwhuebtOaOpemUgOavgVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iai5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19