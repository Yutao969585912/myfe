<template>
    <div id="app">
        <common-header :bg="bgColor" @change="fn" :title="title"></common-header>
        <router-view></router-view>
        <common-footer :bg="bgColor" @change="fn"></common-footer>
    </div>
</template>

<script>
    import CommonHeader from '@/components/common/Header'
    import CommonFooter from '@/components/common/Footer'
    export default {
        name: 'App',
        data(){
            return{
                bgColor: 'green',
                title: 'Movie'
            }
        },
        components: {
            CommonHeader,
            CommonFooter
        },
        methods: {
            fn(color,title){
                this.bgColor = color;
                this.title = title;
            }
        },
        created () {//created vue生命周期 在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
            let url = this.$route.path; //    /music/musicList
            let str = url.split('/')[1];  // ['','music','musicList'] => 'music'
            switch (str) {
                case 'movie':
                {
                    this.bgColor = 'green';
                    this.title = 'Movie';
                    break;
                }
                case 'music':
                {
                    this.bgColor = 'red';
                    this.title = 'Music';
                    break;
                }
                case 'book':
                {
                    this.bgColor = 'orange';
                    this.title = 'Book';
                    break;
                }
                case 'photo':
                {
                    this.bgColor = 'blue';
                    this.title = 'Photo';
                    break;
                }
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body{
        font-size: 0.32rem;
    }

</style>
