import PlayOppBaseComponent from "../utils/PlayOppBaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TweenAnim_MoveBy extends PlayOppBaseComponent {
    @property(cc.Vec3)
    byDistance : cc.Vec3 = cc.Vec3.ZERO;

    @property(cc.Float)
    dur = 1;

    @property(cc.Float)
    delay = 1;

    @property(cc.String)
    easing = "sineOut"

    callback : Function = null;
    context : any = null;

    SetCallback(callbacks : Function, context : any){
        this.callback = callbacks;
        this.context = context;
    }

    Excute(){
        let tween = cc.tween(this.node);
        tween.delay(this.delay).by(this.dur, {position: this.byDistance}, {easing : this.easing}).call(()=>{
            if(this.callback != null && this.context != null){
                this.callback.call(this.context);
            }
        }).start();
    }
}