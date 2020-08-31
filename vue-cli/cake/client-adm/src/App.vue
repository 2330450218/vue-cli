<template>
  <div class="all">
    <div>
      <topnav></topnav>
    </div>

    <div class="leftnav">
      <leftnav></leftnav>
    </div>
    <div class="rightcont">
      <router-view></router-view>
    </div>
    <div class="clear"></div>
    <div>
      <fixbottom></fixbottom>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" >
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
  background-color: #f4f4f4;
}

.clear {
  clear: both;
}
</style>
<style  scoped>
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
  height: 56vh;
  box-sizing: border-box;
  /* background-color: aqua; */
}
</style>
