<template>
  <div class="home">
      <header-bar>
        <img class="message" src="../assets/imgs/message.png" slot="left"/>
        <span class="title" slot="center">糖果</span>
        <img class="avatar" src="../assets/imgs/avatar.png" slot="right">
      </header-bar>
      <div class="plist">
        <div class="title">糖果派送，存币解锁</div>
        <div class="list">
          <candy-plan v-for="(item, index) in plist" :key="index"></candy-plan>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headerBar from '@/components/headerBar.vue'
import candyPlan from '@/components/candyPlan.vue'

export default {
  name: 'home',
  data(){
    return {
      plist:[
        {},{}
      ]
    }
  },
  components: {
    headerBar,
    candyPlan
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
</style>
