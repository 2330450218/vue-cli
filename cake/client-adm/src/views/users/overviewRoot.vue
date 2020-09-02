<template>
<!-- 管理员用户管理--需要进一步修改 -->
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      border
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column fixed prop="date" label="id" width="150"></el-table-column>
      <el-table-column prop="name" label="用户名" width="120"></el-table-column>
      <el-table-column prop="phone" label="手机号码" width="120"></el-table-column>
      <el-table-column prop="birth" label="生日" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" width="300"></el-table-column>
      <el-table-column align="center" width="300">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="deleteUser(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
        style="margin:10px 20px;width:80%;float:left"
      ></el-pagination>
      <el-button type="primary" plain style="float:left;margin:10px auto;" @click="toaddPage">添加新的记录</el-button>
    </div>
    <!-- 模态弹窗 -->
    <div v-if="ischecked" class="modal" @click.self="returnPage">
      <div class="addmodal">
        <div class="addform">
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="用户名">
              <el-input v-model="sizeForm.name" id="name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="sizeForm.pwd" id="password"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
              <el-input v-model="sizeForm.phone" id="phone"></el-input>
            </el-form-item>
            <el-form-item label="生日">
              <el-input v-model="sizeForm.birth" id="birth"></el-input>
            </el-form-item>
            <el-form-item label="地址">
              <el-input v-model="sizeForm.address" id="address"></el-input>
            </el-form-item>
            <el-form-item label="isroot">
              <el-input v-model="sizeForm.isroot" id="isroot"></el-input>
            </el-form-item>
          </el-form>
          <div class="btn">
            <el-button type="primary" @click="addroot">确认添加</el-button>
            <el-button type="primary" @click="toreset">重置</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagenum: "1",
      pagesize: "5",
      ischecked: false,
      search: "",
      sizeForm: {
        name: "",
        phone: "",
        address: "",
        birth: "",
        pwd: "",
      },
      tableData: [
       
      ],
       currentPage4: 1,
    };
  },
  created(){
     this.showAdministrators()
  },
  methods: {
     //展示管理员
    showAdministrators() {
      this.$http
        .get("http://127.0.0.1:7001/showAdministrators", {
          params:{
            pagenum:this.pagenum,
            pagesize:this.pagesize
          }
        })
        .then((r) => {
          // console.log(r.data);
          this.tableData = r.data;
        })
        .catch();
    },

    //模态弹窗事件
    toaddPage() {
      this.ischecked = true;
    },
    //模态弹窗返回事件
    returnPage() {
      this.ischecked = false;
    },
    //重置模态窗信息
    toreset(){
      this.sizeForm.name="";
      this.sizeForm.phone="";
      this.sizeForm.address="";
      this.sizeForm.birth="";
      this.sizeForm.pwd="";
    },

    //添加管理员
    addroot(){
      let name = document.getElementById("name").value;
      let password = document.getElementById("password").value;
      let phone = document.getElementById("phone").value;
      let address = document.getElementById("address").value;
      let birth = document.getElementById("birth").value;
      let isroot = document.getElementById("isroot").value;
      console.log(name,password,phone)
      this.$http.post("http://127.0.0.1:7001/register",{
            name:name,
            password:password,
            phone:phone,
            address:address,
            birth:birth,
            isroot:isroot
      }).then(res=>{
          console.log('数据库添加成功')
          this.$router.go(0)
      }).catch(err=>{

      })
    },

    //删除用户
      deleteUser(row){
      var id = row.id;
      console.log(id)
      this.$http.get("http://127.0.0.1:7001/deleteUsers",{
        params:{
          id:id
        }
        }).then(res=>{
          console.log("数据库删除成功")
          this.$router.go(0)
        }).catch(err=>{

        })
    },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(30, 30, 30, 0.2);
  top: 0;
  left: 0;
  z-index: 99;
}
.addmodal {
  width: 400px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -250px;
  margin-left: -250px;
  background-color: white;
}
.addform {
  width: 300px;
  margin: 20px auto;
}
.btn {
  width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>