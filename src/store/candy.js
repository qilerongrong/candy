import api from '../api/index.js' 
import { longStackSupport } from 'q';
const state = {
    candyPlans:[],
    coinAddress:{},
    withdrawList:[],
    withDrawTotal:0,
    depositList:[],
    depositTotal:0,
    lockList:[],
    unlockList:[]
}
const mutations = {
    setCandyPlans(state, plans){
        state.candyPlans = plans;
    },
    setCoinAddress(state, coinAddress){
        state.coinAddress = coinAddress;
    },
    updateDepositList(state, {result,isAppend}){
        const list = result.data;
        state.depositTotal = result.total;
        if(isAppend ){
            if(list.length){
                state.depositList.push(...list);
            }
            
        }else{
            state.depositList = list;
        }
    },
    updateWithdrawList(state, {result,isAppend}){
        const list = result.data;
        state.withdrawTotal = result.total;
        if(isAppend){
            if(list.length){
                state.withdrawList.push(...list);
            }
        }else{
            state.withdrawList = list;
        }
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
    },
    async withdraw({ commit },{txTo,amount,withdrawFee,password,phoneCode}){
        try {
            const result = await api.candy.withdraw({txTo,amount,withdrawFee,password,phoneCode});
            return result;
        }catch(e){
            console.log(e);
        }
    },
    async lock({ commit },{lockAmount,lockDays}){
        try {
            const result = await api.candy.lock({lockAmount,lockDays});
            return result;
        }catch(e){
            console.log(e);
        }
    },
    async queryTranList({ commit }, {page,size,txType}){
        const list = await api.candy.queryTransactionList({ page, size, txType });
        return list
    },
    async queryWithdrawList({ commit }, { page, size }){
        const result = await this.dispatch('candy/queryTranList', { page, size, txType:-1});
        // const list = result.data;
        const isAppend = page === 1? false:true;
        commit('updateWithdrawList',{result,isAppend});
        return result
    },
    async queryDepositList({ commit }, {page, size}){
        const result = await this.dispatch('candy/queryTranList', { page, size, txType:1});
        // const list = result.data;
        const isAppend = page === 1? false:true;
        commit('updateDepositList',{result,isAppend});
        return result
    }

}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}