import Singleton from "../utils/Singleton";
import UIFrame, { UIClass } from "./UIFrame";
import TKLog from "../log/TKLog";
import IUIBridge from "./IUIBridge";
import UIBridgeNormal from "./UIBridgeNormal";
import ResLoadManager from "../utils/ResLoadManager";

interface IFrameState {
    (frame : UIFrame) : void;
}

export default class UIModule extends Singleton {
    UIWindows : {[uiname:string]:UIFrame} = {};

    OnInitEvent : IFrameState;
    OnOpenEvent : IFrameState;
    OnCloseEvent : IFrameState;

    protected _UIBridge : IUIBridge = null;

    constructor(){
        super();
        // TKLog.LogInfo("UIModule初始化");
        this._UIBridge = new UIBridgeNormal();
        this._UIBridge.InitBridge();
    }

    /**
     * 打开窗口
     * @param uiTemplateName 窗口名称，该名称也是prefab的名称
     * @param args 要传入的参数
     */
    OpenWindow<T extends UIFrame>(uiClass : UIClass<T>, ...args : any) : Promise<UIFrame>{
        // TKLog.LogInfo("UIModule.OpenWindow("+uiTemplateName+")");
        let uiTemplateName = uiClass.getUrl();
        let template = this.UIWindows[uiTemplateName];

        if(template){
            if(template.isValid == false) {
                //TKLog.LogInfo("UIModule.OpenWindow 虽然已经存在，但无法使用，需要重新加载" + uiTemplateName);
                delete this.UIWindows[uiTemplateName];
            } else {
                //TKLog.LogInfo("UIModule.OpenWindow 已经存在，直接打开" + uiTemplateName);
                this.OnOpen(this.UIWindows[uiTemplateName], ...args);
                return Promise.resolve(this.UIWindows[uiTemplateName]);
            }
        }

        return this.LoadWindow(uiClass, true, ...args);
    }

    /**
     * 关闭窗口
     * @param uiClass 窗口类名称
     */
    CloseWindow<T extends UIFrame>(uiClass : UIClass<T>){
        let name = uiClass.getUrl();
        if(this.UIWindows[name] == null){
            // TKLog.LogWarn("CloseWindow 找不到窗口" + name);
            return;
        }

        let frame = this.UIWindows[name];
        frame.OnClose();
        if(cc.isValid(frame.node)) {
            frame.node.active = false;
        }

        if(this.OnCloseEvent != null){
            this.OnCloseEvent(frame);
        }
    }

    /**
     * 获取窗口对象
     * 如果该窗口还没有加载过，则会返回null
     * @param name 窗口名称
     */
    GetFrame(name : string) : UIFrame {
        if(this.UIWindows[name] == null){
            return null;
        }
        return this.UIWindows[name];
    }

    /**
     * 判断该窗口是否已经加载过
     * @param name 窗口名称
     */
    IsLoad(name : string) : boolean {
        if(this.UIWindows[name] == null){
            return false;
        }
        return true;
    }

    /**
     * 检测该窗口当前是否正在显示
     * @param name 窗口名称
     */
    IsOpen(name : string) : boolean {
        if(this.UIWindows[name] == null){
            return false;
        }
        return this.UIWindows[name].node.active;
    }

    /**
     * 销毁窗口
     * 即destroy节点
     * @param uiClass 窗口类名称
     * @param release 是否释放该窗口的资源
     */
    DestroyWindow<T extends UIFrame>(uiClass : UIClass<T>, release : boolean = true){
        // TKLog.LogInfo("UIModule.DestroyWindow(" + uiTemplateName+")");
        let uiTemplateName = uiClass.getUrl();
        if(this.UIWindows[uiTemplateName] == null){
            TKLog.LogWarn("UIModule.DestroyWindow 找不到要销毁的窗口" + uiTemplateName);
            let uiroot = cc.find("Canvas").getChildByName("UIRoot");
            if(uiroot && uiroot.children.length > 0) {
                uiroot.children.forEach((child) => {
                    let delui = child.getChildByName(uiTemplateName);
                    if(delui && cc.isValid(delui)) {
                        TKLog.LogInfo("uiwindows里找不到当前节点，从场景节点里遍历该节点并销毁");
                        delui.destroy();
                    }
                })
            }
            return;
        }
        let frame = this.UIWindows[uiTemplateName];
        if(cc.isValid(frame.node)) {
            frame.node.destroy();
        }
        
        if(release){
            TKLog.LogInfo("TODO 释放窗口" + uiTemplateName + "资源");
        }

        delete this.UIWindows[uiTemplateName];
        // this.UIWindows[uiTemplateName] = null;
    }

