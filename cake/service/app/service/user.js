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
    async register(name, pwd, birth) {
        let sql = "insert into user(name,pwd,birth) values (?,?,?)";
        let list = await this.ctx.app.mysql.query(sql, [name, pwd, birth]);
        return list.affectedRows;
        //name为名字，pwd为账号，birth为生日
    }
    //修改密码
    async changePwd(name, pwd) {
        let sql = "update user set pwd = ? where name = ?";
        let list = await this.ctx.app.mysql.query(sql, [pwd, name]);
        return list.affectedRows;
    }                                                                                                                                                                                                                                                                                                      
}

module.exports = UserService;