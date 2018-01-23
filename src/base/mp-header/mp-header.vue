<template>
  <div>
    <div class='header-fixed'>
      <m-header class="m-header"></m-header>
      <p-header class="p-header"></p-header>
      <div class="search-wrapper">
        <div @click="showOrHideSearch" class="search">
          <i v-show="!searchShow" class="icon iconfont icon-sousuo mr-6"></i>
          <i v-show="searchShow" class="el-icon-close mr-6"></i>
        </div>
      </div>
    </div>
    <div ref="searchCon" class="search-con">
      <div class="search">
        <el-input :prefix-icon="'ha'" v-model="query" placeholder="请输入内容"></el-input>
        <i class="icon iconfont icon-sousuo"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'base/m-header/m-header'
  import PHeader from 'base/p-header/p-header'

  export default {
    name: 'MpHeader',
    data() {
      return {
        href: 'javascript:;',
        query: '',
        searchShow: false
      }
    },
    methods: {
      showOrHideSearch() {
        if (this.searchShow === false) {
          this.searchShow = true
          this.$refs.searchCon.style.transform = 'translateY(0)'
        } else {
          this.searchShow = false
          this.$refs.searchCon.style.transform = 'translateY(-80px)'
        }
      }
    },
    components: {
      MHeader,
      PHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/common.styl'
  @import '~common/stylus/mixin.styl'
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/icon.styl'

  .el-dropdown-link
    color: $color-light
    &:hover
      cursor: pointer
      color: $color-blue
      text-decoration none

  .header-fixed
    width: 100%
    position fixed
    top: 0
    background-color $color-bg-white
    z-index 111
    .search-wrapper
      position relative
      max-width 1300px
      margin 0 auto
      z-index 120
      .search
        position absolute
        top -31px
        right: 20px
        color: $color-middle
        transition all 0.6s
        &:hover
          cursor pointer
          color: $color-blue

  .search-con
    position fixed
    width: 100%
    height 80px
    background-color $color-bg-search
    transform translateY(-80px)
    transition all .4s cubic-bezier(1,.2,0,.1)
    z-index 110
    .search
      position relative
      margin 0 auto
      max-width 800px
      padding 0 20px
      .el-input
        margin-top: 19px
      .icon
        position absolute
        left: 30px
        top: 32px
        color $color-light
        cursor pointer
        transition all .4s
        &:hover
          color $color-blue

  @media screen and (max-width: 700px)
    .header-fixed
      .p-header
        display none
      .m-header
        display block
      .search-wrapper
        .search
          top: 15px
  @media screen and (min-width: 701px)
    .header-fixed
      .p-header
        display block
      .m-header
        display none
      .search-wrapper
        .search
          top: -31px

</style>
