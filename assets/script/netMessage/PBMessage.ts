import * as jwt from "../tools/jwtSimple/JwtSimple";
import {Buffer} from "../tools/buffer/index";
import {MessageType, CodeFormat} from "./IBuilder";
import {message as tkmessage, google, jubian}  from "../tools/pbProto/bundle.js";
import {IDGenerator, NetBaseMessage, NetBaseReq, NetBaseRespNtf} from "./Message";
import TKLog from "../framework/log/TKLog";
import Singleton from "../framework/utils/Singleton";

class JWTBuilder extends Singleton {
    salt: string = "123";//盐值
    clientId: string = "f151c83c6d9aff7beaad33f3c6de0388";//客户端用户标识
    tokenSecret: string = ""
        // _method: string = "/auth/verify-token";//调用方法
    /**
     * 初始化函数
     * @param salt 登录后得到的盐值
     * @param clientId 客户的唯一标识
     * @param tokenSecret 客户的token值
     */
    public init(salt, clientId, tokenSecret: string) {
        this.salt = salt;
        this.clientId = clientId;
        this.tokenSecret = tokenSecret;
    }
    public getJwtToken(method: string): string {
        let now: number = Math.floor(Date.now()/1000);
        let payload = {
            iat: now,
            exp: now + 30,
            salt: this.salt,
            mtd: method,
            jti: IDGenerator.get().toString()
        };
        let options = {
            header:{id:this.clientId}
        };
        // HS256 secrets are typically 128-bit random strings, for example hex-encoded:
        // var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex')
        return jwt.encode(payload, this.tokenSecret, 'HS256', options)
    }
}

abstract class WrapMessageResp {
    protected _msg : Message | Resp = null
    constructor(msg : Message | Resp) {
        this._msg = msg;
    }

    getResult() : any {
        if(this._msg instanceof Message){
            if(this._msg && this._msg.message && this._msg.message.dat) {
                return this.decodeData(this._msg.message.dat.value);
            }
        }else if(this._msg instanceof Resp){
            if(this._msg && this._msg.response && this._msg.response.dat) {
                return this.decodeData(this._msg.response.dat.value);
            }
        }
        return null;
    }

    protected abstract decodeData(crudeDat : any) : any;
}

abstract class WrapReq<T extends {}> extends NetBaseReq {

    protected _ReqBody : T = null
    abstract getProtoClassName() : string;
    public get body() : T {
        return this._ReqBody
    }
    request : tkmessage.Request = null;
    

    public setJwtToken(token : string) {
        if(this.request == null){
            this.request = new tkmessage.Request({})
        }
        this.request.jwt_token = token
    }
    Serialize(format: CodeFormat): any {
        if(this.body == null){
            TKLog.LogWarn(this.getMsgCode() + "消息没有body")
            // return null
        }
        if (this.request == null) {
            this.request = new tkmessage.Request({})
        }
        if(this.body != null){
            this.request.dat = pack(this.body, this.getProtoClassName())
        }else{
            this.request.dat = null
        }
        super.preSerialize();
        if (format == CodeFormat.Protobuf) {
            let bytes = tkmessage.Request.encode(this.request).finish()
            let buf = Buffer.from(bytes);
            return buf;
        }
        return JSON.stringify(this.request.toJSON());
    }

}

// 这个Req用于比较灵活的情况，大部分时候客户端协议继承上面的WrapReq实现
// 这个暂时不推荐使用
class Req extends NetBaseReq{
    request : tkmessage.Request = null;
    constructor(code : MessageType, anyDat: google.protobuf.Any|null){
        super(true, code)
        this.request = new tkmessage.Request({version:"1.0.0"});
        this.request.dat = anyDat;
        console.log(this.request);
    }
    public setJwtToken(token : string) {
        if (this.request != null) {
            this.request.jwt_token = token
        }
    }
    Serialize(format: CodeFormat): any {
        if (this.request == null) {
            console.log("cann't serialize empty request");
            return null;
        }
        super.preSerialize();
        console.log(this.request);
        if (format == CodeFormat.Protobuf) {
            let bytes = tkmessage.Request.encode(this.request).finish()
            let buf = Buffer.from(bytes);
            return buf;
        }
        return JSON.stringify(this.request.toJSON());
    }
}

class Resp extends NetBaseRespNtf{
    public response : tkmessage.Response = null;

