<template>
  <div class="loginbox">
    <el-input v-model="pnumber" placeholder="请输入您的账号"></el-input>
    <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
    <span class="tip">{{tips}}</span>
    <el-button type="primary" @click="userlogin">登录</el-button>
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
      pnumber: "",
      pwd: "",
      checked: true,
      tips: "",
    };
  },
  watch: {
    pnumber() {
      let reg = /^1[3-9]\d{9}$/;
      if (reg.test(this.pnumber)) {
        this.tips = "";
      } else {
        this.tips = "账号格式不符，请输入手机号码格式";
      }
    },
  },

  // 这里需要与
  methods: {
    userlogin() {
      //发起网络请求
      if (this.tips == "") {
        console.log(1);
        // 添加后端服务器的路由
        this.$http.post("login", {
            phonenumber: this.pnumber,
            password: this.pwd,
          })
          .then((res) => {
            console.log(2)
            console.log(res.data.msg);
            //根据服务器请求数据判断
            if(res.data.status == 0 ){
              alert(res.data.msg);
            }else if(res.data.msg == '用户不存在'){
              alert(res.data.msg);
            }else{
              alert(res.data.msg)
            }
          }).catch((err)=>{
            console.log('axios请求失败')
          });
      }
    },
  },
  addCookie(pnumber) {
    document.cookie = `pnumber=${pnumber}`;
  },
};
</script>

<style>
.loginbox input,
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
  position: relative;
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
button.el-button--primary>span  {
  color: #fff;
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
.tip {
  color: red;
  font-size: 12px;
  position: absolute;
  top: 129px;
  left: 4px;
}
</style>