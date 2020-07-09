
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/utils/ToolsUseful.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9c961anV79DMrgMxNXkMTC3', 'ToolsUseful');
// script/framework/utils/ToolsUseful.ts

"use strict";
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
var TKLog_1 = require("../log/TKLog");
var ObjectPoolController_1 = require("../pool/ObjectPoolController");
var ToolsUseful = /** @class */ (function () {
    function ToolsUseful() {
    }
    /**
     * 从节点强制获取一个组件，如果该组件没有就增加一个返回
     * @param node 要获取组件的节点
     * @param componentName 组件名称
     */
    ToolsUseful.GetComponentForce = function (node, componentName) {
        var com = node.getComponent(componentName);
        if (com == null) {
            com = node.addComponent(componentName);
        }
        return com;
    };
    /**
     * 转换秒数为天，向上取整
     * @param sec 秒数
     */
    ToolsUseful.ConvertSecToDay = function (sec) {
        var x = sec / 86400; // 60 * 60 * 24
        var day = Math.ceil(x);
        return day;
    };
    /**
     * 转换秒数为天，向下取整
     * @param sec 秒数
     */
    ToolsUseful.RoundDownToDay = function (sec) {
        var x = sec / 86400;
        var day = Math.floor(x);
        return day;
    };
    /**
     * 将秒数转换为hh:mm:ss的形式
     * 比如128秒换成：00:02:08
     * @param totalSec 要转换的秒数
     */
    ToolsUseful.GenerateTotalSec_hms = function (totalSec) {
        if (totalSec <= 0) {
            return "00:00:00";
        }
        var min = Math.floor(totalSec / 60);
        var hour = Math.floor(min / 60);
        min = Math.floor((totalSec - hour * 3600) / 60);
        var sec = totalSec % 60;
        return ToolsUseful.SupplementZero(hour + "", 2) + ":" + ToolsUseful.SupplementZero(min + "", 2) + ":" + ToolsUseful.SupplementZero(sec + "", 2);
    };
    /**
     * 转换成分秒 00:00
     * @param totalSec 要转换的秒数
     */
    ToolsUseful.GenerateTotalSec_ms = function (totalSec) {
        if (totalSec <= 0) {
            return "00:00";
        }
        var min = Math.floor(totalSec / 60);
        var sec = totalSec % 60;
        return ToolsUseful.SupplementZero(min + "", 2) + ":" + ToolsUseful.SupplementZero(sec + "", 2);
    };
    /**
     * 转换成时分 00:00
     * @param totalSec 要转换的秒数
     */
    ToolsUseful.GenerateTotalSec_hm = function (totalSec) {
        if (totalSec <= 0) {
            return "00:00";
        }
        var min = Math.floor(totalSec / 60);
        var hour = Math.floor(min / 60);
        min = Math.floor((totalSec - hour * 3600) / 60);
        return ToolsUseful.SupplementZero(hour + "", 2) + ":" + ToolsUseful.SupplementZero(min + "", 2);
    };
    ToolsUseful.GenerateMinutes = function (seconds) {
        if (seconds <= 0) {
            return { hour: 0, min: 0 };
        }
        var min = Math.ceil(seconds / 60);
        var hour = Math.floor(min / 60);
        var time = {
            hour: hour,
            min: min
        };
        return time;
    };
    /**
     * 转换一个整数位字符串，每隔三位会有一个逗号，比如
     * 12345678转换为“12,345,678”
     * @param num 数字
     */
    ToolsUseful.TranslateIntToCommaString = function (num) {
        var numStr = num + "";
        if (numStr.length <= 3) {
            return numStr;
        }
        var strRes = "";
        // 排在最前面的数字有几个
        var forwardLength = numStr.length % 3;
        // 先把排在前面的加到字符串中
        for (var i = 0; i < forwardLength; ++i) {
            strRes += numStr.charAt(i);
        }
        // 来个逗号
        if (forwardLength > 0) {
            strRes += ",";
        }
        // 之后的，每隔3个数就加个逗号，当然最后一个数是不加的
        var commaIndex = 0;
        for (var i = forwardLength; i < numStr.length; ++i) {
            strRes += numStr.charAt(i);
            commaIndex++;
            if (commaIndex == 3 && i != numStr.length - 1) {
                strRes += ",";
                commaIndex = 0;
            }
        }
        return strRes;
    };
    /**
     * 将nCheckData转换为[0,nTotalData)之间的值
     * 如果nCheckData>=nTotalData,则又从0开始重新计算
     * @param checkData 要检测是数字
     * @param totalData 数字范围最大值
     */
    ToolsUseful.ClampCircleData = function (checkData, totalData) {
        if (checkData >= 0
            && checkData < totalData) {
            return checkData;
        }
        else {
            var per = Math.floor(checkData < 0 ? (checkData / totalData) - 1 : checkData / totalData);
            checkData -= per * totalData;
            return checkData;
        }
    };
    /**
     * 二维坐标转为一维索引
     * @param xpos 横坐标
     * @param ypos 纵坐标
     * @param width 横长度
     */
    ToolsUseful.CoordTranslateToIndex = function (xpos, ypos, width) {
        return ypos * width + xpos;
    };
    /**
     * 一维索引转换为二维坐标
     * @param index 一维索引
     * @param width 二维宽度
     */
    ToolsUseful.IndexTranslateToCoord = function (index, width) {
        var _a = [0, 0], xpos = _a[0], ypos = _a[1];
        ypos = Math.floor(index / width);
        xpos = index % width;
        return [xpos, ypos];
    };
    /**
     * 删除符合条件的子对象
     * 如果没有条件，就是删除所有子对象
     * @param root 根节点
     * @param destroyCondition 删除条件，如果为空表示没有条件全部删除
     */
    ToolsUseful.DestroyChildren = function (root, destroyCondition) {
        if (root == null) {
            return;
        }
        var lstChild = [];
        root.children.forEach(function (node) {
            lstChild.push(node);
        });
        for (var i = 0; i < lstChild.length; ++i) {
            if (destroyCondition == null || destroyCondition(lstChild[i])) {
                lstChild[i].setParent(null);
                lstChild[i].destroy();
            }
        }
    };
    /**
     * 删除符合条件的子对象
     * 使用内存池控制进行删除
     * @param root 根节点
     * @param destroyCondition 删除条件，如果为空表示没有条件
     */
    ToolsUseful.DestroyChildrenUsePool = function (root, destroyCondition) {
        if (root == null) {
            return;
        }
        var lstChild = [];
        root.children.forEach(function (node) {
            lstChild.push(node);
        });
        for (var i = 0; i < lstChild.length; ++i) {
            if (destroyCondition == null || destroyCondition(lstChild[i])) {
                ObjectPoolController_1.default.Destroy(lstChild[i]);
            }
        }
    };
    /**
     * 遍历子对象进行一些操作
     * @param root 根节点
     * @param processFunc 要对子对象进行的操作
     * @param interation 是否迭代，即是否也对子对象的子对象进行操作
     */
    ToolsUseful.ProcessChildren = function (root, processFunc, interation) {
        if (root == null) {
            return;
        }
        if (processFunc == null) {
            return;
        }
        var trsChild = null;
        for (var i = 0; i < root.childrenCount; ++i) {
            trsChild = root.children[i];
            processFunc(trsChild);
            if (interation && trsChild.childrenCount > 0) {
                ToolsUseful.ProcessChildren(trsChild, processFunc, interation);
            }
        }
    };
    /**
     * 将一个值固定在01之间
     * @param value 要检测的值
     */
    ToolsUseful.Clamp01 = function (value) {
        return ToolsUseful.Clamp(value, 0, 1);
    };
    /**
     * 将一个值固定在min和max之间
     * @param value 要固定的值
     * @param min 最小值
     * @param max 最大值
     */
    ToolsUseful.Clamp = function (value, min, max) {
        if (value < min) {
            return min;
        }
        if (value > max) {
            return max;
        }
        return value;
    };
    /**
     * 检测某个数值是否在需求范围内
     * @param value 待检测的值
     * @param min 最小值
     * @param max 最大值
     */
    ToolsUseful.isValid = function (value, min, max) {
        if (value <= max && value > min) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * 将指定数字输出为指定长度，如果不够则前面补0；如果已经超出则不管
     * @param num 要检测的数字
     * @param length 要输出的长度
     */
    ToolsUseful.SupplementZero = function (num, length) {
        if ((num + "").length >= length) {
            return num.toString();
        }
        return ToolsUseful.SupplementZero("0" + num, length);
    };
    //位相关//////////////////////////////////////////////////////////////
    /**
     * 检查2的幂的包含情况
     * 检查ncheckValue是否包含在nContain中
     * 比如nContain为 2 + 4 = 6，nCheckValue = 1
     * 则返回false， 如果nCheckValue = 2， 则返回true
     * @param contain 容器值
     * @param checkValue 这个值必须是2的幂或几个2的幂的值的和
     */
    ToolsUseful.BitContent = function (contain, checkValue) {
        if ((contain & checkValue) != 0) {
            return true;
        }
        return false;
    };
    /**
     * 位中索引值
     * @param contain 容器值
     * @param index 取值范围为0~31
     */
    ToolsUseful.BitValue = function (contain, index) {
        if (index >= 32) {
            return false;
        }
        var obpos = index % 32;
        var i = 1;
        i <<= obpos;
        i &= contain;
        return (i != 0);
    };
    /**
     * 从位中去掉某些值
     * 比如 nContain = 1 + 2 + 4 + 8 = 15
     * nRemove = 2 + 4 = 6
     * 则返回 nContai & ~nRemove = 15 & ~6 = 9
     * @param contain 容器值
     * @param remove 要移出的值
     */
    ToolsUseful.BitRemove = function (contain, remove) {
        return contain & ~remove;
    };
    /**
     * 在位中添加一些值
     * 其实就是或操作了
     * 比如 2 | 6 = 6
     * 2 | 4 = 6
     * @param contain 容器值
     * @param add 要添加的值
     */
    ToolsUseful.BitAdd = function (contain, add) {
        return contain | add;
    };
    ////////////////////////////////////////////////////////////////
    //Promise//////////////////////////////////////////////////////////////
    /**
     * 等待一定的秒数
     * @param sec 秒数
     */
    ToolsUseful.WaitForSeconds = function (sec) {
        return new Promise(function (wait) {
            setTimeout(function () {
                wait();
            }, sec * 1000);
        }).catch(function (e) {
            throw new Error("WaitForseconds Err:" + e);
        });
    };
    /**
     * 将值从start在durSec时间内变化到end
     * @param durSec 持续时间（秒）
     * @param startValue 开始值
     * @param endValue 目标值
     * @param perUpdateFunc 每次更新回调
     * @param completeFunc 执行完成后回调
     * @param startDelaySec 开始时先延迟时间（秒）
     */
    ToolsUseful.OnFadeInOrOutValue = function (durSec, startValue, endValue, perUpdateFunc, completeFunc, startDelaySec) {
        if (startDelaySec === void 0) { startDelaySec = 0; }
        return __awaiter(this, void 0, Promise, function () {
            var dist, percent, interval, f, alpha;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(startDelaySec > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, ToolsUseful.WaitForSeconds(startDelaySec)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        dist = endValue - startValue;
                        percent = 0;
                        interval = 1 / 100;
                        f = 0;
                        _a.label = 3;
                    case 3:
                        if (!(f < durSec)) return [3 /*break*/, 6];
                        alpha = ToolsUseful.Clamp01(2.0 * (1.0 - f / durSec));
                        percent = 1.0 - alpha;
                        if (perUpdateFunc != null) {
                            perUpdateFunc(startValue + percent * dist);
                        }
                        return [4 /*yield*/, ToolsUseful.WaitForSeconds(interval)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        f += interval;
                        return [3 /*break*/, 3];
                    case 6:
                        if (completeFunc != null) {
                            completeFunc();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /////////////////////////////////////////////////////////////////////
    //常量///////////////////////////////////////////////////////////////////
    /**
     * 黄金比例分割点
     */
    ToolsUseful.GoldPointRadio = function () {
        return 0.618;
    };
    /////////////////////////////////////////////////////////////////////
    /**
     * 角度转弧度
     * @param angle 角度
     */
    ToolsUseful.Deg2Rad = function (angle) {
        return angle * (Math.PI / 180);
    };
    /**
     * 弧度转角度
     * @param radius 弧度
     */
    ToolsUseful.Rad2Deg = function (radius) {
        return radius * (180 / Math.PI);
    };
    /**
     * 0、1的互相转换
     * @param num 0或者1
     */
    ToolsUseful.Exchage0and1 = function (num) {
        if (num == 0) {
            return 1;
        }
        if (num == 1) {
            return 0;
        }
    };
    /**
     * 将节点active设置为true
     * @param node1 第一个节点
     * @param restOfNode 剩余节点
     */
    ToolsUseful.nodeVisible = function (node1) {
        var restOfNode = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfNode[_i - 1] = arguments[_i];
        }
        node1.active = true;
        restOfNode.forEach(function (item) {
            item.active = true;
        });
    };
    /**
     * 将节点active设置为false
     * @param node1 第一个节点
     * @param restOfNode 剩余节点
     */
    ToolsUseful.nodeInvisible = function (node1) {
        var restOfNode = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfNode[_i - 1] = arguments[_i];
        }
        node1.active = false;
        restOfNode.forEach(function (item) {
            item.active = false;
        });
    };
    /**
     * 将按钮设置为可点击状态
     * @param btn1 第一个按钮组件
     * @param restOfBtn 剩余按钮组件
     */
    ToolsUseful.btnEnableClick = function (btn1) {
        var restOfBtn = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfBtn[_i - 1] = arguments[_i];
        }
        btn1.interactable = true;
        restOfBtn.forEach(function (item) {
            item.interactable = true;
        });
    };
    /**
     * 将按钮置为不可点击状态
     * @param btn1 第一个按钮组件
     * @param restOfBtn 剩余按钮组件
     */
    ToolsUseful.btnDisableClick = function (btn1) {
        var restOfBtn = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfBtn[_i - 1] = arguments[_i];
        }
        btn1.interactable = false;
        restOfBtn.forEach(function (item) {
            item.interactable = false;
        });
    };
    /**
     * 生成随机值，随机出的值不能是except中的值
     * @param minNum 最小值
     * @param maxNum 最大值
     * @param except 需要排除的值列表
     */
    ToolsUseful.getRandomNumExcept = function (wordsIdList) {
        var except = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            except[_i - 1] = arguments[_i];
        }
        var maxLoop = 1000;
        var minNum = 0;
        var maxNum = wordsIdList.length - 1;
        var num = this.getRandomNum(minNum, maxNum);
        if (except == null || except.length == 0) {
            return wordsIdList[num];
        }
        while (true) {
            var needReGen = false;
            // 判断生成的值是否在需要排除的列表中
            for (var i = 0; i < except.length; ++i) {
                // 如果存在，则需要重新获取一个随机值
                if (wordsIdList[num] == except[i]) {
                    needReGen = true;
                    break;
                }
            }
            if (needReGen) {
                maxLoop--;
                if (maxLoop <= 0) {
                    break;
                }
                num = this.getRandomNum(minNum, maxNum);
            }
            else {
                break;
            }
        }
        return wordsIdList[num];
    };
    /**
     * 生成从minNum到maxNum的随机数
     * 如果指定decimalNum位数，则生成指定小数位数的随机数
     * 若不指定任何参数，则生成0-1之间的随机数
     * @param minNum 最小值
     * @param maxNum 最大值
     * @param decimalNum 指定随机数的小数点后的位数
     */
    ToolsUseful.getRandomNum = function (minNum, maxNum, decimalNum) {
        var max = 0, min = 0;
        minNum <= maxNum ? (min = minNum, max = maxNum) : (min = maxNum, max = minNum);
        // 如果相同
        if (min == max) {
            return min;
        }
        switch (arguments.length) {
            case 1:
                return Math.floor(Math.random() * (max + 1));
                break;
            case 2:
                return Math.floor(Math.random() * (max - min + 1) + min);
                break;
            case 3:
                return Number((Math.random() * (max - min) + min).toFixed(decimalNum));
                break;
            default:
                return Math.random();
                break;
        }
    };
    /**
     * 生成控制曲率点的随机坐标
     * @param startPos 起始位置坐标
     * @param endPos 结束位置坐标
     */
    ToolsUseful.getRandomBezierPoint = function (startPos, endPos, screenMaxY, screenHeight) {
        var aX = (endPos.x + startPos.x) / 2;
        var x = ToolsUseful.getRandomNum(aX, startPos.x);
        var dY = screenMaxY - startPos.y;
        var ran = Math.random();
        var y;
        if (ran <= 0.7) {
            y = ToolsUseful.getRandomNum(startPos.y, screenHeight);
        }
        else {
            y = ToolsUseful.getRandomNum(screenHeight, screenHeight + dY);
        }
        return cc.v2(x, y);
    };
    /**
     * 创建贝塞尔曲线
     * @param t 贝塞尔曲线的时间
     * @param node 目标节点
     * @param startPos 初始位置坐标
     * @param endPos 目标位置坐标
     * @param isUv 是否匀速
     */
    // static createBezier(t: number, node: cc.Node, startPos: cc.Vec2, endPos: cc.Vec2, isUv: boolean) {
    //     //随机高度值
    //     let height = (startPos.x - endPos.x) / 3;
    //     //根据起点和终点随机一个较为合适的角度值
    //     let angle = 25;
    //     // 把角度转换为弧度
    //     let radian = ToolsUseful.Deg2Rad(angle);
    //     // 第一个控制点为贝塞尔曲线左半弧的中点
    //     let q1x = startPos.x + (endPos.x - startPos.x) / 4 * 3;
    //     let q1y = height + startPos.y;
    //     // 第二个控制点为整个抛物线的中点
    //     let q2x = startPos.x + (endPos.x - startPos.x) / 4;
    //     let q2y = height + startPos.y + Math.cos(radian) * q2x;
    //     //将世界坐标下的点转换到节点坐标系
    //     let q1 = node.parent.convertToNodeSpaceAR(cc.v2(q1x, q1y));
    //     let q2 = node.parent.convertToNodeSpaceAR(cc.v2(q2x, q2y));
    //     let endPosN = node.parent.convertToNodeSpaceAR(startPos);
    //     // 曲线配置
    //     // TKLog.LogWarn("贝塞尔曲线配置", t, q1, q2);
    //     if(isUv) {
    //         return cc.bezierTo(t, [q1, q2, endPosN]);
    //     } else {
    //         return cc.bezierTo(t, [q1, q2, endPosN]).easing(cc.easeIn(t));
    //     }
    // }
    /**
     *
     * @param startPos 起始坐标点
     * @param endPos   终点坐标
     * @param height   期望抛物线高度
     * @param t        期望抛物线运行时间
     */
    ToolsUseful.createParacuve = function (startPos, endPos, height, t) {
        //起点
        var x1 = startPos.x;
        var y1 = startPos.y;
        //终点
        var x3 = endPos.x;
        var y3 = endPos.y;
        //发射路径宽度
        var width = Math.abs(x3 - x1);
        //算出中间会经过的一点
        var x2 = x1 + width / 2;
        var y2 = y1 - height;
        var dy = ((y1 - y3) * (Math.pow(x1, 2) - Math.pow(x2, 2)) - (y1 - y2) * (Math.pow(x1, 2) - Math.pow(x3, 2)));
        var dx = ((x1 - x3) * (Math.pow(x1, 2) - Math.pow(x2, 2)) - (x1 - x2) * (Math.pow(x1, 2) - Math.pow(x3, 2)));
        var b = dy / dx;
        var a = ((y1 - y2) - b * (x1 - x2)) / (Math.pow(x1, 2) - Math.pow(x2, 2));
        var c = y1 - a * x1 * x1 - b * x1;
        //x轴速度
        var vx = width / t;
        return { a: a, b: b, c: c, vx: vx };
    };
    /**
     *
     * @param node 需要做抛物线的精灵
     * @param startPos 起始位置
     * @param endPos 终止位置
     * @param startA 起始角度
     * @param endA 终止角度
     * @param t 起始点到终止点需要的时间
     */
    ToolsUseful.createMovingCurve = function (node, startPos, endPos, startA, endA, t) {
        var sx = startPos.x;
        var sy = startPos.y;
        var ex = endPos.x + 50;
        var ey = endPos.y + 150;
        var h = node.height * 0.5;
        //设置精灵的起始角度
        node.angle = startA;
        var q1 = cc.v2(sx, sy);
        var q2 = cc.v2(sx + (ex - sx) * 0.5, sy + (ey - sy) * 0.5 + 200);
        var endP = cc.v2(endPos.x - 30, endPos.y + h);
        return cc.bezierTo(t, [q1, q2, endP]);
    };
    // /**
    //  * 根据单元随机生成单词
    //  * @param unitId 单元id
    //  */
    // static generateWordId(idArr: number[]): {right: number, wrong1: number, wrong2: number} {
    //     let index = ToolsUseful.getRandomNum(0, idArr.length - 1);
    //     let right = idArr[index];
    //     if(idArr.length == 1){
    //         return {right:right, wrong1:right, wrong2:right};
    //     }
    //     let indexWrong1 = ToolsUseful.getRandomNumExcept(0, idArr.length - 1, index);
    //     let wrong1 = idArr[indexWrong1];
    //     let indexWrong2 = ToolsUseful.getRandomNumExcept(0, idArr.length - 1, index, indexWrong1);
    //     let wrong2 = idArr[indexWrong2]
    //     return {right: right, wrong1: wrong1, wrong2: wrong2};
    // }
    /**
     * 获取某节点上的组件，如果没有该组件则增加一个并返回
     * @param node 要获取组件的节点
     * @param type 要获取的组件类型
     */
    ToolsUseful.DefaultGetComponent = function (node, type) {
        var com = node.getComponent(type);
        if (com == null) {
            TKLog_1.default.LogInfo("没有，需要增加Component");
            com = node.addComponent(type);
        }
        return com;
    };
    /**
     * 将元素列表输出为字符串，比如将数字list输出为
     * 1,3,4,5,6
     * @param array 元素列表
     */
    ToolsUseful.ListToString = function (array) {
        var content = "";
        for (var i = 0; i < array.length; ++i) {
            content += array[i].toString();
            if (i != (array.length - 1)) {
                content += ",";
            }
        }
        return content;
    };
    /**
     * 判断item是否存在于array中
     * @param array 要检测的数组
     * @param item 要检测的元素
     * @returns 如果存在返回索引，否则返回-1
     */
    ToolsUseful.ArrayContainItem = function (array, item) {
        for (var index = 0; index < array.length; index++) {
            var element = array[index];
            if (element == item) {
                return index;
            }
        }
        return -1;
    };
    /**
     * 判断item是否粗在与array中，使用自定义的比较函数
     * 该函数原型为 func(itemInArray : T, item : T) : boolean
     * @param array 要检测的数组
     * @param item 要检测的元素
     * @param compareFunc 比较函数，比较array中的元素与item是否相等，如果相等返回true
     * @returns 如果存在则返回索引，否则返回-1
     */
    ToolsUseful.ArrayContainItemWithFunc = function (array, item, compareFunc) {
        for (var index = 0; index < array.length; index++) {
            var element = array[index];
            if (compareFunc(element, item)) {
                return index;
            }
        }
        return -1;
    };
    /**
     * 从数组中移除指定数据
     * @param array 操作数组
     * @param item 要删除的item
     * @returns 如果存在元素且删除了，则返回true;否则返回false
     */
    ToolsUseful.RemoveArrayItem = function (array, item) {
        if (!array || array.length == 0) {
            return false;
        }
        var index = array.indexOf(item);
        if (index >= 0) {
            array.splice(index, 1);
            return true;
        }
        return false;
    };
    /**
     * 从数组中移除符合条件的数据
     * @param array 操作的数组
     * @param needRemoveCondition 条件判断函数，返回boolean类型。如果判断返回true则会从数组中移出
     */
    ToolsUseful.RemoveArrayItemWithCondition = function (array, needRemoveCondition) {
        var copy = new Array();
        array.forEach(function (element) {
            if (needRemoveCondition != null && needRemoveCondition(element)) {
            }
            else {
                copy.push(element);
            }
        });
        return copy;
    };
    /**
     * 洗牌
     * @param array 要洗牌的队列
     */
    ToolsUseful.Shuffle = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var randomIndex = Math.floor(Math.random() * (i + 1));
            var tmp = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = tmp;
        }
        return array;
    };
    /**
     * number的lerp
     * @param value 当前值
     * @param target 目标值
     * @param t 获取比例
     */
    ToolsUseful.LerpNumber = function (value, target, t) {
        var off = target - value;
        var offDist = off * t;
        return value + offDist;
    };
    /**
     * 求两个位置的距离
     * @param pos1 位置1
     * @param pos2 位置2
     */
    ToolsUseful.Distance = function (pos1, pos2) {
        var distance = pos1.sub(pos2).mag();
        return distance;
    };
    /**
     * 获取节点当前的世界坐标
     * @param node 节点
     */
    ToolsUseful.WorldPosition = function (node) {
        var pos = node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        return new cc.Vec2(pos.x, pos.y);
    };
    /**
     * 获取世界坐标在节点坐标系中的坐标
     * @param node 相对的节点
     * @param worldPos 世界坐标
     */
    ToolsUseful.LocalPosition = function (node, worldPos) {
        var pos = node.convertToNodeSpaceAR(worldPos);
        return new cc.Vec3(pos.x, pos.y);
    };
    /**
     * 将posNode的坐标转换为targetNode节点坐标系的坐标
     * @param targetNode 节点坐标系
     * @param posNode 要转换的节点
     */
    ToolsUseful.LocalPositionToNode = function (targetNode, posNode) {
        var worldPos = this.WorldPosition(posNode);
        return this.LocalPosition(targetNode, worldPos);
    };
    /**
     * 输出节点的路径，即将父节点一一列出，使用/分隔
     * 比如 UIRoot/UIMessageBox/UIOkbtn
     * @param node 需要输出路径的节点
     */
    ToolsUseful.GetNodePath = function (node) {
        var path = "";
        path = node.name;
        var parent = node.parent;
        while (parent != null) {
            path = parent.name + "/" + path;
            parent = parent.parent;
        }
        return path;
    };
    /**
     * 字符串转数字
     * @param strValue 字符串数字
     * @param defaultValue 如果转换错误的默认返回
     */
    ToolsUseful.TranslateStringToNumber = function (strValue, defaultValue) {
        if (strValue.length == 0) {
            return defaultValue;
        }
        var num = Number.parseInt(strValue);
        if (num == Number.NaN) {
            return defaultValue;
        }
        return num;
    };
    /**
     * 将颜色的16进制编码转换成颜色，
     * 比如ff0000,转换成Color(255, 0, 0)
     * @param strCode 16进制编码字符串
     */
    ToolsUseful.TranslateCodeToColor = function (strCode) {
        var color = cc.Color.WHITE;
        if (strCode.length == 0) {
            return color;
        }
        var strSplitCode = "";
        var colorValue = [];
        for (var i = 0; i < strCode.length; ++i) {
            strSplitCode += strCode[i];
            if ((i + 1) % 2 == 0) {
                colorValue.push(Number.parseInt(strSplitCode, 16));
                strSplitCode = "";
            }
        }
        if (colorValue.length > 0) {
            color.setR(colorValue[0]);
        }
        if (colorValue.length > 1) {
            color.setG(colorValue[1]);
        }
        if (colorValue.length > 2) {
            color.setB(colorValue[2]);
        }
        // if(colorValue.length > 3){
        //     color.setA(colorValue[3])
        // }
        return color;
    };
    ToolsUseful.getExpendNum = function (leftTime) {
        //计算倒计时对应的晶石消耗
        var ranges = [60, 1200, 3600, 43200, 86400, 259200, 604800];
        var gems = [5, 50, 100, 900, 1500, 4000, 9000];
        for (var i = 1; i <= ranges.length - 1; i++) {
            if (leftTime <= ranges[i]) {
                return (Math.ceil((leftTime - ranges[i - 1]) / ((ranges[i] - ranges[i - 1]) / (gems[i] - gems[i - 1])) + gems[i - 1]));
            }
        }
    };
    return ToolsUseful;
}());
exports.default = ToolsUseful;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZnJhbWV3b3JrL3V0aWxzL1Rvb2xzVXNlZnVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlDO0FBQ2pDLHFFQUFnRTtBQWNoRTtJQUFBO0lBNjVCQSxDQUFDO0lBMzVCRzs7OztPQUlHO0lBQ0ksNkJBQWlCLEdBQXhCLFVBQTRCLElBQWMsRUFBRSxhQUFzQjtRQUM5RCxJQUFJLEdBQUcsR0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzlDLElBQUcsR0FBRyxJQUFJLElBQUksRUFBQztZQUNYLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQ3pDO1FBQ0QsT0FBTyxHQUFHLENBQUE7SUFDZCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksMkJBQWUsR0FBdEIsVUFBdUIsR0FBVTtRQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsZUFBZTtRQUNwQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDBCQUFjLEdBQXJCLFVBQXNCLEdBQVU7UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxnQ0FBb0IsR0FBM0IsVUFBNEIsUUFBaUI7UUFDekMsSUFBRyxRQUFRLElBQUksQ0FBQyxFQUFDO1lBQ2IsT0FBTyxVQUFVLENBQUM7U0FDckI7UUFDRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNwQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNoQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEQsSUFBSSxHQUFHLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUN4QixPQUFPLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEdBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEosQ0FBQztJQUVEOzs7T0FHRztJQUNJLCtCQUFtQixHQUExQixVQUEyQixRQUFpQjtRQUN4QyxJQUFHLFFBQVEsSUFBSSxDQUFDLEVBQUM7WUFDYixPQUFPLE9BQU8sQ0FBQztTQUNsQjtRQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksR0FBRyxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFeEIsT0FBTyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxHQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksK0JBQW1CLEdBQTFCLFVBQTJCLFFBQWlCO1FBQ3hDLElBQUcsUUFBUSxJQUFJLENBQUMsRUFBQztZQUNiLE9BQU8sT0FBTyxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVNLDJCQUFlLEdBQXRCLFVBQXVCLE9BQWU7UUFDbEMsSUFBRyxPQUFPLElBQUksQ0FBQyxFQUFFO1lBQ2IsT0FBTyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLEdBQUc7WUFDUCxJQUFJLEVBQUUsSUFBSTtZQUNWLEdBQUcsRUFBRSxHQUFHO1NBQ1gsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0kscUNBQXlCLEdBQWhDLFVBQWlDLEdBQVk7UUFDekMsSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO1lBQ2xCLE9BQU8sTUFBTSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQWM7UUFDZCxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN0QyxnQkFBZ0I7UUFDaEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBQztZQUNsQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUNELE9BQU87UUFDUCxJQUFJLGFBQWEsR0FBRyxDQUFDLEVBQUM7WUFDbEIsTUFBTSxJQUFJLEdBQUcsQ0FBQztTQUNqQjtRQUNELDZCQUE2QjtRQUM3QixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDbkIsS0FBSSxJQUFJLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDOUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsVUFBVSxFQUFFLENBQUM7WUFDYixJQUFHLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO2dCQUN6QyxNQUFNLElBQUksR0FBRyxDQUFDO2dCQUNkLFVBQVUsR0FBRyxDQUFDLENBQUM7YUFDbEI7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLDJCQUFlLEdBQXRCLFVBQXVCLFNBQWtCLEVBQUUsU0FBa0I7UUFDekQsSUFBRyxTQUFTLElBQUksQ0FBQztlQUNWLFNBQVMsR0FBRyxTQUFTLEVBQUM7WUFDckIsT0FBTyxTQUFTLENBQUM7U0FDcEI7YUFDRDtZQUNBLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUM7WUFDMUYsU0FBUyxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDN0IsT0FBTyxTQUFTLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxpQ0FBcUIsR0FBNUIsVUFBNkIsSUFBYSxFQUFFLElBQWEsRUFBRSxLQUFjO1FBQ3JFLE9BQU8sSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxpQ0FBcUIsR0FBNUIsVUFBNkIsS0FBYyxFQUFFLEtBQWM7UUFDbkQsSUFBQSxLQUFjLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFsQixJQUFJLFFBQUEsRUFBQyxJQUFJLFFBQVMsQ0FBQztRQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBR0Q7Ozs7O09BS0c7SUFDSSwyQkFBZSxHQUF0QixVQUF1QixJQUFjLEVBQUUsZ0JBQXVDO1FBQzFFLElBQUcsSUFBSSxJQUFJLElBQUksRUFBQztZQUNaLE9BQU87U0FDVjtRQUNELElBQUksUUFBUSxHQUFrQixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUE7UUFFRixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBQztZQUNwQyxJQUFHLGdCQUFnQixJQUFJLElBQUksSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztnQkFDekQsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3pCO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxrQ0FBc0IsR0FBN0IsVUFBOEIsSUFBYyxFQUFFLGdCQUF1QztRQUNqRixJQUFHLElBQUksSUFBSSxJQUFJLEVBQUM7WUFDWixPQUFPO1NBQ1Y7UUFDRCxJQUFJLFFBQVEsR0FBa0IsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO1FBRUYsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDcEMsSUFBRyxnQkFBZ0IsSUFBSSxJQUFJLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7Z0JBQzFELDhCQUFvQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QztTQUNKO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksMkJBQWUsR0FBdEIsVUFBdUIsSUFBYyxFQUFFLFdBQTBCLEVBQUUsVUFBb0I7UUFDbkYsSUFBRyxJQUFJLElBQUksSUFBSSxFQUFDO1lBQ1osT0FBTztTQUNWO1FBQ0QsSUFBRyxXQUFXLElBQUksSUFBSSxFQUFDO1lBQ25CLE9BQU87U0FDVjtRQUNELElBQUksUUFBUSxHQUFhLElBQUksQ0FBQztRQUM5QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBQztZQUN2QyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdEIsSUFBRyxVQUFVLElBQUksUUFBUSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUM7Z0JBQ3hDLFdBQVcsQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNsRTtTQUNKO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG1CQUFPLEdBQWQsVUFBZSxLQUFjO1FBQ3pCLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLGlCQUFLLEdBQVosVUFBYSxLQUFjLEVBQUUsR0FBWSxFQUFFLEdBQVk7UUFDbkQsSUFBRyxLQUFLLEdBQUcsR0FBRyxFQUFDO1lBQ1gsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUNELElBQUcsS0FBSyxHQUFHLEdBQUcsRUFBQztZQUNYLE9BQU8sR0FBRyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxtQkFBTyxHQUFkLFVBQWUsS0FBYSxFQUFFLEdBQVcsRUFBRSxHQUFXO1FBQ2xELElBQUcsS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQzVCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwwQkFBYyxHQUFyQixVQUFzQixHQUFVLEVBQUUsTUFBYTtRQUMzQyxJQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUU7WUFDNUIsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDekI7UUFDRCxPQUFPLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBRUQsbUVBQW1FO0lBQ25FOzs7Ozs7O09BT0c7SUFDSSxzQkFBVSxHQUFqQixVQUFrQixPQUFnQixFQUFFLFVBQW1CO1FBQ25ELElBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDO1lBQzNCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLG9CQUFRLEdBQWYsVUFBZ0IsT0FBZ0IsRUFBRSxLQUFjO1FBQzVDLElBQUcsS0FBSyxJQUFJLEVBQUUsRUFBQztZQUNYLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLEtBQUssS0FBSyxDQUFDO1FBQ1osQ0FBQyxJQUFJLE9BQU8sQ0FBQztRQUNiLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxxQkFBUyxHQUFoQixVQUFpQixPQUFnQixFQUFFLE1BQWU7UUFDOUMsT0FBTyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxrQkFBTSxHQUFiLFVBQWMsT0FBZ0IsRUFBRSxHQUFZO1FBQ3hDLE9BQU8sT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDO0lBQ0QsZ0VBQWdFO0lBRWhFLHVFQUF1RTtJQUN2RTs7O09BR0c7SUFDSSwwQkFBYyxHQUFyQixVQUFzQixHQUFZO1FBQzlCLE9BQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxJQUFJO1lBQzFCLFVBQVUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsQ0FBQztZQUNYLENBQUMsRUFBRSxHQUFHLEdBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsQ0FBQztZQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDVSw4QkFBa0IsR0FBL0IsVUFBZ0MsTUFBZSxFQUFFLFVBQW1CLEVBQUUsUUFBaUIsRUFBRSxhQUE2QixFQUFFLFlBQXdCLEVBQUUsYUFBaUI7UUFBakIsOEJBQUEsRUFBQSxpQkFBaUI7dUNBQUksT0FBTzs7Ozs7NkJBQ3ZLLENBQUEsYUFBYSxHQUFHLENBQUMsQ0FBQSxFQUFqQix3QkFBaUI7d0JBQ2hCLHFCQUFNLFdBQVcsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQUE7O3dCQUEvQyxTQUErQyxDQUFDOzs7d0JBR2hELElBQUksR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFDO3dCQUM3QixPQUFPLEdBQUcsQ0FBQyxDQUFDO3dCQUNaLFFBQVEsR0FBRyxDQUFDLEdBQUMsR0FBRyxDQUFDO3dCQUNiLENBQUMsR0FBRyxDQUFDOzs7NkJBQUUsQ0FBQSxDQUFDLEdBQUcsTUFBTSxDQUFBO3dCQUNqQixLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQzFELE9BQU8sR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixJQUFHLGFBQWEsSUFBSSxJQUFJLEVBQUM7NEJBQ3JCLGFBQWEsQ0FBQyxVQUFVLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO3lCQUM5Qzt3QkFDRCxxQkFBTSxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBMUMsU0FBMEMsQ0FBQzs7O3dCQU5wQixDQUFDLElBQUksUUFBUSxDQUFBOzs7d0JBU3hDLElBQUcsWUFBWSxJQUFJLElBQUksRUFBQzs0QkFDcEIsWUFBWSxFQUFFLENBQUM7eUJBQ2xCOzs7OztLQUNKO0lBQ0QscUVBQXFFO0lBR3JFLHVFQUF1RTtJQUN2RTs7T0FFRztJQUNJLDBCQUFjLEdBQXJCO1FBQ0ksT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNELHFFQUFxRTtJQUVyRTs7O09BR0c7SUFDSSxtQkFBTyxHQUFkLFVBQWdCLEtBQWE7UUFDekIsT0FBTyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7O09BR0c7SUFDSSxtQkFBTyxHQUFkLFVBQWdCLE1BQWM7UUFDMUIsT0FBTyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7SUFDSSx3QkFBWSxHQUFuQixVQUFvQixHQUFXO1FBQzNCLElBQUcsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNULE9BQU8sQ0FBQyxDQUFDO1NBQ1o7UUFDRCxJQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDVCxPQUFPLENBQUMsQ0FBQztTQUNaO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx1QkFBVyxHQUFsQixVQUFtQixLQUFjO1FBQUUsb0JBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4QixtQ0FBd0I7O1FBQ3ZELEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx5QkFBYSxHQUFwQixVQUFxQixLQUFjO1FBQUUsb0JBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4QixtQ0FBd0I7O1FBQ3pELEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwwQkFBYyxHQUFyQixVQUFzQixJQUFlO1FBQUUsbUJBQXlCO2FBQXpCLFVBQXlCLEVBQXpCLHFCQUF5QixFQUF6QixJQUF5QjtZQUF6QixrQ0FBeUI7O1FBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwyQkFBZSxHQUF0QixVQUF1QixJQUFlO1FBQUUsbUJBQXlCO2FBQXpCLFVBQXlCLEVBQXpCLHFCQUF5QixFQUF6QixJQUF5QjtZQUF6QixrQ0FBeUI7O1FBQzdELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksOEJBQWtCLEdBQXpCLFVBQTBCLFdBQXFCO1FBQUUsZ0JBQW9CO2FBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtZQUFwQiwrQkFBb0I7O1FBQ2pFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFHLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7WUFDcEMsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0I7UUFDRCxPQUFNLElBQUksRUFBQztZQUNQLElBQUksU0FBUyxHQUFhLEtBQUssQ0FBQztZQUNoQyxvQkFBb0I7WUFDcEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUM7Z0JBQ2xDLG9CQUFvQjtnQkFDcEIsSUFBRyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDO29CQUM3QixTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUNqQixNQUFNO2lCQUNUO2FBQ0o7WUFDRCxJQUFHLFNBQVMsRUFBQztnQkFDVCxPQUFPLEVBQUUsQ0FBQztnQkFDVixJQUFHLE9BQU8sSUFBSSxDQUFDLEVBQUM7b0JBQ1osTUFBTTtpQkFDVDtnQkFDRCxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDM0M7aUJBQUk7Z0JBRUQsTUFBTTthQUNUO1NBQ0o7UUFDRCxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLHdCQUFZLEdBQW5CLFVBQW9CLE1BQWUsRUFBRSxNQUFlLEVBQUUsVUFBbUI7UUFDckUsSUFBSSxHQUFHLEdBQVcsQ0FBQyxFQUFFLEdBQUcsR0FBWSxDQUFDLENBQUM7UUFDdEMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUUvRSxPQUFPO1FBQ1AsSUFBRyxHQUFHLElBQUksR0FBRyxFQUFDO1lBQ1YsT0FBTyxHQUFHLENBQUE7U0FDYjtRQUVELFFBQVEsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUN0QixLQUFLLENBQUM7Z0JBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLE9BQU8sTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUN2RSxNQUFNO1lBQ1Y7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3JCLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksZ0NBQW9CLEdBQTNCLFVBQTRCLFFBQWlCLEVBQUUsTUFBZSxFQUFFLFVBQW1CLEVBQUUsWUFBcUI7UUFDdEcsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpELElBQUksRUFBRSxHQUFHLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQVMsQ0FBQztRQUNkLElBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRTtZQUNYLENBQUMsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDMUQ7YUFBTTtZQUNILENBQUMsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDakU7UUFFRCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gscUdBQXFHO0lBQ3JHLGNBQWM7SUFDZCxnREFBZ0Q7SUFDaEQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsK0NBQStDO0lBQy9DLDRCQUE0QjtJQUM1Qiw4REFBOEQ7SUFDOUQscUNBQXFDO0lBRXJDLHlCQUF5QjtJQUN6QiwwREFBMEQ7SUFDMUQsOERBQThEO0lBRTlELHlCQUF5QjtJQUN6QixrRUFBa0U7SUFDbEUsa0VBQWtFO0lBQ2xFLGdFQUFnRTtJQUNoRSxjQUFjO0lBQ2QsOENBQThDO0lBQzlDLGlCQUFpQjtJQUNqQixvREFBb0Q7SUFDcEQsZUFBZTtJQUNmLHlFQUF5RTtJQUN6RSxRQUFRO0lBQ1IsSUFBSTtJQUVKOzs7Ozs7T0FNRztJQUNJLDBCQUFjLEdBQXJCLFVBQXNCLFFBQWlCLEVBQUUsTUFBZSxFQUFFLE1BQWMsRUFBRSxDQUFTO1FBQy9FLElBQUk7UUFDSixJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSTtRQUNKLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVsQixRQUFRO1FBQ1IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDOUIsWUFBWTtRQUNaLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0csSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRSxFQUFFLEdBQUcsQ0FBQyxHQUFDLEVBQUUsQ0FBQztRQUUvQixNQUFNO1FBQ04sSUFBSSxFQUFFLEdB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SSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFIO1NBQ0o7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQTc1QkEsQUE2NUJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVEtMb2cgZnJvbSBcIi4uL2xvZy9US0xvZ1wiO1xuaW1wb3J0IE9iamVjdFBvb2xDb250cm9sbGVyIGZyb20gXCIuLi9wb29sL09iamVjdFBvb2xDb250cm9sbGVyXCI7XG5cbmludGVyZmFjZSBJQ2hlY2tOb2RlQ29uZGl0aW9uIHtcbiAgICAoY2hlY2tOb2RlIDogY2MuTm9kZSkgOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVByb2Nlc3NOb2RlIHtcbiAgICAobm9kZSA6IGNjLk5vZGUpOnZvaWQ7XG59XG5cbmludGVyZmFjZSBJVmFsdWVVcGRhdGVkIHtcbiAgICAodmFsdWUgOiBudW1iZXIpIDogdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHNVc2VmdWwge1xuXG4gICAgLyoqXG4gICAgICog5LuO6IqC54K55by65Yi26I635Y+W5LiA5Liq57uE5Lu277yM5aaC5p6c6K+l57uE5Lu25rKh5pyJ5bCx5aKe5Yqg5LiA5Liq6L+U5ZueXG4gICAgICogQHBhcmFtIG5vZGUg6KaB6I635Y+W57uE5Lu255qE6IqC54K5XG4gICAgICogQHBhcmFtIGNvbXBvbmVudE5hbWUg57uE5Lu25ZCN56ewXG4gICAgICovXG4gICAgc3RhdGljIEdldENvbXBvbmVudEZvcmNlPFQ+KG5vZGUgOiBjYy5Ob2RlLCBjb21wb25lbnROYW1lIDogc3RyaW5nKSA6IFQge1xuICAgICAgICBsZXQgY29tIDogVCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNvbXBvbmVudE5hbWUpXG4gICAgICAgIGlmKGNvbSA9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbSA9IG5vZGUuYWRkQ29tcG9uZW50KGNvbXBvbmVudE5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDovazmjaLnp5LmlbDkuLrlpKnvvIzlkJHkuIrlj5bmlbRcbiAgICAgKiBAcGFyYW0gc2VjIOenkuaVsFxuICAgICAqL1xuICAgIHN0YXRpYyBDb252ZXJ0U2VjVG9EYXkoc2VjOm51bWJlcikgOiBudW1iZXJ7XG4gICAgICAgIGxldCB4ID0gc2VjIC8gODY0MDA7IC8vIDYwICogNjAgKiAyNFxuICAgICAgICBsZXQgZGF5ID0gTWF0aC5jZWlsKHgpO1xuICAgICAgICByZXR1cm4gZGF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi9rOaNouenkuaVsOS4uuWkqe+8jOWQkeS4i+WPluaVtFxuICAgICAqIEBwYXJhbSBzZWMg56eS5pWwXG4gICAgICovXG4gICAgc3RhdGljIFJvdW5kRG93blRvRGF5KHNlYzpudW1iZXIpIDogbnVtYmVyIHtcbiAgICAgICAgbGV0IHggPSBzZWMgLyA4NjQwMDtcbiAgICAgICAgbGV0IGRheSA9IE1hdGguZmxvb3IoeCk7XG4gICAgICAgIHJldHVybiBkYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bCG56eS5pWw6L2s5o2i5Li6aGg6bW06c3PnmoTlvaLlvI9cbiAgICAgKiDmr5TlpoIxMjjnp5LmjaLmiJDvvJowMDowMjowOFxuICAgICAqIEBwYXJhbSB0b3RhbFNlYyDopoHovazmjaLnmoTnp5LmlbBcbiAgICAgKi9cbiAgICBzdGF0aWMgR2VuZXJhdGVUb3RhbFNlY19obXModG90YWxTZWMgOiBudW1iZXIpIDogc3RyaW5ne1xuICAgICAgICBpZih0b3RhbFNlYyA8PSAwKXtcbiAgICAgICAgICAgIHJldHVybiBcIjAwOjAwOjAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1pbiA9IE1hdGguZmxvb3IodG90YWxTZWMgLyA2MCk7XG4gICAgICAgIGxldCBob3VyID0gTWF0aC5mbG9vcihtaW4gLyA2MCk7XG4gICAgICAgIG1pbiA9IE1hdGguZmxvb3IoKHRvdGFsU2VjIC0gaG91ciAqIDM2MDApIC8gNjApO1xuICAgICAgICBsZXQgc2VjID0gdG90YWxTZWMgJSA2MDtcbiAgICAgICAgcmV0dXJuIFRvb2xzVXNlZnVsLlN1cHBsZW1lbnRaZXJvKGhvdXIrXCJcIiwgMikgKyBcIjpcIiArIFRvb2xzVXNlZnVsLlN1cHBsZW1lbnRaZXJvKG1pbitcIlwiLCAyKSArIFwiOlwiICsgVG9vbHNVc2VmdWwuU3VwcGxlbWVudFplcm8oc2VjICsgXCJcIiwgMik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L2s5o2i5oiQ5YiG56eSIDAwOjAwIFxuICAgICAqIEBwYXJhbSB0b3RhbFNlYyDopoHovazmjaLnmoTnp5LmlbBcbiAgICAgKi9cbiAgICBzdGF0aWMgR2VuZXJhdGVUb3RhbFNlY19tcyh0b3RhbFNlYyA6IG51bWJlcikgOiBzdHJpbmcge1xuICAgICAgICBpZih0b3RhbFNlYyA8PSAwKXtcbiAgICAgICAgICAgIHJldHVybiBcIjAwOjAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1pbiA9IE1hdGguZmxvb3IodG90YWxTZWMgLyA2MCk7XG4gICAgICAgIGxldCBzZWMgPSB0b3RhbFNlYyAlIDYwO1xuXG4gICAgICAgIHJldHVybiBUb29sc1VzZWZ1bC5TdXBwbGVtZW50WmVybyhtaW4rXCJcIiwyKSArIFwiOlwiICsgVG9vbHNVc2VmdWwuU3VwcGxlbWVudFplcm8oc2VjK1wiXCIsMik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L2s5o2i5oiQ5pe25YiGIDAwOjAwXG4gICAgICogQHBhcmFtIHRvdGFsU2VjIOimgei9rOaNoueahOenkuaVsFxuICAgICAqL1xuICAgIHN0YXRpYyBHZW5lcmF0ZVRvdGFsU2VjX2htKHRvdGFsU2VjIDogbnVtYmVyKSA6IHN0cmluZyB7XG4gICAgICAgIGlmKHRvdGFsU2VjIDw9IDApe1xuICAgICAgICAgICAgcmV0dXJuIFwiMDA6MDBcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtaW4gPSBNYXRoLmZsb29yKHRvdGFsU2VjIC8gNjApO1xuICAgICAgICBsZXQgaG91ciA9IE1hdGguZmxvb3IobWluIC8gNjApO1xuICAgICAgICBtaW4gPSBNYXRoLmZsb29yKCh0b3RhbFNlYyAtIGhvdXIgKiAzNjAwKSAvIDYwKTtcbiAgICAgICAgcmV0dXJuIFRvb2xzVXNlZnVsLlN1cHBsZW1lbnRaZXJvKGhvdXIrXCJcIiwyKSArIFwiOlwiICsgVG9vbHNVc2VmdWwuU3VwcGxlbWVudFplcm8obWluK1wiXCIsMik7XG4gICAgfVxuXG4gICAgc3RhdGljIEdlbmVyYXRlTWludXRlcyhzZWNvbmRzOiBudW1iZXIpIDoge2hvdXI6IG51bWJlciwgbWluOiBudW1iZXJ9e1xuICAgICAgICBpZihzZWNvbmRzIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7aG91cjogMCwgbWluOiAwfTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWluID0gTWF0aC5jZWlsKHNlY29uZHMgLyA2MCk7XG4gICAgICAgIGxldCBob3VyID0gTWF0aC5mbG9vcihtaW4gLyA2MCk7XG4gICAgICAgIGxldCB0aW1lID0ge1xuICAgICAgICAgICAgaG91cjogaG91cixcbiAgICAgICAgICAgIG1pbjogbWluXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L2s5o2i5LiA5Liq5pW05pWw5L2N5a2X56ym5Liy77yM5q+P6ZqU5LiJ5L2N5Lya5pyJ5LiA5Liq6YCX5Y+377yM5q+U5aaCXG4gICAgICogMTIzNDU2NzjovazmjaLkuLrigJwxMiwzNDUsNjc44oCdXG4gICAgICogQHBhcmFtIG51bSDmlbDlrZdcbiAgICAgKi9cbiAgICBzdGF0aWMgVHJhbnNsYXRlSW50VG9Db21tYVN0cmluZyhudW0gOiBudW1iZXIpOnN0cmluZ3tcbiAgICAgICAgbGV0IG51bVN0ciA9IG51bSArIFwiXCI7XG4gICAgICAgIGlmKG51bVN0ci5sZW5ndGggPD0gMyl7XG4gICAgICAgICAgICByZXR1cm4gbnVtU3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN0clJlcyA9IFwiXCI7XG4gICAgICAgIC8vIOaOkuWcqOacgOWJjemdoueahOaVsOWtl+acieWHoOS4qlxuICAgICAgICBsZXQgZm9yd2FyZExlbmd0aCA9IG51bVN0ci5sZW5ndGggJSAzO1xuICAgICAgICAvLyDlhYjmiormjpLlnKjliY3pnaLnmoTliqDliLDlrZfnrKbkuLLkuK1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGZvcndhcmRMZW5ndGg7ICsraSl7XG4gICAgICAgICAgICBzdHJSZXMgKz0gbnVtU3RyLmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmnaXkuKrpgJflj7dcbiAgICAgICAgaWYgKGZvcndhcmRMZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHN0clJlcyArPSBcIixcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyDkuYvlkI7nmoTvvIzmr4/pmpQz5Liq5pWw5bCx5Yqg5Liq6YCX5Y+377yM5b2T54S25pyA5ZCO5LiA5Liq5pWw5piv5LiN5Yqg55qEXG4gICAgICAgIGxldCBjb21tYUluZGV4ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gZm9yd2FyZExlbmd0aDsgaSA8IG51bVN0ci5sZW5ndGg7ICsraSl7XG4gICAgICAgICAgICBzdHJSZXMgKz0gbnVtU3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGNvbW1hSW5kZXgrKztcbiAgICAgICAgICAgIGlmKGNvbW1hSW5kZXggPT0gMyAmJiBpICE9IG51bVN0ci5sZW5ndGggLSAxKXtcbiAgICAgICAgICAgICAgICBzdHJSZXMgKz0gXCIsXCI7XG4gICAgICAgICAgICAgICAgY29tbWFJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0clJlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIZuQ2hlY2tEYXRh6L2s5o2i5Li6WzAsblRvdGFsRGF0YSnkuYvpl7TnmoTlgLxcbiAgICAgKiDlpoLmnpxuQ2hlY2tEYXRhPj1uVG90YWxEYXRhLOWImeWPiOS7jjDlvIDlp4vph43mlrDorqHnrpdcbiAgICAgKiBAcGFyYW0gY2hlY2tEYXRhIOimgeajgOa1i+aYr+aVsOWtl1xuICAgICAqIEBwYXJhbSB0b3RhbERhdGEg5pWw5a2X6IyD5Zu05pyA5aSn5YC8XG4gICAgICovXG4gICAgc3RhdGljIENsYW1wQ2lyY2xlRGF0YShjaGVja0RhdGEgOiBudW1iZXIsIHRvdGFsRGF0YSA6IG51bWJlcil7XG4gICAgICAgIGlmKGNoZWNrRGF0YSA+PSAwXG4gICAgICAgICAgICAmJiBjaGVja0RhdGEgPCB0b3RhbERhdGEpe1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja0RhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgcGVyID0gTWF0aC5mbG9vcihjaGVja0RhdGEgPCAwID8gKGNoZWNrRGF0YSAvIHRvdGFsRGF0YSkgLSAxIDogY2hlY2tEYXRhIC8gdG90YWxEYXRhKTtcbiAgICAgICAgICAgIGNoZWNrRGF0YSAtPSBwZXIgKiB0b3RhbERhdGE7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tEYXRhO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LqM57u05Z2Q5qCH6L2s5Li65LiA57u057Si5byVXG4gICAgICogQHBhcmFtIHhwb3Mg5qiq5Z2Q5qCHXG4gICAgICogQHBhcmFtIHlwb3Mg57q15Z2Q5qCHXG4gICAgICogQHBhcmFtIHdpZHRoIOaoqumVv+W6plxuICAgICAqL1xuICAgIHN0YXRpYyBDb29yZFRyYW5zbGF0ZVRvSW5kZXgoeHBvcyA6IG51bWJlciwgeXBvcyA6IG51bWJlciwgd2lkdGggOiBudW1iZXIpIDogbnVtYmVye1xuICAgICAgICByZXR1cm4geXBvcyAqIHdpZHRoICsgeHBvcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkuIDnu7TntKLlvJXovazmjaLkuLrkuoznu7TlnZDmoIdcbiAgICAgKiBAcGFyYW0gaW5kZXgg5LiA57u057Si5byVXG4gICAgICogQHBhcmFtIHdpZHRoIOS6jOe7tOWuveW6plxuICAgICAqL1xuICAgIHN0YXRpYyBJbmRleFRyYW5zbGF0ZVRvQ29vcmQoaW5kZXggOiBudW1iZXIsIHdpZHRoIDogbnVtYmVyKSA6IFtudW1iZXIsbnVtYmVyXSB7XG4gICAgICAgIGxldCBbeHBvcyx5cG9zXSA9IFswLDBdO1xuICAgICAgICB5cG9zID0gTWF0aC5mbG9vcihpbmRleCAvIHdpZHRoKTtcbiAgICAgICAgeHBvcyA9IGluZGV4ICUgd2lkdGg7XG4gICAgICAgIHJldHVybiBbeHBvcywgeXBvc107XG4gICAgfVxuXG4gICAgXG4gICAgLyoqXG4gICAgICog5Yig6Zmk56ym5ZCI5p2h5Lu255qE5a2Q5a+56LGhXG4gICAgICog5aaC5p6c5rKh5pyJ5p2h5Lu277yM5bCx5piv5Yig6Zmk5omA5pyJ5a2Q5a+56LGhXG4gICAgICogQHBhcmFtIHJvb3Qg5qC56IqC54K5XG4gICAgICogQHBhcmFtIGRlc3Ryb3lDb25kaXRpb24g5Yig6Zmk5p2h5Lu277yM5aaC5p6c5Li656m66KGo56S65rKh5pyJ5p2h5Lu25YWo6YOo5Yig6ZmkXG4gICAgICovXG4gICAgc3RhdGljIERlc3Ryb3lDaGlsZHJlbihyb290IDogY2MuTm9kZSwgZGVzdHJveUNvbmRpdGlvbiA/OiBJQ2hlY2tOb2RlQ29uZGl0aW9uKSB7XG4gICAgICAgIGlmKHJvb3QgPT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxzdENoaWxkOkFycmF5PGNjLk5vZGU+ID0gW107XG4gICAgICAgIHJvb3QuY2hpbGRyZW4uZm9yRWFjaCgobm9kZSk9PntcbiAgICAgICAgICAgIGxzdENoaWxkLnB1c2gobm9kZSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxzdENoaWxkLmxlbmd0aDsgKytpKXtcbiAgICAgICAgICAgIGlmKGRlc3Ryb3lDb25kaXRpb24gPT0gbnVsbCB8fCBkZXN0cm95Q29uZGl0aW9uKGxzdENoaWxkW2ldKSl7XG4gICAgICAgICAgICAgICAgbHN0Q2hpbGRbaV0uc2V0UGFyZW50KG51bGwpO1xuICAgICAgICAgICAgICAgIGxzdENoaWxkW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIoOmZpOespuWQiOadoeS7tueahOWtkOWvueixoVxuICAgICAqIOS9v+eUqOWGheWtmOaxoOaOp+WItui/m+ihjOWIoOmZpFxuICAgICAqIEBwYXJhbSByb290IOagueiKgueCuVxuICAgICAqIEBwYXJhbSBkZXN0cm95Q29uZGl0aW9uIOWIoOmZpOadoeS7tu+8jOWmguaenOS4uuepuuihqOekuuayoeacieadoeS7tlxuICAgICAqL1xuICAgIHN0YXRpYyBEZXN0cm95Q2hpbGRyZW5Vc2VQb29sKHJvb3QgOiBjYy5Ob2RlLCBkZXN0cm95Q29uZGl0aW9uID86IElDaGVja05vZGVDb25kaXRpb24pIHtcbiAgICAgICAgaWYocm9vdCA9PSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbHN0Q2hpbGQ6QXJyYXk8Y2MuTm9kZT4gPSBbXTtcbiAgICAgICAgcm9vdC5jaGlsZHJlbi5mb3JFYWNoKChub2RlKT0+e1xuICAgICAgICAgICAgbHN0Q2hpbGQucHVzaChub2RlKTtcbiAgICAgICAgfSlcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbHN0Q2hpbGQubGVuZ3RoOyArK2kpe1xuICAgICAgICAgICAgaWYoZGVzdHJveUNvbmRpdGlvbiA9PSBudWxsIHx8IGRlc3Ryb3lDb25kaXRpb24obHN0Q2hpbGRbaV0pKXtcbiAgICAgICAgICAgICAgIE9iamVjdFBvb2xDb250cm9sbGVyLkRlc3Ryb3kobHN0Q2hpbGRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YGN5Y6G5a2Q5a+56LGh6L+b6KGM5LiA5Lqb5pON5L2cXG4gICAgICogQHBhcmFtIHJvb3Qg5qC56IqC54K5XG4gICAgICogQHBhcmFtIHByb2Nlc3NGdW5jIOimgeWvueWtkOWvueixoei/m+ihjOeahOaTjeS9nFxuICAgICAqIEBwYXJhbSBpbnRlcmF0aW9uIOaYr+WQpui/reS7o++8jOWNs+aYr+WQpuS5n+WvueWtkOWvueixoeeahOWtkOWvueixoei/m+ihjOaTjeS9nFxuICAgICAqL1xuICAgIHN0YXRpYyBQcm9jZXNzQ2hpbGRyZW4ocm9vdCA6IGNjLk5vZGUsIHByb2Nlc3NGdW5jIDogSVByb2Nlc3NOb2RlLCBpbnRlcmF0aW9uIDogYm9vbGVhbikge1xuICAgICAgICBpZihyb290ID09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKHByb2Nlc3NGdW5jID09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0cnNDaGlsZCA6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcm9vdC5jaGlsZHJlbkNvdW50OyArK2kpe1xuICAgICAgICAgICAgdHJzQ2hpbGQgPSByb290LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgcHJvY2Vzc0Z1bmModHJzQ2hpbGQpO1xuXG4gICAgICAgICAgICBpZihpbnRlcmF0aW9uICYmIHRyc0NoaWxkLmNoaWxkcmVuQ291bnQgPiAwKXtcbiAgICAgICAgICAgICAgICBUb29sc1VzZWZ1bC5Qcm9jZXNzQ2hpbGRyZW4odHJzQ2hpbGQsIHByb2Nlc3NGdW5jLCBpbnRlcmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWwhuS4gOS4quWAvOWbuuWumuWcqDAx5LmL6Ze0XG4gICAgICogQHBhcmFtIHZhbHVlIOimgeajgOa1i+eahOWAvFxuICAgICAqL1xuICAgIHN0YXRpYyBDbGFtcDAxKHZhbHVlIDogbnVtYmVyKSA6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIFRvb2xzVXNlZnVsLkNsYW1wKHZhbHVlLCAwLCAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIbkuIDkuKrlgLzlm7rlrprlnKhtaW7lkoxtYXjkuYvpl7RcbiAgICAgKiBAcGFyYW0gdmFsdWUg6KaB5Zu65a6a55qE5YC8XG4gICAgICogQHBhcmFtIG1pbiDmnIDlsI/lgLxcbiAgICAgKiBAcGFyYW0gbWF4IOacgOWkp+WAvFxuICAgICAqL1xuICAgIHN0YXRpYyBDbGFtcCh2YWx1ZSA6IG51bWJlciwgbWluIDogbnVtYmVyLCBtYXggOiBudW1iZXIpIDogbnVtYmVye1xuICAgICAgICBpZih2YWx1ZSA8IG1pbil7XG4gICAgICAgICAgICByZXR1cm4gbWluO1xuICAgICAgICB9XG4gICAgICAgIGlmKHZhbHVlID4gbWF4KXtcbiAgICAgICAgICAgIHJldHVybiBtYXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOajgOa1i+afkOS4quaVsOWAvOaYr+WQpuWcqOmcgOaxguiMg+WbtOWGhVxuICAgICAqIEBwYXJhbSB2YWx1ZSDlvoXmo4DmtYvnmoTlgLxcbiAgICAgKiBAcGFyYW0gbWluIOacgOWwj+WAvFxuICAgICAqIEBwYXJhbSBtYXgg5pyA5aSn5YC8XG4gICAgICovXG4gICAgc3RhdGljIGlzVmFsaWQodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA6IGJvb2xlYW4ge1xuICAgICAgICBpZih2YWx1ZSA8PSBtYXggJiYgdmFsdWUgPiBtaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bCG5oyH5a6a5pWw5a2X6L6T5Ye65Li65oyH5a6a6ZW/5bqm77yM5aaC5p6c5LiN5aSf5YiZ5YmN6Z2i6KGlMO+8m+WmguaenOW3sue7j+i2heWHuuWImeS4jeeuoVxuICAgICAqIEBwYXJhbSBudW0g6KaB5qOA5rWL55qE5pWw5a2XXG4gICAgICogQHBhcmFtIGxlbmd0aCDopoHovpPlh7rnmoTplb/luqZcbiAgICAgKi9cbiAgICBzdGF0aWMgU3VwcGxlbWVudFplcm8obnVtOnN0cmluZywgbGVuZ3RoOm51bWJlcikgOiBzdHJpbmcge1xuICAgICAgICBpZigobnVtICsgXCJcIikubGVuZ3RoID49IGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBUb29sc1VzZWZ1bC5TdXBwbGVtZW50WmVybyhcIjBcIiArIG51bSwgbGVuZ3RoKVxuICAgIH1cblxuICAgIC8v5L2N55u45YWzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvKipcbiAgICAgKiDmo4Dmn6Uy55qE5bmC55qE5YyF5ZCr5oOF5Ya1XG4gICAgICog5qOA5p+lbmNoZWNrVmFsdWXmmK/lkKbljIXlkKvlnKhuQ29udGFpbuS4rVxuICAgICAqIOavlOWmgm5Db250YWlu5Li6IDIgKyA0ID0gNu+8jG5DaGVja1ZhbHVlID0gMVxuICAgICAqIOWImei/lOWbnmZhbHNl77yMIOWmguaenG5DaGVja1ZhbHVlID0gMu+8jCDliJnov5Tlm550cnVlXG4gICAgICogQHBhcmFtIGNvbnRhaW4g5a655Zmo5YC8XG4gICAgICogQHBhcmFtIGNoZWNrVmFsdWUg6L+Z5Liq5YC85b+F6aG75pivMueahOW5guaIluWHoOS4qjLnmoTluYLnmoTlgLznmoTlkoxcbiAgICAgKi9cbiAgICBzdGF0aWMgQml0Q29udGVudChjb250YWluIDogbnVtYmVyLCBjaGVja1ZhbHVlIDogbnVtYmVyKSA6IGJvb2xlYW57XG4gICAgICAgIGlmKChjb250YWluICYgY2hlY2tWYWx1ZSkgIT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5L2N5Lit57Si5byV5YC8XG4gICAgICogQHBhcmFtIGNvbnRhaW4g5a655Zmo5YC8XG4gICAgICogQHBhcmFtIGluZGV4IOWPluWAvOiMg+WbtOS4ujB+MzFcbiAgICAgKi9cbiAgICBzdGF0aWMgQml0VmFsdWUoY29udGFpbiA6IG51bWJlciwgaW5kZXggOiBudW1iZXIpIDogYm9vbGVhbiB7XG4gICAgICAgIGlmKGluZGV4ID49IDMyKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb2Jwb3MgPSBpbmRleCAlIDMyO1xuICAgICAgICBsZXQgaSA9IDE7XG4gICAgICAgIGkgPDw9IG9icG9zO1xuICAgICAgICBpICY9IGNvbnRhaW47XG4gICAgICAgIHJldHVybiAoaSAhPSAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDku47kvY3kuK3ljrvmjonmn5DkupvlgLxcbiAgICAgKiDmr5TlpoIgbkNvbnRhaW4gPSAxICsgMiArIDQgKyA4ID0gMTVcbiAgICAgKiBuUmVtb3ZlID0gMiArIDQgPSA2XG4gICAgICog5YiZ6L+U5ZueIG5Db250YWkgJiB+blJlbW92ZSA9IDE1ICYgfjYgPSA5XG4gICAgICogQHBhcmFtIGNvbnRhaW4g5a655Zmo5YC8XG4gICAgICogQHBhcmFtIHJlbW92ZSDopoHnp7vlh7rnmoTlgLxcbiAgICAgKi9cbiAgICBzdGF0aWMgQml0UmVtb3ZlKGNvbnRhaW4gOiBudW1iZXIsIHJlbW92ZSA6IG51bWJlcikgOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiBjb250YWluICYgfnJlbW92ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlnKjkvY3kuK3mt7vliqDkuIDkupvlgLxcbiAgICAgKiDlhbblrp7lsLHmmK/miJbmk43kvZzkuoZcbiAgICAgKiDmr5TlpoIgMiB8IDYgPSA2XG4gICAgICogMiB8IDQgPSA2XG4gICAgICogQHBhcmFtIGNvbnRhaW4g5a655Zmo5YC8XG4gICAgICogQHBhcmFtIGFkZCDopoHmt7vliqDnmoTlgLxcbiAgICAgKi9cbiAgICBzdGF0aWMgQml0QWRkKGNvbnRhaW4gOiBudW1iZXIsIGFkZCA6IG51bWJlcikgOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiBjb250YWluIHwgYWRkO1xuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvL1Byb21pc2UvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8qKlxuICAgICAqIOetieW+heS4gOWumueahOenkuaVsFxuICAgICAqIEBwYXJhbSBzZWMg56eS5pWwXG4gICAgICovXG4gICAgc3RhdGljIFdhaXRGb3JTZWNvbmRzKHNlYyA6IG51bWJlcikgOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KCh3YWl0KT0+e1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2FpdCgpO1xuICAgICAgICAgICAgfSwgc2VjKjEwMDApO1xuICAgICAgICB9KS5jYXRjaChlPT57XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXYWl0Rm9yc2Vjb25kcyBFcnI6XCIgKyBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bCG5YC85LuOc3RhcnTlnKhkdXJTZWPml7bpl7TlhoXlj5jljJbliLBlbmRcbiAgICAgKiBAcGFyYW0gZHVyU2VjIOaMgee7reaXtumXtO+8iOenku+8iVxuICAgICAqIEBwYXJhbSBzdGFydFZhbHVlIOW8gOWni+WAvFxuICAgICAqIEBwYXJhbSBlbmRWYWx1ZSDnm67moIflgLxcbiAgICAgKiBAcGFyYW0gcGVyVXBkYXRlRnVuYyDmr4/mrKHmm7TmlrDlm57osINcbiAgICAgKiBAcGFyYW0gY29tcGxldGVGdW5jIOaJp+ihjOWujOaIkOWQjuWbnuiwg1xuICAgICAqIEBwYXJhbSBzdGFydERlbGF5U2VjIOW8gOWni+aXtuWFiOW7tui/n+aXtumXtO+8iOenku+8iVxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBPbkZhZGVJbk9yT3V0VmFsdWUoZHVyU2VjIDogbnVtYmVyLCBzdGFydFZhbHVlIDogbnVtYmVyLCBlbmRWYWx1ZSA6IG51bWJlciwgcGVyVXBkYXRlRnVuYyA6IElWYWx1ZVVwZGF0ZWQsIGNvbXBsZXRlRnVuYyA/OiBGdW5jdGlvbiwgc3RhcnREZWxheVNlYyA9IDApIDogUHJvbWlzZTx2b2lkPntcbiAgICAgICAgaWYoc3RhcnREZWxheVNlYyA+IDApe1xuICAgICAgICAgICAgYXdhaXQgVG9vbHNVc2VmdWwuV2FpdEZvclNlY29uZHMoc3RhcnREZWxheVNlYyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGlzdCA9IGVuZFZhbHVlIC0gc3RhcnRWYWx1ZTtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSAwO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSAxLzEwMDtcbiAgICAgICAgZm9yKGxldCBmID0gMDsgZiA8IGR1clNlYzsgZiArPSBpbnRlcnZhbCl7XG4gICAgICAgICAgICBsZXQgYWxwaGEgPSBUb29sc1VzZWZ1bC5DbGFtcDAxKDIuMCAqICgxLjAgLSBmIC8gZHVyU2VjKSk7XG4gICAgICAgICAgICBwZXJjZW50ID0gMS4wIC0gYWxwaGE7XG4gICAgICAgICAgICBpZihwZXJVcGRhdGVGdW5jICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHBlclVwZGF0ZUZ1bmMoc3RhcnRWYWx1ZSArIHBlcmNlbnQgKiBkaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IFRvb2xzVXNlZnVsLldhaXRGb3JTZWNvbmRzKGludGVydmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGNvbXBsZXRlRnVuYyAhPSBudWxsKXtcbiAgICAgICAgICAgIGNvbXBsZXRlRnVuYygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgXG4gICAgLy/luLjph48vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLyoqXG4gICAgICog6buE6YeR5q+U5L6L5YiG5Ymy54K5XG4gICAgICovXG4gICAgc3RhdGljIEdvbGRQb2ludFJhZGlvKCl7XG4gICAgICAgIHJldHVybiAwLjYxODtcbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvKipcbiAgICAgKiDop5LluqbovazlvKfluqZcbiAgICAgKiBAcGFyYW0gYW5nbGUg6KeS5bqmXG4gICAgICovXG4gICAgc3RhdGljIERlZzJSYWQgKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGFuZ2xlICogKE1hdGguUEkgLyAxODApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiDlvKfluqbovazop5LluqZcbiAgICAgKiBAcGFyYW0gcmFkaXVzIOW8p+W6plxuICAgICAqL1xuICAgIHN0YXRpYyBSYWQyRGVnIChyYWRpdXM6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gcmFkaXVzICogKDE4MCAvIE1hdGguUEkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIDDjgIEx55qE5LqS55u46L2s5o2iXG4gICAgICogQHBhcmFtIG51bSAw5oiW6ICFMVxuICAgICAqL1xuICAgIHN0YXRpYyBFeGNoYWdlMGFuZDEobnVtOiBudW1iZXIpIHtcbiAgICAgICAgaWYobnVtID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmKG51bSA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWwhuiKgueCuWFjdGl2Zeiuvue9ruS4unRydWVcbiAgICAgKiBAcGFyYW0gbm9kZTEg56ys5LiA5Liq6IqC54K5XG4gICAgICogQHBhcmFtIHJlc3RPZk5vZGUg5Ymp5L2Z6IqC54K5XG4gICAgICovXG4gICAgc3RhdGljIG5vZGVWaXNpYmxlKG5vZGUxOiBjYy5Ob2RlLCAuLi5yZXN0T2ZOb2RlOiBjYy5Ob2RlW10pIHtcbiAgICAgICAgbm9kZTEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgcmVzdE9mTm9kZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bCG6IqC54K5YWN0aXZl6K6+572u5Li6ZmFsc2VcbiAgICAgKiBAcGFyYW0gbm9kZTEg56ys5LiA5Liq6IqC54K5XG4gICAgICogQHBhcmFtIHJlc3RPZk5vZGUg5Ymp5L2Z6IqC54K5XG4gICAgICovXG4gICAgc3RhdGljIG5vZGVJbnZpc2libGUobm9kZTE6IGNjLk5vZGUsIC4uLnJlc3RPZk5vZGU6IGNjLk5vZGVbXSkge1xuICAgICAgICBub2RlMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgcmVzdE9mTm9kZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWwhuaMiemSruiuvue9ruS4uuWPr+eCueWHu+eKtuaAgVxuICAgICAqIEBwYXJhbSBidG4xIOesrOS4gOS4quaMiemSrue7hOS7tlxuICAgICAqIEBwYXJhbSByZXN0T2ZCdG4g5Ymp5L2Z5oyJ6ZKu57uE5Lu2XG4gICAgICovXG4gICAgc3RhdGljIGJ0bkVuYWJsZUNsaWNrKGJ0bjE6IGNjLkJ1dHRvbiwgLi4ucmVzdE9mQnRuOiBjYy5CdXR0b25bXSkge1xuICAgICAgICBidG4xLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgIHJlc3RPZkJ0bi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bCG5oyJ6ZKu572u5Li65LiN5Y+v54K55Ye754q25oCBXG4gICAgICogQHBhcmFtIGJ0bjEg56ys5LiA5Liq5oyJ6ZKu57uE5Lu2XG4gICAgICogQHBhcmFtIHJlc3RPZkJ0biDliankvZnmjInpkq7nu4Tku7ZcbiAgICAgKi9cbiAgICBzdGF0aWMgYnRuRGlzYWJsZUNsaWNrKGJ0bjE6IGNjLkJ1dHRvbiwgLi4ucmVzdE9mQnRuOiBjYy5CdXR0b25bXSkge1xuICAgICAgICBidG4xLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICByZXN0T2ZCdG4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnlJ/miJDpmo/mnLrlgLzvvIzpmo/mnLrlh7rnmoTlgLzkuI3og73mmK9leGNlcHTkuK3nmoTlgLxcbiAgICAgKiBAcGFyYW0gbWluTnVtIOacgOWwj+WAvFxuICAgICAqIEBwYXJhbSBtYXhOdW0g5pyA5aSn5YC8XG4gICAgICogQHBhcmFtIGV4Y2VwdCDpnIDopoHmjpLpmaTnmoTlgLzliJfooahcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmFuZG9tTnVtRXhjZXB0KHdvcmRzSWRMaXN0OiBudW1iZXJbXSwgLi4uZXhjZXB0IDogbnVtYmVyW10pIDogbnVtYmVye1xuICAgICAgICBsZXQgbWF4TG9vcCA9IDEwMDA7XG4gICAgICAgIGxldCBtaW5OdW0gPSAwO1xuICAgICAgICBsZXQgbWF4TnVtID0gd29yZHNJZExpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IG51bSA9IHRoaXMuZ2V0UmFuZG9tTnVtKG1pbk51bSwgbWF4TnVtKTtcbiAgICAgICAgaWYoZXhjZXB0ID09IG51bGwgfHwgZXhjZXB0Lmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB3b3Jkc0lkTGlzdFtudW1dO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlKHRydWUpe1xuICAgICAgICAgICAgbGV0IG5lZWRSZUdlbiA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIOWIpOaWreeUn+aIkOeahOWAvOaYr+WQpuWcqOmcgOimgeaOkumZpOeahOWIl+ihqOS4rVxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGV4Y2VwdC5sZW5ndGg7ICsraSl7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5a2Y5Zyo77yM5YiZ6ZyA6KaB6YeN5paw6I635Y+W5LiA5Liq6ZqP5py65YC8XG4gICAgICAgICAgICAgICAgaWYod29yZHNJZExpc3RbbnVtXSA9PSBleGNlcHRbaV0pe1xuICAgICAgICAgICAgICAgICAgICBuZWVkUmVHZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihuZWVkUmVHZW4pe1xuICAgICAgICAgICAgICAgIG1heExvb3AtLTtcbiAgICAgICAgICAgICAgICBpZihtYXhMb29wIDw9IDApe1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbnVtID0gdGhpcy5nZXRSYW5kb21OdW0obWluTnVtLCBtYXhOdW0pO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdvcmRzSWRMaXN0W251bV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55Sf5oiQ5LuObWluTnVt5YiwbWF4TnVt55qE6ZqP5py65pWwXG4gICAgICog5aaC5p6c5oyH5a6aZGVjaW1hbE51beS9jeaVsO+8jOWImeeUn+aIkOaMh+WumuWwj+aVsOS9jeaVsOeahOmaj+acuuaVsFxuICAgICAqIOiLpeS4jeaMh+WumuS7u+S9leWPguaVsO+8jOWImeeUn+aIkDAtMeS5i+mXtOeahOmaj+acuuaVsFxuICAgICAqIEBwYXJhbSBtaW5OdW0g5pyA5bCP5YC8XG4gICAgICogQHBhcmFtIG1heE51bSDmnIDlpKflgLxcbiAgICAgKiBAcGFyYW0gZGVjaW1hbE51bSDmjIflrprpmo/mnLrmlbDnmoTlsI/mlbDngrnlkI7nmoTkvY3mlbBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmFuZG9tTnVtKG1pbk51bT86IG51bWJlciwgbWF4TnVtPzogbnVtYmVyLCBkZWNpbWFsTnVtPzogbnVtYmVyKSA6IG51bWJlciB7XG4gICAgICAgIGxldCBtYXggOm51bWJlciA9IDAsIG1pbiA6IG51bWJlciA9IDA7XG4gICAgICAgIG1pbk51bSA8PSBtYXhOdW0gPyAobWluID0gbWluTnVtLCBtYXggPSBtYXhOdW0pIDogKG1pbiA9IG1heE51bSwgbWF4ID0gbWluTnVtKTtcblxuICAgICAgICAvLyDlpoLmnpznm7jlkIxcbiAgICAgICAgaWYobWluID09IG1heCl7XG4gICAgICAgICAgICByZXR1cm4gbWluXG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCArIDEpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pLnRvRml4ZWQoZGVjaW1hbE51bSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeUn+aIkOaOp+WItuabsueOh+eCueeahOmaj+acuuWdkOagh1xuICAgICAqIEBwYXJhbSBzdGFydFBvcyDotbflp4vkvY3nva7lnZDmoIdcbiAgICAgKiBAcGFyYW0gZW5kUG9zIOe7k+adn+S9jee9ruWdkOagh1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRSYW5kb21CZXppZXJQb2ludChzdGFydFBvczogY2MuVmVjMiwgZW5kUG9zOiBjYy5WZWMyLCBzY3JlZW5NYXhZIDogbnVtYmVyLCBzY3JlZW5IZWlnaHQgOiBudW1iZXIpOiBjYy5WZWMyIHtcbiAgICAgICAgbGV0IGFYID0gKGVuZFBvcy54ICsgc3RhcnRQb3MueCkgLyAyO1xuICAgICAgICBsZXQgeCA9IFRvb2xzVXNlZnVsLmdldFJhbmRvbU51bShhWCwgc3RhcnRQb3MueCk7XG5cbiAgICAgICAgbGV0IGRZID0gc2NyZWVuTWF4WSAtIHN0YXJ0UG9zLnk7XG4gICAgICAgIGxldCByYW4gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBsZXQgeTogbnVtYmVyO1xuICAgICAgICBpZihyYW4gPD0gMC43KSB7XG4gICAgICAgICAgICB5ID0gVG9vbHNVc2VmdWwuZ2V0UmFuZG9tTnVtKHN0YXJ0UG9zLnksIHNjcmVlbkhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5ID0gVG9vbHNVc2VmdWwuZ2V0UmFuZG9tTnVtKHNjcmVlbkhlaWdodCwgc2NyZWVuSGVpZ2h0ICsgZFkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNjLnYyKHgsIHkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIm+W7uui0neWhnuWwlOabsue6v1xuICAgICAqIEBwYXJhbSB0IOi0neWhnuWwlOabsue6v+eahOaXtumXtFxuICAgICAqIEBwYXJhbSBub2RlIOebruagh+iKgueCuVxuICAgICAqIEBwYXJhbSBzdGFydFBvcyDliJ3lp4vkvY3nva7lnZDmoIdcbiAgICAgKiBAcGFyYW0gZW5kUG9zIOebruagh+S9jee9ruWdkOagh1xuICAgICAqIEBwYXJhbSBpc1V2IOaYr+WQpuWMgOmAn1xuICAgICAqL1xuICAgIC8vIHN0YXRpYyBjcmVhdGVCZXppZXIodDogbnVtYmVyLCBub2RlOiBjYy5Ob2RlLCBzdGFydFBvczogY2MuVmVjMiwgZW5kUG9zOiBjYy5WZWMyLCBpc1V2OiBib29sZWFuKSB7XG4gICAgLy8gICAgIC8v6ZqP5py66auY5bqm5YC8XG4gICAgLy8gICAgIGxldCBoZWlnaHQgPSAoc3RhcnRQb3MueCAtIGVuZFBvcy54KSAvIDM7XG4gICAgLy8gICAgIC8v5qC55o2u6LW354K55ZKM57uI54K56ZqP5py65LiA5Liq6L6D5Li65ZCI6YCC55qE6KeS5bqm5YC8XG4gICAgLy8gICAgIGxldCBhbmdsZSA9IDI1O1xuICAgIC8vICAgICAvLyDmiorop5LluqbovazmjaLkuLrlvKfluqZcbiAgICAvLyAgICAgbGV0IHJhZGlhbiA9IFRvb2xzVXNlZnVsLkRlZzJSYWQoYW5nbGUpO1xuICAgIC8vICAgICAvLyDnrKzkuIDkuKrmjqfliLbngrnkuLrotJ3loZ7lsJTmm7Lnur/lt6bljYrlvKfnmoTkuK3ngrlcbiAgICAvLyAgICAgbGV0IHExeCA9IHN0YXJ0UG9zLnggKyAoZW5kUG9zLnggLSBzdGFydFBvcy54KSAvIDQgKiAzO1xuICAgIC8vICAgICBsZXQgcTF5ID0gaGVpZ2h0ICsgc3RhcnRQb3MueTtcblxuICAgIC8vICAgICAvLyDnrKzkuozkuKrmjqfliLbngrnkuLrmlbTkuKrmipvniannur/nmoTkuK3ngrlcbiAgICAvLyAgICAgbGV0IHEyeCA9IHN0YXJ0UG9zLnggKyAoZW5kUG9zLnggLSBzdGFydFBvcy54KSAvIDQ7XG4gICAgLy8gICAgIGxldCBxMnkgPSBoZWlnaHQgKyBzdGFydFBvcy55ICsgTWF0aC5jb3MocmFkaWFuKSAqIHEyeDtcblxuICAgIC8vICAgICAvL+WwhuS4lueVjOWdkOagh+S4i+eahOeCuei9rOaNouWIsOiKgueCueWdkOagh+ezu1xuICAgIC8vICAgICBsZXQgcTEgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MihxMXgsIHExeSkpO1xuICAgIC8vICAgICBsZXQgcTIgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MihxMngsIHEyeSkpO1xuICAgIC8vICAgICBsZXQgZW5kUG9zTiA9IG5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHN0YXJ0UG9zKTtcbiAgICAvLyAgICAgLy8g5puy57q/6YWN572uXG4gICAgLy8gICAgIC8vIFRLTG9nLkxvZ1dhcm4oXCLotJ3loZ7lsJTmm7Lnur/phY3nva5cIiwgdCwgcTEsIHEyKTtcbiAgICAvLyAgICAgaWYoaXNVdikge1xuICAgIC8vICAgICAgICAgcmV0dXJuIGNjLmJlemllclRvKHQsIFtxMSwgcTIsIGVuZFBvc05dKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBjYy5iZXppZXJUbyh0LCBbcTEsIHEyLCBlbmRQb3NOXSkuZWFzaW5nKGNjLmVhc2VJbih0KSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gc3RhcnRQb3Mg6LW35aeL5Z2Q5qCH54K5XG4gICAgICogQHBhcmFtIGVuZFBvcyAgIOe7iOeCueWdkOagh1xuICAgICAqIEBwYXJhbSBoZWlnaHQgICDmnJ/mnJvmipvniannur/pq5jluqZcbiAgICAgKiBAcGFyYW0gdCAgICAgICAg5pyf5pyb5oqb54mp57q/6L+Q6KGM5pe26Ze0XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVBhcmFjdXZlKHN0YXJ0UG9zOiBjYy5WZWMyLCBlbmRQb3M6IGNjLlZlYzIsIGhlaWdodDogbnVtYmVyLCB0OiBudW1iZXIpIHtcbiAgICAgICAgLy/otbfngrlcbiAgICAgICAgbGV0IHgxID0gc3RhcnRQb3MueDtcbiAgICAgICAgbGV0IHkxID0gc3RhcnRQb3MueTtcbiAgICAgICAgLy/nu4jngrlcbiAgICAgICAgbGV0IHgzID0gZW5kUG9zLng7XG4gICAgICAgIGxldCB5MyA9IGVuZFBvcy55O1xuXG4gICAgICAgIC8v5Y+R5bCE6Lev5b6E5a695bqmXG4gICAgICAgIGxldCB3aWR0aCA9IE1hdGguYWJzKHgzIC0geDEpO1xuICAgICAgICAvL+eul+WHuuS4remXtOS8mue7j+i/h+eahOS4gOeCuVxuICAgICAgICBsZXQgeDIgPSB4MSArIHdpZHRoIC8gMjtcbiAgICAgICAgbGV0IHkyID0geTEgLSBoZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICBsZXQgZHkgPSAoKHkxIC0geTMpICogKE1hdGgucG93KHgxLCAyKSAtIE1hdGgucG93KHgyLCAyKSkgLSAoeTEgLSB5MikgKiAoTWF0aC5wb3coeDEsIDIpIC0gTWF0aC5wb3coeDMsIDIpKSk7XG4gICAgICAgIGxldCBkeCA9ICgoeDEgLSB4MykgKiAoTWF0aC5wb3coeDEsIDIpIC0gTWF0aC5wb3coeDIsIDIpKSAtICh4MSAtIHgyKSAqIChNYXRoLnBvdyh4MSwgMikgLSBNYXRoLnBvdyh4MywyKSkpO1xuICAgICAgICBsZXQgYiA9IGR5IC8gZHg7XG4gICAgICAgIGxldCBhID0gKCh5MSAtIHkyKSAtYiAqICh4MSAtIHgyKSkgLyAoTWF0aC5wb3coeDEsIDIpIC0gTWF0aC5wb3coeDIsIDIpKTtcbiAgICAgICAgbGV0IGMgPSB5MSAtIGEgKiB4MSAqeDEgLSBiKngxO1xuXG4gICAgICAgIC8veOi9tOmAn+W6plxuICAgICAgICBsZXQgdnggPSB3aWR0aCAvIHQ7XG5cbiAgICAgICAgcmV0dXJuIHthLCBiLCBjLCB2eH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIG5vZGUg6ZyA6KaB5YGa5oqb54mp57q/55qE57K+54G1XG4gICAgICogQHBhcmFtIHN0YXJ0UG9zIOi1t+Wni+S9jee9rlxuICAgICAqIEBwYXJhbSBlbmRQb3Mg57uI5q2i5L2N572uXG4gICAgICogQHBhcmFtIHN0YXJ0QSDotbflp4vop5LluqZcbiAgICAgKiBAcGFyYW0gZW5kQSDnu4jmraLop5LluqZcbiAgICAgKiBAcGFyYW0gdCDotbflp4vngrnliLDnu4jmraLngrnpnIDopoHnmoTml7bpl7RcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlTW92aW5nQ3VydmUobm9kZTogY2MuTm9kZSwgc3RhcnRQb3M6IGNjLlZlYzIsIGVuZFBvczogY2MuVmVjMiwgc3RhcnRBOiBudW1iZXIsIGVuZEE6IG51bWJlciwgdDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBzeCA9IHN0YXJ0UG9zLng7XG4gICAgICAgIGxldCBzeSA9IHN0YXJ0UG9zLnk7XG4gICAgICAgIGxldCBleCA9IGVuZFBvcy54ICsgNTA7XG4gICAgICAgIGxldCBleSA9IGVuZFBvcy55ICsgMTUwO1xuICAgICAgICBsZXQgaCA9IG5vZGUuaGVpZ2h0ICogMC41O1xuXG4gICAgICAgIC8v6K6+572u57K+54G155qE6LW35aeL6KeS5bqmXG4gICAgICAgIG5vZGUuYW5nbGUgPSBzdGFydEE7XG4gICAgICAgIGxldCBxMSA9IGNjLnYyKHN4LCBzeSk7XG4gICAgICAgIGxldCBxMiA9IGNjLnYyKHN4ICsgKGV4IC0gc3gpICogMC41LCBzeSArIChleSAtIHN5KSAqIDAuNSArIDIwMCk7XG4gICAgICAgIGxldCBlbmRQID0gY2MudjIoZW5kUG9zLnggLSAzMCwgZW5kUG9zLnkgKyBoKTtcblxuICAgICAgICByZXR1cm4gY2MuYmV6aWVyVG8odCwgW3ExLCBxMiwgZW5kUF0pO1xuICAgIH1cblxuICAgIC8vIC8qKlxuICAgIC8vICAqIOagueaNruWNleWFg+maj+acuueUn+aIkOWNleivjVxuICAgIC8vICAqIEBwYXJhbSB1bml0SWQg5Y2V5YWDaWRcbiAgICAvLyAgKi9cbiAgICAvLyBzdGF0aWMgZ2VuZXJhdGVXb3JkSWQoaWRBcnI6IG51bWJlcltdKToge3JpZ2h0OiBudW1iZXIsIHdyb25nMTogbnVtYmVyLCB3cm9uZzI6IG51bWJlcn0ge1xuICAgIC8vICAgICBsZXQgaW5kZXggPSBUb29sc1VzZWZ1bC5nZXRSYW5kb21OdW0oMCwgaWRBcnIubGVuZ3RoIC0gMSk7XG4gICAgLy8gICAgIGxldCByaWdodCA9IGlkQXJyW2luZGV4XTtcblxuICAgIC8vICAgICBpZihpZEFyci5sZW5ndGggPT0gMSl7XG4gICAgLy8gICAgICAgICByZXR1cm4ge3JpZ2h0OnJpZ2h0LCB3cm9uZzE6cmlnaHQsIHdyb25nMjpyaWdodH07XG4gICAgLy8gICAgIH1cbiAgICAgICAgXG4gICAgLy8gICAgIGxldCBpbmRleFdyb25nMSA9IFRvb2xzVXNlZnVsLmdldFJhbmRvbU51bUV4Y2VwdCgwLCBpZEFyci5sZW5ndGggLSAxLCBpbmRleCk7XG4gICAgLy8gICAgIGxldCB3cm9uZzEgPSBpZEFycltpbmRleFdyb25nMV07XG4gICAgLy8gICAgIGxldCBpbmRleFdyb25nMiA9IFRvb2xzVXNlZnVsLmdldFJhbmRvbU51bUV4Y2VwdCgwLCBpZEFyci5sZW5ndGggLSAxLCBpbmRleCwgaW5kZXhXcm9uZzEpO1xuICAgIC8vICAgICBsZXQgd3JvbmcyID0gaWRBcnJbaW5kZXhXcm9uZzJdXG5cbiAgICAvLyAgICAgcmV0dXJuIHtyaWdodDogcmlnaHQsIHdyb25nMTogd3JvbmcxLCB3cm9uZzI6IHdyb25nMn07XG4gICAgLy8gfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5p+Q6IqC54K55LiK55qE57uE5Lu277yM5aaC5p6c5rKh5pyJ6K+l57uE5Lu25YiZ5aKe5Yqg5LiA5Liq5bm26L+U5ZueXG4gICAgICogQHBhcmFtIG5vZGUg6KaB6I635Y+W57uE5Lu255qE6IqC54K5XG4gICAgICogQHBhcmFtIHR5cGUg6KaB6I635Y+W55qE57uE5Lu257G75Z6LXG4gICAgICovXG4gICAgc3RhdGljIERlZmF1bHRHZXRDb21wb25lbnQ8VCBleHRlbmRzIGNjLkNvbXBvbmVudD4obm9kZSA6IGNjLk5vZGUsIHR5cGU6IHtuZXcoKTogVH0pIDogVCB7XG4gICAgICAgIGxldCBjb20gPSBub2RlLmdldENvbXBvbmVudCh0eXBlKTtcbiAgICAgICAgaWYoY29tID09IG51bGwpe1xuICAgICAgICAgICAgVEtMb2cuTG9nSW5mbyhcIuayoeacie+8jOmcgOimgeWinuWKoENvbXBvbmVudFwiKVxuICAgICAgICAgICAgY29tID0gbm9kZS5hZGRDb21wb25lbnQodHlwZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tIGFzIFQ7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIblhYPntKDliJfooajovpPlh7rkuLrlrZfnrKbkuLLvvIzmr5TlpoLlsIbmlbDlrZdsaXN06L6T5Ye65Li6XG4gICAgICogMSwzLDQsNSw2XG4gICAgICogQHBhcmFtIGFycmF5IOWFg+e0oOWIl+ihqFxuICAgICAqL1xuICAgIHN0YXRpYyBMaXN0VG9TdHJpbmc8VD4oYXJyYXkgOiBUW10pIDogc3RyaW5nIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyArK2kpe1xuICAgICAgICAgICAgY29udGVudCArPSBhcnJheVtpXS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYoaSAhPSAoYXJyYXkubGVuZ3RoIC0gMSkpe1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gXCIsXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yik5pataXRlbeaYr+WQpuWtmOWcqOS6jmFycmF55LitXG4gICAgICogQHBhcmFtIGFycmF5IOimgeajgOa1i+eahOaVsOe7hFxuICAgICAqIEBwYXJhbSBpdGVtIOimgeajgOa1i+eahOWFg+e0oFxuICAgICAqIEByZXR1cm5zIOWmguaenOWtmOWcqOi/lOWbnue0ouW8le+8jOWQpuWImei/lOWbni0xXG4gICAgICovXG4gICAgc3RhdGljIEFycmF5Q29udGFpbkl0ZW08VD4oYXJyYXkgOiBUW10sIGl0ZW0gOiBUICkgOiBudW1iZXJ7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG4gICAgICAgICAgICBpZihlbGVtZW50ID09IGl0ZW0pe1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDliKTmlq1pdGVt5piv5ZCm57KX5Zyo5LiOYXJyYXnkuK3vvIzkvb/nlKjoh6rlrprkuYnnmoTmr5TovoPlh73mlbBcbiAgICAgKiDor6Xlh73mlbDljp/lnovkuLogZnVuYyhpdGVtSW5BcnJheSA6IFQsIGl0ZW0gOiBUKSA6IGJvb2xlYW5cbiAgICAgKiBAcGFyYW0gYXJyYXkg6KaB5qOA5rWL55qE5pWw57uEXG4gICAgICogQHBhcmFtIGl0ZW0g6KaB5qOA5rWL55qE5YWD57SgXG4gICAgICogQHBhcmFtIGNvbXBhcmVGdW5jIOavlOi+g+WHveaVsO+8jOavlOi+g2FycmF55Lit55qE5YWD57Sg5LiOaXRlbeaYr+WQpuebuOetie+8jOWmguaenOebuOetiei/lOWbnnRydWVcbiAgICAgKiBAcmV0dXJucyDlpoLmnpzlrZjlnKjliJnov5Tlm57ntKLlvJXvvIzlkKbliJnov5Tlm54tMVxuICAgICAqL1xuICAgIHN0YXRpYyBBcnJheUNvbnRhaW5JdGVtV2l0aEZ1bmM8VD4oYXJyYXkgOiBUW10sIGl0ZW0gOiBULCBjb21wYXJlRnVuYyA6IEZ1bmN0aW9uKSA6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG4gICAgICAgICAgICBpZihjb21wYXJlRnVuYyhlbGVtZW50LCBpdGVtKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LuO5pWw57uE5Lit56e76Zmk5oyH5a6a5pWw5o2uXG4gICAgICogQHBhcmFtIGFycmF5IOaTjeS9nOaVsOe7hFxuICAgICAqIEBwYXJhbSBpdGVtIOimgeWIoOmZpOeahGl0ZW1cbiAgICAgKiBAcmV0dXJucyDlpoLmnpzlrZjlnKjlhYPntKDkuJTliKDpmaTkuobvvIzliJnov5Tlm550cnVlO+WQpuWImei/lOWbnmZhbHNlXG4gICAgICovXG4gICAgc3RhdGljIFJlbW92ZUFycmF5SXRlbTxUPihhcnJheSA6IFRbXSwgaXRlbSA6IFQpIDogYm9vbGVhbntcbiAgICAgICAgaWYoIWFycmF5IHx8IGFycmF5Lmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGxldCBpbmRleCA9IGFycmF5LmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmKGluZGV4ID49IDApe1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOS7juaVsOe7hOS4reenu+mZpOespuWQiOadoeS7tueahOaVsOaNrlxuICAgICAqIEBwYXJhbSBhcnJheSDmk43kvZznmoTmlbDnu4RcbiAgICAgKiBAcGFyYW0gbmVlZFJlbW92ZUNvbmRpdGlvbiDmnaHku7bliKTmlq3lh73mlbDvvIzov5Tlm55ib29sZWFu57G75Z6L44CC5aaC5p6c5Yik5pat6L+U5ZuedHJ1ZeWImeS8muS7juaVsOe7hOS4reenu+WHulxuICAgICAqL1xuICAgIHN0YXRpYyBSZW1vdmVBcnJheUl0ZW1XaXRoQ29uZGl0aW9uPFQ+KGFycmF5IDogVFtdLCBuZWVkUmVtb3ZlQ29uZGl0aW9uOiBGdW5jdGlvbikgOiBUW117XG4gICAgICAgIGxldCBjb3B5IDogQXJyYXk8VD4gPSBuZXcgQXJyYXk8VD4oKVxuICAgICAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYobmVlZFJlbW92ZUNvbmRpdGlvbiAhPSBudWxsICYmIG5lZWRSZW1vdmVDb25kaXRpb24oZWxlbWVudCkpe1xuXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb3B5LnB1c2goZWxlbWVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb3B5XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5rSX54mMXG4gICAgICogQHBhcmFtIGFycmF5IOimgea0l+eJjOeahOmYn+WIl1xuICAgICAqL1xuICAgIHN0YXRpYyBTaHVmZmxlPFQ+KGFycmF5IDogVFtdKSA6IFRbXXtcbiAgICAgICAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICBsZXQgdG1wID0gYXJyYXlbaV1cbiAgICAgICAgICAgIGFycmF5W2ldID0gYXJyYXlbcmFuZG9tSW5kZXhdXG4gICAgICAgICAgICBhcnJheVtyYW5kb21JbmRleF0gPSB0bXBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbnVtYmVy55qEbGVycFxuICAgICAqIEBwYXJhbSB2YWx1ZSDlvZPliY3lgLxcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOebruagh+WAvFxuICAgICAqIEBwYXJhbSB0IOiOt+WPluavlOS+i1xuICAgICAqL1xuICAgIHN0YXRpYyBMZXJwTnVtYmVyKHZhbHVlIDogbnVtYmVyLCB0YXJnZXQgOiBudW1iZXIsIHQgOiBudW1iZXIpe1xuICAgICAgICBsZXQgb2ZmID0gdGFyZ2V0IC0gdmFsdWU7XG4gICAgICAgIGxldCBvZmZEaXN0ID0gb2ZmICogdDtcbiAgICAgICAgcmV0dXJuIHZhbHVlICsgb2ZmRGlzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmsYLkuKTkuKrkvY3nva7nmoTot53nprtcbiAgICAgKiBAcGFyYW0gcG9zMSDkvY3nva4xXG4gICAgICogQHBhcmFtIHBvczIg5L2N572uMlxuICAgICAqL1xuICAgIHN0YXRpYyBEaXN0YW5jZShwb3MxIDogY2MuVmVjMiwgcG9zMiA6IGNjLlZlYzIpIDogbnVtYmVyIHtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gcG9zMS5zdWIocG9zMikubWFnKCk7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5boioLngrnlvZPliY3nmoTkuJbnlYzlnZDmoIdcbiAgICAgKiBAcGFyYW0gbm9kZSDoioLngrlcbiAgICAgKi9cbiAgICBzdGF0aWMgV29ybGRQb3NpdGlvbihub2RlIDogY2MuTm9kZSkgOiBjYy5WZWMyIHtcbiAgICAgICAgbGV0IHBvcyA9IG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgIHJldHVybiBuZXcgY2MuVmVjMihwb3MueCwgcG9zLnkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bkuJbnlYzlnZDmoIflnKjoioLngrnlnZDmoIfns7vkuK3nmoTlnZDmoIdcbiAgICAgKiBAcGFyYW0gbm9kZSDnm7jlr7nnmoToioLngrlcbiAgICAgKiBAcGFyYW0gd29ybGRQb3Mg5LiW55WM5Z2Q5qCHXG4gICAgICovXG4gICAgc3RhdGljIExvY2FsUG9zaXRpb24obm9kZSA6IGNjLk5vZGUsIHdvcmxkUG9zIDogY2MuVmVjMikgOiBjYy5WZWMze1xuICAgICAgICBsZXQgcG9zID0gbm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgIHJldHVybiBuZXcgY2MuVmVjMyhwb3MueCwgcG9zLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWwhnBvc05vZGXnmoTlnZDmoIfovazmjaLkuLp0YXJnZXROb2Rl6IqC54K55Z2Q5qCH57O755qE5Z2Q5qCHXG4gICAgICogQHBhcmFtIHRhcmdldE5vZGUg6IqC54K55Z2Q5qCH57O7XG4gICAgICogQHBhcmFtIHBvc05vZGUg6KaB6L2s5o2i55qE6IqC54K5XG4gICAgICovXG4gICAgc3RhdGljIExvY2FsUG9zaXRpb25Ub05vZGUodGFyZ2V0Tm9kZSA6IGNjLk5vZGUsIHBvc05vZGUgOiBjYy5Ob2RlKSA6IGNjLlZlYzN7XG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMuV29ybGRQb3NpdGlvbihwb3NOb2RlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuTG9jYWxQb3NpdGlvbih0YXJnZXROb2RlLCB3b3JsZFBvcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L6T5Ye66IqC54K555qE6Lev5b6E77yM5Y2z5bCG54i26IqC54K55LiA5LiA5YiX5Ye677yM5L2/55SoL+WIhumalFxuICAgICAqIOavlOWmgiBVSVJvb3QvVUlNZXNzYWdlQm94L1VJT2tidG5cbiAgICAgKiBAcGFyYW0gbm9kZSDpnIDopoHovpPlh7rot6/lvoTnmoToioLngrlcbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0Tm9kZVBhdGgobm9kZSA6IGNjLk5vZGUpIDogc3RyaW5nIHtcbiAgICAgICAgbGV0IHBhdGggOiBzdHJpbmcgPSBcIlwiXG5cbiAgICAgICAgcGF0aCA9IG5vZGUubmFtZVxuICAgICAgICBsZXQgcGFyZW50IDogY2MuTm9kZSA9IG5vZGUucGFyZW50XG4gICAgICAgIHdoaWxlKHBhcmVudCAhPSBudWxsKXtcbiAgICAgICAgICAgIHBhdGggPSBwYXJlbnQubmFtZSArIFwiL1wiICsgcGF0aFxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlrZfnrKbkuLLovazmlbDlrZdcbiAgICAgKiBAcGFyYW0gc3RyVmFsdWUg5a2X56ym5Liy5pWw5a2XXG4gICAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZSDlpoLmnpzovazmjaLplJnor6/nmoTpu5jorqTov5Tlm55cbiAgICAgKi9cbiAgICBzdGF0aWMgVHJhbnNsYXRlU3RyaW5nVG9OdW1iZXIoc3RyVmFsdWUgOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZSA6IG51bWJlcikgOiBudW1iZXIge1xuICAgICAgICBpZihzdHJWYWx1ZS5sZW5ndGggPT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG51bSA9IE51bWJlci5wYXJzZUludChzdHJWYWx1ZSlcbiAgICAgICAgaWYobnVtID09IE51bWJlci5OYU4pe1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIbpopzoibLnmoQxNui/m+WItue8lueggei9rOaNouaIkOminOiJsu+8jFxuICAgICAqIOavlOWmgmZmMDAwMCzovazmjaLmiJBDb2xvcigyNTUsIDAsIDApXG4gICAgICogQHBhcmFtIHN0ckNvZGUgMTbov5vliLbnvJbnoIHlrZfnrKbkuLJcbiAgICAgKi9cbiAgICBzdGF0aWMgVHJhbnNsYXRlQ29kZVRvQ29sb3Ioc3RyQ29kZSA6IHN0cmluZykgOiBjYy5Db2xvcntcbiAgICAgICAgbGV0IGNvbG9yIDogY2MuQ29sb3IgPSBjYy5Db2xvci5XSElURVxuICAgICAgICBpZihzdHJDb2RlLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgIHJldHVybiBjb2xvclxuICAgICAgICB9XG4gICAgICAgIGxldCBzdHJTcGxpdENvZGUgPSBcIlwiXG4gICAgICAgIGxldCBjb2xvclZhbHVlIDogbnVtYmVyW10gPSBbXVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RyQ29kZS5sZW5ndGg7ICsraSl7XG4gICAgICAgICAgICBzdHJTcGxpdENvZGUgKz0gc3RyQ29kZVtpXVxuICAgICAgICAgICAgaWYoKGkrMSkgJSAyID09IDApe1xuICAgICAgICAgICAgICAgIGNvbG9yVmFsdWUucHVzaChOdW1iZXIucGFyc2VJbnQoc3RyU3BsaXRDb2RlLCAxNikpXG4gICAgICAgICAgICAgICAgc3RyU3BsaXRDb2RlID0gXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoY29sb3JWYWx1ZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGNvbG9yLnNldFIoY29sb3JWYWx1ZVswXSlcbiAgICAgICAgfVxuICAgICAgICBpZihjb2xvclZhbHVlLmxlbmd0aCA+IDEpe1xuICAgICAgICAgICAgY29sb3Iuc2V0Ryhjb2xvclZhbHVlWzFdKVxuICAgICAgICB9XG4gICAgICAgIGlmKGNvbG9yVmFsdWUubGVuZ3RoID4gMil7XG4gICAgICAgICAgICBjb2xvci5zZXRCKGNvbG9yVmFsdWVbMl0pXG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYoY29sb3JWYWx1ZS5sZW5ndGggPiAzKXtcbiAgICAgICAgLy8gICAgIGNvbG9yLnNldEEoY29sb3JWYWx1ZVszXSlcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gY29sb3JcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RXhwZW5kTnVtKGxlZnRUaW1lOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAvL+iuoeeul+WAkuiuoeaXtuWvueW6lOeahOaZtuefs+a2iOiAl1xuICAgICAgICBsZXQgcmFuZ2VzID0gWzYwLCAxMjAwLCAzNjAwLCA0MzIwMCwgODY0MDAsIDI1OTIwMCwgNjA0ODAwXTtcbiAgICAgICAgbGV0IGdlbXMgPSBbNSwgNTAsIDEwMCwgOTAwLCAxNTAwLCA0MDAwLCA5MDAwXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcmFuZ2VzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgaWYgKGxlZnRUaW1lIDw9IHJhbmdlc1tpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoTWF0aC5jZWlsKChsZWZ0VGltZSAtIHJhbmdlc1tpIC0gMV0pIC8gKChyYW5nZXNbaV0gLSByYW5nZXNbaSAtIDFdKSAvIChnZW1zW2ldIC0gZ2Vtc1tpIC0gMV0pKSArIGdlbXNbaSAtIDFdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=