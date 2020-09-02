const Controller = require('egg').Controller;
class lableController extends Controller {
    async showLable() {
        let pagenum = this.ctx.request.query.pagenum;
        let pagesize = this.ctx.request.query.pagesize;
        let c = await this.ctx.service.lableService.showLable(pagenum, pagesize);
        this.ctx.response.body = c;
    }

    async showAlllable() {
        let list = await this.ctx.service.lableService.showAlllable();
        this.ctx.response.body = list;
    }

    async addLable() {
        let Goods_title = this.ctx.request.body.Goods_title;
        let lable = this.ctx.request.body.lable;
        let list = await this.ctx.service.lableService.addLable(Goods_title, lable);
        this.ctx.response.body = list;
    }
    async deleteLable() {
        let id = this.ctx.request.query.id;
        // let lable = this.ctx.request.query.lable;
        let list = await this.ctx.service.lableService.deleteLable(id);
        this.ctx.response.body = list;
    }

    async updateLable() {
        let Goods_title = this.ctx.request.body.Goods_title;
        let id= this.ctx.request.body.id;
        let lable = this.ctx.request.body.lable;
        let list = await this.ctx.service.lableService.updateLable(Goods_title,lable,id);
        this.ctx.response.body = list;
    }
}
module.exports = lableController;