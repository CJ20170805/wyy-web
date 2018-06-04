<template>
  <div class="hello">
        <div class="nav-top">
        <div class="line"></div>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1" ><router-link to="/discoverMusic">发现音乐</router-link></el-menu-item>
          <el-menu-item index="2" ><router-link to="/myMusic">我的音乐</router-link></el-menu-item>
          <el-menu-item index="3" ><router-link to="/friends">朋友</router-link></el-menu-item>
          <el-menu-item index="4" ><a href="http://www.baidu.com" target="_blank">商城</a></el-menu-item> 
          <el-menu-item index="5" disabled >消息中心</el-menu-item>
          <el-menu-item index="6"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
        </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>
