"use strict";
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