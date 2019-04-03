<template>
  <div class="box">
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
    <div class="box_form">
      <el-form  label-width="20%" :model="inputList" style="text-align:left;">
        <el-form-item label="商标">
          <el-input v-model="inputList.brand" clearable></el-input>
        </el-form-item>
        <el-form-item label="尺寸">
          <el-input v-model="inputList.size" clearable></el-input>
        </el-form-item>
        <el-form-item label="样式">
          <el-input v-model="inputList.pattern " clearable></el-input>
        </el-form-item>
        <el-form-item label="厚度">
          <el-input v-model="inputList.ply" clearable></el-input>
        </el-form-item>
        <el-form-item label="指标">
          <el-input v-model="inputList.load_index" clearable></el-input>
        </el-form-item>
         <el-form-item label="速率">
          <el-input v-model="inputList.speed" clearable></el-input>
        </el-form-item>
        <el-form-item label="胎深">
          <el-input v-model="inputList.tread_depth" clearable></el-input>
        </el-form-item>
          <el-form-item label="价格">
          <el-input v-model="inputList.price" clearable></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="inputList.qty"  clearable></el-input>
        </el-form-item>
       <el-form-item label="位置">
          <el-input v-model="inputList.position" clearable></el-input>
        </el-form-item>
        <el-form-item label="轮辋">
          <el-input v-model="inputList.rim" clearable></el-input>
        </el-form-item>
         <el-form-item label="担保">
          <el-input v-model="inputList.aval" clearable></el-input>
        </el-form-item>
         <el-form-item label="编码">
          <el-input v-model="inputList.code" clearable></el-input>
        </el-form-item>
       <div class="caozuo">
          <el-button type="primary" round @click="submit">提交</el-button>
          <el-button type="danger" round @click="reset">重置</el-button>
       </div>
       
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputList: {
        brand: "",
        size: "",
        pattern: "",
        ply: "",
        load_index: "",
        speed: "",
        tread_depth: "",
        price: "",
        qty: "",
        position: "",
        rim: "",
        aval: "",
        code: ""
      }
    };
  },
  methods: {
    // 重置
    submit() {
      // var grourl ="http://172.16.1.4:8888/luntai/php/index.php?C=Login&M=product_add";
      var jiekou ="http://172.16.94.1:8888/luntai/php/index.php?C=Login&M=product_find";
      var qs = require("qs");
      var isSubmit = false;
      for (var item in this.inputList) {
        if (this.inputList[item].length == 0) {
          isSubmit = true;
        }
      }
      if (isSubmit) {
        alert("不能提交空");
      } else {
        // 使用$axios 的 post向后台请求
        this.$axios
          .post(jiekou, qs.stringify(this.inputList), {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        // 提交完成后清空
        this.inputList = {
          brand: "",
          size: "",
          pattern: "",
          ply: "",
          load_index: "",
          speed: "",
          tread_depth: "",
          price: "",
          qty: "",
          position: "",
          rim: "",
          aval: "",
          code: ""
        };
      }
    },
    // 重置
    reset() {
      this.inputList = {
        brand: "",
        size: "",
        pattern: "",
        ply: "",
        load_index: "",
        speed: "",
        tread_depth: "",
        price: "",
        qty: "",
        position: "",
        rim: "",
        aval: "",
        code: ""
      };
    }
  }
};
</script>
<style scoped>
.box_form {
  width: 70%;
  margin: 2rem 6rem;
}
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
h3 {
  font-size: 18px;
  margin: 30px;
}
h5 {
  color: #999;
  font-size: 14px;
  margin: 0 0 30px 30px;
}
.caozuo {
  text-align: center;
}
</style>