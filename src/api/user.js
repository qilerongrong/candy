import axios from 'axios'

const login = function({username='',password='',telCountryCode=''}){
    return axios.post('/users/login',{
        username,
        password,
        telCountryCode
    });
}
const regist =  function({username='',password='',verifyCode='',telCountryCode=''}){
    return axios.post('/users/regist',{
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
export default {
    login,
    regist,
    logout
}