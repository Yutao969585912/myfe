<template>
  <div>
    <h2>这是列表</h2>
    {{$route.params.name}}
    --------------------------
    {{$route.params.age}}
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  h2{
    background: blue;
  }

</style>
