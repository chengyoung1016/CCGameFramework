
const {ccclass, property} = cc._decorator;

@ccclass
export default class MaskTouchUtil extends cc.Component {
    @property([cc.Node])
    TargetNodes: cc.Node[] = [];

    onLoad() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = 'MaskTouchUtil';
        clickEventHandler.handler = "onBlankClick";

        let button = this.node.addComponent(cc.Button);
        button.clickEvents.push(clickEventHandler);
    }

    onBlankClick() {
        this.TargetNodes.forEach((node: cc.Node) => {
            node.active = false;
        })
    }
}