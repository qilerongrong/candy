import axios from 'axios'
import { getToken } from './index.js';

const login = function({username='',password='',telCountryCode='86',phoneCode=''}){
    return axios({
        url:'/users/login',
        method:'post',
        // headers:{
        //     'Content-Type':'application/x-www-form-urlencoded'
        // },
        // data:{username,password,phoneCode,telCountryCode}
        data:`username=${username}&password=${password}&phoneCode=${phoneCode}&telCountryCode=${telCountryCode}`
    })
}
const regist =  function({username='',password='',verifyCode='',telCountryCode='86'}){
    return axios.post('/users/register',{
        username,
        password,
        verifyCode,
        telCountryCode
    }).then((res) => {
        console.log(res);
        return res
    })
}
const logout = function(){
    return axios.post('/users/logout')
}
const wallet = function(){
    return axios({
        url:'/wallet?coinTypes=WST',
        headers:{
            Authorization:getToken()
        }
    })
}
const fetchVerifyCode = function({username}){
    const telCountryCode = '86';
    return axios({
        url:'/send_verify',
        method:'post',
        data:`username=${username}&telCountryCode=${telCountryCode}`
    })
}
const fetchUserInfo = function(){
    return axios({
        url:'/u/infos',
        headers:{
            Authorization:getToken()
        }
    })
}
export default {
    login,
    regist,
    logout,
    wallet,
    fetchVerifyCode,
    fetchUserInfo
}