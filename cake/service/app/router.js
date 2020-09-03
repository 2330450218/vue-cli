module.exports=app=>{
    const {router,controller}=app;
    //轮播图
    //上传轮播图
    router.post("/uploadSwiper",controller.swiperController.uploadSwiper)
    //展示后台轮播图
    router.get("/showAllSwiper",controller.swiperController.showAllSwiper)
    router.get("/deleteSwiper",controller.swiperController.deleteSwiper)
    //展示前端轮播图
    router.get("/showviewSwiper",controller.swiperController.showviewSwiper)

    //标签
    //查询后端所有lable
    router.get("/showLable",controller.lableController.showLable)
    router.get("/deleteLable",controller.lableController.deleteLable)
    router.post("/addLable",controller.lableController.addLable)
    router.post("/updateLable",controller.lableController.updateLable)
    //查询前端所有lable
    router.get("/showAlllable", controller.lableController.showAlllable)

    //商品
    //展示前端所有商品
    router.get("/showviewGoods",controller.goodsController.showviewGoods)
    //展示后端所有商品
    router.get("/showAllGoods",controller.goodsController.showAllGoods)
    router.get("/deleteGoods",controller.goodsController.deleteGoods)
    //修改商品信息
    router.post("/updateGoods",controller.goodsController.updateGoods)
    //上传商品信息
    router.post("/uploadGoods",controller.goodsController.uploadGoods)

    // 登录注册
    // 登录
    router.post('/login', controller.user.login);
    // 注册后端
    router.post('/register', controller.user.register);
    // 注册前端
    router.post('/registerQian', controller.user.registerQian);

    // 根据name修改密码
    router.post('/changePwd', controller.user.changePwd);
    // 展示后端用户界面
    router.get('/showUsers', controller.user.showUsers);
    //展示前端用户界面
    router.get('/showviewUsers', controller.user.showviewUsers)
    // 展示后端管理员界面
    router.get('/showAdministrators', controller.user.showAdministrators);
    //展示前端管理员界面
    router.get('/showviewAdministrators', controller.user.showviewAdministrators);
    //后台修改用户信息
    router.post('/updateUser', controller.user.updateUser);
    //删除用户信息
    router.get("/deleteUsers",controller.user.deleteUsers);
    // 专区锚点
    // 获取锚点图片
    router.post('/getspecialArea', controller.specialArea.getspecialArea);
    // 展示后端锚点图片
    router.get('/showspecialArea', controller.specialArea.showspecialArea);
    // 删除锚点图片
    router.get('/deletespecialArea', controller.specialArea.deletespecialArea);
    //展示前端锚图片
    router.get('/showviewspecialArea', controller.specialArea.showviewspecialArea);


    // 订单
    // 后台展示订单信息
    router.get("/showorder",controller.order.showOrder)
    //删除订单
    router.get("/deleteorder",controller.order.deleteOrder)
}
