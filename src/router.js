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
      path: '/account',
      name: 'account',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "account" */ './views/home.vue')
    }
  ]
})
