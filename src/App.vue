<template>
  <div id="app">
    <el-alert v-if="false" />
    <el-dialog v-if="false" />
    <router-view/>
  </div>
</template>

<script>
    import errorMixin from './plugin/mixin/error.js'
    export default {
      mixins:[errorMixin]
    }
</script>
<style lang="scss" scoped>
    @import './assets/css/base.css';
</style>
