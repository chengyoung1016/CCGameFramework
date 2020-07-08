import IUIBridge from "./IUIBridge";
import UIRoot from "./UIRoot";
import TKLog from "../log/TKLog";
import ResLoadManager from "../utils/ResLoadManager";

export default class UIBridgeNormal implements IUIBridge {
    InitBridge() {
        
    }    
    CreateUIController(uiNode: cc.Node, uiTemplateName: string): import("./UIFrame").default {
        
        let frame = uiNode.getComponent(uiTemplateName);
        if(frame == null){
            return null;
        }

        // uiNode.position = new cc.Vec2(0,0);
        // uiNode.scale = 1;

        let pannel = UIRoot.getInstance().GetPannel(frame.PannelIndex);
        if(pannel == null){
            pannel = UIRoot.getInstance().GetPannel(0);
            TKLog.LogWarn("找不到UIRoot的Pannel(" + frame.PannelIndex+")");
        }
        if(pannel != null){
            pannel.node.addChild(frame.node);
            // frame.node.scale = 1;
            // frame.node.position = cc.Vec2.ZERO;
        }
        return frame;
    }
    UIObjectFilter(controller: import("./UIFrame").default, uiNode: cc.Node) {

    }
    LoadUIAsset(uiTemplateName : string): Promise<cc.Prefab> {
        // return ResLoadManager.getInstance().LoadRes("prefab/ui/" + uiTemplateName, cc.Prefab);
        return ResLoadManager.getInstance().LoadRes(uiTemplateName, cc.Prefab);
    }


}
