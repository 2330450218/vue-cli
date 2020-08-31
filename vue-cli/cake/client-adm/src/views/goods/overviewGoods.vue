<template>
<!-- 商品信息管理--需要进一步修改 -->
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      border
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column fixed prop="id" label="id" width="150"></el-table-column>
      <el-table-column prop="name" label="名称" width="120"></el-table-column>
      <el-table-column prop="url" label="资源地址" width="120"></el-table-column>
      <el-table-column prop="price" label="价格" width="120"></el-table-column>
      <el-table-column prop="category" label="介绍" width="300"></el-table-column>
      <el-table-column prop="weight" label="分量" width="120"></el-table-column>
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
        :page-sizes="[5, 10, 15, 20]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
        style="margin:10px 20px;width:80%;float:left"
      ></el-pagination>
      <el-button type="primary" plain style="float:left;margin:10px auto;" @click="toaddPage">添加新的记录</el-button>
    </div>
    <div v-if="ischecked" class="modal" @click.self="returnPage">
      <div class="addmodal">
        <div class="addform">
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="名称">
              <el-input v-model="sizeForm.name"></el-input>
            </el-form-item>
            <el-form-item label="类别">
              <el-input v-model="sizeForm.classify"></el-input>
            </el-form-item>
            <el-form-item label="价格">
              <el-input v-model="sizeForm.price"></el-input>
            </el-form-item>
            <el-form-item label="介绍">
              <el-input v-model="sizeForm.category"></el-input>
            </el-form-item>
            <el-form-item label="分量">
              <el-input v-model="sizeForm.weight"></el-input>
            </el-form-item>
            <el-form-item label="图片地址">
              <el-input v-model="sizeForm.url"></el-input>
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
      ischecked: "",
      search: "",
      sizeForm: {
        name: "",
        classify: "",
        weight: "",
        price: "",
        category: "",
        url: "",
      },
      tableData: [
        // {
        //   date: "2016-05-03",
        //   name: "王小虎",
        //   province: "上海",
        //   city: "普陀区",
        //   address: "上海市普陀区金沙江路 1518 弄",
        //   zip: 200333,
        // },
        {
          id: "2016-05-02",
          name: "小面包",
          url: "图片地址",
          price: "价格",
          category: " 介绍",
          weight: "重量",
        },

        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },
  methods: {
    //模态弹窗事件
    toaddPage() {
      this.ischecked = true;
    },
    //模态弹窗返回事件
    returnPage() {
      this.ischecked = false;
    },
    //重置模态窗信息
    toreset() {
      this.sizeForm.name = "";
      this.sizeForm.classify = "";
      this.sizeForm.weight = "";
      this.sizeForm.price = "";
      this.sizeForm.category = "";
      this.sizeForm.url=""
    },
    //添加管理员
    addroot() {
      console.log("添加成功");
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