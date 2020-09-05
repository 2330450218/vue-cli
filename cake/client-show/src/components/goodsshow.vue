<template>
  
      <div class="goods">
        <div class="list-goods">
          <a href>
            <div class="list-goods-img">
              <!-- <img :src="item.goods_url" alt /> -->
              <slot name="img"></slot>
            </div>
            <!-- <h3>{{item.name}}</h3> -->
            <!-- <span>¥{{item.price}}.00/{{item.weight}}g(1.0磅)</span> -->
            <slot name="goodsname"></slot>
            <slot name="goodscate"></slot>
          </a>
          <div class="list-goods-tag">
            <a href>新品</a>
          </div>
          <div class="list-goods-cart">
            加入购物车
          </div>
        </div>
      </div>
    
</template>

<script>
export default {

}
</script>

<style scoped>
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
</style>