    /**
     * 销毁所有已加载的窗口
     */
    DestroyAllWindow(){
        // TKLog.LogInfo("UIModule.DestroyAllWindow()")
        // let loadList = [];
        // console.log(this.UIWindows);
        for(let item in this.UIWindows){
            // console.log(item);
            if(this.IsLoad(item)){
                // loadList.push(this.UIWindows[item]);
                let frame = this.UIWindows[item];
                frame.node.destroy();
                delete this.UIWindows[item];
            }
        }

        // loadList.forEach((name)=>{
        //     // this.DestroyWindow(name, true);
        //     name.destroy();
        // })
    }

    /**
     * 关闭所有窗口
     */
    CloseAllWindow(){
        // TKLog.LogInfo("UIModule.CloseAllWindow()")
        // let loadList = [];
        for(let item in this.UIWindows){
            if(this.IsOpen(item)){
                let frame = this.UIWindows[item];
                frame.node.active = false;
                // delete this.UIWindows[item];
                // loadList.push(this.UIWindows[item]);
            }
        }
        // loadList.forEach((name)=>{
        //     this.CloseWindow(name);
        // })
    }

    private async LoadWindow<T extends UIFrame>(uiClass : UIClass<T>, openWhenFinish : boolean, ...args : any) : Promise<UIFrame>{
        // TKLog.LogInfo("UIModule.LoadWindow(" + uiTemplateName + ")");
        let uiTemplateName = uiClass.getUrl();
        if(this.UIWindows[uiTemplateName] != null){
            TKLog.LogWarn("UIModule.LoadWindow 多次加载窗口:" + uiTemplateName);
        }

        return await new Promise<UIFrame>((resolve, reject)=>{
            this._UIBridge.LoadUIAsset(uiTemplateName)
            .then(prefab=>{
                if(prefab == null){ 
                    resolve(null);
                }else{
                    let inst = cc.instantiate(prefab);
                    let frame = this._UIBridge.CreateUIController(inst, uiClass.getName());
                    frame.UIName = uiTemplateName;
                    this._UIBridge.UIObjectFilter(frame, inst);
    
                    this.UIWindows[uiTemplateName] = frame;
                    this.InitWindow(frame, openWhenFinish, ...args);
                    resolve(frame);
                }
            }).catch(e=>{
                TKLog.LogErr("加载窗口"+uiTemplateName +"失败:" + e);
                resolve(null);
            })
        }).catch(e=>{
            TKLog.LogErr("UIModule.LoadWindow(" + uiTemplateName + ") Err:" + e);
            throw new Error("UIModule.LoadWindow(" + uiTemplateName + ") Err:" +e);
        })
    }
    private InitWindow(frame : UIFrame, openWhenFinish : boolean, ...args : any) {
        // TKLog.LogInfo("UIModule.InitWindow(" + frame + ")");
        frame.OnInit();
        if(this.OnInitEvent != null){
            this.OnInitEvent(frame);
        }
        if(openWhenFinish){
            this.OnOpen(frame, ...args);
        }else{
            frame.node.active = false;
        }
    }

    private OnOpen(frame : UIFrame, ...args : any) {
        TKLog.LogInfo("UIModule.OnOpen(" + frame.name + ")");
        if(frame == null){
            return;
        }
        // if(frame.node.active){
        //     frame.OnClose();
        //     if(this.OnCloseEvent != null){
        //         this.OnCloseEvent(frame);
        //     }
        // }
        
        frame.BeforeOpen(()=>{
            frame.node.active = true;
            frame.OnOpen(...args);

            if(this.OnOpenEvent != null){
                this.OnOpenEvent(frame);
            }
        }, ...args);
    }
}
