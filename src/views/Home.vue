<template>
  <div class="home">
      <header-bar>
        <img class="message" src="../assets/logo.png" slot="left"/>
        <span class="title" slot="center">糖果</span>
        <router-link :to="{name:'account'}" slot="right"><img class="avatar" src="../assets/imgs/avatar.png" ></router-link>
      </header-bar>
      <div class="banner" @click="invite">
        <div class="con">
          <div>邀请好友加入</br>获取更多代币</div>
          <div class="btn">获取邀请码</div>
        </div>
        <img src="../assets/imgs/banner1.png"/>
      </div>
      <div class="plist">
        <div class="title">糖果派送，存币解锁</div>
        <div class="list">
          <candy-plan @lock="queryCandyPlans" class="plan" v-for="(item, index) in candyPlans" :key="index" :model="item"></candy-plan>
        </div>
      </div>
      <div class="plist">
        <div class="title">每日奖励</div>
        <div class="list">
          <div></div>
        </div>
      </div>
      <el-dialog :visible.sync="showInvite" title="邀请好友" width="85%" center>
        <div class="invite-dlg">
          <div class="item text">您的邀请码</div>
          <div class="item"><span class="code">{{inviteCode}}</span></div>
          <div class="item sep"><el-button class="copy copy1" v-clipboard:success="copySuccess" v-clipboard:error="copyFail" v-clipboard:copy="inviteCode" type="primary">复制邀请码</el-button></div>
          <div class="item text">您的邀请链接</div>
          <div class="item link">{{inviteLink}}</div>
          <div class="item"><el-button class="copy copy2" v-clipboard:success="copySuccess" v-clipboard:error="copyFail" v-clipboard:copy="inviteLink" type="primary">复制邀请链接</el-button></div>
        </div>
      </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import headerBar from '@/components/headerBar.vue'
import candyPlan from '@/components/candyPlan.vue'
import Clipboard from 'clipboard'
import { mapState } from 'vuex'
export default {
  data(){
    return {
      showInvite:false
    }
  },
  computed:{
    ...mapState({
      candyPlans(state){
        return state.candy.candyPlans;
      },
      inviteCode(state){
        return state.user.userDetail && state.user.userDetail.inviteCode || ''
      }
    }),
    inviteLink(){
      const url = document.location.href;
      return url.split('#')[0]+'#/invite/'+this.inviteCode
    }
  },
  components: {
    headerBar,
    candyPlan
  },
  methods:{
    queryCandyPlans(){
      this.$store.dispatch('candy/queryCandyPlans');
    },
    initUserInfo(){
      this.$store.dispatch('user/detail');
    },
    invite(){
      this.showInvite = true;
      // this.fetchInviteCode()
    },
    copySuccess(){
        this.$message({
            type:'success',
            message:'复制成功！',
            center:true,
            duration:2000
        });
    },
    copyFail(){
        this.$message({
            type:'error',
            message:'复制失败！',
            center:true,
            duration:2000
        });
    }
  },
  mounted(){
    this.initUserInfo();
    this.queryCandyPlans();
    // const clipboard1 = new Clipboard('.copy1');
    // const clipboard2 = new Clipboard('.copy2');
    // clipboard1.on('success', (e) => {
    //   this.$message({
    //     type:'success',
    //     message:'复制成功！',
    //     center:true,
    //     duration:2000
    //   });
    // })
    // clipboard1.on('error', (e) => {
    //   this.$message({
    //     type:'error',
    //     message:'复制失败！',
    //     center:true,
    //     duration:2000
    //   });
    // })
    // clipboard2.on('success', (e) => {
    //   this.$message({
    //     type:'success',
    //     message:'复制成功！',
    //     center:true,
    //     duration:2000
    //   });
    // })
    // clipboard2.on('error', (e) => {
    //   this.$message({
    //     type:'error',
    //     message:'复制失败！',
    //     center:true,
    //     duration:2000
    //   });
    // })
  }
}
</script>

<style lang="scss" scoped>
    .message{
      width:0.3rem;
      height:0.3rem;
      border-radius: 50%;
      // background:#eee;
      // border:1px solid #eee;
      // margin-left:0.18rem;
    }
    .title{
      font-size:0.18rem;
    }
    .avatar{
      width:0.3rem;
      height:0.3rem;
      // margin-right:0.18rem;
    }
    .banner{
      margin:0.08rem 0.18rem;
      border-radius: 0.1rem;
      height:1.11rem;
      background-image:url('../assets/imgs/banner-bg.png');
      background-size:100%;
      display:flex;
      justify-content: space-between;
      img{
        width:auto;
        height:100%;
        float:right;
        border-radius: 0.1rem;
      }
      .con{
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        color:#fff;
        align-items: center;
        padding:0.12rem 0.08rem;
        .btn{
          height:0.24rem;
          line-height:0.24rem;
          background:rgb(253, 131, 187);
          border-radius: 0.12rem;
          padding:0 0.2rem;
        }
      }
    }
    .plist{
      .title{
        font-size:0.28rem;
        line-height:0.34rem;
        margin:0.2rem 0.2rem 0.1rem;
      }
    }
    .list{
      display:flex;
      overflow-x: auto;
      justify-content: space-between;
      margin:0 0.08rem 0 0.08rem;
      .plan{
        flex-shrink:0;
        margin:0.1rem 0.1rem;
      }
      .plan:last-child{
        // margin:0.1rem 0.18rem 0.1rem 0.1rem;
        margin-right:0.1rem;
      }
    }
    .list::-webkit-scrollbar{
      display:none
    }
    .invite-dlg{
      display:flex;
      flex-direction: column;
      text-align:center;
      align-items: center;
      .item{
        width:100%;
        margin:0.04rem 0;
        .code{
          color:#6691fd;
          font-weight:bold;
          // font-family: Montserrat-Bold;
          border:1px solid #6691fd;
          border-radius:0.04rem;
          padding:0.04rem 0.06rem;
        }
        
      }
      .link{
        color:#6691fd;
        line-height:0.36rem;
        font-size:0.12rem;
        border-radius: 0.04rem;
        border:1px solid #6691fd;
      }
      .text{
        font-weight:bold;
        color:#848ea7;
        font-size:0.16rem;
      }
      .sep{
        padding-bottom:0.12rem;
        border-bottom:1px solid #eee;
      }
      .copy{
        width:100%;
        margin:0.08rem 0;
      }
    }
    
</style>
