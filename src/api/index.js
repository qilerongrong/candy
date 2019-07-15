import axios from 'axios'
import user from './user.js'
import candy from './candy.js'
import store from '../store/index.js'
// import JSEncrypt from 'jsencrypt'

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

export function rsa(str){
    const publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCyJdVXw+TvnFnE2ElRmJflkFO20wSjJzS+XV887at9jTKa+EhpSg7aCNgCcFQfCEVpHVKegR4s02+4RH4q+y0gP/yIjAdyKAh16gC9NiM83WpN/PfBCOon55bIJI5G0OBi1I0el+3rpBqtRRzlRfiOXi4C6pmO0ayVmP5rVNASsQIDAQAB";
    let encryptor = new JSEncrypt();  
    encryptor.setPublicKey(publicKey);  
    let rsaResult = encryptor.encryptLong(str); 
    return rsaResult;
}
export default {
    user,
    candy
}