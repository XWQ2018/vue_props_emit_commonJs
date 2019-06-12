import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: resolve => require(['@/components/websocket'], resolve)
        },
        {
            path: '/Home',
            name: 'Home',
            component: resolve => require(['@/components/Home'], resolve),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/Page',
            name: 'Page',
            component: resolve => require(['@/components/Page'], resolve),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/List',
            name: 'List',
            component: resolve => require(['@/components/List'], resolve),
            meta: {
                keepAlive: false
            }
        },
        {
            path: '/Children',
            name: 'Children',
            component: resolve => require(['@/components/Children'], resolve)
        },
        {
            path: '/websocket',
            name: 'websocket',
            component: resolve => require(['@/components/websocket'], resolve)
        }
    ]
})
