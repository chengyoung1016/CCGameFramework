import {MessageType, CodeFormat} from "./IBuilder";

class IDGenerator {
  //消息ID,如果带入自增的ID，表示客户端要求服务端回复
  static msg_id : number = 1;
  private constructor() {}
  public static get(): number {
    return IDGenerator.msg_id++;
  }
}
/**
 * 网络基础抽象包定义
 */
abstract class NetBase {
  //MQTT消息ID,如果带入自增的ID，表示客户端要求服务端回复
  public _id : number;
  //Topic类型
  public _msg_code : string = MessageType.Unknown.toString();

  public constructor(need_reply : boolean, code : string){
    if(need_reply){
      this._id = IDGenerator.get()
    }
    this._msg_code = code;
  }

  public getId() : number {
    return this._id;
  }

  public getMsgCode() : string {
      return this._msg_code;
  }
  public preSerialize(){
    if(this._id > 0){
      this._msg_code = this._msg_code + "/" + this._id;
    }
  }
  // 将自己序列化为（JSON)
  abstract Serialize(format: CodeFormat) : any;
  // 将（JSON）字符串反序列化填充给自己的变量
  abstract Deserialize(format: CodeFormat, msg: any) : NetBase;
  // 将（JSON对象）反序列化填充给自己的变量
  abstract DeserializeFromObj(msg : object) : NetBase;
}
/**
 * 基础异步消息包
 */
abstract class NetBaseMessage extends NetBase {
  constructor(options: {[k: string]: any}){
    let needReply : boolean = false;
    let code : MessageType = MessageType.Unknown;
    if (!options) return;
    if (typeof options.need_reply === "boolean")
      needReply = options.need_reply;
    if (options.code)
      code = options.code;
    super(needReply, code);
  }
}
/**
 * 基础请求包
 */
abstract class NetBaseReq extends NetBase{
  Deserialize(format: CodeFormat, msg: any) :NetBase {
      throw new Error("Method not implemented.");
  }
  DeserializeFromObj(msg: object): NetBase {
      throw new Error("Method not implemented.");
  }
}
/**
 * 基础请求包
 */
abstract class NetBaseRespNtf extends NetBase{
    public _error : string;
    public _traceId : string;
    public result : any;
    constructor(msgId: number, msgCode: string) {
      super(false, msgCode)
      this._id = msgId;
    }
    public getError() : string {
      return this._error;
    }
    public setError(error: string) {
      this._error = error;
    }
    public setTraceId(traceId: string) {
      this._traceId = traceId;
    }
    public getTraceId() : string {
      return this._traceId;
    }
    public setResult(result: any) {
      this.result = result;
    }
    public getResult() : any {
      return this.result;
    }
    Serialize(format: CodeFormat): any{
      throw new Error("Method not implemented.");
    }
    DeserializeFromObj(msg: object): NetBase {
      throw new Error("Method not implemented.");
    }
}
function replacer(key : string, value :any)
{
    if (key.charAt(0) == '_') return undefined;
    else return value;
}

export {IDGenerator, NetBase, NetBaseMessage, NetBaseReq, NetBaseRespNtf}
