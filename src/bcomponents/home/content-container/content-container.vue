<template>
  <section class="content-wrapper">
    <div class="clearfix">
      <h4>最新发布</h4>
      <el-button @click="refresh" type="text">全部文章</el-button>
    </div>
    <div class="item-wrapper">
      <a href="javascript:;" class="item clearfix">
        <img src="./imgs/push.jpg" alt="">
        <div class="item-content">
          <h3>基于NodeJS重新思考前后端分离</h3>
          <div class="item-icon">
            <span><i class="icon iconfont icon-shijian"></i>2018-01-03</span>
            <span><i class="icon iconfont icon-yonghu"></i>郭 立华</span>
            <span><i class="icon iconfont icon-yuedu"></i>浏览(12)</span>
          </div>
          <p>在传统的web应用开发中，大多数的程序员会将浏览器作为前后端的分界线。将浏览器中为用户进行页面展示的部分称之为前端，而将运行在服务器，为前端提供业务逻辑和数据准备的所有代码统称为后端。</p>
        </div>
      </a>
      <a href="javascript:;" class="item clearfix">
        <img src="./imgs/push.jpg" alt="">
        <div class="item-content">
          <h3>基于NodeJS重新思考前后端分离</h3>
          <div class="item-icon">
            <span><i class="icon iconfont icon-shijian"></i>2018-01-03</span>
            <span><i class="icon iconfont icon-yonghu"></i>郭 立华</span>
            <span><i class="icon iconfont icon-yuedu"></i>浏览(12)</span>
          </div>
          <p>在传统的web应用开发中，大多数的程序员会将浏览器作为前后端的分界线。将浏览器中为用户进行页面展示的部分称之为前端，而将运行在服务器，为前端提供业务逻辑和数据准备的所有代码统称为后端。</p>
        </div>
      </a>
      <a href="javascript:;" class="item clearfix">
        <img src="./imgs/push.jpg" alt="">
        <div class="item-content">
          <h3>基于NodeJS重新思考前后端分离</h3>
          <div class="item-icon">
            <span><i class="icon iconfont icon-shijian"></i>2018-01-03</span>
            <span><i class="icon iconfont icon-yonghu"></i>郭 立华</span>
            <span><i class="icon iconfont icon-yuedu"></i>浏览(12)</span>
          </div>
          <p>在传统的web应用开发中，大多数的程序员会将浏览器作为前后端的分界线。将浏览器中为用户进行页面展示的部分称之为前端，而将运行在服务器，为前端提供业务逻辑和数据准备的所有代码统称为后端。</p>
        </div>
      </a>
      <a href="javascript:;" class="item clearfix">
        <img src="./imgs/push.jpg" alt="">
        <div class="item-content">
          <h3>基于NodeJS重新思考前后端分离</h3>
          <div class="item-icon">
            <span><i class="icon iconfont icon-shijian"></i>2018-01-03</span>
            <span><i class="icon iconfont icon-yonghu"></i>郭 立华</span>
            <span><i class="icon iconfont icon-yuedu"></i>浏览(12)</span>
          </div>
          <p>在传统的web应用开发中，大多数的程序员会将浏览器作为前后端的分界线。将浏览器中为用户进行页面展示的部分称之为前端，而将运行在服务器，为前端提供业务逻辑和数据准备的所有代码统称为后端。</p>
        </div>
      </a>
      <a href="javascript:;" class="item clearfix">
        <img src="./imgs/push.jpg" alt="">
        <div class="item-content">
          <h3>基于NodeJS重新思考前后端分离</h3>
          <div class="item-icon">
            <span><i class="icon iconfont icon-shijian"></i>2018-01-03</span>
            <span><i class="icon iconfont icon-yonghu"></i>郭 立华</span>
            <span><i class="icon iconfont icon-yuedu"></i>浏览(12)</span>
          </div>
          <p>在传统的web应用开发中，大多数的程序员会将浏览器作为前后端的分界线。将浏览器中为用户进行页面展示的部分称之为前端，而将运行在服务器，为前端提供业务逻辑和数据准备的所有代码统称为后端。</p>
        </div>
      </a>
    </div>
    <el-pagination
      background
      small
      layout="prev, pager, next"
      :page-size="5"
      :total="50">
    </el-pagination>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'ContentContainer',
    methods: {
      refresh() {
        window.location.reload()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/common.styl'
  @import '~common/stylus/mixin.styl'
  @import '~common/stylus/icon.styl'

  .content-wrapper
    margin-top: 10px
    .clearfix
      h4
        color $color-middle
        font-size $text-large
        float: left;
        line-height: 40px
      .el-button
        float: right
    .item-wrapper
      .item
        display block
        margin-bottom: 10px
        padding 2%
        background-color $color-bg-white
        &:hover
          text-decoration none
        img
          float: left
          margin-right: 10px
          homeItemPic()
        .item-content
          color $color-light
          h3
            margin-top: 2px
            text-align left
            margin-bottom: 14px
            homeItemTitle()
            border none
            color $color-weight
          .item-icon
            homeItemIconCon()
            margin-bottom 14px
            span
              margin-right: 10px
              .icon
                homeItemIconCon()
                margin-right 2px
          p
            homeItemContent()
            text-indent 2em
            line-height 20px
            overflow: hidden /*超出隐藏*/
            text-overflow ellipsis /*文本溢出时显示省略标记*/
            display -webkit-box /*设置弹性盒模型*/
            -webkit-line-clamp 3 /*文本占的行数,如果要设置2行加...则设置为2*/
            -webkit-box-orient: vertical/*子代元素垂直显示*/
    .el-pagination
      text-align center
</style>
