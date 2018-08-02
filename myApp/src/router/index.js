import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/MovieList'
import MusicList from '@/components/music/MusicList'
import BookList from '@/components/book/BookList'
import PhotoList from '@/components/photo/PhotoList'
import MovieDetail from '@/components/movie/MovieDetail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/movie/movieList',
            component:MovieList

        },
        {
            path: '/movie/movieList',
            component:MovieList
        },
        {
            path: '/music/musicList',
            component:MusicList
        },
        {
            path: '/book/bookList',
            component:BookList
        },
        {
            path: '/photo/photoList',
            component:PhotoList
        },
        {
            path: '/movie/movieDetail/:movieId',
            component:MovieDetail
        }
    ]
})
