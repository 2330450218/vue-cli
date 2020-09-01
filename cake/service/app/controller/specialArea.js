const Controller = require('egg').Controller;
class specialAreaController extends Controller {
    // 上传锚点图片
    async getspecialArea() {
        let newUrl = await this.ctx.service.specialArea.getspecialArea();
        this.ctx.response.body = newUrl;
    }
    // 展示锚点图片
    async showspecialArea() {
        let list = await this.ctx.service.specialArea.showspecialArea();
        this.ctx.response.body = list;
    }
    //删除锚点
    async deletespecialArea() {
        let id = this.ctx.request.query.id
        let list = await this.ctx.service.specialArea.deletespecialArea(id);
        this.ctx.response.body = list;
    }
};

module.exports = specialAreaController