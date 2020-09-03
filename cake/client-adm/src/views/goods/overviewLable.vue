<template>
<!-- 商品标签管理--需要进一步修改 -->
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      border
      style="width: 100%"
      ref="multipleTable"
      max-height="403"
      @selection-change="handleSelectionChange"
      @cell-dblclick="changeEditable"
      :row-key="tableId"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column fixed prop="id" label="id" width="55" id="lable_id"></el-table-column>
      
      <el-table-column label="标签名字" width="120">
        <!-- prop="lable" -->
        <template slot-scope="scope">
          <div :contenteditable="iseditable"  @blur="loseBlur($event,scope.row,bid='1')"  >{{scope.row.lable}}</div>
        </template>
      </el-table-column>
      <el-table-column  label="对应商品id" width="120" >
        <!-- prop="Goods_title"  -->
        <template slot-scope="scope">
          <div :contenteditable="iseditable"   @blur="loseBlur($event,scope.row,bid='2')">{{scope.row.Goods_title}}</div>
        </template>
      </el-table-column>
      <el-table-column align="center" width="300" >
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button @click="updateLable(scope.row)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small" @click="deleteLable(scope.row,scope.$index)">删除</el-button>
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
        :total="Number(totallength)"
        style="margin:10px 20px;width:80%;float:left"
      ></el-pagination>
      <el-button type="primary" plain style="float:left;margin:10px auto;" @click="toaddPage">添加新的记录</el-button>
    </div>
    <!-- 模态弹窗 -->
    <div v-if="ischecked" class="modal" @click.self="returnPage">
      <div class="addmodal">
        <div class="addform">
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="名称">
              <el-input v-model="sizeForm.name" id="name" ></el-input>
            </el-form-item>
            <el-form-item label="类别">
              <el-input v-model="sizeForm.classify" id="Goods_title" ></el-input>
            </el-form-item>
          </el-form>
          <div class="btn">
            <el-button type="primary" @click="addLable">确认添加</el-button>
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
      iseditable: "false",
      //页码
      pagenum: "1",
      //条数
      pagesize: "5",
      // 数据获取长度
      totallength: "",
     
      multipleSelection: [],
      ischecked: false,
      search: "",
      sizeForm: {
        name: "",
        Goods_title:""
      },
      tableData: [
      ],
      
      currentPage4: 1,
    };
  },
  methods: {
     //获取当前行唯一id
    tableId(row){
      return row.individualId
    },
      // 展示用户
    showLable() {
      this.$http
        .get("http://127.0.0.1:7001/showLable", {
          params:{
            pagenum:this.pagenum,
            pagesize:this.pagesize
          }
        })
        .then((r) => {
          console.log(r.data);
          this.tableData = r.data;
          this.totallength=r.data[0].count
        })
        .catch();
    },
     //点击可编辑
    changeEditable() {
      console.log(12);
      this.iseditable = this.iseditable == "false" ? "true" : "false";
    },
    //失去焦点
    loseBlur(event,rows,bid){
      switch(bid){
        case '1': rows.lable=event.target.innerHTML;break;
        case '2': rows.Goods_title=event.target.innerHTML;break;
       
      }
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
      this.sizeForm.classify="";
    },
    //添加标签
    addLable(){
      let name = document.getElementById("name").value;
      let Goods_title = document.getElementById("Goods_title").value;
      this.$http.post("http://127.0.0.1:7001/addLable",{
          lable:name,
          Goods_title:Goods_title
      }).then(res=>{
          console.log('数据库添加成功')
      }).catch(err=>{

      })
    },
    // 更新标签
    updateLable(rows){
      this.$http.post("/updateLable",{
        id:rows.id,
        lable:rows.lable,
        Goods_title:rows.Goods_title
      }).then().catch()
    },
    //删除标签
    deleteLable(row,index){
      var id = row.id;
      this.$http.get("http://127.0.0.1:7001/deleteLable",{
        params:{
          id:id
        }
        }).then(res=>{
           // 删除当前行
          this.tableData.splice(index,1)
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
      this.pagesize = val;
      this.showLable()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pagenum = val;
      this.showLable()
    },
  },
  created(){
      this.showLable()
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