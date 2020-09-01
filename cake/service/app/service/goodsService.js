const Service = require('egg').Service;
const path = require("path");
const fs = require("fs");
class goodsService extends Service{
    async showAllGoods(){
        let sql = "select *  from goods";
        let list = await this.ctx.app.mysql.query(sql,[]);
        return list;
    }

    async uploadGoods() {
		const file = this.ctx.request.files[0];
		const toFileName = '/public/upload'+Date.now()+file.filename;
		/**
		 * 1,全局变量__dirname的值为"<路径>\项目名\app\service",即为当前文件所在的目录
		 * 2,path.dirname(...)的使用是去掉最后一级,
		 * 所以path.dirname(__dirname)后的值为"<路径>\项目名\app"
		 * 3, 最后得到to的值为 "<路径>\项目名\app/public/upload/保存时的文件名字" 
		 */  
		let to = path.dirname(__dirname)+toFileName;
		//file.filepath是上传的临时文件
		//把临时文件写入到文件to
		await fs.copyFileSync(file.filepath, to);
		//删除临时文件
		await fs.unlinkSync(file.filepath);
		
		//上传文件的网络访问 url
        const newUrl = "http://localhost:7001"+toFileName;
        let goods_id = this.ctx.request.body.goods_id;
        let name = this.ctx.request.body.name;
        let price = this.ctx.request.body.price;
        let category = this.ctx.request.body.category;
        let weight = this.ctx.request.body.weight;
		const sql = "insert into goods(goods_url,goods_id,name,price,category,weight)values(?,?,?,?,?,?)";
		let r = await this.ctx.app.mysql.query(sql,[newUrl,goods_id,name,price,category,weight]);
		if(r.affectedRows==1) {
			return newUrl;
		}else {
			return "http://localhost:7001/public/upload/1.png";
		}
    }

    async updateGoods(id,name,price){
        let sql = "update goods set price=?,name=?,category=?,goods_url,weight=?, where id=?";
        let list = await this.ctx.app.mysql.query(sql,[price,name,category,goods_url,weight,id]);
        return list.affectedRows;
    }
    
    async deleteGoods(id){
        let sql = "delete from goods where id=?";
        let list = await this.ctx.app.mysql.query(sql,[id])
        return list.affectedRows;
    }


}
module.exports = goodsService;