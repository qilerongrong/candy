<template>
  <div class="home">
      <header-bar>
        <img class="message" src="../assets/imgs/message.png" slot="left"/>
        <span class="title" slot="center">糖果</span>
        <router-link :to="{name:'account'}" slot="right"><img class="avatar" src="../assets/imgs/avatar.png" ></router-link>
      </header-bar>
      <div class="plist">
        <div class="title">糖果派送，存币解锁</div>
        <div class="list">
          <candy-plan class="plan" v-for="(item, index) in candyPlans" :key="index" :model="item"></candy-plan>
        </div>
      </div>
      <div class="plist">
        <div class="title">每日奖励</div>
        <div class="list">
          <div></div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headerBar from '@/components/headerBar.vue'
import candyPlan from '@/components/candyPlan.vue'
import { mapState } from 'vuex'
export default {
  data(){
    return {
      
    }
  },
  computed:{
    ...mapState({
      candyPlans(state){
        return state.candy.candyPlans;
      }
    })
  },
  components: {
    headerBar,
    candyPlan
  },
  methods:{
    queryCandyPlans(){
      this.$store.dispatch('candy/queryCandyPlans');
    }
  },
  mounted(){
    this.queryCandyPlans();
  }
}
</script>

<style lang="scss" scoped>
    .message{
      width:0.3rem;
      height:0.23rem;
      margin-left:0.18rem;
    }
    .title{
      font-size:0.18rem;
    }
    .avatar{
      width:0.3rem;
      height:0.3rem;
      margin-right:0.18rem;
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
</style>
