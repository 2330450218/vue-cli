<template>
  <div class="body">
    <mtheader></mtheader>
    <!-- 轮播图 -->
    <div class="lbt ">
      <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
      <el-carousel>
        <el-carousel-item v-for="item in lbtArr" :key="item.id">
          <!-- {{item.imgsrc}} -->

          <img :src="item.imgsrc" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 锚点导航 -->
    <div class="search myhome" >
      <span  v-for="item in mdArr" :key="item.id" @click="getmyid">
        <img :src="item.imgsrc" :id="item.id">
      </span>
      <img src="" alt="" />
    </div>

    <!-- 分类导航 -->
    <div class="partsearch myhome" v-for="item in areaArr" :key="item.id" :id="item.id">
      <h3>{{ item.partname }}<small>/专区</small></h3>
      <!-- 专区大图 -->
      <div class="partimg"><img :src="item.imgsrc" alt="" width="100%" /></div>
      <!-- 专区商品推送 -->
      <div class="patrgoods">
        <div v-for="content in item.content" :key="content.id">
          <img :src="content.imgsrc" alt="" />
          <!-- <div v-for="content in item.content" :key="content.id"> -->
          <p class="title">{{ content.title }}</p>
          <p class="persent">{{ content.persent }}</p>
          <p class="persent">------------------------------------------</p>
          <!-- </div> -->
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <fixbottom></fixbottom>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      lbtArr: [
        {
          id: 1,
          imgsrc: require('@/../public/images/首页图片/轮播图/轮播图1.jpg'),
        },
        {
          id: 2,
          imgsrc: require('@/../public/images/首页图片/轮播图/轮播图2.jpg'),
        },
        {
          id: 3,
          imgsrc: require('@/../public/images/首页图片/轮播图/轮播图3.jpg'),
        },
        {
          id: 4,
          imgsrc: require('@/../public/images/首页图片/轮播图/轮播图4.jpg'),
        },
        {
          id: 5,
          imgsrc: require('@/../public/images/首页图片/轮播图/轮播图5.jpg'),
        },
      ],
      // 锚点图片
      mdArr: [
        {
          id: 1,
          imgsrc: require('@/../public/images/首页图片/导航部分/新品导航.jpg'),
        },
        {
          id: 2,
          imgsrc: require('@/../public/images/首页图片/导航部分/生日导航.jpg'),
        },
        {
          id: 3,
          imgsrc: require('@/../public/images/首页图片/导航部分/儿童导航.jpg'),
        },
        {
          id: 4,
          imgsrc: require('@/../public/images/首页图片/导航部分/聚会导航.jpg'),
        },
      ],
      // 专区
      areaArr: [
        // 新品
        {
          id:1,
          partname: '新品',
          imgsrc: require('@/../public/images/首页图片/新品专区/新品尝鲜.jpg'),
          content: [
            {
              id: 1,
              imgsrc: require('@/../public/images/首页图片/新品专区/豆酪.jpg'),
              title: '豆酪',
              //商品简介
              persent: '专为儿童研发的豆腐芝士流心蛋糕',
            },
            {
              id: 2,
              imgsrc: require('@/../public/images/首页图片/新品专区/蔓生.jpg'),
              title: '蔓生',
              persent: '树莓奶油与浆果慕斯蛋糕',
            },
            {
              id: 3,
              imgsrc: require('@/../public/images/首页图片/生日专区/榴莲飘飘.jpg'),
              // title: '松仁淡奶（木糖醇）',
              // persent: '轻松吃的木糖醇松子蛋糕',
              title: '榴莲飘飘',
              persent: '丰富乳脂奶油，打入足量榴莲果肉',
            },
            {
              id: 4,
              imgsrc: require('@/../public/images/首页图片/新品专区/新杰瑞.jpg'),
              title: '[新]杰瑞',
              persent: '芝士与坚果的完美融合',
            },
          ],
        },
        // 生日
        {
          id:2,
          partname: '生日',
          imgsrc: require('@/../public/images/首页图片/生日专区/生日推荐.jpg'),
          content: [
            {
              id: 1,
              imgsrc: require('@/../public/images/首页图片/生日专区/深爱.jpg'),
              title: '深爱',
              //商品简介
              persent: '你深爱过么',
            },
            {
              id: 2,
              imgsrc: require('@/../public/images/首页图片/生日专区/榴莲飘飘.jpg'),
              title: '榴莲飘飘',
              persent: '丰富乳脂奶油，打入足量榴莲果肉',
            },
            {
              id: 3,
              imgsrc: require('@/../public/images/首页图片/生日专区/黑白巧克力慕斯 彼尔德.jpg'),
              title: '黑白巧克力慕斯 彼尔德',
              persent: '卡通定制撒粉，简单、柔软',
            },
            {
              id: 4,
              imgsrc: require('@/../public/images/首页图片/生日专区/枣儿.jpg'),
              title: '枣儿',
              persent: '红枣奶油戚风，与姜撞奶慕斯',
            },
          ],
        },
        // 儿童
        {
          id:3,
          partname: '儿童',
          imgsrc: require('@/../public/images/首页图片/儿童专区/儿童推荐.jpg'),
          content: [
            {
              id: 1,
              imgsrc: require('@/../public/images/首页图片/儿童专区/黑白巧克力慕斯 彼尔德.jpg'),
              title: '黑白巧克力慕斯 彼尔德（Party）',
              //商品简介
              persent: `"孩子的世界，简单到非黑即白。"`,
            },
            {
              id: 2,
              imgsrc: require('@/../public/images/首页图片/儿童专区/米道.jpg'),
              title: '米道',
              persent: '一款专为孩子设计的蛋糕',
            },
            {
              id: 3,
              imgsrc: require('@/../public/images/首页图片/儿童专区/芒果奶油蛋糕.jpg'),
              title: '芒果奶油蛋糕',
              persent: '芒果百香慕斯夹心',
            },
            {
              id: 4,
              imgsrc: require('@/../public/images/首页图片/儿童专区/百香果酸乳酪慕斯.jpg'),
              title: '百香果酸乳酪慕斯（木糖醇）',
              persent: '冰淇淋口感，不同层次的酸与冰凉',
            },
          ],
        },
        // 聚会
        {
          id:4,
          partname: '聚会',
          imgsrc: require('@/../public/images/首页图片/聚会专区/聚会推荐.jpg'),
          content: [
            {
              id: 1,
              imgsrc: require('@/../public/images/首页图片/聚会专区/冻慕斯与焗芝士.png'),
              title: '冻慕斯与焗芝士',
              //商品简介
              persent: '马斯卡彭慕斯，叠加法国软芝士',
            },
            {
              id: 2,
              imgsrc: require('@/../public/images/首页图片/聚会专区/口味切块.png'),
              title: '6口味切块',
              persent: '多口味，精装小份',
            },
            {
              id: 3,
              imgsrc: require('@/../public/images/首页图片/聚会专区/黑白巧克力慕斯.png'),
              title: '黑白巧克力慕斯',
              persent: '白巧克力慕斯的甜，与黑巧克力酱的苦',
            },
            {
              id: 4,
              imgsrc: require('@/../public/images/首页图片/聚会专区/朗姆芝士.png'),
              title: '朗姆芝士',
              persent: '清香柠檬与乳酪夹心',
            },
          ],
        },
      ],
    }
  },
  methods:{
    // 锚点跳转
    getmyid(e){
      console.log(e.target.id)
      // 650px
      window.scrollTo(0, 670+(e.target.id-1)*700)
    }
    
  }
}
</script>

