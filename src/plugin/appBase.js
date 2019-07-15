const appBase = {
    install(Vue){
        Vue.filter('fix2',function(value){
            const val = Number(value);
            return isNaN(val)?0.00:val.toFixed(2);
        })
        Vue.filter('fix4',function(value){
            const val = Number(value);
            return isNaN(val)?0.00:val.toFixed(4);
        })
        Vue.filter('money',function(value){
            const val = Number(value);
            if(value > 100000){
                return (value/10000).toFixed(2)+"万";
            }else{
                return val.toFixed(2)
            }
        })
    }
}

export default appBase;