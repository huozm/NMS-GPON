<template>
<div id="login">

  <el-row class="tac">
    <el-col :span="24">
      <img src="../assets/login.svg">
    </el-col>
  </el-row>

  <el-row class="tac form-style">
    <el-col :span="8" :offset="8">
      <el-form ref="userForm" :model="form" label-width="80px">

        <el-form-item label="" prop="itemArray.username.value" :rules="getRules(form.itemArray.username)">

          <el-col :span="21">
            <el-input v-model="form.itemArray.username.value" name="username" placeholder="">
            </el-input>
          </el-col>

          <el-col :span="3" class="button-icon">
            <img src="../assets/user.svg">
          </el-col>

        </el-form-item>

        <el-form-item class="submit-group-style" prop="itemArray.password.value" :rules="getRules(form.itemArray.password)" label="">

          <el-col :span="21">
            <el-input v-model="form.itemArray.password.value" name="password" placeholder=""></el-input>
          </el-col>

          <el-col :span="3" class="button-icon">
            <img src="../assets/password.svg">
          </el-col>

        </el-form-item>

        <el-form-item label="">
          <el-button size="large" class="button-style" @click="resetForm()">{{form.operation.reset.label}}</el-button>
        </el-form-item>

        <el-form-item label="">
          <el-button size="large" class="button-style" @click="onSubmit('form')" type="primary">{{form.operation.refresh.label}}</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</div>
</template>

<style lang="css" scoped>
img {
    max-width: 100%;
    over-flow: hidden;
    vertical-align: middle;
}
.button-icon {
    border-top: 1px solid #bfcbd9;
    border-bottom: 1px solid #bfcbd9;
    border-right: 1px solid #bfcbd9;
    text-align: center;
}
.button-style {
    width: 100%;
}
.submit-group-style {
    margin-bottom: 50px;
}
</style>
<style>
.el-input__inner {
  height: 40px;
  border-radius: 0;
}

.el-form-item__content {
  line-height: 38px;
}

.el-button {
  border-radius: 0;
}
</style>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      loginUrl: '/login',
      form: {}
    }
  },
  created: function() {
    let json = require('./zh-CN.json');
    this.form = json;

  },
  methods: {
    onSubmit() {

    },
    resetForm() {
      const itemArray = this.form.itemArray;
      itemArray.username.value = itemArray.username.defaultValue;
      itemArray.password.value = itemArray.password.defaultValue;
    },
    getRules(item) {

    }
  },
  computed: {}
}
</script>
