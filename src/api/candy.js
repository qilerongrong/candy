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
    let data = JSON.stringify({
        coinType:'WST',
        chainType:"ERC20",
        txTo,
        amount,
        withdrawFee,
        password,
        phoneCode
    })+'#'+ new Date().getTime();
    const cData = rsa(data);
    return axios({
        url:'withdraw/create',
        method:'post',
        data:`val=${encodeURIComponent(cData)}`,
        headers:{
            Authorization:getToken()
        }
    })
}
const lock = function({lockAmount,lockDays}){
    return axios({
        url:'candies/lock',
        method:'post',
        data:`lockAmount=${lockAmount}&lockDays=${lockDays}`,
        headers:{
            Authorization:getToken()
        }
    })
}
const queryTransactionList = function({page,size,txType}){
    const coinType = 'WST';
    return axios({
        url:'transaction/list',
        params:{
            page,
            size,
            coinType,
            txType  
        },
        headers:{
            Authorization:getToken()
        }
    })
}
export default {
    queryCandyPlans,
    getCoinAddress,
    generateCoinAddress,
    withdraw,
    lock,
    queryTransactionList
}