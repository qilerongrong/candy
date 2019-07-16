<template>
  <div class="transaction" >
    <header-bar>
        <div slot="left" class="left" @click="goBack"><span class="back"></span></div>
        <div slot="center">充值提现记录</div>
        <div slot="right" class="right"></div>
    </header-bar>
    <el-tabs v-model="activeList" @tab-click="switchList" :stretch="true">
        <el-tab-pane label="充值" name="in">
            <div class="timeline" v-infinite-scroll="loadMore" infinite-scroll-distance=0 :infinite-scroll-immediate="true">
                <el-timeline>
                    <el-timeline-item v-for="transaction in inList" :key="transaction.id" :timestamp="formateDate(transaction.createdTime)" placement="top">
                        <el-card class="transaction-card">
                            <div class="item"><span>币种：{{transaction.txCoin}}</span><span>状态：{{transaction.txStatus|txStatus}}</span></div>
                            <div class="item"><span>金额：{{transaction.txAmount}}</span><span>确认数：{{transaction.confirmations}}</span></div>
                            <div class="item block-info">
                                <div>区块信息:</div>
                                <div class="info">从<span class="address">{{transaction.txFromWallet}}</span></div>
                                <div class="info">到<span class="address">{{transaction.txToWallet}}</span></div>
                            </div>
                            <div class="item">
                                区块转账时间：{{transaction.txNetworkTime|datetime}}
                            </div>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </el-tab-pane>
        <el-tab-pane label="提现" name="out">
            <div class="timeline" v-infinite-scroll="loadMore">
                <el-timeline>
                    <el-timeline-item v-for="transaction in outList" :key="transaction.id" :timestamp="formateDate(transaction.createdTime)" placement="top">
                        <el-card class="transaction-card">
                            <div class="item"><span>币种：{{transaction.txCoin}}</span><span>状态：{{transaction.txStatus|txStatus}}</span></div>
                            <div class="item"><span>金额：{{transaction.txAmount}}</span></div>
                            <div class="item block-info">
                                <div>区块信息:</div>
                                <div class="info">从<span class="address">{{transaction.txFromWallet}}</span></div>
                                <div class="info">到<span class="address">{{transaction.txToWallet}}</span></div>
                            </div>
                            <div class="item">
                                区块转账时间：{{transaction.txNetworkTime|datetime}}
                            </div>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    import headerBar from '@/components/headerBar.vue'
    import { mapState } from 'vuex'
    export default {
        data(){
            return {
                activeList:'in', //in|out
                inPageNo:1,
                outPageNo:1,
                pageSize:4
            }
        },
        components:{
            headerBar
        },
        computed:{
            ...mapState({
                inList:state => state.candy.depositList,
                outList:state => state.candy.withdrawList,
                inTotal:state => state.candy.depositTotal,
                outTotal:state => state.candy.withdrawTotal
            })
        },
        methods:{
            switchList(tab){
                this.activeList = tab.name;
            },
            queryIn(){
                const data = {
                    page:this.inPageNo,
                    size:this.pageSize
                }
                this.$store.dispatch('candy/queryDepositList',data)
            },
            queryOut(){
                const data = {
                    page:this.outPageNo,
                    size:this.pageSize
                }
                this.$store.dispatch('candy/queryWithdrawList',data)
            },
            goBack(){
                this.$router.back();
            },
            loadMore(){
                console.log('loadMore');
                
                if(this.activeList === 'in'){
                    console.log(`${this.inList.length} === ${this.inTotal}`);
                    if(this.inList.length === this.inTotal){
                        return 
                    }
                    this.inPageNo++
                    this.queryIn();
                }else{
                    console.log(`${this.outList.length} === ${this.outTotal}`);
                    if(this.outList.length === this.outTotal){
                        return 
                    }
                    this.outPageNo++
                    this.queryOut();
                }
            },
            formateDate(timestamp){
                const date = new Date(timestamp);
                const yyyy = date.getFullYear();
                const MM = date.getMonth()+1;
                const dd = date.getDate();
                const hh = date.getHours();
                const mm = date.getMinutes();
                const ss = date.getSeconds();
                return `${yyyy}-${MM.toString().padStart(2,'0')}-${dd.toString().padStart(2,'0')} ${hh.toString().padStart(2,'0')}:${mm.toString().padStart(2,'0')}:${ss.toString().padStart(2,'0')}`;
            }
        },
        mounted(){
            this.queryIn();
            this.queryOut();
        }
    }
</script>

<style lang="scss" scoped>
.transaction{
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
    .timeline{
        padding:0.1rem 0.2rem;
        background:#fff;
        height:calc(100vh - 1rem);
        overflow:auto;
        .transaction-card{
            display:flex;
            flex-direction: column;
            .item{
                display:flex;
                justify-content: space-between;
                line-height:0.24rem;
            }
            .block-info{
                flex-direction: column;
                .info{
                    font-size:0.13rem;
                    line-height:0.22rem;
                    text-overflow:ellipsis;
                    overflow:hidden;
                    white-space:nowrap;
                }
                .address{
                    color:#6691FD;
                    
                }
            }
        }
    }
}
</style>
<style lang="scss">
.transaction {
    .el-tabs__header{
        margin-bottom:0;
    }
    .el-tabs__content{
        
        // overflow:auto;
    }
}
</style>