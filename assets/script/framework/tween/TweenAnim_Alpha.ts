import PlayOppBaseComponent from "../utils/PlayOppBaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TweenAnim_Wave extends PlayOppBaseComponent{
    @property(cc.Float)
    startAlpha = 1;

    @property(cc.Float)
    goalAlhpa = 0;

    @property(cc.Float)
    delay = 0;

    @property(cc.Float)
    dur = 1;

    @property(cc.Integer)
    repeate = 0;

    @property(cc.Boolean)
    isReverse = true;

    Excute(){
        this.scheduleOnce(()=>{
            let tween = cc.tween(this.node).to(this.dur, {opacity: this.goalAlhpa * 255});
            this.node.opacity = 255 * this.startAlpha;
           
            // let item = tween.to(this.dur, {opacity: this.goalAlhpa * 255})
            //                 .to(this.dur, {opacity : this.startAlpha * 255});
            //需要reverse一遍
            let item: cc.Tween;
            if(this.isReverse) {
                item = tween.to(this.dur, {opacity : this.startAlpha * 255})
            } else {
                item = tween;
            }
    
            if(this.repeate < 0){
                this.repeate = Number.MAX_SAFE_INTEGER;
            }
    
            tween.repeat(this.repeate, item);
        
            tween.start();
        }, this.delay);
        
    }
}