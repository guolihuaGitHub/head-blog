<template>
  <div class="page-body-wrapper">
    <div class="page-body clearfix">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'PageBody'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/common.styl'
  @import '~common/stylus/variable.styl'

  @media screen and (max-width: 1000px)
    .page-body
      .sidebar
        display none

  @media screen and (min-width: 1001px)
    .page-body
      .sidebar
        display block

  @media screen and (max-width: 800px)
    .page-body-wrapper
      margin-top 49px

  @media screen and (min-width: 801px)
    .page-body-wrapper
      margin-top 77px

  .page-body-wrapper
    width 100%
    background-color $color-bg-light
    .page-body
      display flex
      max-width 1300px
      padding 20px 0 30px 0
      margin 0 auto
      .content
        margin: 0 20px
        flex 1
        .con-car
          border-radius 5px
          overflow hidden
      .sidebar
        width: 360px
        margin-right 20px
</style>
