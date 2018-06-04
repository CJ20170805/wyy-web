<template>
  <div id="app">
    <headerNav></headerNav>
    <router-view></router-view>
  </div>
</template>
<script>
import headerNav from './components/header-nav'
export default {
  name: 'App',
  components: {
    headerNav
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
  display: block;
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
