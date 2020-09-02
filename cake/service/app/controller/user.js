
const Controller = require('egg').Controller;

class UserController extends Controller {
    async login() {
        const {
            ctx
        } = this;

        ctx.body = await this.ctx.service.user.login(ctx.request.body);


    }
    async register() {
        let name = this.ctx.request.body.name;
        let pwd = this.ctx.request.body.pwd;
        let address = this.ctx.request.body.address;
        let phone = this.ctx.request.body.phone;
        let birth = this.ctx.request.body.birth;
        let isroot = this.ctx.request.body.isroot;
        let list = await this.ctx.service.user.register(name,pwd,address,phone,birth,isroot);
        this.ctx.response.body = list;
    }

    async changePwd() {
		let name = this.ctx.request.body.name;
		let pwd = this.ctx.request.body.pwd;
		let list = await this.ctx.service.user.changePwd(name, pwd);
		this.ctx.response.body = list;
    }
   
    async showUsers() {
        let pagenum = this.ctx.request.query.pagenum;
        let pagesize = this.ctx.request.query.pagesize;
        let list = await this.ctx.service.user.showUsers(pagenum, pagesize);
        this.ctx.response.body = list;
    }

   
     async showviewUsers(){
        let list = await this.ctx.service.user.showviewUsers();
        this.ctx.response.body = list;
     }

    
    async showAdministrators() {
        let pagenum = this.ctx.request.query.pagenum;
        let pagesize = this.ctx.request.query.pagesize;
        let list = await this.ctx.service.user.showAdministrators(pagenum, pagesize);
        this.ctx.response.body = list;
    }
    
    async showviewAdministrators(){
        let list = await this.ctx.service.user.showviewAdministrators();
        this.ctx.response.body = list;
    }
    //删除后用户信息
    async deleteUsers(){
        let id = this.ctx.request.query.id;
        let list = await this.ctx.service.user.deleteUsers(id);
        this.ctx.response.body = list;
    }
    //修改用户信息
    async updateUser(){
        let id=this.ctx.request.body.id;
        let name=this.ctx.request.body.name;
        let phone=this.ctx.request.body.phone;
        let address=this.ctx.request.body.address;
        let birth=this.ctx.request.body.birth;
        let isroot=this.ctx.request.body.isroot;
        let list=await this.ctx.service.user.updateUser(name,address,phone,birth,isroot,id)
        this.ctx.response.body = list;
    }
}

module.exports = UserController;