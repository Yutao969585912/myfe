import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/MovieList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
    },
    {
      path: '/movie/MovieList',
      component:MovieList
    }
  ]
})
