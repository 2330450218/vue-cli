<template>
<!-- 用户信息管理---需要进一步修改 -->
  <div>
    <el-table
      :data="users.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      border
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column fixed prop="id" label="id" width="150"></el-table-column>
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
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5, 10]"
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
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini" >
            <el-form-item label="用户名">
              <el-input v-model="sizeForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="sizeForm.pwd"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
              <el-input v-model="sizeForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="生日">
              <el-input v-model="sizeForm.birth"></el-input>
            </el-form-item>
            <el-form-item label="地址">
              <el-input v-model="sizeForm.address"></el-input>
            </el-form-item>
          </el-form>
          <div class="btn">
            <el-button type="primary" @click="adduser">确认添加</el-button>
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
      users:[],
      ischecked: false,
      search: "",
      sizeForm: {
        name: "",
        phone: "",
        address: "",
        birth: "",
        pwd: "",
      },
      currentPage4: 1,
    };
  },
  created(){
    this.$http.get("/showUsers",{
    }).then(r=>{
      console.log(r.data);
      this.users=r.data
    }).catch()
  },
  methods: {
     //模态弹窗事件
    toaddPage(){
      this.ischecked=true
    },
    //模态弹窗返回事件
    returnPage(){
      this.ischecked=false
    },
     //重置模态窗信息
    toreset(){
      this.sizeForm.name="";
      this.sizeForm.phone="";
      this.sizeForm.address="";
      this.sizeForm.birth="";
      this.sizeForm.pwd="";
    },
    //添加用户
    adduser(){
      // this.$http.post
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
.addform{
  width: 300px;
  margin: 20px auto;
  
}
</style>