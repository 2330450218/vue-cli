<template>
  <div class="home">
    <!-- <HelloWorld/> -->
  <swiper></swiper>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import swiper from "./swiper.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld,
    swiper,
  },
};
</script>
