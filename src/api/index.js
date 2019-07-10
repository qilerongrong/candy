import axios from 'axios'
import user from './user.js'
import candy from './candy.js'
import store from '../store/index.js'
const apiBasePath = "/api";
axios.defaults.baseURL = apiBasePath;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.transformRequest = function(){

// }
//pre 拦截器
axios.interceptors.request.use(function(config){
    return config;
})

//post 拦截器
axios.interceptors.response.use(function(res){
    console.log(res);
    const data = res.data;
    if(data.code === 0){
        // return data.data;
        return  Promise.resolve(data.data);
    }else{
        store.commit('error',data);
        return Promise.reject(data);
    }
},function(error){
    debugger;
    // const statusCode = error.response.status;
    const response = error.response;
    const errorObj = {
        code:response.status,
        msg:response.message||response.error
    }
    store.commit('error',errorObj);
    return Promise.reject(errorObj);
})

export function getToken(){
    console.log('store.state.user',store.state.user);
    return store.state.user && store.state.user.userInfo.token||'';
}

export default {
    user,
    candy
}