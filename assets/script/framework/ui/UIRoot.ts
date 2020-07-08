import UIPannel from "./UIPannel";
import TKLog from "../log/TKLog";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIRoot extends cc.Component {
    @property(cc.Node)
    pannelRoot : cc.Node = null;

    @property(cc.Camera)
    uiCam : cc.Camera = null;

    _lstPannel : Array<UIPannel> = [];

    static _instance : UIRoot = null;

    static getInstance() : UIRoot{
        return this._instance;
    }

    onLoad(){

        // TKLog.LogInfo("UIRoot.onLoad");

        if(UIRoot._instance == null){
            UIRoot._instance = this;
        }
        else{
            // TKLog.LogWarn("有多余的UIRoot,删除这个");
            this.destroy();
            return;
        }

        this._lstPannel = [];

        let pannels = this.pannelRoot.getComponentsInChildren("UIPannel");
        for (let index = 0; index < pannels.length; index++) {
            const element = pannels[index];
            this._lstPannel.push(element);
        }

        this._lstPannel.sort((p1,p2)=>{
            let index1 = p1.node.getSiblingIndex();
            let index2 = p2.node.getSiblingIndex();
            return (index1 == index2) ? 0 : (index1 > index2 ? 1 : -1) ;
        })

        TKLog.LogInfo("UIRoot.onLoad pannel数量为:" + this._lstPannel.length);

        //把该节点设置为常驻节点
        // cc.game.addPersistRootNode(this.node);
    }

    start(){
        // this._lstPannel.forEach(pannel=>{
        //     TKLog.LogInfo("pannel:" + pannel.name);
        // })
    }

    onDestroy() {
        UIRoot._instance = null;
    }

    /**
     * 获取指定索引的Pannel
     * @param index 索引
     */
    GetPannel(index : number) : UIPannel{
        if(index < 0 || index >= this._lstPannel.length){
            return null;
        }
        return this._lstPannel[index];
    }

}
