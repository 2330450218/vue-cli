<template>
  <div class="register">
    <span>用户注册</span>

    <div class="registerbox">
      <el-input v-model="input" placeholder="请输入您的手机号"></el-input>
      <el-input placeholder="密码：请输入8~20字符，需同时包含英文和数字" v-model="pwd" show-password></el-input>
      <el-input placeholder="确认密码" v-model="pwd" show-password></el-input>
      <div class="yanzheng">
        <el-input v-model="input" placeholder="短信验证码"></el-input>
        <el-button type="info" plain>获取验证码</el-button>
      </div>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>

      <el-button type="primary" class="btn-zhuce">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      pwd: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      value1: "",
    };
  },
};
</script>


<style >

.register {
  width: 388px;
  height: 407px;
  border: 1px solid #ccc;
  padding: 28px 42px;
  box-sizing: border-box;
}
.register > span {
  font-size: 20px;
  color: #424242;
}
.registerbox input,
button {
  border-radius: 2px;
}
.registerbox {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  margin: 0 auto;
}
.el-button--primary:focus,
.el-button--primary:hover {
  background-color: #442818;
  border-color: #442818;
  color: #fff;
}
.el-button--primary.btn-zhuce {
  margin-top: 15px;
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
.el-button--info.is-plain:hover,
.el-button--info.is-plain:focus {
  color: #424242;
  background: #f4f4f5;
  border-color: #d3d4d6;
}
.el-input--suffix .el-input__inner {
  width: 301px;
  margin-top: 10px;
  padding-right: 30px;
}
.el-input__prefix {
  left: 5px;
  top: 6px;
  transition: all 0.3s;
}
</style>