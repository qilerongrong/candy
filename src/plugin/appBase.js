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
        Vue.filter('txStatus',function(value){
            const STATUS = {
                "-1":"充值失败",
                "0":"已确认",
                "1":"已提交",
                "2":"已取消",
                "3":"充值确认中",
                "4":"已审核",
                "5":"提现确认中",
                "6":"系统错误",
                "7":"退回",
                "8":"充值人工审核"
            }
            return STATUS[value]||"未知状态"
        })
        Vue.filter('datetime',function(timestamp){
            const date = new Date(timestamp);
            const yyyy = date.getFullYear();
            const MM = date.getMonth()+1;
            const dd = date.getDate();
            const hh = date.getHours();
            const mm = date.getMinutes();
            const ss = date.getSeconds();
            return `${yyyy}-${MM.toString().padStart(2,'0')}-${dd.toString().padStart(2,'0')} ${hh.toString().padStart(2,'0')}:${mm.toString().padStart(2,'0')}:${ss.toString().padStart(2,'0')}`;
        })
    }
}

export default appBase;