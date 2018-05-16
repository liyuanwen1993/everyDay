import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/views/page1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page1',
      component: page1
    }
  ]
})
