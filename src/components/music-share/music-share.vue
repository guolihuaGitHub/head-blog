<template>
  <page-body>
    <div class="content fl">
      乐分享
    </div>
    <div class="sidebar fr">
      mememe
    </div>
  </page-body>
</template>

<script type="text/ecmascript-6">
  import PageBody from 'base/page-body/page-body'

  export default {
    name: 'MusicShare',
    components: {
      PageBody
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
