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
        <div style="text-align:center">
                <div class="input">
                    <el-input placeholder="请输入的内容" v-model="tableDataName"></el-input>
                    <el-button type="primary" icon="el-icon-search" @click="sous">搜索</el-button>
                </div>
                <el-table :data="arr.slice((currentPage-1)*pagesize,currentPage*pagesize)" border>
                    <el-table-column prop="shop_id" label="Order Number" width="170"></el-table-column>
                    <el-table-column prop="username" label="name"  width="170"></el-table-column>
                    <el-table-column prop="phone" label="tel" width="170"></el-table-column>
                    <el-table-column prop="address" label="address" width="170"></el-table-column>
                    <el-table-column prop="phone" label="total" width="170"></el-table-column>
                    <el-table-column prop="time" label="time" width="170"></el-table-column>
                    <el-table-column prop="products_id" label="products_id" width="170">
                        <el-table-column label="更多">
                            <template slot-scope="scope">
                            <!-- 嵌套信息可以在 Popover 中嵌套多种类型信息 -->
                                <el-popover  ref="popover4" placement="left" width="800" trigger="click">
                                    <el-table  stripe :data="moreArr1">  
                                        <el-table-column prop="product_id" label="Shopid"></el-table-column> 
                                        <el-table-column prop="brand" label="brand"> </el-table-column> 
                                        <el-table-column prop="size" label="size"> </el-table-column> 
                                        <el-table-column prop="pattern" label="pattern"> </el-table-column> 
                                        <el-table-column prop="rim" label="rim"> </el-table-column> 
                                        <el-table-column prop="aval" label="aval"> </el-table-column> 
                                        <el-table-column prop="price" label="price"> </el-table-column> 
                                    </el-table>
                                </el-popover>
                                <el-button @click="moreArr(scope.$index)" type="primary" round v-popover:popover4>
                                    more<i class="el-icon-caret-bottom el-icon--right"></i>
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table>
                <el-pagination background :current-page="currentPage" :page-size="pagesize" 
                    layout="total, sizes, prev, pager, next, jumper" :total="arr.length">
                </el-pagination>
            </div>
        <div>   
    </div>           
</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      arr: [],
      title: "",
      currentPage: 1, //从第几页开始
      pagesize: 11, //分页器  数字是几就代表页面出现几行
      filterTableDataEnd: [],
      tableDataName: "",
      moreArr1: [] //空数组
    };
  },
  mounted(){
    this.$axios
      .get(
        // "http://172.16.1.4:8888/luntai/php/index.php?C=Login&M=find_order_all"
        'http://172.16.94.1:8888/luntai/php/index.php?C=Login&M=find_order_all'
      )
      .then(res => {
        this.arr = res.data;
        console.log(this.arr);
      });
  },
  methods: {
    //搜索不能为空
    sous() {
      if (this.tableDataName == "") {
        this.$message.warning("查询条件不能为空！");
        return;
      }
    },
    //
    moreArr(index) {
      console.log(this.arr[6].products_id);
      //    JSON.parse将该字符串重新转换成数组。
      this.moreArr1 = JSON.parse(this.arr[index].products_id);
    }
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 170px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.input {
  width: 30%;
  display: flex;
  margin: 2rem 57rem;
}
.el-pagination {
  margin: 3rem 0;
}
.el-table {
  width: 70%;
  margin: 5rem 15rem;
}
</style>
