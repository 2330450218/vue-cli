<template>
  <div class="all">
    <div>
      <topnav></topnav>
    </div>
    <div class="center">
      <div class="leftnav">
        <leftnav></leftnav>
      </div>
      <div class="rightcont">
        <!-- <welcome></welcome> -->
        <router-view></router-view>
      </div>
      <!-- <div class="clear"></div> -->
    </div>

    <div class="fixbottom">
      <fixbottom></fixbottom>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
.all {
  // background-color: #f4f4f4;
  background-color: #FFFEF3;
}

.clear {
  clear: both;
}
</style>
<style scoped>
/* 中间设置最小高度，保持基本样式  */
.center{
  min-height: 388px;
}
.leftnav {
  margin-top: 20px;
  position: absolute;
  left: 0;
  z-index: 10;
}
.rightcont {
  width: 72%;
  /* float: right; */
  margin: 20px;
  margin-left: 220px;
  /* height: 56vh; */
  box-sizing: border-box;
  /* background-color: aqua; */
}
.fixbottom{
  margin-top: 60px;
}
</style>
