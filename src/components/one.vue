<template>
    <div class="bd">
        <div class="s">
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
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="age">
                <el-input v-model.number="ruleForm2.age"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
    
</template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.bd {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.el-form {
  padding-left: 30px;
  width: 50%;
  padding-top: 60px;
  height: 500px;
  margin: 0 auto;
  background: white;
  margin-top: 150px;
}
.el-input {
  width: 80%;
}
.el-form-item {
  margin-top: 4rem;
}
.s {
  color: #9a9a9a;
  width: 100%;
  height: 115px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #dddddd;
}
.set {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
}
.el-button {
  margin-left: 9rem;
}
</style>
