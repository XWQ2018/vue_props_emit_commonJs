<template lang="pug">
  .List
    .head
      span(@click='goback') 返回
    //- p.showtime(style="font-size:20px") {{time | formatDate}}
    //- span {{padstart}}
    //- .calande
    //-   .zzc
    //-   img(src="../assets/img/banner.jpg" class="img")
    p {{count}}
</template>

<script>
import qs from 'qs'         //字符串序列化
import moment from 'moment' //日期格式化
export default {
  name: 'List',
  data () {
    return {
      msg: '',
      list:[],
      time:"2018/11/29",
      num:"2",
      count:0,
      goodslist:[
        {
          id:'1',
          name:'student',
          nickname:'订单管理'
        },
        {
          id:'2',
          name:'zhangsan',
          nickname:'安全检测'
        },
        {
          id:'3',
          name:'lisi',
          nickname:'工单页'
        }
      ],
      result:[]
    }
  },
  mounted(){
    this.getStuGroupStuList()
    this.filterList()
    console.log(this.result)
    this.countAdd()
  },
  computed:{
    padstart(){
      let aa=this.num.padStart(5,"0")
      return aa
    }
  },
  filters:{
    formatDate(val){
      return moment(val).format('YYYY-MM-DD')
    }
  },
  methods:{
    goback(){
      console.log(window.location.hash)
      // this.$route.goback(-1)
    },
    getStuGroupStuList(params){
        // return new Promise(resolve => {
            this.$axios.post('/edu/stu/match/groupStuList', qs.stringify(params))
              .then(data => {
                // resolve(console.log(data))
            })
        // })
    },
    countAdd:function(){
      let self =this;
      console.log(typeof(self.count))
      if(self.count===10){
        clearsetInterval(timer)
        return
      }
      let timer = setInterval(function(){
        self.count ++
      },1000)
    },
    
    filterList(){
        let arr = this.goodslist;
        let listName = {
        }
        arr.forEach(item=>{
          let test = Object.values(item);
          console.log(test)
          if(Object.values(item).includes('安')){
            this.result.push(item)
            console.log(Object.values(item))
          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
    .list
        width 100%
      .head
          height 48px
          overflow hidden
          background-color #58bc58
          span
            float left
            font-size 14px
            padding 10px
            height 100%
            line-height 28px
            color #fc0
            box-sizing border-box
            &:hover
              background-color rgba(241, 241, 241,.3)
              cursor pointer
      .calande
          width 100%
          height 223.48px
          background-color rgba(55, 55, 61,.5)
        .zzc
          width 100%
          height inherit
          background-color rgba(55, 55, 61,.5)
          position absolute
        .img
          display block
          width 100%
</style>
