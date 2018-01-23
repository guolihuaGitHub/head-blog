<template>
  <el-carousel :interval="5000" height="24vh">
    <el-carousel-item>
      <p>王艳龙是个鬼啊</p>
    </el-carousel-item>
    <el-carousel-item>
      <p>是的</p>
    </el-carousel-item>
  </el-carousel>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Carousel'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .el-carousel__item
    color #fff
    &:nth-child(2n)
      background-color: #33DEBD
    &:nth-child(2n+1)
      background-color: #45B6F7
    p
      text-align center
      margin-top 20px
</style>
