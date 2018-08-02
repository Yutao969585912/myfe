<template>
    <div>
        <ul class="footer" :style="{'background':bg}">
            <li @click="$emit('change','green','Movie')">
                <router-link to="/movie/movieList">电影</router-link>
            </li>
            <li @click="$emit('change','red','Music')">
                <router-link to="/music/musicList">音乐</router-link>
            </li>
            <li @click="$emit('change','orange','Book')">
                <router-link to="/book/bookList">书籍</router-link>
            </li>
            <li @click="$emit('change','blue','Photo')">
                <router-link to="/photo/photoList">图片</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['bg'],
        methods: {

        }
    }
</script>

<style scoped>
    .footer{
        display: flex;/*CSS3 弹性布局https://blog.csdn.net/weixin_36401046/article/details/53127019*/
        height: 1rem;
        line-height: 1rem;
        position: fixed;
        bottom: 0px;
        width: 100%;
    }
    .footer li{
        flex-grow: 1;
        text-align: center;
    }
    .footer li a{
        color: #999999;
    }
    .footer li a.router-link-active{
        color: #ffffff;
    }
</style>
