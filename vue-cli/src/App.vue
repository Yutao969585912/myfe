<template>
  <div id="app">
    <router-link to="/index">首页</router-link>
    <router-link to="/url/zs/25">url传参</router-link>
    <router-link to="/test">陈独秀</router-link>
    <router-link to="/test1/lisi/26">重定向传参</router-link>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
