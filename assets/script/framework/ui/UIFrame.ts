import TKLog from "../log/TKLog";
import UIModule from "./UIModule";

export interface UIClass<T extends UIFrame> {
    new(): T;
    getUrl(): string;
    getName(): string;
}

const {ccclass, property} = cc._decorator;
const PREFAB_UI_DIR = "prefab/"

@ccclass
export default class UIFrame extends cc.Component {
    // 所在pannel的索引，从0开始，如果超出UIRoot的pannel范围，则用0号索引
    @property(cc.Integer)
    PannelIndex = 0;

    UITemplateName : string = "";
    UIName : string = "";

    protected static prefabUrl: string;
    protected static className: string;

    /**
     * 获取prefab路径，相对于resources目录
     */
    public static getUrl(): string {
        return PREFAB_UI_DIR + this.prefabUrl;
    }

    /**
     * 获取类名，用于给UI命名
     */
    public static getName(): string {
        return this.className;
    }

    /**
     * 初始化，会在加载完成后调用
     * 只会调用一次
     */
    OnInit(){
        // TKLog.LogInfo("UIFrame OnInit");
    }

    /**
     * 在实际打开之前先执行
     * @param doOpen 在打开之前先执行一些不可告人的事情
     * @param openArgs 参数
     */
    BeforeOpen(doOpen ?: Function, ...openArgs : any){
        // TKLog.LogInfo("UIFrame BeforeOpen");
        if(doOpen != null){
            doOpen();
        }
    }

    /**
     * 在打开窗口时显示
     * @param args 参数
     */
    OnOpen(...args : any){

    }

    /**
     * 在关闭窗口时执行
     */
    OnClose(){
        TKLog.LogInfo("UIFrame OnClose");
    }

    protected OpenWindow<T extends UIFrame>(uiClass : UIClass<T>, ...args : any){
        UIModule.getInstance().OpenWindow(uiClass, args);
    }

    protected CloseWindow<T extends UIFrame>(uiClass : UIClass<T>){
        //UIModule.getInstance().CloseWindow(uiName.length == 0 ? this.UIName : uiName);
        UIModule.getInstance().CloseWindow(uiClass);
    }
}
