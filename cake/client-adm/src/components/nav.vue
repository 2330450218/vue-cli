<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item @click="toIndex">麦田斋后台管理系统</el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">用户信息</el-menu-item>
        <el-menu-item index="2-2" @click="togoodsShop">商品信息</el-menu-item>
        <el-menu-item index="2-3">轮播图信息</el-menu-item>
        <el-menu-item index="2-4">专区锚点</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
     
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    togoodsShop(){
      this.$router.push("/goodsShop")
    },
    toIndex(){
        this.$router.push("/")
    }
  },

  created(){
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
