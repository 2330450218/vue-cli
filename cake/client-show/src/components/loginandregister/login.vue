<template>
  <div class="login-box">
    <div class="login-nav">
      <span v-on:click="Loginpwd">账号密码登录</span>|
      <span v-on:click="Loginphone">手机验证码登录</span>
    </div>
    <div>
      <div v-if="can">
        <loginpwd></loginpwd>
      </div>
      <div v-if="!can">
        <loginphone></loginphone>
      </div>
    </div>
  </div>
</template>

<script>
import loginpwd from "./loginpwd.vue";
import loginphone from "./loginphone.vue";

export default {
  data: function () {
    return {
      can: true,
    };
  },
  components: {
    loginpwd,
    loginphone,
  },
  methods: {
    Loginpwd: function () {
      this.can = true;
    },
    Loginphone: function () {
      this.can = false;
    },
  },
};
</script>

<style>
.login-box {
  width: 388px;
  height: 357px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.login-nav {
  font-size: 18px;
  color: #442818;
  margin-top: 26px;
}
.login-nav span {
  margin: 0 20px;
}

</style>