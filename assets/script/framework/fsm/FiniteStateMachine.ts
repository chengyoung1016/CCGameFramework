import FSMState from "./FSMState";

export default class FiniteStateMachine<T> {
    private Owner : T;
    private CurrentState : FSMState<T>;
    private PreviousState : FSMState<T>;
    private GlobalState : FSMState<T>;

    private stateRef : {[index:number]:FSMState<T>} = {};

    public onLoad(){
        this.CurrentState = null;
        this.PreviousState = null;
        this.GlobalState = null;
    }

    constructor(owner : T){
        this.Owner = owner;
    }

    public Update(dt){
        if(this.GlobalState != null){
            this.GlobalState.Excute(dt);
        }
        if(this.CurrentState != null){
            this.CurrentState.Excute(dt);
        }
    }

    public LateUpdate(){
        if(this.GlobalState != null){
            this.GlobalState.LateExcute();
        }
        if(this.CurrentState != null){
            this.CurrentState.LateExcute();
        }
    }

    public ChangeGlobalState(newGlobal : FSMState<T>, ...params : any){
        if(this.GlobalState != null){
            this.GlobalState = newGlobal;
            this.GlobalState.Enter(...params);
            return;
        }

        this.GlobalState.Exit();
        this.GlobalState = newGlobal;
        if(this.GlobalState != null){
            this.GlobalState.Enter(...params);
        }
    }

    public ChangeGlobalStateById(stateID : number, ...params){
        let state = this.stateRef[stateID];
        this.ChangeGlobalState(state, ...params);
    }

    public ChangeState(newState : FSMState<T>, ...params : any){
        this.PreviousState = this.CurrentState;
        if(this.CurrentState != null){
            this.CurrentState.Exit();
        }
        this.CurrentState = newState;

        if(this.CurrentState != null){
            this.CurrentState.Enter(...params);
        }
    }

    public RevertToPreviousState(){
        if(this.PreviousState != null){
            this.ChangeState(this.PreviousState);
        }
    }

    public ChangeStateById(stateID : number, ...params:any){
        let state = this.stateRef[stateID];
        this.ChangeState(state, ...params);
    }

    public RegisterState(state : FSMState<T>) : FSMState<T> {
        state.RegisterState(this.Owner);
        this.stateRef[state.StateID()] = state;
        return state;
    }

    public GetCurStateID() : number {
        if(this.CurrentState != null){
            return this.CurrentState.StateID();
        }
        return 0;
    }

    public GetCurState() : FSMState<T> {
        return this.CurrentState;
    }

    public UnregisterState(state : FSMState<T>){
        this.stateRef[state.StateID()] = null;
    }
}
