<template>
  <div class="box">
      <el-form>
        <el-form-item>
            <el-input v-model="dates.product_id">
                <template slot="prepend">id</template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="dates.brand">
                <template slot="prepend">brand</template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="dates.size">
                <template slot="prepend">size</template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="dates.pattern">
                <template slot="prepend">pattern</template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="dates.position">
                <template slot="prepend">position</template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input  v-model="dates.price">
                <template slot="prepend">price</template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="dates.tread_depth">
                <template slot="prepend">tread_depth</template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input  v-model="dates.ply">
                <template slot="prepend">ply</template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input  v-model="dates.load_index">
                <template slot="prepend">load_index</template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="dates.speed">
                <template slot="prepend">speed</template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input  v-model="dates.rim">
                <template slot="prepend">rim</template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input  v-model="dates.aval">
                <template slot="prepend">aval</template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input  v-model="dates.qty">
                <template slot="prepend">qty</template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input  v-model="dates.code">
                <template slot="prepend">code</template>
            </el-input>
        </el-form-item>
        <el-form-item width="100%">      
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="res">取消</el-button>
        </el-form-item>
      </el-form>
    
  </div>
</template>
<script>
var qs = require("qs");
export default {
  props: ["dates", "msg"], //把props父组件的东西传送到子组件
  mounted() {
    console.log(this.dates);
  },
  data() {
    return {
      url:
        "http://172.16.94.1:8888/luntai/php/index.php?C=Login&M=product_update"
    };
  },
  methods: {
    res() {
      this.$emit("set", this.msg);
    },
    submitForm: function() {
      if (
        this.dates.brand == "" ||
        this.dates.size == "" ||
        this.dates.pattern == "" ||
        this.dates.position == "" ||
        this.dates.price == "" ||
        this.dates.tread_depth == "" ||
        this.dates.ply == "" ||
        this.dates.load_index == "" ||
        this.dates.speed == "" ||
        this.dates.rim == "" ||
        this.dates.aval == "" ||
        this.dates.qty == "" ||
        this.dates.code == "" ||
        this.dates.code.length == 0 ||
        this.dates.code == undefined
      ) {
        this.$message({
          showClose: true,
          message: "产品数据不能为空!",
          type: "error"
        });
      } else {
        let form = {
          id: this.dates.product_id,
          brand: this.dates.brand,
          size: this.dates.size,
          pattern: this.dates.pattern,
          ply: this.dates.ply,
          load_index: this.dates.load_index,
          speed: this.dates.speed,
          tread_depth: this.dates.tread_depth,
          price: this.dates.price,
          qty: this.dates.qty,
          position: this.dates.position,
          rim: this.dates.rim,
          aval: this.dates.aval,
          code: this.dates.code
        };
        // $axios发送post请求到后台
        this.$axios.post(this.url, qs.stringify(form), {}).then(res => {
          // console.log(res)
          // 当前请求的内容发送到父组件set里
          this.$emit("set", this.msg);
          this.$message({
            showClose: true,
            message: "产品修改成功!",
            type: "success"
          });
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 500px;
  height: 450px;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 150px;
  left: 752px;
  padding: 50px 50px;
  .el-form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .el-form-item {
      width: 45%;
    }
  }
}
</style>



