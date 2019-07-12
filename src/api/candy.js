import axios from 'axios'
import store from '../store/index.js'
import { getToken, rsa } from './index.js'
const queryCandyPlans = async function(){
    const result = await axios({
        url:'/candies/periods',
        headers:{
            Authorization:getToken()
        }
    });
    return result;
}

const getCoinAddress =  function(){
    const coinType = "WST"
    return axios({
        url:'/u/address/v2',
        params:{coinType},
        headers:{
            Authorization:getToken()
        }
    });
}
const generateCoinAddress = function(){
    const coinType = "WST"
    return axios({
        url:'/address',
        data:`coinType=${coinType}`,
        method:'post',
        headers:{
            Authorization:getToken()
        }
    });
}
const withdraw = function({txTo,amount,withdrawFee,password,phoneCode}){
    const data = {
        coinType:'WST',
        txTo,
        amount,
        withdrawFee,
        password,
        phoneCode
    }
    return axios({
        url:'withdraw/create',
        method:'post',
        data:`val=${rsa(data)}`
    })
}

export default {
    queryCandyPlans,
    getCoinAddress,
    generateCoinAddress
}