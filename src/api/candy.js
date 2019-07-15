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
    // const data = JSON.stringify({
    //     coinType:'WST',
    //     chainType:"ERC20",
    //     txTo,
    //     amount,
    //     withdrawFee,
    //     password,
    //     phoneCode
    // })+'#'+ new Date().getTime();
    const data = '{"coinType":"WST","txTo":"0x263f8d9c4b004759c6385d8b6d42209","amount":10,"withdrawFee":1,"password":"Victor007","phoneCode":"123456","chainType":"ERC20"}#'+ new Date().getTime()
    console.log('data',data);
    console.log('rsa',rsa(data));
    return axios({
        url:'withdraw/create',
        method:'post',
        data:`val=${rsa(data)}`,
        headers:{
            Authorization:getToken()
        }
    })
}

export default {
    queryCandyPlans,
    getCoinAddress,
    generateCoinAddress,
    withdraw
}