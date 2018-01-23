<template>
  <div class="today">
    <h3>【今日观点】</h3>
    <p>尽己力，听天命。无愧于心，不惑于情。顺势而为，随遇而安。知错即改，迷途知返。在喜欢的人身上用心，在不喜欢的自己的人身上健忘。如此一生，甚好。</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'TodayTip'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/mixin.styl"

  .today
    padding 10px
    margin-top: 20px
    border 1px solid #EAEAEA
    border-radius 5px
    background-color #fff
    h3
      color $color-red
      margin-bottom: 16px
      todayTipTitle()
    p
      color #666
      text-indent 2em
      line-height: 20px
      todayTipContent()
</style>
