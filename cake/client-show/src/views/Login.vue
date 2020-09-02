<template>
  <div>
    <nav>
      顶部导航栏
    </nav>
    <div class="bg-content">
      <div class="login-po">
        <login></login>
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
    register,
  },
  created() {
    console.log(this.login);
  },
};
</script>

<style>
nav {
  background-color: #3a907a;
}
.bg-content {
  width: 100%;
  height: 527px;
  background: #ccc;
  position: relative;
  background: url(../../public/img/image/bgimg.jpg) no-repeat top center;
}
.login-po {
  position: absolute;
  right: 100px;
  top: 114px;
  background-color: #fff;
}
</style>