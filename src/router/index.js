import Vue from 'vue'
import Router from 'vue-router'
import rootpage from '../components/rootpage'
import userNew from '../components/userNew'
import sessionsNew from '../components/sessionsNew'
import postNew from '../components/postNew'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rootPage',
      component: rootpage
    },
    {
      path: '/user/new',
      name: 'userNew',
      component: userNew
    },
    {
      path: '/session/new',
      name: 'sessionNew',
      component: sessionsNew
    },
    {
      path: '/post/new',
      name: 'postNew',
      component: postNew
    }
  ]
})
