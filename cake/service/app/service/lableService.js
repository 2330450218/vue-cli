const Service = require('egg').Service;
class labelService extends Service{
    async showLable(Goods_title,lable){
        let sql = "select lable  from lable where Goods_title=?";
        let list = await this.ctx.app.mysql.query(sql,[Goods_title,lable]);
        return list;
    }

    async addLable (Goods_title,lable){
        let sql = "insert into lable(Goods_title,lable)values(?,?)";
        let list = await this.ctx.app.mysql.query(sql,[Goods_title,lable]);
        return list;
    }

    async updateLable(Goods_title,lable){
        let sql = "update lable set lable=? where Goods_title=?";
        let list = await this.ctx.app.mysql.query(sql,[name,lable]);
        return list.affectedRows;
    }
    
    async deleteLable(Goods_title,lable){
        let sql = "delete from lable where Goods_title=?";
        let list = await this.ctx.app.mysql.query(sql,[Goods_title,lable])
        return list.affectedRows;
    }


}
module.exports = labelService;