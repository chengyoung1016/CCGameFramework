"use strict";
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