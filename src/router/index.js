import Vue from 'vue'
import Router from 'vue-router'
import HomeBody from 'components/home-body/home-body'
import SlowLife from 'components/slow-life/slow-life'
import MusicShare from 'components/music-share/music-share'
import AboutMe from 'components/about-me/about-me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homebody'
    },
    {
      path: '/homebody',
      name: 'HomeBody',
      component: HomeBody
    },
    {
      path: '/slowlife',
      name: 'SlowLife',
      component: SlowLife
    },
    {
      path: '/musicshare',
      name: 'MusicShare',
      component: MusicShare
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    }
  ]
})
