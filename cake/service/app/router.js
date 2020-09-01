module.exports=app=>{
    const {router,controller}=app;
    //轮播图
    router.post("/uploadSwiper",controller.swiperController.uploadSwiper)
    router.get("/showAllSwiper",controller.swiperController.showAllSwiper)
    router.get("/deleteSwiper",controller.swiperController.deleteSwiper)

    //标签
    router.get("/showLable",controller.lableController.showLable)
    router.get("/deleteLable",controller.lableController.deleteLable)
    router.post("/addLable",controller.lableController.addLable)
    router.post("/updateLable",controller.lableController.updateLable)

    //商品
    router.get("/showAllGoods",controller.goodsController.showAllGoods)
    router.get("/deleteGoods",controller.goodsController.deleteGoods)
    router.post("/updateGoods",controller.goodsController.updateGoods)
    router.post("/uploadGoods",controller.goodsController.uploadGoods)

}
