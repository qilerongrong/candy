import api from '../api/index.js' 
const state = {
    candyPlans:[],
    coinAddress:{}
}
const mutations = {
    setCandyPlans(state, plans){
        state.candyPlans = plans;
    },
    setCoinAddress(state, coinAddress){
        state.coinAddress = coinAddress;
    }
}

const actions = {
    async queryCandyPlans({ commit }){
        try {
            const result = await api.candy.queryCandyPlans();
            commit('setCandyPlans', result);
            return result;
        }catch(e){

        }
    },
    async fetchCoinAddress({ commit }){
        try {
            const result = await api.candy.getCoinAddress();
            const address = result[0]||{};
            commit('setCoinAddress',address);
            return address;
        }catch(e){
            
        }
    },
    async generateCoinAddress({ commit }){
        try {
            const result = await api.candy.generateCoinAddress();
            const address = {
                address:result.account
            }
            commit('setCoinAddress',address);
            return address;
        }catch(e){
            console.log(e);
        }
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}