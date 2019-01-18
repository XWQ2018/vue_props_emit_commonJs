import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: resolve=>require(['@/components/Home'],resolve),
      meta:{
        keepAlive:true      //需要缓存
      }
    },
    {
      path: '/Page',
      name: 'Page',
      component: resolve=>require(['@/components/Page'],resolve),
      meta:{
        keepAlive:true     //需要缓存
      }
    },
    {
      path: '/List',
      name: 'List',
      component: resolve=>require(['@/components/List'],resolve),
      meta:{
        keepAlive:false    //不需要缓存
      }
    },
    {
      path: '/',
      name: 'Home',
      component: resolve=>require(['@/components/Home'],resolve)
    },
    {
      path: '/Children',
      name: 'Children',
      component: resolve=>require(['@/components/Children'],resolve)
    }
  ]
})
