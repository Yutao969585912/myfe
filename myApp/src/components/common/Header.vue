<template>
    <div class="header" :style="{'background':bg}" :id="title">
        <span class="header-home" @click="$emit('change','green','Movie')">
            <router-link to="/movie/movieList">首页</router-link>
        </span>
        <span class="header-title">{{title}}</span>
        <span class="header-space"></span>
    </div>
</template>

<script>
    export default {
        props: ['title','bg']
    }
</script>

<style scoped>
    .header{
        height: 1rem;
        line-height: 1rem;
        display: flex;
        color: #fff;
        position: fixed;
        top: 0px;
        width: 100%;
    }
    .header-home,.header-space{
        width: 1rem;
        text-indent: 0.2rem;
    }
    .header-home a{
        color: #fff;
    }
    .header-title{
        flex: 1;
        text-align: center;
        font-size: 0.5rem;
        font-weight: bold;
    }
</style>
