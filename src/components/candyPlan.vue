<template>
    <div class="program-wrapper" @click="openLock">
        <div  class="program-title">{{model&&model.title}}</div>
        <div  class="program-rate-outter-wrapper">
            <div  class="program-rate-wrapper">
                <div  class="program-rate">{{model&&model.interestperdiem*100|fix2}}<span  class="program-rate-percentage">%</span></div>
                <div  class="program-rate-daily">每日收益</div>
            </div>
        </div>
        <div  class="program-info-wrapper">
            <div  class="program-info">
                <div  class="program-info-title">已存入额度</div>
                <div  class="current-number">{{model.currentLock||'--'}} WST</div>
            </div>
            <div  class="program-progress-bar-wrapper">
                <div  class="program-progress-bar-outter"></div>
                <div  class="program-progress-bar-inner" :style="{width:progress}"></div>
            </div>
        </div>
        <div  class="program-tags-wrapper">
            <div  class="program-tag">{{model&&model.perioddays}}天回报</div>
            <div  class="program-tag">每日派息</div>
            <div  class="program-tag">糖果派送</div>
        </div>
        <el-dialog class="lock-dlg" :visible.sync="showLock" :title="model.title" center width="90%" top="10vh" :append-to-body='true'>
          <div class="base">
            <div class="rate">
              <span class="text">{{model.interestperdiem*100|fix2}}%</span>
              <span>每日利率</span>
            </div>
            <div class="sep"></div>
            <div class="period">
              <span class="text">{{model.perioddays}}天</span>
              <span>锁仓周期</span>
            </div>
          </div>
          <div class="desc">
            <p>分红方式：<br/>红利将以每天分红的方式自动转入您的钱包余额内。</p>
            <p>邀请好友，无限红利:<br/>
               邀请好友来参加守护者计划，将获得额外的好友每日红利奖励，无限累加<br/>
               第一代好友50%额外奖励，第二代30%额外奖励，第三代20%的额外奖励
            </p>
          </div>
          <div class="lock">
            <el-form>
              <el-form-item class="account-amount" label="账户余额：" label-width="1rem">
                <el-input size="small" v-model="accountAmount" disabled></el-input>
              </el-form-item>
              <el-form-item class="lock-amount" label="存币数量：" label-width="1rem">
                <el-input size="small" v-model="lockAmount" type="number"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div slot="footer">
            <div class="btn-confirm" @click="lock" :class="{valid:isValid}">{{lockText}}</div>
          </div>
        </el-dialog>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
      data(){
        return {
          showLock:false,
          isValid:false,
          lockAmount:0,
          lockText:'请输入锁仓数额',
          minAmount:1
        }
      },
      props:['model'],
      computed:{
        ...mapState({
          // 可提现余额
          accountAmount:state => state.user.wallet.coinAmount
        }),
        progress(){
          if(this.model){
            return (this.model.currentLock/this.model.maxLock)*100 + "%";
          }else{
            return "0%"
          }
        }
      },
      methods:{
        openLock(){
          this.showLock = true;
        },
        lock(){
          debugger;
          if(!this.isValid){
            return
          }
          const lockDays = this.model.perioddays;
          this.$store.dispatch('candy/lock',{lockDays,lockAmount:this.lockAmount}).then(() => {
            this.$message({
              type:'success',
              message:'锁仓成功',
              center:true,
              duration:2000
            });
            this.showLock = false;
            this.$emit('lock');
          });
        }
      },
      watch:{
        lockAmount(){
          let amount = Number(this.lockAmount);
          if(!amount){
            this.lockText = "请输入锁仓数额"
            this.isValid = false;
          }else if(amount < this.minAmount){
            this.lockText = `最小锁仓数额为${this.minAmount}`
            this.isValid = false;
          }else{
            this.lockText = '确认锁仓'
            this.isValid = true;
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
.program-wrapper {
  width: 2.50rem;
  // margin-left: 0.20rem;
  -webkit-box-shadow: 0rem 2px 10px 0px rgba(158, 169, 190, 0.65);
  box-shadow: 0rem 0.02rem 0.10rem 0rem rgba(158, 169, 190, 0.65);
  border-radius: 0.10rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right -0.60rem top 0.25rem;
  background-image: url(../assets/imgs/bg1.png);
  background-color: #EEFFF9;
  position: relative;
}
.program-title {
  font-family: Montserrat-SemiBold;
  color: #454A54;
  font-size: 0.18rem;
  padding-top: 0.14rem;
  text-align: left;
  margin-left: 0.14rem;
}
.program-rate-outter-wrapper {
  margin-top: 0.16rem;
}
.program-rate {
  font-family: Montserrat-Bold;
  color: #6691FD;
  font-size: 0.50rem;
  text-align: left;
  margin-left: 0.14rem;
}
.program-rate-percentage {
  font-size: 0.24rem;
  // margin-left: -0.10rem;
}
.program-rate-daily {
  font-size: 0.13rem;
  margin-left: 0.14rem;
  text-align: left;
  margin-top: -0.08rem;
}
.program-rate-year {
  text-align: left;
  margin-left: 0.14rem;
  font-size: 0.17rem;
  margin-top: -0.06rem;
}
.program-tags-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: 0.14rem;
  margin-top: 0.10rem;
  padding-bottom: 0.10rem;
}
.program-tag {
  font-size: 0.12rem;
  padding: 0.03rem 0.06rem;
  border-radius: 0.04rem;
  margin-right: 0.08rem;
  background-color: #6691FD;
  color: white;
}
.program-info-wrapper {
  height: 0.30rem;
}
.program-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0.26rem;
  position: relative;
  height: 0.20rem;
}
.program-info-title {
  font-size: 0.12rem;
  left: 0.14rem;
  position: absolute;
}
.current-number {
  font-size: 0.12rem;
  right: 0.14rem;
  text-align: right;
  position: absolute;
}
.program-progress-bar-wrapper {
  position: relative;
}
.program-progress-bar-outter {
  height: 0.05rem;
  width: 2.22rem;
  background: #B6C2E2;
  left: 0.14rem;
  position: absolute;
  top: 0rem;
  display: block;
}
.program-progress-bar-inner {
  height: 0.05rem;
  width: 40%;
  background: #6691FD;
  position: absolute;
  left: 0.14rem;
}
.lock-dlg{
  .base{
    display:flex;
    justify-content: space-between;
    border-bottom:1px solid #B6C2E2;
    .rate{
      text-align:left;
      flex-basis:49%;
      display:flex;
      flex-direction: column;
    }
    .period{
      text-align:right;
      flex-basis:49%;
      display:flex;
      flex-direction: column;
    }
    .text{
      color:#6691FD;
      font-weight:bold;
      font-size:0.4rem;
    }
    .sep{
      width:1px;
      background: #B6C2E2;
      height:0.8rem;
    }
  }
  .desc{
    font-size:0.12rem;
    p{
      margin:0.06rem 0;
      line-height:0.18rem;
    }
  }
  .btn-confirm{
    // padding:0.15rem;
    font-size:0.2rem;
    line-height:0.5rem;
    color:#fff;
    background:lightgray;
  }
  .valid{
    background:#6691FD;
  }
  .lock{
    font-size:0.16rem;
    line-height:0.28rem;
    .lock-input{
      display:inline-block;
    }
  }
}
</style>
<style lang="scss">
.lock-dlg{
  .el-form-item{
    margin-bottom:0.1rem;
  }
  .el-dialog__footer{
    padding:0
  }
  .el-dialog--center .el-dialog__body{
    padding:0.2rem 0.25rem 0.1rem
  }
}
</style>