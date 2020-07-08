import FSMState from "./FSMState";
import FSMComponent from "./FSMComponent";
import ObjectPoolController from "../pool/ObjectPoolController";
import FiniteStateMachine from "./FiniteStateMachine";
import TKLog from "../log/TKLog";
import ToolsUseful from "../utils/ToolsUseful";

/**
 * FSM例子
 * FSM使用一般方法为：
 * 1. 有状态的是一个cc.Component,则替换为继承自FSMComponent
 * 2. 各个状态的定义，每个状态继承FSMState,并实现各自状态内的逻辑
 * 3. 确定各个状态之间的转换条件等关系
 * 4. 初始化状态机，重写FSMInit函数并注册实例化的状态对象
 * 5. 在update函数中调用FSMUpdate()用于更新状态
 * 6. 使用ChangeStateById()来改变当前状态
 */


const {ccclass, property} = cc._decorator;

enum DemoFSMState {
    Init,
    Run,
    Destroy,
}
@ccclass
export default class DemoFSM extends FSMComponent<DemoFSM> {
    private stateInit : DemoFSMState_Init = new DemoFSMState_Init();
    private stateRun : DemoFSMState_Run = new DemoFSMState_Run();
    private stateDestroy : DemoFSMState_Destroy = new DemoFSMState_Destroy();

    // LIFE-CYCLE CALLBACKS:

    // 状态机初始化函数
    // 包括状态机的实例化以及注册各个状态
    FSMInit(){
        this.FSM = new FiniteStateMachine(this);
        super.FSMInit();
        this.RegisterState(this.stateInit);
        this.RegisterState(this.stateRun);
        this.RegisterState(this.stateDestroy);
    }

    onLoad () {
        // 初始化状态机
        this.FSMInit();
    }

    start () {
        // 初始使用Init状态
        this.ChangeStateById(DemoFSMState.Init);
    }

    update (dt) {
        // 状态更新
        this.FSMUpdate(dt);
    }
}

// 初始化状态
// 初始化数据并执行一个更新的旋转动画，当旋转到一定角度就切换到Run状态
class DemoFSMState_Init extends FSMState<DemoFSM> {
    public StateID(): number {
        return DemoFSMState.Init;
    }

    private angle = 360;
    Enter(){
        super.Enter();
        this.angle = 360;
        TKLog.LogInfo("进入Init状态，初始化内容");
        this.entity.node.angle = this.angle;
    }

    Excute(dt){
        super.Excute(dt);
        this.angle--;
        this.entity.node.angle = this.angle;

        if(this.angle <= 45){
            this.entity.ChangeStateById(DemoFSMState.Run, this.angle);
        }
    }

    Exit(){
        super.Exit();
        TKLog.LogInfo("退出初始化状态了");
    }
}

// 运行中状态
// 使用了async执行指令，执行完成后切换到Destroy状态
class DemoFSMState_Run extends FSMState<DemoFSM> {
    public StateID(): number {
        return DemoFSMState.Run;
    }

    Enter(...args:any){
        TKLog.LogInfo("进入Run状态了,传过来的CD为:" + args[0]);
        // 缩放
        this.entity.node.scale = 2;

        this.Run();
        
    }

    async Run(){
        TKLog.LogInfo("先等待2秒钟")
        await ToolsUseful.WaitForSeconds(2);
        TKLog.LogInfo("等待完成，切换状态")
        this.entity.ChangeStateById(DemoFSMState.Destroy);
    }

    Exit(){
        TKLog.LogInfo("退出Run状态，啥也不干");
    }
}

// 销毁状态
// 过一段时间后销毁节点
class DemoFSMState_Destroy extends FSMState<DemoFSM>{
    public StateID(): number {
        return DemoFSMState.Destroy;
    }

    Enter(){
        TKLog.LogInfo("进入Destroy状态，1秒钟后销毁")
        this.Run();
    }

    async Run(){
        await ToolsUseful.WaitForSeconds(1);
        ObjectPoolController.Destroy(this.entity.node);
    }
    
}