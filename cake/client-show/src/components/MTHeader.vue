<template>
  <div class="body">
    <div class="top-search">
      <img src="@/../public/images/logo.png" width="150px" style="margin-right:10px;" alt="" />
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <!-- 需添加各个模块的地址地址 -->
         <el-menu-item index="1" class="mycolor"><router-link to="/">首页</router-link></el-menu-item>
        <el-menu-item index="2" class="mycolor"><router-link to="/">蛋糕</router-link></el-menu-item>
        <el-menu-item index="3" class="mycolor"><router-link to="/">面包</router-link></el-menu-item>
        <el-menu-item index="4" class="mycolor"><router-link to="/">冰淇淋</router-link></el-menu-item>
        <el-menu-item index="5" class="mycolor"><router-link to="/">咖啡下午茶</router-link></el-menu-item>

        <!-- app下载 -->
        <el-submenu index="2">
          <template slot="title">App下载</template>
          <!-- <el-menu-item index="2-1"> -->
          <img src="@/../public/images/footer-erweima.png" width="100px" height="100px" class="erweima" alt="" />
          <!-- </el-menu-item> -->
        </el-submenu>

        <!-- 通知 -->
        <el-menu-item index="6" class="mycolor">
         <!-- 需添加通知地址 -->
          <router-link to="/">
            <el-submenu>
              <template slot="title">消息</template>
              <el-menu-item index="6-1">通知</el-menu-item>
              <el-menu-item index="6-2">物流</el-menu-item>
            </el-submenu>
          </router-link>
        </el-menu-item>

        <!-- 用户 -->
        <el-menu-item index="7" class="mycolor">
          <!-- <router-link class="iconfont icon-yonghu"></router-link> -->
          <router-link to="/login">登录</router-link>/
          <router-link to="/register">注册</router-link>
        </el-menu-item>
        <!-- 购物车 -->
        <el-menu-item index="8">
          <!-- 需添加购物车地址 -->
          <router-link to="/"><span class="iconfont icon-gouwuche"></span></router-link>
        </el-menu-item>
        <!-- 地区选择 -->
        <el-menu-item index="9">
          <el-select class="address" v-model="value" placeholder="请选择地区">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </el-menu-item>

        <!-- </el-submenu> -->
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      options: [
        {
          value: '1',
          label: '成都',
        },
        {
          value: '2',
          label: '重庆',
        },
        {
          value: '3',
          label: '上海',
        },
        {
          value: '4',
          label: '广州',
        },
        {
          value: '5',
          label: '北京',
        },
      ],
      value: '',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style>
@media screen and (max-width: 1400px) {
  .body {
    width: 1400px;
  }
}
.top-search {
  display: flex;
  justify-content: center;
  padding: 20px;
  /* border-bottom:solid 1px #ccc; */
  box-shadow: 0 2px 2px 0 rgba(195, 195, 195, 0.5);
}
/* 消除下边框 */
/* 首页，蛋糕下面的小边框 */
.el-menu--horizontal > .el-menu-item.is-active {
  border-color: #ffd044;
}
/* 首页那一整栏下面的下边框 */
.el-menu.el-menu--horizontal.el-menu-demo {
  border: none;
}

.icon-yonghu:before,
.icon-gouwuche::before {
  font-size: 20px;
}
</style>
