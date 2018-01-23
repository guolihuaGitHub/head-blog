<template>
  <page-body>
    <div class="content fl">
      <div class="con-car">
        <carousel></carousel>
      </div>
      <today-tip></today-tip>
      <content-container></content-container>
    </div>
    <div class="sidebar fr">
      <public-bar></public-bar>
    </div>
  </page-body>
</template>

<script type="text/ecmascript-6">
  import PageBody from 'base/page-body/page-body'
  import Carousel from 'bcomponents/home/carousel/carousel'
  import TodayTip from 'bcomponents/home/today-tip/today-tip'
  import ContentContainer from 'bcomponents/home/content-container/content-container'
  import PublicBar from 'bcomponents/home/public-bar/public-bar'

  export default {
    name: 'HomeBody',
    components: {
      PageBody,
      Carousel,
      TodayTip,
      ContentContainer,
      PublicBar
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .content
    margin-left: 20px
    margin-right: 20px
    flex 1
    .con-car
      border-radius 5px
      overflow hidden

  .sidebar
    width: 360px
    margin-right 20px
</style>
