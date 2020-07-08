import TKLog from "../log/TKLog";
import ObjectPoolController from "../pool/ObjectPoolController";

interface ICheckNodeCondition {
    (checkNode : cc.Node) : boolean;
}

interface IProcessNode {
    (node : cc.Node):void;
}

interface IValueUpdated {
    (value : number) : void;
}

export default class ToolsUseful {

    /**
     * 从节点强制获取一个组件，如果该组件没有就增加一个返回
     * @param node 要获取组件的节点
     * @param componentName 组件名称
     */
    static GetComponentForce<T>(node : cc.Node, componentName : string) : T {
        let com : T = node.getComponent(componentName)
        if(com == null){
            com = node.addComponent(componentName)
        }
        return com
    }
    /**
     * 转换秒数为天，向上取整
     * @param sec 秒数
     */
    static ConvertSecToDay(sec:number) : number{
        let x = sec / 86400; // 60 * 60 * 24
        let day = Math.ceil(x);
        return day;
    }

    /**
     * 转换秒数为天，向下取整
     * @param sec 秒数
     */
    static RoundDownToDay(sec:number) : number {
        let x = sec / 86400;
        let day = Math.floor(x);
        return day;
    }

    /**
     * 将秒数转换为hh:mm:ss的形式
     * 比如128秒换成：00:02:08
     * @param totalSec 要转换的秒数
     */
    static GenerateTotalSec_hms(totalSec : number) : string{
        if(totalSec <= 0){
            return "00:00:00";
        }
        let min = Math.floor(totalSec / 60);
        let hour = Math.floor(min / 60);
        min = Math.floor((totalSec - hour * 3600) / 60);
        let sec = totalSec % 60;
        return ToolsUseful.SupplementZero(hour+"", 2) + ":" + ToolsUseful.SupplementZero(min+"", 2) + ":" + ToolsUseful.SupplementZero(sec + "", 2);
    }

    /**
     * 转换成分秒 00:00 
     * @param totalSec 要转换的秒数
     */
    static GenerateTotalSec_ms(totalSec : number) : string {
        if(totalSec <= 0){
            return "00:00";
        }
        let min = Math.floor(totalSec / 60);
        let sec = totalSec % 60;

        return ToolsUseful.SupplementZero(min+"",2) + ":" + ToolsUseful.SupplementZero(sec+"",2);
    }

    /**
     * 转换成时分 00:00
     * @param totalSec 要转换的秒数
     */
    static GenerateTotalSec_hm(totalSec : number) : string {
        if(totalSec <= 0){
            return "00:00";
        }

        let min = Math.floor(totalSec / 60);
        let hour = Math.floor(min / 60);
        min = Math.floor((totalSec - hour * 3600) / 60);
        return ToolsUseful.SupplementZero(hour+"",2) + ":" + ToolsUseful.SupplementZero(min+"",2);
    }

    static GenerateMinutes(seconds: number) : {hour: number, min: number}{
        if(seconds <= 0) {
            return {hour: 0, min: 0};
        }
        let min = Math.ceil(seconds / 60);
        let hour = Math.floor(min / 60);
        let time = {
            hour: hour,
            min: min
        }
        return time;
    }

    /**
     * 转换一个整数位字符串，每隔三位会有一个逗号，比如
     * 12345678转换为“12,345,678”
     * @param num 数字
     */
    static TranslateIntToCommaString(num : number):string{
        let numStr = num + "";
        if(numStr.length <= 3){
            return numStr;
        }

        let strRes = "";
        // 排在最前面的数字有几个
        let forwardLength = numStr.length % 3;
        // 先把排在前面的加到字符串中
        for(let i = 0; i < forwardLength; ++i){
            strRes += numStr.charAt(i);
        }
        // 来个逗号
        if (forwardLength > 0){
            strRes += ",";
        }
        // 之后的，每隔3个数就加个逗号，当然最后一个数是不加的
        let commaIndex = 0;
        for(let i = forwardLength; i < numStr.length; ++i){
            strRes += numStr.charAt(i);
            commaIndex++;
            if(commaIndex == 3 && i != numStr.length - 1){
                strRes += ",";
                commaIndex = 0;
            }
        }
        return strRes;
    }

