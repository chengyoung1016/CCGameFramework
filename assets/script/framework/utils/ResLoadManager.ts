import Singleton from "./Singleton"
import TKLog from "../log/TKLog";


export default class ResLoadManager extends Singleton {
    /**
     * 动态加载资源
     * @param path 指定路径
     * @param type 指定类型
     */
    async LoadRes<T extends typeof cc.Asset>(path: string | string[], type: T): Promise<InstanceType<T>> {
        return await new Promise<InstanceType<T>>((res) => {
            TKLog.LogInfo("ResLoadManager开始载入资源:", path)
            cc.resources.load(path, type, (err: Error, resource: InstanceType<T>) => {
                if (err != null) {
                    TKLog.LogWarn("载入资源失败：", path, ":", err);
                    res(null);
                }else{
                    res(resource);
                }
            })
        }).catch(e=>{
            TKLog.LogErr("ResLoadManager.LoadRes Err:" + e);
            throw new Error("ResLoadManager.LoadRes Err:" + e);
        })
    }

    /**
     * 加载指定目录下所有资源
     * @param path 指定目录路径
     * @param type 加载资源类型  有则为指定该类型  无则为该目录下所有类型资源
     */
    async LoadResDir<T extends typeof cc.Asset>(path: string, type?: T): Promise<InstanceType<T>> {
        return await new Promise<InstanceType<T>>((res) => {
            if(type) {
                cc.resources.loadDir(path, (err, resource) => {
                    if(err != null) {
                        TKLog.LogWarn("载入资源失败：", path, ":", err);
                        res(null);
                    } else {
                        res(resource);
                    }
                })
            } else {
                cc.resources.loadDir(path, type, (err, resource) => {
                    if(err != null) {
                        TKLog.LogWarn("载入资源失败：", path, ":", err);
                        res(null);
                    } else {
                        res(resource);
                    }
                })
            }
        }).catch(e => {
            TKLog.LogErr("ResLoadManager.LoadResDir Err:" + e);
            throw new Error("ResLoadManager.LoadResDir Err:" + e);
        })
    }

    /**
     * 查询资源加载完成后返回的paths列表
     * @param path 指定加载资源的路径
     * @param type 指定加载资源的类型
     */
    InquirePathInfo(path: string, type: typeof cc.Asset): string[] {
        let infos = cc.resources.getDirWithPath(path, type);
        let paths = infos.map((info) => {
            return info.path;
        });
        return paths;
    }

    /**
     * 加载远程资源
     * @param url 远程资源地址
     * @param type 远程资源类型
     */
    async LoadRemoteRes<T extends typeof cc.Asset>(url: string, type: T): Promise<InstanceType<T>> {
        return await new Promise<InstanceType<T>>(res => {
            cc.assetManager.loadRemote(url, (err: Error, asset: InstanceType<T>) => {
                if(err) {
                    TKLog.LogWarn("load remote res failed:", err)
                } else {
                    res(asset);
                }
            })
        }).catch(e => {
            TKLog.LogErr("load remote res failed:" + e);
            throw new Error("load remote res failed:" + e);
        })
    }

    /**
     * 加载远程图片资源
     * @param url 远程图片地址
     */
    async LoadRemoteImage(url: string): Promise<cc.Texture2D> {
        return await new Promise<cc.Texture2D>((res) => {
            cc.assetManager.loadRemote(url, (err: Error, texture: cc.Texture2D) => {
                if(err) {
                    TKLog.LogWarn("load remote image failel:", err);
                } else {
                    res(texture);
                }
            })
        }).catch(e => {
            TKLog.LogErr("load remote iamge failed:" + e);
            throw new Error("load remote iamge failed:" + e);
        })
    }

    /**
     * 加载远程音频资源
     * @param url 远程音频资源地址
     */
    async LoadRemoteAudioClip(url: string): Promise<cc.AudioClip> {
        return await new Promise<cc.AudioClip>((res) => {
            cc.assetManager.loadRemote(url, (err: Error, audioClip: cc.AudioClip) => {
                if(err) {
                    TKLog.LogWarn("load remote image failel:", err);
                } else {
                    res(audioClip);
                }
            })
        }).catch(e => {
            TKLog.LogErr("load remote iamge failed:" + e);
            throw new Error("load remote iamge failed:" + e);
        })
    }

    /**
     * 加载远程文本资源
     * @param url 远程文本资源地址
     */
    async LoadRemoteText(url: string): Promise<cc.TextAsset> {
        return await new Promise<cc.TextAsset>((res) => {
            cc.assetManager.loadRemote(url, (err: Error, text: cc.TextAsset) => {
                if(err) {
                    TKLog.LogWarn("load remote image failel:", err);
                } else {
                    res(text);
                }
            })
        }).catch(e => {
            TKLog.LogErr("load remote iamge failed:" + e);
            throw new Error("load remote iamge failed:" + e);
        })
    }

    /**
     * 资源释放
     * @param asset 待释放资源
     */
    ReleaseAsset(asset: cc.Asset) {
        cc.assetManager.releaseAsset(asset);
    }

    ReleaseAll() {
        cc.assetManager.releaseAll();
    }

    /**
     * 动态加载资源的释放
     * @param path 待释放资源路径
     * @param type 待释放资源类型
     */
    ReleaseRes(path: string, type: typeof cc.Asset) {
        cc.resources.release(path, type);
    }

    async LoadSpriteInAtlas(atlasPath : string, spriteName : string) : Promise<cc.SpriteFrame> {
        return await new Promise<cc.SpriteFrame>(res=>{
            cc.resources.load(atlasPath, cc.SpriteAtlas, (err, resource) =>{
                if(err != null){
                    // TKLog.LogWarn(`载入资源失败, path=${path}, err=${err}`);
                    TKLog.LogWarn("载入图集资源失败：", atlasPath, ":", err);
                    res(null);
                }else{
                    res((resource as cc.SpriteAtlas).getSpriteFrame(spriteName))
                }
            })
        }).catch(e=>{
            TKLog.LogErr("ResLoadManager.LoadSpriteInAtlas Err:" + e);
            throw new Error("ResLoadManager.LoadSpriteInAtlas Err:" + e);
        })
    }
    
}
