import Vue from 'vue'
import Router from 'vue-router'
import headerNav from '../components/header-nav.vue'
import songlistDetail from '../components/song-list-detail.vue'

Vue.use(Router)

export default new Router({
   mode: 'history',
  routes: [
    {
      path: '/',
      name: 'headerNav',
      component: headerNav
    },
    {
      path: '/songlistDetail/:songListId',
      name: 'songlistDetail',
      component: songlistDetail
    }
  ]
})
