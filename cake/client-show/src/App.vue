<template>
  <div id="app">
    <div id="nav">
      <myhead></myhead>
      <div class="middlediv">
        <router-view :goodsArr="goodsArr"></router-view>
      </div>
      <fixbottom></fixbottom>
    </div>
  </div>
</template>
<script>
import classify from "@/components/classify.vue"
export default {
  data: function () {
    return {
      goodsArr:''
    }
  },
  components:{
    classify
  },
  watch: {
    $route(to, from) {
      if (to.path == "/cake") {
        this.tocakepage();
      } else if (to.path == "/bread") {
        this.tobreadpage();
      } else if (to.path == "/iceCream") {
        this.toicecreampage();
      } else if (to.path == "/Coffee") {
        this.tocoffeepage();
      }
    },
  },
  methods:{
    tocakepage() {
      this.$http
        .get("/showCakeGoods", {
          
        })
        .then((r) => {
          console.log(r.data);
          this.goodsArr = r.data;
        })
        .catch();
    },
    tobreadpage() {
      this.$http
        .get("/showBreadGoods", {
          
        })
        .then((r) => {
          console.log(r.data);
          this.goodsArr = r.data;
        })
        .catch();
    },
    toicecreampage() {
     this.$http
        .get("/showIcecreamGoods", {
          
        })
        .then((r) => {
          console.log(r.data);
          this.goodsArr = r.data;
        })
        .catch();
    },
    tocoffeepage() {
     this.$http
        .get("/showCoffeeGoods", {
          
        })
        .then((r) => {
          console.log(r.data);
          this.goodsArr = r.data;
        })
        .catch();
    },
  
  },

  
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    text-decoration: none;
    display: inline-block;
    font-weight: bold;
    &.router-link-exact-active {
      color: #bb9772;
    }
  }
}
.topnav {
  width: 100%;
  height: 108px;
}
.middlediv {
  width: 100%;
  height: auto;
}
</style>
