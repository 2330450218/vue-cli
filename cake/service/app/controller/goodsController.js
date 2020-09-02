const Controller = require('egg').Controller;
class goodsController extends Controller {
    async showviewGoods() {
        const { ctx } = this;
        ctx.body = await this.ctx.service.goodsService.showviewGoods(ctx.request.query);
    }
    async showAllGoods(){
        let pagenum = this.ctx.request.query.pagenum;
        let pagesize = this.ctx.request.query.pagesize;
        let c = await this.ctx.service.goodsService.showAllGoods(pagenum, pagesize);
        this.ctx.response.body = c;
    }
    async uploadGoods() {
        // let name = this.ctx.request.body.name;
        // let price = this.ctx.request.body.price;
        // let goods_url = this.ctx.request.body.goods_url;
        // let category = this.ctx.request.body.category;
        // let weight = this.ctx.request.body.weight;
        let newUrl = await this.ctx.service.goodsService.uploadGoods();
        this.ctx.response.body = newUrl;
    }
    async deleteGoods() {
        let id = this.ctx.request.query.id;
        let list = await this.ctx.service.goodsService.deleteGoods(id);
        this.ctx.response.body = list;
    }

    async updateGoods() {
        let id = this.ctx.request.body.id;
        let name = this.ctx.request.body.name;
        let price = this.ctx.request.body.price;
        let goods_url = this.ctx.request.body.goods_url;
        let category = this.ctx.request.body.category;
        let weight = this.ctx.request.body.weight;
        let list = await this.ctx.service.goodsService.updateGoods(id, name, price, goods_url, category, weight);
        this.ctx.response.body = list;
    }
}
module.exports = goodsController;