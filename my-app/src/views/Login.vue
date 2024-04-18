<template>
  <el-form
    label-width="70px"
    class="login_container"
    ref="form"
    :rules="rules"
    :model="form"
    :inline="true"
  >
    <h3 class="login_title">系统登录</h3>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit" class="login_button" type="primary"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
import Mock from "mockjs";
import Cookie from "js-cookie";
import { getMenu } from "../api";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, trigger: "blur", message: "请输入用户名" },
        ],
        password: [{ required: true, trigger: "blur", message: "请输入密码" }],
      },
    };
  },
  methods: {
    //登录
    submit() {
      //   //后端返回token数据
      //   const token = Mock.Random.guid();
      //   //token信息存入cookie用于不同页面间的通信
      //   Cookie.set("token", token);

      //form表单校验通过才能登录
      this.$refs.from.validate((valid) => {
        if (valid) {
          getMenu(this.form).then(({ data }) => {
            if (data.code === 20000) {
              Cookie.set("token", data.data.token);
              //跳转到首页
              this.$router.push("/home");
            }else{
                this.$message.error(data.data.message)
            }
          });
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login_container {
  width: 350px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cacac6;
  box-sizing: border-box;
  .el-input {
    width: 198px;
  }
  .login_title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
  }
  .login_button {
    margin-left: 105px;
    margin-top: 10px;
  }
}
</style>
