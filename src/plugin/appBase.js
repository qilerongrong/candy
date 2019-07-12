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
    }
}

export default appBase;