    /**
     * 将nCheckData转换为[0,nTotalData)之间的值
     * 如果nCheckData>=nTotalData,则又从0开始重新计算
     * @param checkData 要检测是数字
     * @param totalData 数字范围最大值
     */
    static ClampCircleData(checkData : number, totalData : number){
        if(checkData >= 0
            && checkData < totalData){
                return checkData;
            }
        else{
            let per = Math.floor(checkData < 0 ? (checkData / totalData) - 1 : checkData / totalData);
            checkData -= per * totalData;
            return checkData;
        }
    }

    /**
     * 二维坐标转为一维索引
     * @param xpos 横坐标
     * @param ypos 纵坐标
     * @param width 横长度
     */
    static CoordTranslateToIndex(xpos : number, ypos : number, width : number) : number{
        return ypos * width + xpos;
    }

    /**
     * 一维索引转换为二维坐标
     * @param index 一维索引
     * @param width 二维宽度
     */
    static IndexTranslateToCoord(index : number, width : number) : [number,number] {
        let [xpos,ypos] = [0,0];
        ypos = Math.floor(index / width);
        xpos = index % width;
        return [xpos, ypos];
    }

    
    /**
     * 删除符合条件的子对象
     * 如果没有条件，就是删除所有子对象
     * @param root 根节点
     * @param destroyCondition 删除条件，如果为空表示没有条件全部删除
     */
    static DestroyChildren(root : cc.Node, destroyCondition ?: ICheckNodeCondition) {
        if(root == null){
            return;
        }
        let lstChild:Array<cc.Node> = [];
        root.children.forEach((node)=>{
            lstChild.push(node);
        })

        for(let i = 0; i < lstChild.length; ++i){
            if(destroyCondition == null || destroyCondition(lstChild[i])){
                lstChild[i].setParent(null);
                lstChild[i].destroy();
            }
        }
    }

    /**
     * 删除符合条件的子对象
     * 使用内存池控制进行删除
     * @param root 根节点
     * @param destroyCondition 删除条件，如果为空表示没有条件
     */
    static DestroyChildrenUsePool(root : cc.Node, destroyCondition ?: ICheckNodeCondition) {
        if(root == null){
            return;
        }
        let lstChild:Array<cc.Node> = [];
        root.children.forEach((node)=>{
            lstChild.push(node);
        })

        for(let i = 0; i < lstChild.length; ++i){
            if(destroyCondition == null || destroyCondition(lstChild[i])){
               ObjectPoolController.Destroy(lstChild[i]);
            }
        }
    }

    /**
     * 遍历子对象进行一些操作
     * @param root 根节点
     * @param processFunc 要对子对象进行的操作
     * @param interation 是否迭代，即是否也对子对象的子对象进行操作
     */
    static ProcessChildren(root : cc.Node, processFunc : IProcessNode, interation : boolean) {
        if(root == null){
            return;
        }
        if(processFunc == null){
            return;
        }
        let trsChild : cc.Node = null;
        for(let i = 0; i < root.childrenCount; ++i){
            trsChild = root.children[i];
            processFunc(trsChild);

            if(interation && trsChild.childrenCount > 0){
                ToolsUseful.ProcessChildren(trsChild, processFunc, interation);
            }
        }
    }

    /**
     * 将一个值固定在01之间
     * @param value 要检测的值
     */
    static Clamp01(value : number) : number{
        return ToolsUseful.Clamp(value, 0, 1);
    }

    /**
     * 将一个值固定在min和max之间
     * @param value 要固定的值
     * @param min 最小值
     * @param max 最大值
     */
    static Clamp(value : number, min : number, max : number) : number{
        if(value < min){
            return min;
        }
        if(value > max){
            return max;
        }
        return value;
    }

