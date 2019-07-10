export default {
    computed:{
        error(){
            return this.$store.state.error;
        }
    },
    watch:{
        error:function(){
            debugger;
            if(this.error.code === 401 || this.error.code === 403){
                const backUrl = encodeURIComponent(document.location.href);
                this.$router.push({name:'login',query:{backUrl}});
            }
        }
    }
}