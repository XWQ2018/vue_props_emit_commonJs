<template>
    <div class="Home">
        <!-- //- transition(name="fade")
        //-   h1(v-if="flag") 这是Home
        //- button.btn(@click="flag=!flag") isShow
        //- el-rate(v-model="value3" show-text )
        //- input(v-model="msg" style="marginTop:20px")
        //- .countTime
        //-   .Time(v-if="isShow" style="marginTop:20px") {{time + 's刷新页面'}} -->
        <children @childrenMsg='childrenMsg' ref='childrenInfo'></children>        
        <ul class="list">
            <li v-for="(item,key) in list" :key='key' @click='toRouter(item.name)'>{{item.name}}</li>
        </ul>
        <button @click='btnChildren'>获取children的信息</button>
        <main class="container">
            <router-view/>
        </main>
    </div>
</template>

<script>
import children from './Children';
export default {
  name: 'Home',
  data () {
    return {
      msg: "123456789",
      flag:false,
      value3:null,
      time:3,
      isShow:true,
      list:[
        {
          name:'Home',
          icon:''
        },
        {
          name:'List',
          icon:''
        },
        {
          name:'Page',
          icon:''
        },
      ]
    }
  },
  components:{
      children
  },
  computed:{
    // test(){
    //   var start = this.msg.substring(0,5);
    //   var end = this.msg.substring(5,this.msg.length);
    //   return this.msg=start + end.replace(/[0-9]{1,}/g,"***")
    // }
  },
  mounted(){
    // this.countTime()
  },
  methods:{
    // countTime(){
    //   let timer;
    //   let that = this;
    //   timer = setInterval(function(){
    //     that.time --;
    //     if(that.time==0){
    //       clearInterval(timer)
    //       that.flag = true;
    //     }
    //   },1000)

    // },

    //接收子组件传过来的值
    childrenMsg(val){
        console.log('这是子组件传过来的值：' + val)
    },
    //点击按钮通过ref获取children的信息
    btnChildren(){
        console.log(this.$refs.childrenInfo)
        // console.log(this.$commonJs.randowNumber())
        // console.log(this.$commonJs.wipeRepeat([1,2,3,1,2,3]))
        console.log(this.$commonJs.typeJudge({}))

    },
    toRouter(to){
    //   console.log(to)
      this.$router.push({
        path:to
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus'>
  .Home
    /* .el-rate
     background-color:#58bc58;
     margin-top:50px;
    .fade-enter-active,.fade-leave-active
        transition: opacity .5s;
    .fade-enter,.fade-leave-to 
      opacity: 0;
    h1
      font-size 16px */
    .list
      margin 0
      padding 0
      li
        list-style none
        display inline-block
        width 33.33%
        height 60px
        line-height 40px
        font-size 24px
        text-align center
        padding 10px
        background-color #ccc
        border-right 1px solid #fc0
        border-bottom 1px solid #fc0
        box-sizing border-box
    .container
      margin-top 60px  
      

</style>
