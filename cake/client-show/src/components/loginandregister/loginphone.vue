<template>
  <div class="loginbox">
    <el-input v-model="input" placeholder="请输入您的手机号"></el-input>
    <div class="yanzheng">
      <el-input v-model="input" placeholder="短信验证码"></el-input>
      <el-button type="info" plain>获取验证码</el-button>
    </div>

    <el-button type="primary">登录</el-button>
    <div class="smallbeizhu">
      <el-checkbox v-model="checked">记住密码</el-checkbox>
      <div>
        <router-link to="/#" class="qua">忘记密码</router-link>
        <router-link to="/#" class="qua">去注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      pwd: "",
      checked: true,
    };
  },
};
</script>

<style>
input,
button {
  border-radius: 2px;
}
.loginbox {
  width: 302px;
  height: 274px;
  /* background-color: #ccc; */
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  margin: 0 auto;
}
.el-input--suffix .el-input__inner {
  margin-top: 10px;
  padding-right: 30px;
}
.el-button--primary:focus,
.el-button--primary:hover {
  background-color: #442818;
  border-color: #442818;
  color: #fff;
}
.el-button--primary {
  color: #fff;
  background-color: #442818;
  border-color: #442818;
  width: 301px;
  font-size: 20px;
  margin-top: 42px;
  border-radius: 2px;
}
.smallbeizhu {
  font-size: 12px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.qua {
  text-decoration: none;
  font-size: 12px;
  color: #684029;
  margin-left: 20px;
}
.el-checkbox__label {
  font-size: 12px;
}
.el-checkbox__inner {
  width: 12px;
  height: 12px;
}
.el-checkbox__inner::after {
  box-sizing: content-box;
  content: "";
  border: 1px solid #424242;
  border-left: 0;
  border-top: 0;
  height: 6px;
  left: 3px;
  position: absolute;
  top: 1px;
  transform: rotate(45deg) scaleY(0);
  width: 3px;
  transition: transform 0.15s ease-in 0.05s;
  transform-origin: center;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #e3e3e3;
  border-color: #b2b2b2;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #684029;
}
.yanzheng {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.yanzheng button {
  width: 275px;
  margin-left: 12px;
  border-radius: 2px;
}
.el-button--info.is-plain {
    color: #424242;
    background: #f4f4f5;
    border-color: #d3d4d6;
}
.el-button--info.is-plain:hover,.el-button--info.is-plain:focus {
    color: #424242;
    background: #f4f4f5;
    border-color: #d3d4d6;
}
</style>