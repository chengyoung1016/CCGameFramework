import IMessageBuilder, {MessageType, CodeFormat} from "./IBuilder";
import * as msg from "./Message";
import * as pb from "./PBMessage";
import Singleton from "../framework/utils/Singleton";

export default class MessageBuilder extends Singleton implements IMessageBuilder{
  format: CodeFormat = CodeFormat.Protobuf;
  init(format: CodeFormat) {
    this.format = format;
  }
  BuildMessage(topic : string, id: number, payload: Uint8Array): msg.NetBaseMessage {
    return new pb.Message({'id':id, 'code': topic}).Deserialize(this.format, payload);
  }
  BuildRequest(topic : string): msg.NetBaseReq {
    return null;
  }
  BuildResponse(topic: string, id: number, payload: Uint8Array) :msg.NetBaseRespNtf {
    switch (topic) {
      default:
      return new pb.Resp(id, topic).Deserialize(this.format, payload);
      //msg.SayResp(id).Deserialize(this.format, payload);
    }
  }
}