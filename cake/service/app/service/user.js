const Service = require('egg').Service;

class UserService extends Service {

    // 登录
    async login(user) {
        let sql = `select *  from user where phone='${user.phonenumber}'`;
        let result = await this.ctx.app.mysql.query(sql, user);
        // console.log(result)
        // return list;
        // phonenumber为前端登录账号
        // password为前端登录密码

        if (result.length < 1) {
            return {
                status: 1,
                msg: "用户不存在"
            }
        } else {

            if (user.password == result[0].pwd) {
                return {
                    status: 0,
                    msg: "恭喜您，登陆成功"
                }
            } else {
                return {
                    status: 1,
                    msg: "密码错误"
                }
            }

        }
    }
    // 注册
    async register(name,pwd,address,phone,birth,isroot) {
        let sql = "insert into user(name,pwd,address,phone,birth,isroot) values (?,?,?,?,?,?)";
        let list = await this.ctx.app.mysql.query(sql, [name,pwd,address,phone,birth,isroot]);
        return list.affectedRows;
        //name为名字，pwd为账号，birth为生日
    }
    //修改密码
    async changePwd(name, pwd) {
        let sql = "update user set pwd = ? where name = ?";
        let list = await this.ctx.app.mysql.query(sql, [pwd, name]);
        return list.affectedRows;
    }
    //后台展示用户信息
    async showUsers(pagenum,pagesize){
        let sql= `select  id,name,address,phone,isroot,date_format(birth,'%Y-%m-%d') as 'birth',
        (select count(1) from user where isroot='0') as cnt from user where isroot='0' 
        limit ${pagesize*(pagenum-1)},${pagesize}`
        let list=await this.ctx.app.mysql.query(sql,[pagenum,pagesize])
        return list
    }
    //后台展示前端用户信息
    async showviewUsers(){
		let sql = "select *,(select count(1) from user where isroot='0') as count from user where isroot='0' ";
		let list = await this.ctx.app.mysql.query(sql,[]);
		return list;
	}
    //后台 更新用户，管理员信息
    async updateUser(name,address,phone,birth,isroot,id){
        let sql="update user set name=?,address=?,phone=?,birth=?,isroot=? where id=?"
        let list=await this.ctx.app.mysql.query(sql,[name,address,phone,birth,isroot,id])
        return list
    }   
                                                                                                                                                                                                                                                                                                 
    //后台展示前端管理员界面
    async showviewAdministrators() {
        let sql = "select *,(select count(1) from user where isroot='1') as count from user where isroot='1'" ;
        let list = await this.ctx.app.mysql.query(sql, [])
        return list;
    }

    //后台删除用户信息
    async deleteUsers(id){
        let sql = "delete from user where id=?";
        let list = await this.ctx.app.mysql.query(sql,id);
        return list.affectedRows;
    }
    //后台展示管理员信息
     async showAdministrators(pagenum, pagesize) {
        let sql = `select  id,name,address,phone,isroot,date_format(birth,'%Y-%m-%d') as 'birth',
        (select count(1) from user where isroot='1') as count from user where isroot='1' 
        limit ${pagesize*(pagenum-1)},${pagesize}`
        // let sql = "select * from user where isroot='1'"
        let list = await this.ctx.app.mysql.query(sql, [pagenum, pagesize])
        return list
    }
}

module.exports = UserService;