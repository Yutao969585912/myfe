<template>
    <div id="app">
        <div class="img-box">
            <transition-group name="fade" tag="div">
                <img v-show="index == nowIndex" :key="index" v-for="(img,index) in imgs" :src="img" alt="">
            </transition-group>
            <!-- 注：使用transition-group包裹的元素不能定义class，
                不然会覆盖transition-group自带class,无法显示效果-->
        </div>
        <ul class="btn-box">
            <li v-for="(n,index) in imgs.length" :class="{selected:index == nowIndex}" @click="change(index)">{{n}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Slide",
        data(){
            return{
                imgs: [
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ],
                nowIndex:0
            }
        },
        methods: {
            change(index){
                this.nowIndex = index;
            }
        },
        created(){
            setInterval(() => {
                this.nowIndex++;
                if(this.nowIndex == this.imgs.length){
                    this.nowIndex = 0;
                }
            },1800)
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .img-box img{
        width: 100%;
        height: 300px;
        position: absolute;
        left:0px;
        top:0px;
    }
    #app{
        position: relative;
        height: 300px;
    }
    .btn-box{
        position: absolute;
        bottom: 20px;
        right: 30px;
        list-style: none;
    }
    .btn-box li {
        float: left;
        width: 20px;
        height: 20px;
        color: #ffffff;
        background: #6E6E6E;
        text-align: center;
        line-height: 20px;
        margin-right: 5px;
    }
    .btn-box li.selected{
        background: #f00;
    }
    .fade-enter{
        transform: translateX(100%);
    }
    .fade-enter-active{
        transition: transform 1s;
    }
    .fade-enter-to{
        transform: translateX(0);
    }
    .fade-leave{
        transform: translateX(0);
    }
    .fade-leave-active{
        transition: transform 1s;
    }
    .fade-leave-to{
        transform: translateX(-100%);
    }
</style>