    /**
     * 检测某个数值是否在需求范围内
     * @param value 待检测的值
     * @param min 最小值
     * @param max 最大值
     */
    static isValid(value: number, min: number, max: number) : boolean {
        if(value <= max && value > min) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * 将指定数字输出为指定长度，如果不够则前面补0；如果已经超出则不管
     * @param num 要检测的数字
     * @param length 要输出的长度
     */
    static SupplementZero(num:string, length:number) : string {
        if((num + "").length >= length) {
            return num.toString();
        }
        return ToolsUseful.SupplementZero("0" + num, length)
    }

    //位相关//////////////////////////////////////////////////////////////
    /**
     * 检查2的幂的包含情况
     * 检查ncheckValue是否包含在nContain中
     * 比如nContain为 2 + 4 = 6，nCheckValue = 1
     * 则返回false， 如果nCheckValue = 2， 则返回true
     * @param contain 容器值
     * @param checkValue 这个值必须是2的幂或几个2的幂的值的和
     */
    static BitContent(contain : number, checkValue : number) : boolean{
        if((contain & checkValue) != 0){
            return true;
        }
        return false;
    }

    /**
     * 位中索引值
     * @param contain 容器值
     * @param index 取值范围为0~31
     */
    static BitValue(contain : number, index : number) : boolean {
        if(index >= 32){
            return false;
        }
        let obpos = index % 32;
        let i = 1;
        i <<= obpos;
        i &= contain;
        return (i != 0);
    }

    /**
     * 从位中去掉某些值
     * 比如 nContain = 1 + 2 + 4 + 8 = 15
     * nRemove = 2 + 4 = 6
     * 则返回 nContai & ~nRemove = 15 & ~6 = 9
     * @param contain 容器值
     * @param remove 要移出的值
     */
    static BitRemove(contain : number, remove : number) : number{
        return contain & ~remove;
    }

    /**
     * 在位中添加一些值
     * 其实就是或操作了
     * 比如 2 | 6 = 6
     * 2 | 4 = 6
     * @param contain 容器值
     * @param add 要添加的值
     */
    static BitAdd(contain : number, add : number) : number{
        return contain | add;
    }
    ////////////////////////////////////////////////////////////////

    //Promise//////////////////////////////////////////////////////////////
    /**
     * 等待一定的秒数
     * @param sec 秒数
     */
    static WaitForSeconds(sec : number) : Promise<void> {
        return new Promise<void>((wait)=>{
            setTimeout(() => {
                wait();
            }, sec*1000);
        }).catch(e=>{
            throw new Error("WaitForseconds Err:" + e);
        });
    }

    /**
     * 将值从start在durSec时间内变化到end
     * @param durSec 持续时间（秒）
     * @param startValue 开始值
     * @param endValue 目标值
     * @param perUpdateFunc 每次更新回调
     * @param completeFunc 执行完成后回调
     * @param startDelaySec 开始时先延迟时间（秒）
     */
    static async OnFadeInOrOutValue(durSec : number, startValue : number, endValue : number, perUpdateFunc : IValueUpdated, completeFunc ?: Function, startDelaySec = 0) : Promise<void>{
        if(startDelaySec > 0){
            await ToolsUseful.WaitForSeconds(startDelaySec);
        }

        let dist = endValue - startValue;
        let percent = 0;
        let interval = 1/100;
        for(let f = 0; f < durSec; f += interval){
            let alpha = ToolsUseful.Clamp01(2.0 * (1.0 - f / durSec));
            percent = 1.0 - alpha;
            if(perUpdateFunc != null){
                perUpdateFunc(startValue + percent * dist);
            }
            await ToolsUseful.WaitForSeconds(interval);
        }

        if(completeFunc != null){
            completeFunc();
        }
    }
    /////////////////////////////////////////////////////////////////////

    
    //常量///////////////////////////////////////////////////////////////////
    /**
     * 黄金比例分割点
     */
    static GoldPointRadio(){
        return 0.618;
    }
    /////////////////////////////////////////////////////////////////////

    /**
     * 角度转弧度
     * @param angle 角度
     */
    static Deg2Rad (angle: number) {
        return angle * (Math.PI / 180);
    }
    
    /**
     * 弧度转角度
     * @param radius 弧度
     */
    static Rad2Deg (radius: number) {
        return radius * (180 / Math.PI);
    }

    /**
     * 0、1的互相转换
     * @param num 0或者1
     */
    static Exchage0and1(num: number) {
        if(num == 0) {
            return 1;
        }
        if(num == 1) {
            return 0;
        }
    }

    /**
     * 将节点active设置为true
     * @param node1 第一个节点
     * @param restOfNode 剩余节点
     */
    static nodeVisible(node1: cc.Node, ...restOfNode: cc.Node[]) {
        node1.active = true;
        restOfNode.forEach((item) => {
            item.active = true;
        })
    }

    /**
     * 将节点active设置为false
     * @param node1 第一个节点
     * @param restOfNode 剩余节点
     */
    static nodeInvisible(node1: cc.Node, ...restOfNode: cc.Node[]) {
        node1.active = false;
        restOfNode.forEach((item) => {
            item.active = false;
        })
    }

    /**
     * 将按钮设置为可点击状态
     * @param btn1 第一个按钮组件
     * @param restOfBtn 剩余按钮组件
     */
    static btnEnableClick(btn1: cc.Button, ...restOfBtn: cc.Button[]) {
        btn1.interactable = true;
        restOfBtn.forEach((item) => {
            item.interactable = true;
        })
    }

    /**
     * 将按钮置为不可点击状态
     * @param btn1 第一个按钮组件
     * @param restOfBtn 剩余按钮组件
     */
    static btnDisableClick(btn1: cc.Button, ...restOfBtn: cc.Button[]) {
        btn1.interactable = false;
        restOfBtn.forEach((item) => {
            item.interactable = false;
        })
    }

    /**
     * 生成随机值，随机出的值不能是except中的值
     * @param minNum 最小值
     * @param maxNum 最大值
     * @param except 需要排除的值列表
     */
    static getRandomNumExcept(wordsIdList: number[], ...except : number[]) : number{
        let maxLoop = 1000;
        let minNum = 0;
        let maxNum = wordsIdList.length - 1;
        let num = this.getRandomNum(minNum, maxNum);
        if(except == null || except.length == 0){
            return wordsIdList[num];
        }
        while(true){
            let needReGen : boolean = false;
            // 判断生成的值是否在需要排除的列表中
            for(let i = 0; i < except.length; ++i){
                // 如果存在，则需要重新获取一个随机值
                if(wordsIdList[num] == except[i]){
                    needReGen = true;
                    break;
                }
            }
            if(needReGen){
                maxLoop--;
                if(maxLoop <= 0){
                    break;
                }
                num = this.getRandomNum(minNum, maxNum);
            }else{
                
                break;
            }
        }
        return wordsIdList[num];
    }

    /**
     * 生成从minNum到maxNum的随机数
     * 如果指定decimalNum位数，则生成指定小数位数的随机数
     * 若不指定任何参数，则生成0-1之间的随机数
     * @param minNum 最小值
     * @param maxNum 最大值
     * @param decimalNum 指定随机数的小数点后的位数
     */
    static getRandomNum(minNum?: number, maxNum?: number, decimalNum?: number) : number {
        let max :number = 0, min : number = 0;
        minNum <= maxNum ? (min = minNum, max = maxNum) : (min = maxNum, max = minNum);

        // 如果相同
        if(min == max){
            return min
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
    }

    /**
     * 生成控制曲率点的随机坐标
     * @param startPos 起始位置坐标
     * @param endPos 结束位置坐标
     */
    static getRandomBezierPoint(startPos: cc.Vec2, endPos: cc.Vec2, screenMaxY : number, screenHeight : number): cc.Vec2 {
        let aX = (endPos.x + startPos.x) / 2;
        let x = ToolsUseful.getRandomNum(aX, startPos.x);

        let dY = screenMaxY - startPos.y;
        let ran = Math.random();
        let y: number;
        if(ran <= 0.7) {
            y = ToolsUseful.getRandomNum(startPos.y, screenHeight);
        } else {
            y = ToolsUseful.getRandomNum(screenHeight, screenHeight + dY);
        }

        return cc.v2(x, y);
    }

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
    static createParacuve(startPos: cc.Vec2, endPos: cc.Vec2, height: number, t: number) {
        //起点
        let x1 = startPos.x;
        let y1 = startPos.y;
        //终点
        let x3 = endPos.x;
        let y3 = endPos.y;

        //发射路径宽度
        let width = Math.abs(x3 - x1);
        //算出中间会经过的一点
        let x2 = x1 + width / 2;
        let y2 = y1 - height;
        
        let dy = ((y1 - y3) * (Math.pow(x1, 2) - Math.pow(x2, 2)) - (y1 - y2) * (Math.pow(x1, 2) - Math.pow(x3, 2)));
        let dx = ((x1 - x3) * (Math.pow(x1, 2) - Math.pow(x2, 2)) - (x1 - x2) * (Math.pow(x1, 2) - Math.pow(x3,2)));
        let b = dy / dx;
        let a = ((y1 - y2) -b * (x1 - x2)) / (Math.pow(x1, 2) - Math.pow(x2, 2));
        let c = y1 - a * x1 *x1 - b*x1;

        //x轴速度
        let vx = width / t;

        return {a, b, c, vx};
    }

    /**
     * 
     * @param node 需要做抛物线的精灵
     * @param startPos 起始位置
     * @param endPos 终止位置
     * @param startA 起始角度
     * @param endA 终止角度
     * @param t 起始点到终止点需要的时间
     */
    static createMovingCurve(node: cc.Node, startPos: cc.Vec2, endPos: cc.Vec2, startA: number, endA: number, t: number) {
        let sx = startPos.x;
        let sy = startPos.y;
        let ex = endPos.x + 50;
        let ey = endPos.y + 150;
        let h = node.height * 0.5;

        //设置精灵的起始角度
        node.angle = startA;
        let q1 = cc.v2(sx, sy);
        let q2 = cc.v2(sx + (ex - sx) * 0.5, sy + (ey - sy) * 0.5 + 200);
        let endP = cc.v2(endPos.x - 30, endPos.y + h);

        return cc.bezierTo(t, [q1, q2, endP]);
    }

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
    static DefaultGetComponent<T extends cc.Component>(node : cc.Node, type: {new(): T}) : T {
        let com = node.getComponent(type);
        if(com == null){
            TKLog.LogInfo("没有，需要增加Component")
            com = node.addComponent(type)
        }
        return com as T;

    }

    /**
     * 将元素列表输出为字符串，比如将数字list输出为
     * 1,3,4,5,6
     * @param array 元素列表
     */
    static ListToString<T>(array : T[]) : string {
        let content : string = "";
        for(let i = 0; i < array.length; ++i){
            content += array[i].toString();
            if(i != (array.length - 1)){
                content += ",";
            }
        }
        return content;
    }

    /**
     * 判断item是否存在于array中
     * @param array 要检测的数组
     * @param item 要检测的元素
     * @returns 如果存在返回索引，否则返回-1
     */
    static ArrayContainItem<T>(array : T[], item : T ) : number{
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if(element == item){
                return index
            }
        }
        return -1
    }
    /**
     * 判断item是否粗在与array中，使用自定义的比较函数
     * 该函数原型为 func(itemInArray : T, item : T) : boolean
     * @param array 要检测的数组
     * @param item 要检测的元素
     * @param compareFunc 比较函数，比较array中的元素与item是否相等，如果相等返回true
     * @returns 如果存在则返回索引，否则返回-1
     */
    static ArrayContainItemWithFunc<T>(array : T[], item : T, compareFunc : Function) : number {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if(compareFunc(element, item)){
                return index
            }
        }
        return -1
    }

