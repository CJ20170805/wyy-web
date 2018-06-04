import Vue from 'vue'
import Router from 'vue-router'
// import songListDetail from '../components/song-list-detail'
import discoverMusic from '../components/discoverMusic/discoverMusic'
import myMusic from '../components/myMusic/myMusic'
import friends from '../components/friends/friends'
import listDetail from '../components/listDetail/listDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'discover',
      component: discoverMusic
    },
    {
      path: '/myMusic',
      name: 'myMusic',
      component: myMusic
    },
    {
      path: '/friends',
      name: 'friends',
      component: friends
    },
     {
       path: '/listDetail',
       name: 'listDetail',
       component: listDetail
     }
  ]
})
