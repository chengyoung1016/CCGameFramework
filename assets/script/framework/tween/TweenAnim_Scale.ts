import PlayOppBaseComponent from "../utils/PlayOppBaseComponent";
import TKLog from "../log/TKLog";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TweenAnim_Scale extends PlayOppBaseComponent {
    @property(cc.Boolean)
    initFrom = false;
    @property(cc.Float)
    from = -1;

    @property(cc.Float)
    target = 2;

    @property(cc.Float)
    dur = 1;

    @property(cc.Float)
    delay = 1;

    @property(cc.Integer)
    repeate = 1;

    @property(cc.Boolean)
    yoyo = false;

    @property(cc.String)
    toEase = "sineIn"
    @property(cc.String)
    reverseEase = "sineOut"

    private tween : cc.Tween = null;

    private isPlaying : boolean = false;

    Excute(){
        if(this.isPlaying){
            TKLog.LogInfo("正在播放中tweenScale中，不再接受执行播放")
            return;
        }
        if(this.tween != null){
            this.tween.stop();
        }
        if(this.initFrom) {
            this.node.scale = this.from;
        }
        this.tween = cc.tween(this.node);
        let srcScale = this.node.scale;
        let scaleTween = this.tween.to(this.dur, {scale : this.target} , {easing: this.toEase});
        if(this.yoyo){
            scaleTween.to(this.dur, {scale : srcScale}, {easing : this.reverseEase});
        }else if(this.repeate > 0){
            scaleTween.call(()=>{
                this.node.scale = srcScale;
            })
        }
        if(this.repeate < 0){
            this.repeate = Number.MAX_SAFE_INTEGER;
        }
        this.tween.repeat(this.repeate, scaleTween).call(()=>{
            this.isPlaying = false;
        });

        this.isPlaying = true;
        this.tween.start();
    }
}