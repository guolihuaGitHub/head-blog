<template>
  <footer>
    <p>© 2018 郭立华空间</p>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'MpFooter'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable.styl"

  footer
    width: 100%
    height: 100px
    background-color #fff
    p
      text-align center
      padding-top: 40px
      font-size $text-e-extra-small
      color $color-light
</style>