    public getError() : string {
        if (this.response != null)
            return this.response.message;
        return "";
    }
    public getErrorCode() : number {
        if (this.response != null)
            return this.response.err;
        return 0;
    }
    public getTraceId() : string {
        if (this.response != null)
            return this.response.trace_id;
        return "";
    }
    public getResult() : any {
        if (this.result == null)
        {
            if (this.response && this.response.dat)
            {
                this.result = unpack(this.response.dat);
            }
        }
        return this.result;
    }
    Deserialize(format: CodeFormat, payload: Uint8Array): NetBaseRespNtf {
      try {
        // let data = StringToUint8Array(payload);
        if (format == CodeFormat.Protobuf)
            this.response = tkmessage.Response.decode(payload);
        else {
            let json = JSON.parse(payload.toString());
            this.response = tkmessage.Response.fromObject(json)
        }
        // this.setError(this.response.message);
        // this.setTraceId(this.response.trace_id);
      } catch (e) {
        TKLog.LogWarn("parse Message " + payload + " 异常" + e);
      }
      return this
    }
}

class Message extends NetBaseMessage {
    public dat: any = null;
    public message: tkmessage.Message = null;
    constructor(options: {[k: string]: any}){
        super(options);
        this.message = new tkmessage.Message({});
        if (options.msgId && options.msgId > 0) {
            this.message.id = options.msgId;
        }
        if (options.type) {
            this.message.type = options.type;
        } else {
            this.message.type = tkmessage.Message.Type.EVENT_BASIC;
        }
        if (options.version) {
            this.message.version = options.version;
        }
        if (options.jwt_token) {
            this.message.jwt_token = options.jwt_token;
        }
        if (options.timestamp) {
            this.message.timestamp = options.timestamp;
        }
        if (options.dat) {
            this.message.dat = options.dat;
        }
    }
    public getMsgId():number {
        if (this.message && this.message.id) {
            return this.message.id;
        }
        return 0;
    }
    public getType():tkmessage.Message.Type {
        if (this.message && this.message.type) {
            return this.message.type;
        }
        return tkmessage.Message.Type.EVENT_BASIC;
    }
    public getVersion():string {
        if (this.message && this.message.version) {
            return this.message.version;
        }
        return "unknown";
    }
    public getJwtToken():string{
        if (this.message && this.message.jwt_token) {
            return this.message.jwt_token;
        }
        return "";
    }
    public getAnyDat():any {
        if (this.dat == null)
        {
            if (this.message && this.message.dat)
            {
                this.dat = unpack(this.message.dat);
            }
        }
        return this.dat;
    }
    public getTimestamp():google.protobuf.ITimestamp{
        if (this.message && this.message.timestamp) {
            return this.message.timestamp;
        }
        return null;
    }

    Serialize(format: CodeFormat): any {
        super.preSerialize()
        console.log(this.message);
        if (format == CodeFormat.Protobuf)
        {
            let bytes = tkmessage.Message.encode(this.message).finish()
            let buf = Buffer.from(bytes);
            return buf;
        }
        return JSON.stringify(this.message.toJSON());
    }
    Deserialize(format: CodeFormat, payload: Uint8Array): NetBaseMessage {
        try {
          // let data = StringToUint8Array(payload);
          if (format == CodeFormat.Protobuf)
              this.message = tkmessage.Message.decode(payload);
          else {
              let json = JSON.parse(payload.toString());
              this.message = tkmessage.Message.fromObject(json)
          }
        } catch (e) {
          TKLog.LogWarn("parse Message " + payload + " 异常" + e);
        }
        return this
    }
    DeserializeFromObj(msg: object): NetBaseMessage {
        throw new Error("Method not implemented.");
    }
}



const pack = (anyDat: any, protoClassName: string) => {
    return new google.protobuf.Any({
      type_url: protoClassName || anyDat.constructor.name,
      value: anyDat.constructor.encode(anyDat).finish(),
    });
  };

const unpack = (any: google.protobuf.IAny) => {
    if (!any) return "";
    console.log("unpack any:"+ any.type_url);
    switch (any.type_url) {
        case 'tkmessage/stringValue':
            return String.fromCharCode.apply(String, any.value);
        case 'tkmessage/jubian.model.StringRequest':
            return String.fromCharCode.apply(String, any.value);
        case 'tkmessage/message.EventBasic':
            return tkmessage.EventBasic.decode(any.value);
        case 'tkmessage/jubian.golottery.model.profile.Profile':
            return jubian.golottery.model.profile.Profile.decode(any.value);
        case 'tkmessage/jubian.golottery.srv.oauth2.Token':
            return jubian.golottery.srv.oauth2.Token.decode(any.value);
        case 'tkmessage/jubian.golottery.srv.room.TableInfo':
            return jubian.golottery.srv.room.TableInfo.decode(any.value);
            // case 'tkmessage/message.SimpleStruct':
        //     return tkmessage.SimpleStruct.decode(any.value);
        default:
            return google.protobuf.Any.decode(any.value);
    }
};

export {Message, WrapReq, WrapMessageResp, Req, Resp, JWTBuilder, pack, unpack}