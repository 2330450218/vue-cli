<template>
  <div class="swiper">
    <el-carousel style="height=500px" indicator-position="outside">
      <el-carousel-item  v-for="(item,index) in cakeArr" :key="index">
       <img class="swiper_img" :src="item.swiper_url">
      </el-carousel-item>
    </el-carousel>
    <!-- <a href="javascript:;" class="choose">
      选择文件
      <input type="file" name id="file" />
    </a>
    <button class="submit" @click="submit">确定上传</button> -->
    <!-- <button type="button" class="show" @click="show">展示</button> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      cakeArr: {}
      ,
    };
  },
  methods: {
    // submit() {
    //   let file = document.getElementById("file").files[0];
    //   console.log(file);
    //   let formData = new FormData();
    //   formData.append("uploadSwiper", file, file.name);
    //   const config = {
    //     headers: {
    //       "Content-Type": "mutipart/form-data;boundary=" + new Date().getTime(), //Content-Type来表示具体请求中的媒体类型信息。
    //     },
    //   };
    //   this.$http
    //     .post("http://127.0.0.1:7001/uploadSwiper", formData, config)
    //     .then((res) => {
    //     //   console.log(111);
    //       console.log(res.data);

    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     });
    // },
        showSwiper() {
        // console.log(111)
      this.$http.get("http://127.0.0.1:7001/showviewSwiper",)
        .then((res) => {
            var list = res.data;
            console.log(list)
            this.cakeArr = list
        })
        .catch((err) => {});
    },
  },
  created () {
      this.showSwiper()
  }
};
</script>
<style>
/* .box {
     width: 1200px;
    height: 800px;
} */
/* .swiper {
    margin-top: 20px;
} */
.swiper_img {
    width: 100%;
    height: 500px;
}
.el-carousel {
    /* width: 1200px; */
    height: 530px;
}
.el-carousel--horizontal {
    overflow-y: hidden;
}
.el-carousel__container {
    position: relative;
    height: 500px !important;;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.choose input {
  position: absolute;
  font-size: 100px;
  opacity: 0;
  line-height: 40px;
  width: 100px;
  height: 40px;
  bottom: 0px;
  right: 0px;
}
.choose {
  position: relative;
  width: 99px;
  height: 37px;
  display: inline-block;
  background: #fc9d99;
  border: 1px solid #99d3f5;
  border-radius: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
  text-indent: 0;
  line-height: 40px;
  text-align: center;
}
.choose:hover {
  background: #aadffd;
  border-color: #78c3f3;
  color: #004974;
  text-decoration: none;
}
.submit {
  position: absolute;
  width: 100px;
  height: 40px;
  background: #fc9d99;
  border: 1px solid #99d3f5;
  border-radius: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
  text-indent: 0;
  line-height: 40px;
  text-align: center;
}
.show {
position: absolute;
    right: 10px;
  width: 100px;
  height: 40px;
  background: #fc9d99;
  border: 1px solid #99d3f5;
  border-radius: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
  text-indent: 0;
  line-height: 40px;
  text-align: center;
}
</style>