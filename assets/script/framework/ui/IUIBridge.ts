import UIFrame from "./UIFrame";


export default interface IUIBridge {

    InitBridge();

    CreateUIController(uiNode : cc.Node, uiTemplateName : string) : UIFrame;

    UIObjectFilter(controller : UIFrame, uiNode : cc.Node);

    LoadUIAsset(uiTemplateName : string) : Promise<cc.Prefab>;
}
