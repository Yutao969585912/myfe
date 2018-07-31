<template>
    <div>
        <ul class="footer" :style="{'background':bg}">
            <li @click="$emit('change','blue')">
                <router-link to="/movie/movieList">电影</router-link>
            </li>
            <li @click="$emit('change','red')">
                <router-link to="/music/musicList">音乐</router-link>
            </li>
            <li>书籍</li>
            <li>图片</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['bg']
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
        flex-grow: 1;/*CSS3 弹性布局，每一个元素所占比例都为1*/
        text-align: center;
        color: #ccc;

    }

</style>
