<template>
  <div class="body" v-cloak>
    <div class="top-search">
      <img src="../assets/myheadimg/logo.png" width="150px" style="margin-right:10px;" alt />
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1" class="mycolor">
          <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2" class="mycolor">
          <router-link to="/cake">蛋糕</router-link>
        </el-menu-item>
        <el-menu-item index="3" class="mycolor">
          <router-link to="/bread">面包</router-link>
        </el-menu-item>
        <el-menu-item index="4" class="mycolor">
          <router-link to="/iceCream">冰淇淋</router-link>
        </el-menu-item>
        <el-menu-item index="5" class="mycolor">
          <router-link to="/Coffee">咖啡下午茶</router-link>
        </el-menu-item>

        <!-- app下载 -->
        <el-submenu index="2">
          <template slot="title">App下载</template>
          <!-- <el-menu-item index="2-1"> -->
          <img
            src="../assets/myheadimg/footer-erweima.png"
            width="100%"
            height="50%"
            class="erweima"
            alt
          />
          <!-- </el-menu-item> -->
        </el-submenu>

        <!-- 通知 -->
        <el-menu-item index="6" class="mycolor">
          <el-submenu>
            <template slot="title">消息</template>
            <el-menu-item index="2-1">通知</el-menu-item>
            <el-menu-item index="2-2">物流</el-menu-item>
          </el-submenu>
        </el-menu-item>

        <!-- 用户 -->
        <el-menu-item index="7">
          <!-- class="iconfont icon-yonghu" -->
          <router-link to="/login">登录</router-link>/
          <router-link to="/register">注册</router-link>
        </el-menu-item>
        <!-- 购物车 -->
        <el-menu-item index="8">
          <router-link to="/shoppingCart" class="iconfont icon-gouwuche"></router-link>
        </el-menu-item>
        <!-- 地区选择 -->
        <el-menu-item index="9">
          <el-select class="address" v-model="value" placeholder="请选择地区">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-menu-item>

        <!-- </el-submenu> -->
      </el-menu>
    </div>
    
  </div>
</template>

<script>
export default {
  props: { index: "" },
  data() {
    return {
      // index: "",
      activeIndex: "1",
      activeIndex2: "1",
      options: [
        {
          value: "1",
          label: "成都",
        },
        {
          value: "2",
          label: "重庆",
        },
        {
          value: "3",
          label: "上海",
        },
        {
          value: "4",
          label: "广州",
        },
        {
          value: "5",
          label: "北京",
        },
      ],
      value: "",
    };
  },

  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>

<style>
v-cloak {
  display: none;
}
@media screen and (max-width: 100%) {
  .body {
    width: 100%;
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
.el-menu.el-menu--horizontal.el-menu-demo {
  border: 0;
}
.icon-yonghu:before,
.icon-gouwuche::before {
  font-size: 20px;
}
.el-submenu__title > .el-submenu__icon-arrow {
  top: 54% !important;
  right: 0px !important;
}
.el-menu-item,
.el-submenu__title {
  height: 60px !important;
  line-height: 60px !important;
}
</style>
