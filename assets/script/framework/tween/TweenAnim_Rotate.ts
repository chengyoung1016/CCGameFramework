import PlayOppBaseComponent from "../utils/PlayOppBaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TweenAnim_Rotate extends PlayOppBaseComponent {
    // 开始前延迟（秒），对永久执行的动作无效
    @property(cc.Float)
    delay = 0;

    // 执行一次的时间（秒）
    @property(cc.Float)
    duration = 1;

    // 改变角度
    @property(cc.Float)
    angle = 1;

    // 循环次数，-1为一直循环
    @property(cc.Integer)
    repeate = 1;
    
    // 是to还是by
    @property(cc.Boolean)
    isTo = false;

    Excute(){
        super.Excute();
        // TKLog.LogInfo("TweenRotate:" + this.delay + "," + this.duration + "," + this.angle + "," + this.repeate + "," + this.isTo)
        let tween = cc.tween(this.node);
        
        if(this.repeate < 0){
            this.repeate = Number.MAX_SAFE_INTEGER;
        }else{
            tween = tween.delay(this.delay);
        }
        // tween = tween.repeat(this.repeate);

        if(this.isTo){
            tween = tween.to(this.duration, {angle:this.angle});
        }else{
            tween = tween.by(this.duration, {angle:this.angle});
        }


        tween = tween.repeat(this.repeate).start();
    }
}