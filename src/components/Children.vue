<template>
    <div>
        <h5>我是children页面</h5>
        <input type="text" v-model='msg' @watchMethod='msg' v-if="status==0 || status==1 ? true :false">
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    aa:Vue.mixin({
    props:{
        status:{
            type:Number,
            default:1,
        }
    },
    
    data(){
        return{
            msg:'我是children页面',
            list:'要传的值',
            dataList:[]
        }
    },
    computed:{
        
    },
    mounted(){
        console.log(this.$options)
    },
    methods:{

    },
    //监听msg值的变化
    watch:{
        msg:function(val,oldval){
            console.log('改变后的值：'+val,"改变前的值："+oldval)
            this.$emit('childrenMsg',this.msg)
        }
    }
})
}
</script>
