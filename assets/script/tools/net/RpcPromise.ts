import {NetBase} from "../../netMessage/Message";
import {CodeFormat} from "../../netMessage/IBuilder";
import Singleton from "../../framework/utils/Singleton";

const promiseTimeout = function <T>(ms, promise){
    let id = null;
    // Create a promise that rejects in <ms> milliseconds
    let timeout = new Promise<T>((resolve, reject) => {
        id = setTimeout(() => {
        clearTimeout(id);
        reject('Timed out in '+ ms + 'ms.');
        }, ms);
    }); 
    // Returns a race between our timeout and the passed in promise
    // 本来在finnaly()clearTimeout可以及时清除定时器，但考虑浏览器兼容性，留一个可能泄漏的缺陷。
    return Promise.race([
        promise,
        timeout
        ]).then(result => {
            clearTimeout(id);
            return result;
        });
}

const {ccclass, property} = cc._decorator;

@ccclass
class TKStream extends Singleton {
    queue = {};
    client: any;
    timeout: number;
    format: CodeFormat;
    init(client: any, timeout: number, format: CodeFormat) {
        this.format = format;
        this.client = client;
        this.timeout = timeout;
    }
    public doSend(packet: NetBase) {
        let content = packet.Serialize(CodeFormat.Protobuf);
        // console.log("publish ", packet.getMsgCode(), content.length);
        this.client.publish(packet.getMsgCode(), content);
    }
    public send(packet: NetBase): Promise<any> {
        let id = packet.getId();
        // TKLog.LogInfo("Send Packet withId:" + id);
        if (typeof id == 'undefined' || id <= 0) {
            this.doSend(packet);
            return new Promise((resolve) =>{
                resolve(null);
            });
        }
        let self = this;
        let job = new Promise((resolve, reject) => {
            self.doSend(packet);
            self.queue[id] = {
                type: packet.getMsgCode(),
                volatile:false,
                req: packet,
                resolve: resolve,
                reject: reject
            };
        });
        return this.wrapTimeout(id, job, this.timeout);
    }
    public onPacket(msgId: number, packet: NetBase) {
        
        let request = this.queue[msgId] ? this.queue[msgId] : null;
        if (request) {
            request.resolve(packet);
            delete this.queue[msgId];
        }
    }

    public onPacketError(msgId: number, error: Error) {
        let request = this.queue[msgId] ? this.queue[msgId] : null;
        if (request) {

            request.reject(error);
            delete this.queue[msgId];
        }
    }
    /**
     * 生成带超时功能的Promise
     * @param number msgId
     * @param Promise packet
     * @param NetBase packet
     */    
    public wrapTimeout (msgId: number, promise: Promise<any>, ms: number): Promise<any> {
        let id;
        let self = this;
        // Create a promise that rejects in <ms> milliseconds
        let timeout = new Promise((resolve, reject) => {
            id = setTimeout(() => {
                console.log('Timed out in '+ ms + 'ms.');
                clearTimeout(id);
                reject('Timed out in '+ ms + 'ms.');
                console.log('delete job NO:'+ msgId);
                delete self.queue[msgId];
            }, ms);
        }); 
        // Returns a race between our timeout and the passed in promise
        // 本来在finnaly()clearTimeout可以及时清除定时器，但考虑浏览器兼容性，留一个可能泄漏的缺陷。
        return Promise.race([
            promise,
            timeout
            ]).then(result => {
                clearTimeout(id);
                return result;
            });
    }
}

export default TKStream