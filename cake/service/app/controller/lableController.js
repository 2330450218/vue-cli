const Controller = require('egg').Controller;
class lableController extends Controller{
    async showLable(){
        let Goods_title = this.ctx.request.query.Goods_title;
        let lable = this.ctx.request.query.lable;
        let c = await this.ctx.service.lableService.showLable(Goods_title,lable);
        this.ctx.response.body = c;
    }
    async addLable(){
        let Goods_title = this.ctx.request.body.Goods_title;
        let lable = this.ctx.request.body.lable;
        let list = await this.ctx.service.lableService.addLable(Goods_title,lable);
        this.ctx.response.body = list;
    }
    async deleteLable(){
        let Goods_title = this.ctx.request.query.Goods_title;
        let lable = this.ctx.request.query.lable;
        let list = await this.ctx.service.lableService.deleteLable(Goods_title,lable);
        this.ctx.response.body = list;
    }
    
    async updateLable(){
        let Goods_title = this.ctx.request.body.Goods_title;
        let lable = this.ctx.request.body.lable;
        let list = await this.ctx.service.lableService.updateLable(Goods_title,lable);
        this.ctx.response.body = list;
    }
}
module.exports = lableController;