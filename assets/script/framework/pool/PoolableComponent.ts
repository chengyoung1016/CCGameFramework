import ObjectPool from "./ObjectPool";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PoolableComponent extends cc.Component {
    @property(cc.String)
    PoolID = "非常重要需要唯一"
    @property(cc.Integer)
    preloadCount = 0;

    _myPool : ObjectPool = null;

    // 标记是否是通过池子创建的
    _createdWithPoolController : boolean = false;

    unuse(){
        // this.node.emit("OnPutToPool");
        // TKLog.LogInfo("unuse:" + this.name);
    }

    reuse(){
        // this.node.emit("OnGetFromPool")
        // TKLog.LogInfo("reuse:" + this.name);
    }
}
