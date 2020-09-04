<template>
  <div class="register">
    <span>用户注册</span>

    <div class="registerbox">
      <el-input v-model="pnumber" placeholder="请输入您的手机号"></el-input>
      <el-input placeholder="密码：请输入8~20字符，可以是英文和数字" v-model="pwd1" show-password></el-input>
      <el-input placeholder="确认密码" v-model="pwd2" show-password></el-input>
      <!-- <div class="yanzheng">
        <el-input v-model="input" placeholder="短信验证码"></el-input>
        <el-button type="info" plain>获取验证码</el-button>
      </div> -->
      <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      <span class="tips">{{tips}}</span>

      <el-button type="primary" class="btn-zhuce" @click="useradd">注册</el-button>
    </div>
  </div>
</template>

<script>
import { compileFunction } from 'vm';
export default {
  data() {
    return {
      pnumber: "",
      pwd1: "",
      pwd2:"",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      value1: "",
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
    pwd1(){
      let reg = /^[0-9A-Za-z]{8,20}$/;
      if(reg.test(this.pwd1)){
        this.tips = '';
      }else{
        this.tips = '密码格式不正确'
      }
    },
    pwd2() {
      let reg = /^[0-9A-Za-z]{8,20}$/;
      if (reg.test(this.pwd2) && this.pwd2== this.pwd1) {
        this.tips = "";
      } 
      // else if(this.pwd2=!this.pwd1){
      //   this.tips = '两次密码输入不一致';
      // } 
      else{
        this.tips = '两次密码输入不一致';
      }
    },
  },
  methods: {
    useradd() {
      console.log(1);
      //发起网络请求
      // 当没有提示错误并且有出生日期时才能进行请求
      if (this.tips == "" && this.value1) {
        // 添加后端服务器的路由
        console.log(2)
        this.$http.post("/register", {
            pwd: this.pwd1,
            phone: this.pnumber,
            birth:this.value1
          })
          .then((res) => {
            // 根据后台返回数据判断
            console.log(res.data);
            // if (res.data == 1) {
            //   console.log("注册失败");
            // } else {
            //   console.log("注册成功");
            // }
            
          }).catch((err)=>{
            console.log('axios请求失败');
            console.log(err);
          });
      }
    },

  },
};
</script>


<style >
.register {
  width: 388px;
  height: 411px;
  border: 1px solid #ccc;
  padding: 28px 42px;
  box-sizing: border-box;
  position: relative;
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
.el-input__icon {
    height: 100%;
    width: 25px;
    text-align: center;
    transition: all .3s;
    line-height: 61px;
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
.tips {
  color: red;
  font-size: 12px;
  position: absolute;
  top: 282px;
  left: 45px;
}
</style>