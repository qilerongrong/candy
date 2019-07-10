<template>
    <div class="account">
        <header-bar>
            <div slot="left" class="left" @click="goBack"><span class="back"></span></div>
            <div slot="center">用户主页</div>
            <div slot="right" class="right"><span>登出</span></div>
        </header-bar>
        <div class="box user-info">
            <img class="avatar" src="../assets/imgs/avatar.png"/>
            <span class="status" >账号已验证</span>
            <span class="mobile" v-if="userInfo.username">+{{userInfo.telCountryCode}}{{userInfo.username}}</span>
        </div>
        <div class="account-info">
            <div class="title">账户总额</div>
            <div class="box info">
                <div class="lr account">
                    <div class="cl">{{wallet.coinAmount|fix2}}</div>
                    <div class="cr">{{wallet.totalAmount|fix2}}</div>
                </div>
                <div class="lr">
                    <div class="cl">可提现余额</div>
                    <div class="cr">存款余额</div>
                </div>
                <div class="lr action">
                    <div class="cl withdraw">申请提现</div>
                    <div class="cr deposit" @click="deposit">存入代币</div>
                </div>
                <div><router-link>点击查看存款提现明细</router-link></div>
            </div>
        </div>
        <div class="interest-info">
            <div class="info">
                <div class="block total"></div>
                <div class="block total"></div>
            </div>
        </div>
        <el-dialog :visible.sync="showAddress" title="存款地址" width="90%" center>
            <div class="no-address" v-if="!coinAddress.address">
                <el-button class="btn-address" type="primary" @click="generateCoinAddress">获取地址</el-button>
            </div>
            <div class="address-wrapper" v-else>
                <div>存款地址</div>
                <div class="address">{{coinAddress.address}}</div>
                <el-button class="btn-copy" type="primary" @click="copyAddress">复制地址</el-button>
                <div class="qrcode">
                    <div>扫码存款</div>
                    <div><qrcode :text="coinAddress.address" dotScale=0.55></qrcode></div>
                </div>
                <div class="tip"></div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import headerBar from '@/components/headerBar.vue' 
    import qrcode from 'vue-qr'
    import { mapState } from 'vuex'
    export default {
        data(){
            return {
                showAddress:false
            }
        },
        computed:{
            ...mapState({
                userInfo:state => state.user.userInfo,
                coinAddress:state => state.candy.coinAddress,
                wallet:state => state.user.wallet
            })
        },
        components:{
            headerBar,
            qrcode
        },
        methods:{
            goBack(){
                this.$router.back();
            },
            fetchCoinAddress(){
                this.$store.dispatch('candy/fetchCoinAddress')
            },
            generateCoinAddress(){
                this.$store.dispatch('candy/generateCoinAddress')
            },
            initAddressQrCode(){

            },
            deposit(){
                this.showAddress = true;
                if(!this.coinAddress.address){
                    this.fetchCoinAddress();
                }
            },
            queryWallet(){
                this.$store.dispatch('user/wallet');
            },
            copyAddress(){

            }
        },
        mounted(){
            this.queryWallet();
        }
    }
</script>

<style lang="scss" scoped>
    .box{
        box-shadow:0 0.02rem 0.12rem rgba(0,0,0,0.3);
        border-radius: 0.14rem;
    }
    .left{
        width:1rem;
        text-align: left;
    }
    .right{
        width:1rem;
        text-align:right;
    }
    .back{
        display:inline-block;
        width:0.1rem;
        height:0.1rem;
        border-left:0.03rem solid #000;
        border-top:0.03rem solid #000;
        transform: rotate(-45deg);
    }
    .user-info{
        margin:0.2rem;
        display:flex;
        flex-direction: column;
        align-items: center;
        font-size:0.12rem;
        line-height:0.24rem;
        .avatar{
            height:0.54rem;
            width:0.54rem;
            margin-top:-0.24rem;
        }
        .status{
            border:1px solid gray;
            border-radius: 0.06rem;
            padding:2px 8px;
            margin:0.1rem 0;
        }
        .mobile{
            color:#7C818A;
            font-size:0.13rem;
            margin-bottom:0.1rem;
        }
    }
    .account-info{
        margin:0.2rem 0.2rem;
        .title{
            font-size:0.2rem;
            // line-height:0.3rem;
            margin-bottom:0.04rem;
            color:#454A54;
        }
        .info{
            padding:0.14rem;
            font-size:0.14rem;
            .action{
                margin-top:0.12rem;
            }
            .withdraw{
                height:0.45rem;
                line-height:0.45rem;
                width:48%;
                text-align:center;
                background: #6691FD;
                color:#fff;
                font-size:0.16rem;
                border-radius:0.08rem;
            }
            .deposit{
                height:0.45rem;
                line-height:0.45rem;
                width:48%;
                text-align:center;
                background:#E9A400;
                color:#fff;
                font-size:0.16rem;
                border-radius:0.08rem;
            }
        }
        .account{
            color:#6691FD;
            font-size:0.3rem;
            font-family:Montserrat-Regular
        }
    }
    .lr{
        display:flex;
        justify-content: space-between;
        margin:0.06rem 0;
        .cl{
            text-align:left;
        }
        .cr{
            text-align:right;
        }
    }
    .no-address{
        display:flex;
        .btn-address{
            margin: auto;
        }
    }
    .address-wrapper{
        text-align:center;
    }
    .btn-copy{
        width:100%;
        margin:0.04rem 0 0.1rem;
    }
    .address{
        text-align:center;
    }
    .qrcode{
        display:flex;
        flex-direction: column;
        align-items: center;
    }
</style>