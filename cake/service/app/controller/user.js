'use strict';

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
        let birth = this.ctx.request.body.birth;
        let list = await this.ctx.service.user.register(name, pwd, birth);
        this.ctx.response.body = list;
    }

    async changePwd() {
		let name = this.ctx.request.body.name;
		let pwd = this.ctx.request.body.pwd;
		let list = await this.ctx.service.user.changePwd(name, pwd);
		this.ctx.response.body = list;
    }
    async showUsers(){
        let list=await this.ctx.service.user.showUsers();
        this.ctx.response.body=list;
    }
}

module.exports = UserController;