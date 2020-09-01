module.exports = app => {
    const {
        router,
        controller
    } = app;

// 登录注册
    // 登录
    router.post('/login', controller.user.login);
    // 注册
    router.post('/register', controller.user.register);
    // 根据name修改密码
    router.post('/changePwd', controller.user.changePwd);

// 专区锚点
    // 获取锚点图片
    router.post('/getspecialArea', controller.specialArea.getspecialArea);
    // 展示锚点图片
    router.get('/showspecialArea', controller.specialArea.showspecialArea);
    // 删除锚点图片
    router.get('/deletespecialArea', controller.specialArea.deletespecialArea);
}