import PlayOppBaseComponent, { PlayOpp } from "../utils/PlayOppBaseComponent";
import TKLog from "../log/TKLog";

const {ccclass, property} = cc._decorator;
/**
 * 改变数字
 * 从startNum变化动goalNum
 * 并可以通过回调函数来回调变化过程值
 */
@ccclass
export default class TweenAnim_Number extends PlayOppBaseComponent{
    
    @property(cc.Float)
    protected startNum  = 0;
    @property(cc.Float)
    protected goalNum = 100;
    @property(cc.Float)
    protected dur = 1;
    @property(cc.Float)
    protected delay = 0;

    // 保留有效小数位数
    @property(cc.Integer)
    fixed = 0;
    // 是否输出到Label上，如果为null则不输出到label
    @property(cc.Label)
    toLabel : cc.Label = null;
    // 输出到label上的前缀，比如 “当前：”
    @property(cc.String)
    preLabel = "";
    // 输出到label上的后缀，比如 %
    @property(cc.String)
    suffixLabel = "";

    protected numChangedCallback : Function = null;
    protected  isStart = false;
    protected numObj = {num : 0}

    start(){
        if(this.opp == PlayOpp.Update){
            TKLog.LogWarn("此tweenAnim不建议使用Update执行！！！！！")
        }
        super.start();
    }

    Init(startNum : number, goalNum : number, dur : number, delay : number){
        this.startNum = startNum;
        this.goalNum = goalNum;
        this.dur = dur;
        this.delay = delay;
        this.isStart = false;
    }

    Excute(){
       this.numObj.num = this.startNum;

       cc.tween(this.numObj).delay(this.delay).to(this.dur, {num : this.goalNum}).call(()=>{
            if(this.numChangedCallback != null){
                this.numChangedCallback(this.goalNum);
            }
            this.isStart = false;
            if(this.toLabel != null){
                this.toLabel.string = this.preLabel + this.goalNum.toString() + this.suffixLabel;
            }
       }).start();
       this.isStart = true;
    }

    update(dt){
        super.update(dt);
        if(this.isStart){
            let curNum = this.numObj.num.toFixed(this.fixed);
           
            if(this.numChangedCallback != null){
                this.numChangedCallback(curNum);
            }
            if(this.toLabel != null){
                this.toLabel.string = this.preLabel + curNum.toString() + this.suffixLabel;
            }
        }
    }
}