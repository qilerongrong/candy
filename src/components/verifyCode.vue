<template>
    <el-button class="btn-code" :type="timer?'info':'primary'" @click="getVerifyCode" :disabled="!!timer" size="medium">{{codeTip}}{{timer?'(s)':''}}</el-button>
</template>

<script>
    export default {
        data(){
            return {
                codeTip:'获取验证码',
                timer:null
            }
        },
        props:['username'],
        methods:{
            getVerifyCode(){
                if(!this.username){
                    return ''
                }
                this.$store.dispatch('user/verifyCode',{username:this.username}).then(() => {
                    this.codeTip = 59;
                    this.timer = setInterval(() => {
                        if(this.codeTip === 1){
                            this.codeTip = '获取验证码';
                            clearInterval(this.timer);
                            this.timer = null;
                        }else{
                            this.codeTip--;
                        }
                    },1000);
                });
            }
        },
        destroyed(){
            this.timer && clearInterval(this.timer);
        }
    }
</script>

<style lang="scss" scoped>
</style>