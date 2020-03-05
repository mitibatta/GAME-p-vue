import Vue from 'vue'
import Router from 'vue-router'
import rootpage from '../components/rootpage'
import userNew from '../components/userNew'

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
    }
  ]
})
