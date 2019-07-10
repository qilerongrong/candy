import axios from 'axios'
import store from '../store/index.js'
import { getToken } from './index.js'
const queryCandyPlans = async function(){
    const result = await axios({
        url:'/candies/periods',
        headers:{
            Authorization:getToken()
        }
    });
    return result;
}

const getCoinAddress = async function(){
    const coinType = "WST"
    const result = await axios({
        url:'/u/address/v2',
        params:{coinType},
        headers:{
            Authorization:getToken()
        }
    });
    return result;
}
const generateCoinAddress = async function(){
    const coinType = "WST"
    const result = await axios({
        url:'/address',
        data:`coinType=${coinType}`,
        method:'post',
        headers:{
            Authorization:getToken()
        }
    });
    return result;
}

export default {
    queryCandyPlans,
    getCoinAddress,
    generateCoinAddress
}