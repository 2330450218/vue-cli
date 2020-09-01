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

    // 登录注册
    // 登录
    router.post('/login', controller.user.login);
    // 注册
    router.post('/register', controller.user.register);
    // 根据name修改密码
    router.post('/changePwd', controller.user.changePwd);
    router.get('/showUsers', controller.user.showUsers);

    // 专区锚点
    // 获取锚点图片
    router.post('/getspecialArea', controller.specialArea.getspecialArea);
    // 展示锚点图片
    router.get('/showspecialArea', controller.specialArea.showspecialArea);
    // 删除锚点图片
    router.get('/deletespecialArea', controller.specialArea.deletespecialArea);

}
