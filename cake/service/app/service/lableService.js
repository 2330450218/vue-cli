const Service = require('egg').Service;
class labelService extends Service{
    //查询后端所以lable
    async showLable(Goods_title,lable){
        let sql = "select lable  from lable where Goods_title=?";
        let list = await this.ctx.app.mysql.query(sql,[Goods_title,lable]);
        return list;
    }

    // 查询前端所有lable
    async showAlllable() {
        let sql = "select  * from lable";
        let list = await this.ctx.app.mysql.query(sql);
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
    
    async deleteLable(id){
        let sql = "delete from lable where id=?";
        let list = await this.ctx.app.mysql.query(sql,id)
        return list.affectedRows;
    }
    


}
module.exports = labelService;