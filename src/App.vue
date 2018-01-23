<template>
  <div id="app">
    <mp-header></mp-header>
    <router-view></router-view>
    <mp-footer></mp-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import MpHeader from 'base/mp-header/mp-header'
  import MpFooter from 'base/mp-footer/mp-footer'

  export default {
    name: 'App',
    components: {
      MpHeader,
      MpFooter
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