    /**
     * 从数组中移除指定数据
     * @param array 操作数组
     * @param item 要删除的item
     * @returns 如果存在元素且删除了，则返回true;否则返回false
     */
    static RemoveArrayItem<T>(array : T[], item : T) : boolean{
        if(!array || array.length == 0){
            return false
        }
        let index = array.indexOf(item);
        if(index >= 0){
            array.splice(index, 1);
            return true
        }
        return false
    }
    /**
     * 从数组中移除符合条件的数据
     * @param array 操作的数组
     * @param needRemoveCondition 条件判断函数，返回boolean类型。如果判断返回true则会从数组中移出
     */
    static RemoveArrayItemWithCondition<T>(array : T[], needRemoveCondition: Function) : T[]{
        let copy : Array<T> = new Array<T>()
        array.forEach(element => {
            if(needRemoveCondition != null && needRemoveCondition(element)){

            }else{
                copy.push(element)
            }
        });
        return copy
    }

    /**
     * 洗牌
     * @param array 要洗牌的队列
     */
    static Shuffle<T>(array : T[]) : T[]{
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            let tmp = array[i]
            array[i] = array[randomIndex]
            array[randomIndex] = tmp
        }
        return array;
    }

    /**
     * number的lerp
     * @param value 当前值
     * @param target 目标值
     * @param t 获取比例
     */
    static LerpNumber(value : number, target : number, t : number){
        let off = target - value;
        let offDist = off * t;
        return value + offDist;
    }

    /**
     * 求两个位置的距离
     * @param pos1 位置1
     * @param pos2 位置2
     */
    static Distance(pos1 : cc.Vec2, pos2 : cc.Vec2) : number {
        let distance = pos1.sub(pos2).mag();
        return distance;
    }

    /**
     * 获取节点当前的世界坐标
     * @param node 节点
     */
    static WorldPosition(node : cc.Node) : cc.Vec2 {
        let pos = node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        return new cc.Vec2(pos.x, pos.y);
    }
    /**
     * 获取世界坐标在节点坐标系中的坐标
     * @param node 相对的节点
     * @param worldPos 世界坐标
     */
    static LocalPosition(node : cc.Node, worldPos : cc.Vec2) : cc.Vec3{
        let pos = node.convertToNodeSpaceAR(worldPos);
        return new cc.Vec3(pos.x, pos.y);
    }

    /**
     * 将posNode的坐标转换为targetNode节点坐标系的坐标
     * @param targetNode 节点坐标系
     * @param posNode 要转换的节点
     */
    static LocalPositionToNode(targetNode : cc.Node, posNode : cc.Node) : cc.Vec3{
        let worldPos = this.WorldPosition(posNode);
        return this.LocalPosition(targetNode, worldPos);
    }

    /**
     * 输出节点的路径，即将父节点一一列出，使用/分隔
     * 比如 UIRoot/UIMessageBox/UIOkbtn
     * @param node 需要输出路径的节点
     */
    static GetNodePath(node : cc.Node) : string {
        let path : string = ""

        path = node.name
        let parent : cc.Node = node.parent
        while(parent != null){
            path = parent.name + "/" + path
            parent = parent.parent
        }

        return path
    }

    /**
     * 字符串转数字
     * @param strValue 字符串数字
     * @param defaultValue 如果转换错误的默认返回
     */
    static TranslateStringToNumber(strValue : string, defaultValue : number) : number {
        if(strValue.length == 0){
            return defaultValue
        }
        let num = Number.parseInt(strValue)
        if(num == Number.NaN){
            return defaultValue
        }
        return num
    }

    /**
     * 将颜色的16进制编码转换成颜色，
     * 比如ff0000,转换成Color(255, 0, 0)
     * @param strCode 16进制编码字符串
     */
    static TranslateCodeToColor(strCode : string) : cc.Color{
        let color : cc.Color = cc.Color.WHITE
        if(strCode.length == 0){
            return color
        }
        let strSplitCode = ""
        let colorValue : number[] = []
        for(let i = 0; i < strCode.length; ++i){
            strSplitCode += strCode[i]
            if((i+1) % 2 == 0){
                colorValue.push(Number.parseInt(strSplitCode, 16))
                strSplitCode = ""
            }
        }

        if(colorValue.length > 0){
            color.setR(colorValue[0])
        }
        if(colorValue.length > 1){
            color.setG(colorValue[1])
        }
        if(colorValue.length > 2){
            color.setB(colorValue[2])
        }
        // if(colorValue.length > 3){
        //     color.setA(colorValue[3])
        // }
        return color
    }

    static getExpendNum(leftTime: number): number {
        //计算倒计时对应的晶石消耗
        let ranges = [60, 1200, 3600, 43200, 86400, 259200, 604800];
        let gems = [5, 50, 100, 900, 1500, 4000, 9000];
        for (let i = 1; i <= ranges.length - 1; i++) {
            if (leftTime <= ranges[i]) {
                return (Math.ceil((leftTime - ranges[i - 1]) / ((ranges[i] - ranges[i - 1]) / (gems[i] - gems[i - 1])) + gems[i - 1]));
            }
        }
    }
}
