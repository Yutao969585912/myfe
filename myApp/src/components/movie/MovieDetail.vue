<template>
    <div class="moive">
        <div class="movie-nav">
            <div class="movie-img">
                <img :src="movieDetail.img" alt="">
            </div>
            <div class="movie-text">
                <h3>{{movieDetail.nm}}</h3>
                <p>{{movieDetail.sc}}分</p>
                <p>{{movieDetail.cat}}</p>
                <p>{{movieDetail.src}}</p>
                <p>{{movieDetail.rt}}</p>
            </div>
        </div>
        <hr>
        <div class="people">
            <h2>主演</h2>
            <p>  {{movieDetail.star}}</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "MovieDetail",
        data(){
            return{
                movieDetail:{}
            }
        },
        created() {
            axios.get(`./static/data/moviedetail.json?movieId=${this.$route.params.movieId}`).then(res => {
                this.movieDetail = res.data.data.MovieDetailModel;
            }).catch(res => {
                console.log('获取数据失败');
            });
        }
    }
</script>

<style scoped>
    .moive{
        padding: 10px;
    }
    .movie-nav{
        display: flex;
    }
    .movie-img{
        flex-grow: 1;
        width: 0px;
    }
    .movie-img img{
        width: 100%;
    }
    .movie-text{
        flex-grow: 2;
        width: 0px;
    }
    h3{
        text-align: center;
    }
    .movie-text p{
        padding: 3px 0 0 24px;
    }
    hr{
        height: 2px;
        background: #cccccc;
        border-radius: 2px;
    }
    h2{
        text-align: center;
    }
    .people p{
        text-indent: 2em;
    }

</style>
