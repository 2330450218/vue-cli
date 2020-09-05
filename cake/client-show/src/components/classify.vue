<template>
  <div class="sort">
    <div class="el-menu-ui">
      <el-menu
        :default-active="activeIndex1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1" class="mycolor top">分类</el-menu-item>
        <el-menu-item index="2" class="mycolor">全部分类</el-menu-item>
        <el-menu-item index="3" class="mycolor">蛋糕</el-menu-item>
        <el-menu-item index="4" class="mycolor">冰淇淋</el-menu-item>
        <el-menu-item index="5" class="mycolor">咖啡下午茶</el-menu-item>
        <el-menu-item index="6" class="mycolor">常温蛋糕</el-menu-item>
        <el-menu-item index="7" class="mycolor">设计师礼品</el-menu-item>
        <el-menu-item index="8" class="mycolor">面包</el-menu-item>
      </el-menu>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect1"
      >
        <el-menu-item class="mycolor top">口味</el-menu-item>
        <el-menu-item index="9" class="mycolor">全部口味</el-menu-item>
        <el-menu-item index="10" class="mycolor">乳脂奶油</el-menu-item>
        <el-menu-item index="11" class="mycolor">慕斯</el-menu-item>
        <el-menu-item index="12" class="mycolor">乳酪</el-menu-item>
        <el-menu-item index="13" class="mycolor">巧克力</el-menu-item>
        <el-menu-item index="14" class="mycolor">坚果</el-menu-item>
        <el-menu-item index="15" class="mycolor">水果</el-menu-item>
        <el-menu-item index="16" class="mycolor">咖啡</el-menu-item>
        <el-menu-item index="17" class="mycolor">冰淇淋</el-menu-item>
        <el-menu-item index="18" class="mycolor">应季</el-menu-item>
      </el-menu>
    </div>

    <!-- 展示商品页面 -->
    <!-- <keep-alive>
      <div class="goods">
        <div class="list-goods" v-for="(item,index) in goodsArr" :key="index">
          <a href>
            <div class="list-goods-img">
              <img :src="item.goods_url" alt />
            </div>
            <h3>{{item.name}}</h3>
            <span>¥{{item.price}}.00/{{item.weight}}g(1.0磅)</span>
          </a>
          <div class="list-goods-tag">
            <a href>新品</a>
          </div>
          <div class="list-goods-cart">
            加入购物车
          </div>
        </div>
      </div>
    </keep-alive>-->
    <goodsshow v-for="(item,index) in goodsArr" :key="index">
      <img :src="item.goods_url" alt slot="img"/>
      <h3 slot="goodsname">{{item.name}}</h3>
      <span slot="goodscate">¥{{item.price}}.00/{{item.weight}}g(1.0磅)</span>
    </goodsshow>
  </div>
</template>
    <script>
    import goodsshow from "@/components/goodsshow.vue"
export default {
  data() {
    return {
      pagenum: "1",
      pagesize: "5",
      //   index: "",
      activeIndex1: "0",
      activeIndex2: "11",
      value: "",
      goodsArr: [],
    };
  },
  props: ["goodsArr"],
  components: {
    goodsshow,
  },
  // inheritAttrs: false,
  methods: {
    handleSelect(key, keyPath) {
      console.log(key);
      this.pagesize = 4;
      this.$http
        .get("http://127.0.0.1:7001/showAllGoods", {
          params: {
            pagenum: key,
            pagesize: this.pagesize,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.goodsArr = res.data;
        })
        .catch((err) => {});
    },
    handleSelect1(key, keyPath) {
      console.log(key);
    },
  },
};
</script>
    <style scoped>
.box2 {
  width: 1200px;
  margin: 0 auto;
  border-top: #f2f2f2 solid 1px;
  border-bottom: #f2f2f2 solid 1px;
}
a {
  text-decoration: none;
}

/* ui样式 */
.element.style {
  border-bottom-color: #fff !important;
}
.el-menu-ui {
  width: 1200px;
  margin: 0 auto;
  border-top: #f2f2f2 solid 1px;
  border-bottom: #f2f2f2 solid 1px;
}
@media screen and (max-width: 1400px) {
  .body {
    width: 1400px;
  }
}
.top {
  color: #9b9b9b !important;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item {
  font-size: 13px;
  color: #684029;
  outline: none;
  cursor: pointer;
  height: 50px;
  line-height: 50px;
}
.top-search {
  display: flex;
  justify-content: center;
  padding: 20px;
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

/* 商品样式 */
.goods {
  width: 83%;
  /* height: 800px; */
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0px auto;
  margin-bottom: 20px;
}
.list-goods {
  width: 228px;
  text-align: center;
  height: 364px;
  position: relative;
  background-color: rgba(116, 99, 99, 0.1);
  font-family: "PingFang SC", "Heiti SC", "微软雅黑", Helvetica, Arial;
  font-size: 12px;
  margin: 10px 30px;
}
.list-goods > a:visited,
.list-goods > a:link,
.list-goods > a {
  color: #684029;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
.list-goods-img {
  width: 228px;
  height: 246px;
}
.list-goods-img > a {
  border: none;
}
.list-goods-img img {
  width: 228px;
  height: 246px;
}
h3 {
  font-size: 13px;
  line-height: 20px;
  font-weight: normal;
}
h3:hover {
  color: #bb9772;
}
span {
  display: block;
  color: #bb9772;
  line-height: 18px;
  margin-top: 5px;
  font-size: 13px;
}
/* 标签 */
.list-goods-tag > a {
  display: inline-block;
  border: 1px solid #d5bfa7;
  border-radius: 100px;
  padding: 0 6px 0 8px;
  color: #d5bfa7;
  margin: 8px 3px;
}
/* 购买精灵图和购买按钮 */
.list-goods-cart {
  position: absolute;
  top: 325px;
  display: inline-block;
  width: 107px;
  left: 60px;
  line-height: 28px;
  margin-top: 12px;
  background: none;
  font-size: 13px;
}
.list-goods-cart img:hover {
  background-position: -250px -72px;
  background-size: 310px 120px;
}
.list-goods-cart > img {
  display: inline-block;
  vertical-align: middle;
  background: no-repeat;
  background-position: -216px -40px;
  background-size: 310px 120px;
  height: 28px;
  width: 28px;
  margin-right: 2px;
}
/* 购买按钮 */
.list-goods-move {
  background-color: bisque;
  position: absolute;
  left: 0;
  width: 240px;
  /* height: 200px; */
  background: #f8f8f8;
  padding: 12px 12px 20px 12px;
  z-index: 20;
}
.list-goods-move h4 {
  font-size: 15px;
  font-weight: bold;
  color: #684029;
  margin-bottom: 14px;
}
</style>