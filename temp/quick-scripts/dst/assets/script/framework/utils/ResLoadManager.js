
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/utils/ResLoadManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9d1cIXZMhOQKAtBh0tMSL2', 'ResLoadManager');
// script/framework/utils/ResLoadManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("./Singleton");
var TKLog_1 = require("../log/TKLog");
var ResLoadManager = /** @class */ (function (_super) {
    __extends(ResLoadManager, _super);
    function ResLoadManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 动态加载资源
     * @param path 指定路径
     * @param type 指定类型
     */
    ResLoadManager.prototype.LoadRes = function (path, type) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (res) {
                            TKLog_1.default.LogInfo("ResLoadManager开始载入资源:", path);
                            cc.resources.load(path, type, function (err, resource) {
                                if (err != null) {
                                    TKLog_1.default.LogWarn("载入资源失败：", path, ":", err);
                                    res(null);
                                }
                                else {
                                    res(resource);
                                }
                            });
                        }).catch(function (e) {
                            TKLog_1.default.LogErr("ResLoadManager.LoadRes Err:" + e);
                            throw new Error("ResLoadManager.LoadRes Err:" + e);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 加载指定目录下所有资源
     * @param path 指定目录路径
     * @param type 加载资源类型  有则为指定该类型  无则为该目录下所有类型资源
     */
    ResLoadManager.prototype.LoadResDir = function (path, type) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (res) {
                            if (type) {
                                cc.resources.loadDir(path, function (err, resource) {
                                    if (err != null) {
                                        TKLog_1.default.LogWarn("载入资源失败：", path, ":", err);
                                        res(null);
                                    }
                                    else {
                                        res(resource);
                                    }
                                });
                            }
                            else {
                                cc.resources.loadDir(path, type, function (err, resource) {
                                    if (err != null) {
                                        TKLog_1.default.LogWarn("载入资源失败：", path, ":", err);
                                        res(null);
                                    }
                                    else {
                                        res(resource);
                                    }
                                });
                            }
                        }).catch(function (e) {
                            TKLog_1.default.LogErr("ResLoadManager.LoadResDir Err:" + e);
                            throw new Error("ResLoadManager.LoadResDir Err:" + e);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 查询资源加载完成后返回的paths列表
     * @param path 指定加载资源的路径
     * @param type 指定加载资源的类型
     */
    ResLoadManager.prototype.InquirePathInfo = function (path, type) {
        var infos = cc.resources.getDirWithPath(path, type);
        var paths = infos.map(function (info) {
            return info.path;
        });
        return paths;
    };
    /**
     * 加载远程资源
     * @param url 远程资源地址
     * @param type 远程资源类型
     */
    ResLoadManager.prototype.LoadRemoteRes = function (url, type) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (res) {
                            cc.assetManager.loadRemote(url, function (err, asset) {
                                if (err) {
                                    TKLog_1.default.LogWarn("load remote res failed:", err);
                                }
                                else {
                                    res(asset);
                                }
                            });
                        }).catch(function (e) {
                            TKLog_1.default.LogErr("load remote res failed:" + e);
                            throw new Error("load remote res failed:" + e);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 加载远程图片资源
     * @param url 远程图片地址
     */
    ResLoadManager.prototype.LoadRemoteImage = function (url) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (res) {
                            cc.assetManager.loadRemote(url, function (err, texture) {
                                if (err) {
                                    TKLog_1.default.LogWarn("load remote image failel:", err);
                                }
                                else {
                                    res(texture);
                                }
                            });
                        }).catch(function (e) {
                            TKLog_1.default.LogErr("load remote iamge failed:" + e);
                            throw new Error("load remote iamge failed:" + e);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 加载远程音频资源
     * @param url 远程音频资源地址
     */
    ResLoadManager.prototype.LoadRemoteAudioClip = function (url) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (res) {
                            cc.assetManager.loadRemote(url, function (err, audioClip) {
                                if (err) {
                                    TKLog_1.default.LogWarn("load remote image failel:", err);
                                }
                                else {
                                    res(audioClip);
                                }
                            });
                        }).catch(function (e) {
                            TKLog_1.default.LogErr("load remote iamge failed:" + e);
                            throw new Error("load remote iamge failed:" + e);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 加载远程文本资源
     * @param url 远程文本资源地址
     */
    ResLoadManager.prototype.LoadRemoteText = function (url) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (res) {
                            cc.assetManager.loadRemote(url, function (err, text) {
                                if (err) {
                                    TKLog_1.default.LogWarn("load remote image failel:", err);
                                }
                                else {
                                    res(text);
                                }
                            });
                        }).catch(function (e) {
                            TKLog_1.default.LogErr("load remote iamge failed:" + e);
                            throw new Error("load remote iamge failed:" + e);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 资源释放
     * @param asset 待释放资源
     */
    ResLoadManager.prototype.ReleaseAsset = function (asset) {
        cc.assetManager.releaseAsset(asset);
    };
    ResLoadManager.prototype.ReleaseAll = function () {
        cc.assetManager.releaseAll();
    };
    /**
     * 动态加载资源的释放
     * @param path 待释放资源路径
     * @param type 待释放资源类型
     */
    ResLoadManager.prototype.ReleaseRes = function (path, type) {
        cc.resources.release(path, type);
    };
    ResLoadManager.prototype.LoadSpriteInAtlas = function (atlasPath, spriteName) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (res) {
                            cc.resources.load(atlasPath, cc.SpriteAtlas, function (err, resource) {
                                if (err != null) {
                                    // TKLog.LogWarn(`载入资源失败, path=${path}, err=${err}`);
                                    TKLog_1.default.LogWarn("载入图集资源失败：", atlasPath, ":", err);
                                    res(null);
                                }
                                else {
                                    res(resource.getSpriteFrame(spriteName));
                                }
                            });
                        }).catch(function (e) {
                            TKLog_1.default.LogErr("ResLoadManager.LoadSpriteInAtlas Err:" + e);
                            throw new Error("ResLoadManager.LoadSpriteInAtlas Err:" + e);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ResLoadManager;
}(Singleton_1.default));
exports.default = ResLoadManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3V0aWxzL1Jlc0xvYWRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFtQztBQUNuQyxzQ0FBaUM7QUFHakM7SUFBNEMsa0NBQVM7SUFBckQ7O0lBdUxBLENBQUM7SUF0TEc7Ozs7T0FJRztJQUNHLGdDQUFPLEdBQWIsVUFBeUMsSUFBdUIsRUFBRSxJQUFPO3VDQUFHLE9BQU87Ozs0QkFDeEUscUJBQU0sSUFBSSxPQUFPLENBQWtCLFVBQUMsR0FBRzs0QkFDMUMsZUFBSyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQTs0QkFDNUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFDLEdBQVUsRUFBRSxRQUF5QjtnQ0FDaEUsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO29DQUNiLGVBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7b0NBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQ0FDYjtxQ0FBSTtvQ0FDRCxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7aUNBQ2pCOzRCQUNMLENBQUMsQ0FBQyxDQUFBO3dCQUNOLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLENBQUM7NEJBQ04sZUFBSyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDaEQsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDdkQsQ0FBQyxDQUFDLEVBQUE7NEJBYkYsc0JBQU8sU0FhTCxFQUFBOzs7O0tBQ0w7SUFFRDs7OztPQUlHO0lBQ0csbUNBQVUsR0FBaEIsVUFB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LFdBQVcsRUFBRSxVQUFDLEdBQUcsRUFBRSxRQUFRO2dDQUN2RCxJQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUM7b0NBQ1gscURBQXFEO29DQUNyRCxlQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29DQUNoRCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7aUNBQ2I7cUNBQUk7b0NBQ0QsR0FBRyxDQUFFLFFBQTJCLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7aUNBQy9EOzRCQUNMLENBQUMsQ0FBQyxDQUFBO3dCQUNOLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLENBQUM7NEJBQ04sZUFBSyxDQUFDLE1BQU0sQ0FBQyx1Q0FBdUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDMUQsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDakUsQ0FBQyxDQUFDLEVBQUE7NEJBYkYsc0JBQU8sU0FhTCxFQUFBOzs7O0tBQ0w7SUFFTCxxQkFBQztBQUFELENBdkxBLEFBdUxDLENBdkwyQyxtQkFBUyxHQXVMcEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uIGZyb20gXCIuL1NpbmdsZXRvblwiXG5pbXBvcnQgVEtMb2cgZnJvbSBcIi4uL2xvZy9US0xvZ1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc0xvYWRNYW5hZ2VyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiDliqjmgIHliqDovb3otYTmupBcbiAgICAgKiBAcGFyYW0gcGF0aCDmjIflrprot6/lvoRcbiAgICAgKiBAcGFyYW0gdHlwZSDmjIflrprnsbvlnotcbiAgICAgKi9cbiAgICBhc3luYyBMb2FkUmVzPFQgZXh0ZW5kcyB0eXBlb2YgY2MuQXNzZXQ+KHBhdGg6IHN0cmluZyB8IHN0cmluZ1tdLCB0eXBlOiBUKTogUHJvbWlzZTxJbnN0YW5jZVR5cGU8VD4+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlPEluc3RhbmNlVHlwZTxUPj4oKHJlcykgPT4ge1xuICAgICAgICAgICAgVEtMb2cuTG9nSW5mbyhcIlJlc0xvYWRNYW5hZ2Vy5byA5aeL6L295YWl6LWE5rqQOlwiLCBwYXRoKVxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgdHlwZSwgKGVycjogRXJyb3IsIHJlc291cmNlOiBJbnN0YW5jZVR5cGU8VD4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgVEtMb2cuTG9nV2FybihcIui9veWFpei1hOa6kOWksei0pe+8mlwiLCBwYXRoLCBcIjpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzKG51bGwpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICByZXMocmVzb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKGU9PntcbiAgICAgICAgICAgIFRLTG9nLkxvZ0VycihcIlJlc0xvYWRNYW5hZ2VyLkxvYWRSZXMgRXJyOlwiICsgZSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXNMb2FkTWFuYWdlci5Mb2FkUmVzIEVycjpcIiArIGUpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9veaMh+WumuebruW9leS4i+aJgOaciei1hOa6kFxuICAgICAqIEBwYXJhbSBwYXRoIOaMh+WumuebruW9lei3r+W+hFxuICAgICAqIEBwYXJhbSB0eXBlIOWKoOi9vei1hOa6kOexu+WeiyAg5pyJ5YiZ5Li65oyH5a6a6K+l57G75Z6LICDml6DliJnkuLror6Xnm67lvZXkuIvmiYDmnInnsbvlnovotYTmupBcbiAgICAgKi9cbiAgICBhc3luYyBMb2FkUmVzRGlyPFQgZXh0ZW5kcyB0eXBlb2YgY2MuQXNzZXQ+KHBhdGg6IHN0cmluZywgdHlwZT86IFQpOiBQcm9taXNlPEluc3RhbmNlVHlwZTxUPj4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2U8SW5zdGFuY2VUeXBlPFQ+PigocmVzKSA9PiB7XG4gICAgICAgICAgICBpZih0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIocGF0aCwgKGVyciwgcmVzb3VyY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRLTG9nLkxvZ1dhcm4oXCLovb3lhaXotYTmupDlpLHotKXvvJpcIiwgcGF0aCwgXCI6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMocmVzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIocGF0aCwgdHlwZSwgKGVyciwgcmVzb3VyY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRLTG9nLkxvZ1dhcm4oXCLovb3lhaXotYTmupDlpLHotKXvvJpcIiwgcGF0aCwgXCI6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMocmVzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICBUS0xvZy5Mb2dFcnIoXCJSZXNMb2FkTWFuYWdlci5Mb2FkUmVzRGlyIEVycjpcIiArIGUpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVzTG9hZE1hbmFnZXIuTG9hZFJlc0RpciBFcnI6XCIgKyBlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmn6Xor6LotYTmupDliqDovb3lrozmiJDlkI7ov5Tlm57nmoRwYXRoc+WIl+ihqFxuICAgICAqIEBwYXJhbSBwYXRoIOaMh+WumuWKoOi9vei1hOa6kOeahOi3r+W+hFxuICAgICAqIEBwYXJhbSB0eXBlIOaMh+WumuWKoOi9vei1hOa6kOeahOexu+Wei1xuICAgICAqL1xuICAgIElucXVpcmVQYXRoSW5mbyhwYXRoOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCk6IHN0cmluZ1tdIHtcbiAgICAgICAgbGV0IGluZm9zID0gY2MucmVzb3VyY2VzLmdldERpcldpdGhQYXRoKHBhdGgsIHR5cGUpO1xuICAgICAgICBsZXQgcGF0aHMgPSBpbmZvcy5tYXAoKGluZm8pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbmZvLnBhdGg7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGF0aHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L296L+c56iL6LWE5rqQXG4gICAgICogQHBhcmFtIHVybCDov5znqIvotYTmupDlnLDlnYBcbiAgICAgKiBAcGFyYW0gdHlwZSDov5znqIvotYTmupDnsbvlnotcbiAgICAgKi9cbiAgICBhc3luYyBMb2FkUmVtb3RlUmVzPFQgZXh0ZW5kcyB0eXBlb2YgY2MuQXNzZXQ+KHVybDogc3RyaW5nLCB0eXBlOiBUKTogUHJvbWlzZTxJbnN0YW5jZVR5cGU8VD4+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlPEluc3RhbmNlVHlwZTxUPj4ocmVzID0+IHtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHVybCwgKGVycjogRXJyb3IsIGFzc2V0OiBJbnN0YW5jZVR5cGU8VD4pID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgVEtMb2cuTG9nV2FybihcImxvYWQgcmVtb3RlIHJlcyBmYWlsZWQ6XCIsIGVycilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXMoYXNzZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgVEtMb2cuTG9nRXJyKFwibG9hZCByZW1vdGUgcmVzIGZhaWxlZDpcIiArIGUpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibG9hZCByZW1vdGUgcmVzIGZhaWxlZDpcIiArIGUpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9vei/nOeoi+WbvueJh+i1hOa6kFxuICAgICAqIEBwYXJhbSB1cmwg6L+c56iL5Zu+54mH5Zyw5Z2AXG4gICAgICovXG4gICAgYXN5bmMgTG9hZFJlbW90ZUltYWdlKHVybDogc3RyaW5nKTogUHJvbWlzZTxjYy5UZXh0dXJlMkQ+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlPGNjLlRleHR1cmUyRD4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUodXJsLCAoZXJyOiBFcnJvciwgdGV4dHVyZTogY2MuVGV4dHVyZTJEKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIFRLTG9nLkxvZ1dhcm4oXCJsb2FkIHJlbW90ZSBpbWFnZSBmYWlsZWw6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzKHRleHR1cmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgVEtMb2cuTG9nRXJyKFwibG9hZCByZW1vdGUgaWFtZ2UgZmFpbGVkOlwiICsgZSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJsb2FkIHJlbW90ZSBpYW1nZSBmYWlsZWQ6XCIgKyBlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb3ov5znqIvpn7PpopHotYTmupBcbiAgICAgKiBAcGFyYW0gdXJsIOi/nOeoi+mfs+mikei1hOa6kOWcsOWdgFxuICAgICAqL1xuICAgIGFzeW5jIExvYWRSZW1vdGVBdWRpb0NsaXAodXJsOiBzdHJpbmcpOiBQcm9taXNlPGNjLkF1ZGlvQ2xpcD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2U8Y2MuQXVkaW9DbGlwPigocmVzKSA9PiB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZSh1cmwsIChlcnI6IEVycm9yLCBhdWRpb0NsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycikge1xuICAgICAgICAgICAgICAgICAgICBUS0xvZy5Mb2dXYXJuKFwibG9hZCByZW1vdGUgaW1hZ2UgZmFpbGVsOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyhhdWRpb0NsaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgVEtMb2cuTG9nRXJyKFwibG9hZCByZW1vdGUgaWFtZ2UgZmFpbGVkOlwiICsgZSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJsb2FkIHJlbW90ZSBpYW1nZSBmYWlsZWQ6XCIgKyBlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb3ov5znqIvmlofmnKzotYTmupBcbiAgICAgKiBAcGFyYW0gdXJsIOi/nOeoi+aWh+acrOi1hOa6kOWcsOWdgFxuICAgICAqL1xuICAgIGFzeW5jIExvYWRSZW1vdGVUZXh0KHVybDogc3RyaW5nKTogUHJvbWlzZTxjYy5UZXh0QXNzZXQ+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlPGNjLlRleHRBc3NldD4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUodXJsLCAoZXJyOiBFcnJvciwgdGV4dDogY2MuVGV4dEFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIFRLTG9nLkxvZ1dhcm4oXCJsb2FkIHJlbW90ZSBpbWFnZSBmYWlsZWw6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzKHRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgVEtMb2cuTG9nRXJyKFwibG9hZCByZW1vdGUgaWFtZ2UgZmFpbGVkOlwiICsgZSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJsb2FkIHJlbW90ZSBpYW1nZSBmYWlsZWQ6XCIgKyBlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDotYTmupDph4rmlL5cbiAgICAgKiBAcGFyYW0gYXNzZXQg5b6F6YeK5pS+6LWE5rqQXG4gICAgICovXG4gICAgUmVsZWFzZUFzc2V0KGFzc2V0OiBjYy5Bc3NldCkge1xuICAgICAgICBjYy5hc3NldE1hbmFnZXIucmVsZWFzZUFzc2V0KGFzc2V0KTtcbiAgICB9XG5cbiAgICBSZWxlYXNlQWxsKCkge1xuICAgICAgICBjYy5hc3NldE1hbmFnZXIucmVsZWFzZUFsbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKqOaAgeWKoOi9vei1hOa6kOeahOmHiuaUvlxuICAgICAqIEBwYXJhbSBwYXRoIOW+hemHiuaUvui1hOa6kOi3r+W+hFxuICAgICAqIEBwYXJhbSB0eXBlIOW+hemHiuaUvui1hOa6kOexu+Wei1xuICAgICAqL1xuICAgIFJlbGVhc2VSZXMocGF0aDogc3RyaW5nLCB0eXBlOiB0eXBlb2YgY2MuQXNzZXQpIHtcbiAgICAgICAgY2MucmVzb3VyY2VzLnJlbGVhc2UocGF0aCwgdHlwZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgTG9hZFNwcml0ZUluQXRsYXMoYXRsYXNQYXRoIDogc3RyaW5nLCBzcHJpdGVOYW1lIDogc3RyaW5nKSA6IFByb21pc2U8Y2MuU3ByaXRlRnJhbWU+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlPGNjLlNwcml0ZUZyYW1lPihyZXM9PntcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGF0bGFzUGF0aCwgY2MuU3ByaXRlQXRsYXMsIChlcnIsIHJlc291cmNlKSA9PntcbiAgICAgICAgICAgICAgICBpZihlcnIgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRLTG9nLkxvZ1dhcm4oYOi9veWFpei1hOa6kOWksei0pSwgcGF0aD0ke3BhdGh9LCBlcnI9JHtlcnJ9YCk7XG4gICAgICAgICAgICAgICAgICAgIFRLTG9nLkxvZ1dhcm4oXCLovb3lhaXlm77pm4botYTmupDlpLHotKXvvJpcIiwgYXRsYXNQYXRoLCBcIjpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzKG51bGwpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICByZXMoKHJlc291cmNlIGFzIGNjLlNwcml0ZUF0bGFzKS5nZXRTcHJpdGVGcmFtZShzcHJpdGVOYW1lKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS5jYXRjaChlPT57XG4gICAgICAgICAgICBUS0xvZy5Mb2dFcnIoXCJSZXNMb2FkTWFuYWdlci5Mb2FkU3ByaXRlSW5BdGxhcyBFcnI6XCIgKyBlKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlc0xvYWRNYW5hZ2VyLkxvYWRTcHJpdGVJbkF0bGFzIEVycjpcIiArIGUpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbn1cbiJdfQ==