import api from '../api/index.js' 
const state = {
    userInfo:{
        username:null,
        telCountryCode:'86',
        token:null,
        status:0 // -1:未登录，0:登录状态，1:
    },
    wallet:{}
}

const mutations = {
    setUserInfo(state,userInfo){
        state.userInfo = userInfo;
        const storage = window.localStorage;
        if(storage){
            storage.setItem('userInfo',JSON.stringify(userInfo));
        }
    },
    updateWallet(state,wallet){
        state.wallet = wallet;
    }
}

const actions = {
    login({commit},{ username, password, phoneCode, telCountryCode='86'}){
        return api.user.login({ username, password, phoneCode,}).then((data) => {
            const userInfo = {
                username:username,
                telCountryCode,
                token:data,
                status:1
            }
            commit('setUserInfo',userInfo);
            // return res;
        });
    },
    regist({ commit },{ username, password, verifyCode}){
        const telCountryCode = '86'
        // const res = await api.user.regist({ username, password, verifyCode,telCountryCode });
        // console.log(res);
        // return res;
        return api.user.regist({ username, password, verifyCode,telCountryCode });
    },
    logout(){

    },
    async wallet({ commit }){
        const result = await api.user.wallet();
        const wallet = result[0];
        commit('updateWallet',wallet);
        return result;
    },
    async verifyCode({ commit },{username}){
        await api.user.fetchVerifyCode({username});
    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations
}