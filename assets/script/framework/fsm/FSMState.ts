export default abstract class FSMState<T> {

    protected entity : T;

    public RegisterState(entity:T) {
        this.entity = entity;
    }

    public abstract StateID():number ;

    public Enter(...params : any){
        
    }

    public Excute(dt){}
    public LateExcute() {}
    public Exit(){}

}
