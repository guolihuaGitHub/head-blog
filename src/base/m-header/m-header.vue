<template>
  <div class="m-h-wrapper">
    <img src="~common/imgs/logo.png" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'MHeader'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .m-h-wrapper
    position fixed
    top: 0
    width: 100%
    height: 49px
    padding 0 20px
    box-sizing border-box
    text-align center
    background-color #fff
    z-index 111
    img
      height 49px
</style>
