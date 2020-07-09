const {ccclass, property} = cc._decorator;

@ccclass
export default class NetMessageError {
    // 错误码,如果没有错误则为0
    public err : number;
    // 错误提示，如果没有错误则为 “”
    public message : string;

    constructor(err : number, message : string){
        this.err = err;
        this.message = message;
    }
}
