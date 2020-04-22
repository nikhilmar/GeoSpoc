import Vue from 'vue'
import Router from 'vue-router'
import BaseComponent from '@/components/MyComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyComponent',
      component: BaseComponent
    }
  ]
})
