<template>
  <div>
    <h2>这是首页</h2>
    <router-link :to="{name:'list1',params:{name:'zs',age: 22}}">子页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
