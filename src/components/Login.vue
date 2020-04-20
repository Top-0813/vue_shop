<template>
<div class="login_container">
<div class="login_box">
    <!-- 头像区域 -->
<div class="avatar_box">
    <img src="../assets/logo.png" alt="">
</div>
<!-- 登录表单区域 ref生成form实例对象用于重置等事件-->
<el-form ref="form" :model="loginForm" :rules="rules" label-width="0px" class="login_form">
    <!-- admin -->
<el-form-item prop="username">
    <el-input  v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
</el-form-item>
<!-- password -->
<el-form-item prop="password">
    <el-input  v-model="loginForm.password" type="password" prefix-icon="iconfont icon-3702mima"></el-input>
</el-form-item>
<!-- button -->
<el-form-item class="btns">
    <el-button type="primary" @click="login">登录</el-button>
    <el-button type="info" @click="reset">重置</el-button>
</el-form-item>
</el-form>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
    //   双向绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  // 重置表单
  methods: {
    reset () {
      this.$refs.form.resetFields()
    },
    // 登录验证请求
    login () {
      this.$refs.form.validate(async valid => {
        // eslint-disable-next-line no-useless-return
        if (!valid) return
        // eslint-disable-next-line no-unused-vars
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        // 将登录成功之后的token保存到客户端的session storage中，因为项目中除了登录之外的其他
        // API接口必须登录后访问。token只应在当前打开期间生效
        window.sessionStorage.setItem('token', res.data.token)
        // 通过编程导航，转到home
        this.$router.push('/home')
      })
    }
  }
}
</script>
<style lang= "less" scoped>
.login_container{
    background-color: #2b4b6b;
    height: 100%;
}
.login_box{
    background-color: white;
    height: 300px;
    width: 450px;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.avatar_box{
    height: 130px;
    width: 130px;
    border: 1px soild #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }
}
.login_form{
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 0px 10px;
    box-sizing: border-box;
}
.btns{
    display: flex;
    /* 尾部对齐 */
    justify-content: flex-end;
}
</style>
