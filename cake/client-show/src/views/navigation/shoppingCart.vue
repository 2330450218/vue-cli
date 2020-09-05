<template>
  <div class="container-box">
    <div class="cart-not-pro">
      <img src="https://static.21cake.com/themes/site/img/cartempty.png" alt />
      <span>你的购物车里还没有商品</span>
      <a href>去购物>>></a>
    </div>
    <div class="details-recommend">
      <h2>商品推荐</h2>
      <div class="details-recommend-box">
        <div class="details-recommend-goods" v-for="(item,index) in recommendGoodsArr" :key="index">
          <img :src="item.goods_url" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recommendGoodsArr: {},
    };
  },
  methods: {
    showRecommendGoods() {
      this.$http
        .get("http://127.0.0.1:7001/showviewGoods")
        .then((res) => {
          var list = res.data;
          console.log(list);
          console.log(list.length);
          this.recommendGoodsArr = list;
        })
        .catch((err) => {});
    },
  },
  created() {
    // this.showRecommendGoods();
  },
};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
a {
  text-decoration: none;
}
.container-box {
  width: 1200px;
  margin: 0 auto;
}
/* 没有商品 */
.cart-not-pro {
  height: 184px;
  width: 1198px;
  padding: 83px 0 115px;
  margin-top: 24px;
}
.cart-not-pro img {
  display: block;
  height: 116px;
  width: 204px;
  margin: 0 auto;
}
.cart-not-pro span {
  text-align: center;
  font-size: 14px;
  color: #d5bfa7;
  display: block;
  margin-top: 8px;
}
.cart-not-pro a {
  color: #d5bfa7;
  display: block;
  width: 80px;
  margin: 0 auto;
  font-size: 14px;
  margin-top: 20px;
}

/* 商品推荐 */
.details-recommend {
  margin-top: 48px;
  width: 1200px;
  overflow: hidden;
  padding-bottom: 42px;
}
.details-recommend h2 {
  font-weight: normal;
  text-align: left;
  font-size: 18px;
  color: #684029;
  line-height: 50px;
  border-bottom: 2px solid #cecac7;
}
.details-recommend-box {
  width: 1264px;
  margin: 22px 0 0 -32px;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
}
.details-recommend-goods {
  width: 252px;
  height: 252px;
  /* background-color: cadetblue; */
  /* float: left; */
  flex-direction: row;
}
.details-recommend-goods > img {
  width: 100%;
  height: 100%;
}
</style>