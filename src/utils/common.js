/*
 * @Description: 公共方法
 * @Author: xwq
 * @Date: 2019-01-18 15:40:09
 */
export default {
    /**
     * @Description: 随机正整数
     * @Param: min [type:Number] 最小数
     * @Param: max [type:Number] 最大数
     * @Author: xwq
     * @Date: 2019-01-29 10:36:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-01-29 11:02:50
     * @return: 返回min->max之间的正整数
     */
    randowNumber(min, max) {
        min = min || 0 ;
        max = max || 20 ;
        let res = min + parseInt(Math.random() * (max - min));
        return res;
    },
    /**
     * @Description: 引用数据类型判断
     * @Param: obj [type:object] 要判定的object数据
     * @Author: xwq
     * @Date: 2019-01-29 10:38:35
     * @LastEditors: xwq
     * @LastEditTime: Do not edit
     * @return: Boolean
     */
    arrTypeJudge(obj) {
        //使用arr instanceof type 或者 type==arr.constructor进行判断也可以
        let res = Object.prototype.toString.call(obj).slice(8, -1)
        return res === 'Array' ? true : false;
        // if(typeof obj ==='object' && obj instanceof Array){
        //     return 'array';
        // }else if(typeof obj ==='object' && obj instanceof Object){
        //     return 'object';
        // }
    },
    objectTypeJudge(obj) {
        //使用arr instanceof type 或者 type==arr.constructor进行判断也可以
        let res = Object.prototype.toString.call(obj).slice(8, -1)
        return res === 'Object' ? true : false;
    },
    /**
     * @Description: Array去重
     * @Param: arr [type:Array] 要去重的数组
     * @Author: xwq
     * @Date: 2019-01-29 10:43:56
     * @LastEditors: xwq
     * @LastEditTime: Do not edit
     * @return: 去重后的新数组
     */
    wipeRepeat(arr) {
        if (typeof arr === 'object' && arr instanceof Array) {
            // let res = Array.from(new Set(arr));
            let res = [...new Set(arr)];
            return res;
        } else {
            alert('传值类型必须是:Array')
        }
    },
    /**
     * @Description: Array从小->大排序
     * @Param: arr [type:Array] 要排序的数组
     * @Author: xwq
     * @Date: 2019-01-29 10:46:16
     * @LastEditors: xwq
     * @LastEditTime: Do not edit
     * @return: 排序后的新数组
     */
    minToMaxSort(arr) {
        let temp;
        if (typeof arr === 'object' && arr instanceof Array) {
            for (let i = 0, len = arr.length; i < len; i++) {
                for (let j = i + 1, len = arr.length; j < len; j++) {
                    if (arr[i] > arr[j]) {
                        temp = arr[i];    //交换赋值
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            return arr;
        } else {
            alert('传值类型必须是Array')
        }

    },
    /**
     * @Description: Array从大->小排序
     * @Param: arr [type:Array] 要排序的数组
     * @Author: xwq
     * @Date: 2019-01-29 10:46:16
     * @LastEditors: xwq
     * @LastEditTime: Do not edit
     * @return: 排序后的新数组
     */
    maxToMinSort(arr) {
        console.log(arr.constructor)
        let temp;
        if (typeof arr === 'object' && arr instanceof Array) {
            for (let i = 0, len = arr.length; i < len; i++) {
                for (let j = i + 1, len = arr.length; j < len; j++) {
                    if (arr[i] < arr[j]) {
                        temp = arr[i];    //交换赋值
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            return arr;
        } else {
            alert('传值类型必须是Array')
        }

    },
    /**
     * @Description: sessionStorage存储或获取的方法
     * @Param: name : [type:string] 自定义名字
     * @Param: data : [type:object] 存储的内容
     * @Author: xwq
     * @Date: 2019-01-29 10:49:43
     * @LastEditors: xwq
     * @LastEditTime: Do not edit
     * @return: 获取时有结果返回
     */
    sessionCache: function (name, data) {
        name = name || '';
        data = data || '';
        name && data === '' ?
            JSON.parse(window.sessionStorage.getItem(name)) :
        name && data ?
            window.sessionStorage.setItem(name, JSON.stringify(data)) :
        console.log("缺少key值或val值");
    },
    /**
     * @Description: localStorage存储或获取的方法
     * @Param: name : [type:string] 自定义名字
     * @Param: data : [type:object] 存储的内容
     * @Author: xwq
     * @Date: 2019-01-29 10:49:43
     * @LastEditors: xwq
     * @LastEditTime: Do not edit
     * @return: 获取时有结果返回
     */
    localCache: function (name, data) {
        name = name || '';
        data = data || '';
        name && data === '' ?
            JSON.parse(window.localStorage.getItem(name)) :
        name && data ?
            window.localStorage.setItem(name, JSON.stringify(data)) :
        console.log("缺少key值或val值");
    },
    /**
     * @Description: 清除对应名字的缓存
     * @Param: type : [type:string] 删除的缓存类型
     * @Param: name : [type:string] 删除的名字
     * @Author: xwq
     * @Date: 2019-01-29 10:52:47
     * @LastEditors: xwq
     * @LastEditTime: Do not edit
     * @return: 
     */
    removeCache: function (type, name) {
        type = type || '';
        name = name || '';
        type === 'sessionInfo' && name ? 
            window.sessionStorage.removeItem(name) :
        type === 'localInfo' && name ?
            window.localStorage.removeItem(name) :
        console.log("缺少type 或 name值");
    },
    /**
     * @Description: 清空本地缓存(localStorage/sessionStorage公共方法)
     * @Param: type : [type:string] 清空的缓存类型
     * @Author: xwq
     * @Date: 2019-01-29 10:54:02
     * @LastEditors: xwq
     * @LastEditTime: Do not edit
     * @return: 
     */
    clearCache: function (type) {
        type = type || '';
        type === 'sessionInfo' ?
            window.sessionStorage.clear() : 
        type === "localInfo" ?
            window.localStorage.clear() : 
        console.log('缺少type参数');
    },
}