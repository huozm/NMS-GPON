<template>
<div class="login" id="ap">
  <el-row>
    <el-col>
      <img src="../image/login.svg" style="
      text-align: center;
      max-width: 100%;
      height: 600px;
      margin-left: 30px;
      margin-right: 0px;
      margin-top:0px;
  ">
    </el-col>
  </el-row>

  <el-form>

    <div class="group1">
      <el-input type="text" id="user" v-model="formName.user" placeholder="用户名"></el-input>
      <p>{{formName.userError}}</p>

      <el-col :span="3" class="button-icon">
        <img src="../image/user.svg">
      </el-col>
    </div>

    <div class="group1">
      <el-input type="password" id="password" v-model="formName.password" placeholder="密码"></el-input>
      <p>{{formName.passwordError}}</p>

      <el-col :span="3" class="button-icon">
        <img src="../image/password.svg">
      </el-col>
    </div>

    <div class="group1">
      <el-button @click="resetForm()" style="width:310px;min-height:40px;background:#ddd">重置</el-button>
    </div>

    <div class="group1">
      <el-button type="primary" @click="submitForm('formName')" style="width:310px;min-height:40px;background:#1A3564;color:#FFF">登录</el-button>
    </div>

  </el-form>
</div>
</template>


<script>
const Qs = require('qs')
/*eslint-disable*/


export default {

  data() {
    return {
      formName: {
        user: '',
        password: '',
        userError: '',
        passwordError: ''
      }
    }
  },

  methods: {

    resetForm: function() {
      this.formName.user = '';
      this.formName.password = '';
      this.formName.userError = '';
      this.formName.passwordError = '';

    },
    submitForm: function(formName) {
      var _this = this
      var user = _this.formName.user,
        password = _this.formName.password;
        // const loading = _this.$loading({
        //   lock: true,
        //   text: 'Loading',
        //   spinner: 'el-icon-loading',
        //   background: 'rgba(0, 0, 0, 0.7)'
        // });
        // setTimeout(() => {
        //   loading.close();
        // },1000);

      _this.$axios.post('/api/checkUser', null, {
          transformRequest: [function(data) {
            return Qs.stringify(data, {
              arrayFormat: 'brackets'
            })
          }],
          data: {
            user: user,
            password: password
          }
        })
        .then(function(response) {

          if (_this.formName.user != '' && _this.formName.password != '' && response.data === true) {
            // _this.formName.userError = '登陆成功'
            console.log(response);
            _this.$router.push({
              path: '/HomeOne'
            });
          } else if (_this.formName.user != '' && _this.formName.password != '' && response.data === false) {
            _this.formName.userError = '用户名或密码错误'
            _this.formName.passwordError = '用户名或密码错误'
          } else {
            _this.formName.userError = '用户名或密码为空'
            _this.formName.passwordError = '用户名或密码为空'

          }

        })
        .catch(function(error) {
          console.log(error)
        });
    }
  }
}
</script>

<style scoped>
/* html,
body {
  margin: 0;
  padding: 0;
  position: relative;
} */

.login {
  margin-top: -150px;
  margin-left: -175px;
  min-height: 50px;
  padding: 30px 20px 20px;
  box-sizing: border-box;

}

.group1 {
  margin: 20px;
  position: relative;
}

.button-icon {
  border: 1px solid #bfcbd9;
  text-align: center;
  height: 40px;
  position: absolute;
  left: 270px;
  top: 0px;
  padding: 10px 0px;
  width: 40px;

}

p {
  font-size: 12px;
  color: red;
  text-align: left;
  position: absolute;
  top: 30px
}

form {
  position: absolute;
  top: 350px;
  left: 35%;
}
</style>
