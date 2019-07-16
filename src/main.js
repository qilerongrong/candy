import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/index.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueClipboard from 'vue-clipboard2'
import appBase from './plugin/appBase.js'
Vue.use(ElementUI);
Vue.use(VueClipboard);
Vue.use(appBase);
Vue.config.productionTip = false
// 获取用户信息

const storage = window.localStorage;
let userInfo;
if(storage){
  userInfo = storage.getItem('userInfo');
  console.log('storage userInfo',userInfo)
  if(userInfo){
    userInfo = JSON.parse(userInfo);
    store.commit('user/setUserInfo',userInfo);
  }
}
router.beforeEach((to, from, next) => {
  if(!['login','regist'].includes(to.name)){
    const userInfo = store.state.user && store.state.user.userInfo;
    if(userInfo && userInfo.token){
      next();
    }else{
      // backUrl = from.fullpath;
      next({name:'login'});
    }
  }else{
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


