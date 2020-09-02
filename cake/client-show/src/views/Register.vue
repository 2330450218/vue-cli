<template>
  <div>
<nav>顶部导航栏</nav>
    <div class="bg-content">
        <div class="login-po">
            <register></register>
        </div>
    </div>

    <fixbottom></fixbottom>
  </div>
</template>
<script>
import login from "../components/loginandregister/login.vue";
import register from "../components/loginandregister/register.vue";
export default {
  components: {
    login,
    register
  },
  created(){
      console.log(this.register);
  }
};
</script>

<style>
nav{
    background-color: #3A907A;
}
.bg-content {
  width: 100%;
  height: 482px;
  background: #ccc;
  position: relative;
    background: url(../../public/img/image/bgimg.jpg) no-repeat top center;

}
.login-po{
    position: absolute;
    right: 100px;
    top: 114px;
    background-color: #fff;
}
</style>