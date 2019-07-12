import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/home'
      // component: () => import ( /* webpackChunkName : "index"  */ './views/home.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import ( /* webpackChunkName : "index"  */ './views/home.vue')
    },
    {
      path:'/login',
      name:'login',
      component: () => import ( /* webpackChunkName : "login"  */ './views/login.vue')
    },
    {
      path:'/regist',
      name:'regist',
      component: () => import ( /* webpackChunkName : "login"  */ './views/regist.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import(/* webpackChunkName: "account" */ './views/account.vue')
    },{
      path:'/record',
      name:'record',
      component: () => import(/* webpackChunkName: "record" */ './views/record.vue')
    },{
      path:'/invite/:code',
      name:'invite',
      redirect:(to) => {
        console.log(to);
        const code = to.params.code;
        return {
          name:'regist',
          query:{code}
        }
      }
      // component:() => import(/* webpackChunkName: "record" */ './views/regist.vue')
    }
  ]
})
