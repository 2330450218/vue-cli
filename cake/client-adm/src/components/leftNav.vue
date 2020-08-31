<!--  -->
<template>
  <div>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>-->
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">用户信息</span>
        </template>
        <el-menu-item-group>
          <span slot="title">用户</span>
          <el-menu-item index="1-1">用户信息管理</el-menu-item>
          <el-menu-item index="1-2">用户订单管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="管理员">
          <el-menu-item index="1-3">管理员信息管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">商品信息</span>
        </template>
        <el-menu-item-group  >
          <el-menu-item index="3-1"  @click="togoodsShop">商品信息管理</el-menu-item>
          <el-menu-item index="3-2" @click="togoodsLable">标签信息管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3" >
        <i class="el-icon-menu"></i>
        <span slot="title">轮播图信息</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">专区锚点</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    togoodsLable(){
      this.$router.push("/goodsLable")
    },
    togoodsShop(){
      this.$router.push("/goodsShop")
    },
  },
};
</script>
<style lang='scss' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>