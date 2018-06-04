<template>
  <div id="app">
    <router-view/>
    <hotRecommend></hotRecommend>
  </div>
</template>

<script>
import hotRecommend from './components/hot-recommend'
export default {
  name: 'App',
  components: {
    hotRecommend
  }
}
</script>

<style lang="less">
body,html{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
