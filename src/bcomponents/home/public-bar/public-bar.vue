<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="网站公告" name="first">
      <div class="clearfix">
        <a href="javascript:;" class="fl">文字按钮文字按钮文字按钮文字按钮文字按钮文字按钮</a>
        <span class="fr">1888</span>
      </div>
      <div class="clearfix">
        <a href="javascript:;" class="fl">文字按钮文字按钮文字按钮文字按钮文字按钮文字按钮</a>
        <span class="fr">1888</span>
      </div>
      <div class="clearfix">
        <a href="javascript:;" class="fl">文字按钮文字按钮文字按钮文字按钮文字按钮文字按钮</a>
        <span class="fr">1888</span>
      </div>
      <div class="clearfix">
        <a href="javascript:;" class="fl">文字按钮文字按钮文字按钮文字按钮文字按钮文字按钮</a>
        <span class="fr">1888</span>
      </div>
    </el-tab-pane>
    <el-tab-pane label="吐血推荐" name="second">呵呵</el-tab-pane>
  </el-tabs>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'PublicBar',
    data() {
      return {
        activeName: 'first'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/common.styl"
  @import "~common/stylus/mixin.styl"

  .el-tabs
    padding 15px
    border-radius 5px
    background-color #fff
    .clearfix
      margin-bottom 14px
      &:last-child
        margin-bottom 0
      a, span
        font-size $text-extra-small
      .fl
        width: 280px
        color $color-middle
        cssSpaceEll()
        transition all 0.3s
        &:hover
          color $color-blue
          text-decoration none
      .fr
        color $color-light
</style>
