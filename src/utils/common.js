export default {
    //随机正整数
    randowNumber(min,max){
        min = min==null ? 0 : min;
        max = max==null ? 20 :max;
        let res = min + parseInt(Math.random()*(max-min));
        return res;
    },
    //引用数据类型判断
    arrTypeJudge(obj){
        //使用arr instanceof type 或者 type==arr.constructor进行判断也可以
        let res = Object.prototype.toString.call(obj).slice(8,-1)
        return res==='Array' ? true : false;
        // if(typeof obj ==='object' && obj instanceof Array){
        //     return 'array';
        // }else if(typeof obj ==='object' && obj instanceof Object){
        //     return 'object';
        // }
    },
    objectTypeJudge(obj){
        //使用arr instanceof type 或者 type==arr.constructor进行判断也可以
        let res = Object.prototype.toString.call(obj).slice(8,-1)
        return res==='Object' ? true : false;
    },
    //Array去重
    wipeRepeat(arr){
        if(typeof arr ==='object' && arr instanceof Array){
            // let res = Array.from(new Set(arr));
            let res = [...new Set(arr)];
            return res;
        }else{
            alert('传值类型必须是Array')
        }
    },
    //Array从小到大排序
    minToMaxSort(arr){
        let temp;
        if(typeof arr ==='object' && arr instanceof Array){
            for(let i=0,len=arr.length;i<len;i++){
                for(let j=i+1,len=arr.length;j<len;j++){
                    if(arr[i]>arr[j]){
                        temp = arr[i];    //交换赋值
                        arr[i]=arr[j];
                        arr[j]=temp;
                    }
                }
            }
            return arr;
        }else{
            alert('传值类型必须是Array')
        }
        
    },
    //Array从大到小排序
    maxToMinSort(arr){
        console.log(arr.constructor)
        let temp;
        if(typeof arr ==='object' && arr instanceof Array){
            for(let i=0,len=arr.length;i<len;i++){
                for(let j=i+1,len=arr.length;j<len;j++){
                    if(arr[i]<arr[j]){
                        temp = arr[i];    //交换赋值
                        arr[i]=arr[j];
                        arr[j]=temp;
                    }
                }
            }
            return arr;
        }else{
            alert('传值类型必须是Array')
        }
        
    }
}