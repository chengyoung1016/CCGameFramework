import PlayOppBaseComponent from "../utils/PlayOppBaseComponent";
import ToolsUseful from "../utils/ToolsUseful";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TweenAnim_MoveToTarget extends PlayOppBaseComponent {
    @property(cc.Node)
    target : cc.Node = null;

    @property(cc.Float)
    dur = 1;

    @property(cc.Float)
    delay = 1;

    Excute(){
        let tween = cc.tween(this.node);
        let targetPos = ToolsUseful.LocalPositionToNode(this.node, this.target);
        tween.delay(this.delay).to(this.dur, {position: targetPos}).start();
    }
}
