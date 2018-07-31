import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import List from '@/components/List'
import Url from '@/components/Url'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'HelloWorld',
      component: Index,
      children:[
        {
          path: '/index/list',
          name: 'list1',
          component: List
        }
      ]
    },
    {
      path:'/url/:username/:userage',
      component: Url
    },
    {
      path: '/test',
      redirect: '/index/list'
    },
    {
      path: 'test1/:username/:userage',
      redirect: '/url/:username/:userage'
    }
  ]
})
