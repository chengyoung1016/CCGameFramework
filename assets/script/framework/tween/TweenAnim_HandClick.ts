import PlayOppBaseComponent from "../utils/PlayOppBaseComponent";
import ToolsUseful from "../utils/ToolsUseful";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TweenAnim_HandClick extends PlayOppBaseComponent{
    @property(cc.Node)
    targetPos : cc.Node = null;

    @property(cc.Float)
    targetScale = 0.5;

    @property(cc.Float)
    dur = 1;

    @property(cc.Integer)
    repeat = -1;

    Excute(){
        let posSrc = this.node.position;
        let targetPos = ToolsUseful.LocalPositionToNode(this.node,this.targetPos);
        
        let tween = cc.tween(this.node);
        let repeatTween = tween.to(this.dur, 
            {
                position:this.targetPos.position,
                scale:this.targetScale
            },{easing : "sineIn"})
        .to(this.dur, {
            position : posSrc,
            scale : 1,
        },{easing:"sineOut"})

        if(this.repeat < 0){
            this.repeat = Number.MAX_SAFE_INTEGER;
        }
        tween.repeat(this.repeat, repeatTween);
        
        tween.start();
    }

}