import PoolableComponent from "./PoolableComponent";
import ObjectPool from "./ObjectPool";
import TKLog from "../log/TKLog";
import ResLoadManager from "../utils/ResLoadManager";

export default class ObjectPoolController {
    // 异步实例化指定路径的prefab
    static InstantiateWithPathAsync(path : string) : Promise<cc.Node> {
        return new Promise<cc.Node>((resolve,reject)=>{
            ResLoadManager.getInstance().LoadRes(path, cc.Prefab)
            .then(asset=>{
                if (asset == null) {
                    TKLog.LogWarn("实例化对象"+path+"失败，找不到资源");
                    resolve(null)
                }else{
                    resolve(this.Instantiate(asset))
                }
            })
            .catch(e=>{
                TKLog.LogErr("实例化对象" + path + " 失败 :" + e)
                reject(new Error("实例化对象" + path + "失败:" + e))
            })
        });
    }
    // 读取resources路径下prefab进行实例化
    static InstantiateWithPath(path : string, context : any, loadCompleteCallBack : Function) {
        ResLoadManager.getInstance().LoadRes(path, cc.Prefab)
        .then(asset=>{
            if (asset == null) {
                TKLog.LogWarn("实例化对象"+path+"失败，找不到资源")
                return
            }
            if (loadCompleteCallBack != null){
                loadCompleteCallBack.call(context, this.Instantiate(asset))
            }
        })
        .catch(e=>{
            TKLog.LogErr("实例化对象" + path + " 失败 :" + e)
            if(loadCompleteCallBack != null){
                loadCompleteCallBack.call(context,null)
            }
        })
    }
    //不管是否放入对象池的预制体，都用这个方法统一实例化
    static Instantiate(prefab : cc.Prefab) : cc.Node{
        // TKLog.LogInfo("ObjectPoolController.Instantiate(" +prefab.name+")");

        let prefabPool = prefab.data.getComponent("PoolableComponent");
        if(prefabPool == null){
            // TKLog.LogWarn(prefab.name+"中找不到PoolableComponent,直接进行实例化");
            return cc.instantiate(prefab);
        }

        let go = ObjectPool._GetPool(prefabPool).GetPooledInstance();
        if(go != null){
            return go;
        }else{
            // TKLog.LogWarn(prefab.name+"没有通过pool获取到，将直接实例化")
            return this.InstantiateWithoutPool(prefab);
        }
    }

    static InstantiateWithPos(prefab : cc.Prefab, position : cc.Vec2) : cc.Node{
        //TKLog.LogInfo("ObjectPoolController.InstantiateWithPos(" + prefab.name + ").position(" + position + ")");

        let go = this.Instantiate(prefab);
        go.setPosition(position);
        return go;
    }

    static InstantiateWithoutPool(prefab : cc.Prefab) : cc.Node{
        // TKLog.LogInfo("ObjectPoolController.InstantiateWithoutPool(" + prefab.name +")");
        
        return this.InstantiateWithoutPoolWithPos(prefab, cc.Vec2.ZERO);
    }

    static InstantiateWithoutPoolWithPos(prefab : cc.Prefab, position : cc.Vec2) : cc.Node{
        // TKLog.LogInfo("ObjectPoolController.InstantiateWithoutPoolWithPos("+prefab.name+").position(" + position + ")");

        let go = cc.instantiate(prefab);
        go.setPosition(position);
        // go.setRotation(quaternion, 0, 0, 0);
        let pool = go.getComponent(PoolableComponent);
        if(pool){
            pool._createdWithPoolController = true;
            go.removeComponent(PoolableComponent);
        }
        return go;
    }

    static Destroy(obj : cc.Node){
        // TKLog.LogInfo("ObjectPoolController.Destroy(" + obj.name + ")");

        let poolObj = obj.getComponent(PoolableComponent);
        if(poolObj == null){
            // TKLog.LogInfo("对象(" + obj.name + ")中找不到PoolableComponent，所以直接销毁");
            obj.destroy();
            return;
        }
        if(poolObj._myPool != null){
            poolObj._myPool.Destroy(poolObj);
        }else{
            if(!poolObj._createdWithPoolController){
                TKLog.LogWarn("池中物" + obj.name + " 不是通过ObjectPoolController实例化的,将直接销毁");
            }
            obj.destroy();
        }
    }
}