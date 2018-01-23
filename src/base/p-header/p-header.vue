<template>
  <div>
    <div class="header-top-limit clearfix">
      <div class="fr">
        <a class="link" :href="href">简历</a>
        <a class="link" :href="href">github</a>
        <el-dropdown class="link">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>未开放</el-dropdown-item>
            <el-dropdown-item>待开放</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="header-body-limit clearfix">
      <div class="fl">
        <div class="clearfix">
          <img src="~common/imgs/logo.png" alt="logo">
          <div class="glh-blog">
            <p>欢迎光临</p>
            <p>郭立华的个人空间</p>
          </div>
        </div>
      </div>
      <div class="fr">
        <!--路由跳转to的两种写法-->
        <!--<router-link :class="{active : activeClass === 'home-active' ? true : false}" class="link" :to="{ name: 'HomeBody'}">-->
        <!--<i class="icon iconfont icon-fl-jia mr-6"></i>首页-->
        <!--</router-link>-->
        <router-link class="link" to="/homebody">
          <i class="icon iconfont icon-fl-jia mr-6"></i>首页
        </router-link>
        <router-link class="link" to="/slowlife">
          <i class="icon iconfont icon-kafei mr-6"></i>慢生活
        </router-link>
        <router-link class="link" to="/musicshare">
          <i class="icon iconfont icon-fenxiang mr-6"></i>乐分享
        </router-link>
        <router-link class="link" to="/aboutme">
          <i class="icon iconfont icon-yonghu mr-6"></i>关于我
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'PHeader',
    data() {
      return {
        href: 'javascript:;'
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/common.styl'
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/icon.styl'

  @media screen and (max-width: 1020px)
    .header-body-limit
      .glh-blog
        display none

  @media screen and (min-width: 1021px)
    .header-body-limit
      .glh-blog
        display block

  @media screen and (max-width: 800px)
    .header-top-limit
      display none

  @media screen and (min-width: 801px)
    .header-top-limit
      display block

  .header-top-limit
    max-width 1300px
    margin 0 auto
    height: 28px
    .fr
      .link
        cursor: pointer
        color: $color-light
        margin-top: 12px
        margin-right: 20px
        font-size $text-small
        transition all 0.3s
        &:hover
          cursor pointer
          color: $color-blue
          text-decoration none
  .header-body-limit
    max-width 1300px
    margin 8px auto
    .fl
      margin-left: 20px
      height: 33px
      img
        width: 100px
        vertical-align bottom
        float: left
      .glh-blog
        border-left 2px solid $color-light
        padding-left 10px
        color: $color-light
        float: left
        p
          line-height: 16px
          font-size $text-small
    .fr
      .link
        cursor: pointer
        color: $color-middle
        margin-top: 20px
        margin-right: 20px
        fontSizeMediaLink()
        transition all 0.6s
        line-height: 33px
        &:hover
          cursor pointer
          color: $color-blue
          text-decoration none
        &.router-link-active
          color: $color-blue
        &:last-child
          margin-right 70px
</style>
