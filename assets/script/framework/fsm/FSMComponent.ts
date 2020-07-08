import IFSM from "./IFSM";
import FiniteStateMachine from "./FiniteStateMachine";

const {ccclass} = cc._decorator;

@ccclass
export default class FSMComponent<T> extends cc.Component implements IFSM<T> {
    
    protected FSM : FiniteStateMachine<T>;

    update(dt){
        this.FSMUpdate(dt);
    }

    FSMInit() {

    }
    FSMUpdate(dt) {
        if(this.FSM){
            this.FSM.Update(dt);
        }
    }
    FSMLateUpdate() {
        this.FSM.LateUpdate();
    }
    ChangeGlobalState(newState: import("./FSMState").default<T>, ...params: any) {
        this.FSM.ChangeGlobalState(newState, ...params);
    }
    ChangeGlobalStateById(stateID: number, ...params: any) {
        this.FSM.ChangeGlobalStateById(stateID, ...params);
    }
    ChangeState(newState: import("./FSMState").default<T>, ...params: any) {
        this.FSM.ChangeState(newState, ...params);
    }
    ChangeStateById(stateID: number, ...params: any) {
        this.FSM.ChangeStateById(stateID, ...params);
    }
    RevertToPreviousState() {
        this.FSM.RevertToPreviousState();
    }
    ChangeStateDelay(newState: import("./FSMState").default<T>, delay: number, ...params: any) {
        throw new Error("Method not implemented.");
    }
    ChangeStateDelayById(stateID: number, delay: number, ...params: any) {
        throw new Error("Method not implemented.");
    }

    RegisterState(state: import("./FSMState").default<T>): import("./FSMState").default<T> {
        return this.FSM.RegisterState(state);
    }
    UnregisterState(state: import("./FSMState").default<T>) {
        this.FSM.UnregisterState(state);
    }
    GetCurStateID(): number {
        return this.FSM.GetCurStateID();
    }
    GetCurState(): import("./FSMState").default<T> {
        return this.FSM.GetCurState();
    }
}
