<template>
  <div class="container-my">
    <div class="account-area">
      <div class="account-area-left"></div>
      <div class="account-area-right"></div>
    </div>
    <div class="member-center"></div>
  </div>
</template>
<script>
</script>
<style scoped>
.container-my {
  min-width: 960px;
  /* padding: 0 20px; */
  max-width: 1200px;
  margin: 0 auto;
  /* background-color: cadetblue; */
}
.account-area {
  font-size: 14px;
  background: #fff;
  color: #5f504e;
  overflow: hidden;
  padding-bottom: 20px;
  width: 1201px;
  height: 200px;
}
.account-area-left {
  float: left;
  width: 422px;
  height: 236px;
  background: #f6f5f3;
  margin: 0px 21px 0px 0px;
}
.account-area-right {
  float: left;
  padding: 0px 24px;
  background: #f6f5f3;
  width: 710px;
  height: 236px;
}
.member-center {
   width: 1200px;
  text-align: center;
  color: #5f504e;
  background: #f6f5f3;
  height: 800px;
  margin-top: 50px;
}
</style>
