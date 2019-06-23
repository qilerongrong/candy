import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ( /* webpackChunkName : "index"  */ './views/home.vue')
    },
    {
      path:'/login',
      name:'login',
      component: () => import ( /* webpackChunkName : "login"  */ './views/login.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import(/* webpackChunkName: "account" */ './views/home.vue')
    }
  ]
})
