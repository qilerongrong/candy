import api from '../api/index.js' 
const state = {
    user:{
        username:null
    },
    token:null,
    loginStatus:-1 // -1 初始, 0 未登录，1 登录

}

const mutations = {
    setUserInfo(state,userInfo){

    }
}

const actions = {
    login({commit},{ username, password }){
        api.user.regist({ username, password }).then(() => {
            commit();
        });
    },
    regist({ commit },{ username, password, verifyCode}){
        const telCountryCode = '86'
        // const res = await api.user.regist({ username, password, verifyCode,telCountryCode });
        // console.log(res);
        // return res;
        api.user.regist({ username, password, verifyCode,telCountryCode }).then((res) => {
            debugger;
            return res.data;
            // console.log(res);
        })
    },
    logout(){

    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations
}