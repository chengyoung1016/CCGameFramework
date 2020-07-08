import PoolableComponent from "./PoolableComponent";


export default class ObjectPool {

    private _pool : cc.NodePool = null;
    private _prefabPoolObj : PoolableComponent = null;

    constructor(prefab : cc.Node){
        this._prefabPoolObj = prefab.getComponent(PoolableComponent);
        this._pool = new cc.NodePool(PoolableComponent);

        for(let i = 0; i < this._prefabPoolObj.preloadCount; ++i){
            this._NewPooledInstance();
        }
    }

    GetPooledInstance():cc.Node {
        // TKLog.LogInfo(this._GetLogPrefix()+".GetPooledInstance, 当前size:" + this._pool.size() + " 将要取出一个");
        if(this._pool.size() > 0){
            return this._pool.get();
        }
        else{
            // 实例化一个新的
            this._NewPooledInstance();
        }
        return this._pool.get();
    }

    Destroy(poolObj : PoolableComponent){
        // TKLog.LogInfo("ObjectPool.Destroy("+poolObj.PoolID+"),poolSizePre="+this._pool.size());
        this._pool.put(poolObj.node);
        //初始化节点
        poolObj.node.setPosition(cc.v2(0, 0));
        // TKLog.LogInfo("poolSizeAfter:" + this._pool.size());
    }

    // 实例化一个对象并放到池子中
    private _NewPooledInstance(position ?: cc.Vec2, rotation ?: cc.Quat) : PoolableComponent{
        // TKLog.LogInfo("实例化"+this._prefabPoolObj.PoolID+"的一个对象并放入到池子中");

        let go : PoolableComponent = null;
        go = cc.instantiate(this._prefabPoolObj.node).getComponent(PoolableComponent);
        if(position != null){
            go.node.setPosition(position);
        }
        if(rotation != null){
            go.node.setRotation(rotation, 0, 0, 0);
        }

        go._createdWithPoolController = true;
        go._myPool = this;

        this._pool.put(go.node);
        //go.node.emit("OnPoolableInstanceOnLoad");

        return go;
    }

    static _pools : {[id:string]:ObjectPool} = {};
    static _GetPool(prefabPoolComponent : PoolableComponent) : ObjectPool{
        // TKLog.LogInfo("ObjectPool._GetPool("+prefabPoolComponent.PoolID+")");

        let pool : ObjectPool = null;
        let prefab = prefabPoolComponent.node;

        if(this._pools[prefabPoolComponent.PoolID] == null){
            // TKLog.LogInfo("还不存在ID为"+prefabPoolComponent.PoolID+"的内存池，先创建");
            pool = new ObjectPool(prefab);
            this._pools[prefabPoolComponent.PoolID] = pool;
        }
        return this._pools[prefabPoolComponent.PoolID];
    }

    private _GetLogPrefix(){
        if(this._prefabPoolObj == null){
            return "ObjectPool";
        }
        else{
            return "ObjectPool(" + this._prefabPoolObj.PoolID + ")";
        }
    }
}
