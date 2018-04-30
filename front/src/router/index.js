import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import IndexPage from '../components/IndexPage'
import ViewPage from '../components/ViewPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/:id',
      name: 'view',
      component: ViewPage
    }
  ]
})
