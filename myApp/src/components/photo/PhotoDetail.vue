<template>
    <v-touch v-on:swipeleft="next()" v-on:swiperight="previous()">
        <div class="photo" :style="{'background-image':url}" @click="hide()">
        </div>
    </v-touch>
    <!-- vue-touch
    https://github.com/vuejs/vue-touch/tree/next
    npm install vue-touch@next --save
     -->
</template>

<script>
    export default {
        name: "PhotoDetail",
        data(){
            return{
                nowIndex: this.$route.params.photoId,
                photolist:[]
            }
        },
        created () {
            this.photolist = this.$store.state.photolist;
        },
        computed: {
            url() {
                return `url(${this.photolist[this.nowIndex].src})`;
            }
        },
        methods: {
            next(){
                this.nowIndex++;
                if(this.nowIndex == this.photolist.length){
                    this.nowIndex = 0;
                }
            },
            previous(){
                this.nowIndex--;
                if(this.nowIndex == 0){
                    this.nowIndex = this.photolist.length-1;
                }
            },
            hide(){
                this.$router.push('/photo/photoList');
            }
        }


    }
</script>
<style scoped>
    .photo{
        position: absolute;
        top: 1rem;
        bottom: 1rem;
        left: 0px;
        right: 0px;
        background: #000 no-repeat center center;
        background-size: contain; /*CSS3 把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。*/
    }
</style>
