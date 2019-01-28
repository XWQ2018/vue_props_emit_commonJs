
export default {
    //随机正整数
    randowNumber(min, max) {
        min = min || 0 ;
        max = max || 20 ;
        let res = min + parseInt(Math.random() * (max - min));
        return res;
    },
    //引用数据类型判断
    //obj : [type:obj] object
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
    //Array去重
    //arr : [type:Array] 数组
    wipeRepeat(arr) {
        if (typeof arr === 'object' && arr instanceof Array) {
            // let res = Array.from(new Set(arr));
            let res = [...new Set(arr)];
            return res;
        } else {
            alert('传值类型必须是:Array')
        }
    },
    //Array从小到大排序
    //arr : [type:Array] 数组
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
    //Array从大到小排序
    //arr : [type:Array] 数组
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
    //sessionStorage存储或获取的方法
    //name : [type:string] 自定义名字
    //data : [type:object] 存储的内容
    sessionCache: function (name, data) {
        name = name || '';
        data = data || '';
        name && data === '' ?
            JSON.parse(window.sessionStorage.getItem(name)) :
        name && data ?
            window.sessionStorage.setItem(name, JSON.stringify(data)) :
        console.log("缺少key值或val值");
    },
    //localStorage存储或获取的方法
    //name : [type:string] 自定义名字
    //data : [type:object] 存储的内容
    localCache: function (name, data) {
        name = name || '';
        data = data || '';
        name && data === '' ?
            JSON.parse(window.localStorage.getItem(name)) :
        name && data ?
            window.localStorage.setItem(name, JSON.stringify(data)) :
        console.log("缺少key值或val值");
    },
    //清除对应名字的缓存
    //type : [type:string] 删除的缓存类型
    //name : [type:string] 删除的名字
    removeCache: function (type, name) {
        type = type || '';
        name = name || '';
        type === 'sessionInfo' && name ? 
            window.sessionStorage.removeItem(name) :
        type === 'localInfo' && name ?
            window.localStorage.removeItem(name) :
        console.log("缺少type 或 name值");
    },
    //清空本地缓存(localStorage/sessionStorage公共方法)
    //type : [type:string] 清空的缓存类型
    clearCache: function (type) {
        type = type || '';
        type === 'sessionInfo' ?
            window.sessionStorage.clear() : 
        type === "localInfo" ?
            window.localStorage.clear() : 
        console.log('缺少type参数');
    },
}