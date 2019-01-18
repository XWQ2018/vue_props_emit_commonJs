<template>
    <div>
        <h3>我是children页面</h3>
        <input type="text" v-model='msg' @watchMethod='msg' v-if="status==0 || status==1 ? true :false">
    </div>
</template>
<script>
export default {
    props:{
        status:{
            type:Boolean,
        }
    },
    data(){
        return{
            msg:'我是children页面',
            list:'要传的值',
            status:1,
            dataList:[]
        }
    },
    computed:{

    },
    mounted(){

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

}
</script>
