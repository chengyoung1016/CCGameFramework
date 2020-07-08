import PlayOppBaseComponent from "../utils/PlayOppBaseComponent";


const {ccclass, property} = cc._decorator;

@ccclass
export default class TweenAnim_ActiveNode extends PlayOppBaseComponent{
    @property(cc.Float)
    delay = 0;

    @property(cc.Node)
    target : cc.Node = null;

    @property(cc.Boolean)
    targetActive = false;

    Excute(){
        if(this.target == null){
            return;
        }
        this.scheduleOnce(()=>{
            this.target.active = this.targetActive;
        }, this.delay);
    }
}