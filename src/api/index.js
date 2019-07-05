import axios from 'axios'
import user from './user.js'
const apiBasePath = "api";
axios.defaults.baseURL = apiBasePath;

//pre 拦截器
axios.interceptors.request.use(function(config){
    return config;
})

//post 拦截器
axios.interceptors.response.use(function(res){
    if(true){
        Promise.resolve(res.data);
    }else{

    }
},function(error){
    debugger;
    const statusCode = error.response.status;
    Promise.reject(error);
})

export default {
    user
}