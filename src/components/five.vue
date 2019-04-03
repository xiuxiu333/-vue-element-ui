<template>
  <div>
    <div class="s">
            <div class="st">
                    <p>Search The Product</p>
            </div> 
            <div class="ss">
                <div class="set">
                    <span class="el-icon-rank"></span>&nbsp;
                    <p>Stats</p>
                </div>
                <div class="set">
                    <span class="el-icon-info"></span>&nbsp;
                    <p>5 Notifications</p>&nbsp;
                    <span class="el-icon-caret-bottom"></span>
                </div>
                <div class="set">
                    <span class="el-icon-setting"></span>&nbsp;
                    <p>Setting</p>
                </div>
            </div>
        </div>

        <div class="search">      
            <el-input placeholder="请输入搜索内容" v-model="input" clearable></el-input>
            <el-button type="primary" @click="sous">搜索</el-button>
        </div>
        <!--  -->
        <el-table height="500" :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)" border>
            <el-table-column prop="product_id" label="id" align="center"></el-table-column>
            <el-table-column prop="brand" label="商品" align="center"></el-table-column>
            <el-table-column prop="size" label="尺寸" align="center"></el-table-column>
            <el-table-column prop="pattern" label="样式" align="center"></el-table-column>
            <el-table-column prop="position" label="位置" align="center"></el-table-column>
            <el-table-column prop="price" label="价格" align="center"></el-table-column>
            <el-table-column prop="tread_depth" label="tread" align="center"></el-table-column>
            <el-table-column prop="ply" label="ply" align="center"></el-table-column>
            <el-table-column prop="load_index" label="load" align="center" ></el-table-column>
            <el-table-column prop="speed" label="速率" align="center"></el-table-column>
            <el-table-column prop="rim" label="rim" align="center"></el-table-column>
            <el-table-column prop="aval" label="aval" align="center"></el-table-column>
            <el-table-column prop="qty" label="qty" align="center"></el-table-column>
            <el-table-column prop="code" label="code" align="center"></el-table-column>
            <el-table-column align="center" label="操作" width="150px">
            <template slot-scope="scope">
            <el-button
                size="small"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            </template>
            </el-table-column>
                <el-table-column label="删除"> 
                    <template slot-scope="scope">
                        <el-button  @click.native.prevent="deleteRow(scope.$index, arr)" type="danger">
                                Delete
                        </el-button>
                    </template>
            </el-table-column> 
        </el-table>
        <!-- 分页 -->
        <el-table @size-change="handleSizeChange" @current-change="handleCurrentChange" background 
            :current-page="currentPage" :page-sizes="[7,20,50,100]" :page-size="pagesize" 
            layout="total,sizes,prev, pager, next,jumper" align="center" :total="list.length">
        </el-table>

        <box v-if="flag" :dates='date' :msg="flag" v-on:set="get"></box>

  </div>
</template>
<script>
import axios from "axios";
import box from "./box"; //引入box文件
export default {
  data() {
    return {
      arr: [], //空数组
      input: "", //搜索框
      currentPage: 1, //从第一页开始
      pagesize: 7, //一页7行
      flag: false,
      date: {}
    };
  },
  components: {
    box
  },
  methods: {
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    // 页数
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      // this.list = this.list.slice((current-1)*7,(current-1)*7+7)
    },
    // 编辑
    handleEdit: function(index, row) {
      // console.log(index,row)
      this.date = row; //删除当前的一行内容
      this.flag = true; //点击编辑
    },
    deleteRow(index, rows) {
      //删除行
      rows.splice(index, 1);
    },
    //让data 里的数据可以提交出去
    get(data) {
      this.flag = false;
    },
    //搜索为空不能搜索
    // sous() {
    //   if (this.input == "") {
    //     this.$message.warning("查询条件不能为空！");
    //     return;
    //   }
    // }
  },
  computed: {
    //  遍历list搜索
    list: function() {
      var brr = [];
      for (var i = 0; i < this.arr.length; i++) {
        if (this.arr[i].code.search(this.input) != -1) {
          brr.push(this.arr[i]); //把内容push到brr里
        }
      }
      return brr; //返回到brr里
    }
  },
  //获取数据
  created() {//http://172.16.94.1:8888/luntai/php/index.php?C=Login&M=product_update
    axios.get("http://172.16.94.1:8888/luntai/php/index.php?C=Login&M=product_find")  
      .then(res => {
        this.arr = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
.s {
  color: #9a9a9a;
  width: 100%;
  height: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dddddd;
}
.st {
  margin-left: 3%;
  color: #777777;
  font-size: 20px;
  font-weight: bold;
}
.ss {
  width: 35%;
  display: flex;
  justify-content: flex-end;
}
.set {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
}
.search {
  width: 100%;
  height: 10rem;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 25rem;
}
.el-input {
  width: 30%;
}
.el-table {
  width: 97%;
  margin: 0 1.5rem;
}
.el- {
  margin: 5rem 0rem;
}
</style>