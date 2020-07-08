import FSMState from "./FSMState";

export default interface IFSM<T> {

    FSMInit();
    FSMUpdate(dt);
    FSMLateUpdate();
    ChangeGlobalState(newState : FSMState<T>, ...params:any);
    ChangeGlobalStateById(stateID : number, ...params:any);
    ChangeState(newState : FSMState<T>, ...params:any);
    ChangeStateById(stateID : number, ...params:any);
    RevertToPreviousState();
    ChangeStateDelay(newState : FSMState<T>, delay : number, ...params:any);
    ChangeStateDelayById(stateID : number, delay : number, ...params:any);
    RegisterState(state : FSMState<T>) : FSMState<T>;
    UnregisterState(state : FSMState<T>);
    GetCurStateID() : number;
    GetCurState() : FSMState<T>;

}