<style>
@media screen and (max-width: 1100px) {
  .body {
    width: 1100px;
  }
}
.myhome {
  width: 1200px;
  margin: 30px auto;
}
/* 专区标题 */
h3{
  margin-bottom: 20px;
}
/* 轮播图样式 */
/* 轮播图高度更改 */
.el-carousel .el-carousel__container {
  position: relative;
  height: 400px;
}
/* 轮播图位置调整 */
.lbt {
  width: 100%;
  margin: 0 auto;
  margin-top: 5px;
  position: relative;
}
.lbt img {
  width: 100%;
  position: absolute;
  top: -34%;
  left: 0;
}
/* 锚点导航 */
.search {
  display: flex;
  justify-content: space-between;
}
.search > span > img {
  margin: 20px 20px;
  /* border: 1px solid #ccc; */
  box-shadow: 4px 2px 8px rgb(231, 230, 230, 0.5);
}

/* 分类名称样式 */
/* 专区名称样式 */
.partsearch h3 {
  font-weight: 400;
  color: #61501b;
  text-align: left;
}
/* 专区商品样式 */
.partsearch .patrgoods {
  /* width: 25%; */
  display: flex;
  justify-content: space-between;
}
.partsearch .patrgoods img {
  margin: 10px 0;
  box-shadow: 4px 2px 8px rgb(231, 230, 230, 0.5);
  /* background-color: #f9f9f9; */
}
/* 专区商品标题 */
.partsearch .patrgoods .title {
  text-align: left;
  font-size: 15px;
  color: #614f1bd7;
}
/* 专区商品介绍 */
.partsearch .patrgoods .persent {
  line-height: 32px;
  text-align: left;
  font-size: 12px;
  color: #614f1b88;
}

</style>
