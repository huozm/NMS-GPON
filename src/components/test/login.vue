<template lang="html">
  <div class="tab">
    <div class="tab-form">
      <div class="tab-header">
        <div data-tab="tab" @click="switchTab('common')" v-bind:class="{active: activeTab}" class="common">
          <p>{{form.common.title.label}}</p>
          <div>——</div>
        </div>
        <div data-tab="tab" @click="switchTab('message')" v-bind:class="{active: !activeTab}"  class="message">
          <p>{{form.message.title.label}}</p>
          <div>——</div>
        </div>
      </div>
      <div class="tab-content">
        <div data-tab="content" v-bind:class="{active: activeTab}"   class="common">
          <form action="">
            <div>
              <input type="text" name="username" value="" autocomplete="off" :placeholder="getForm.common.itemArray.username.placeholder">
            </div>
            <div>
              <input type="password" autocomplete="off"  name="password" value="" :placeholder="getForm.common.itemArray.password.placeholder">
            </div>
            <div class="input-icon">
              <span>{{getForm.common.itemArray.password.label}}</span>
            </div>
            <div>
              <button type="button"  @click="checkLogin()" name="button">{{getForm.common.operation.login.label}}</button>
            </div>
            <div>
              <p>
                {{getForm.common.operation.login.footer}}<a href="">《{{getForm.common.operation.login.server}}》</a>
              </p>
            </div>
          </form>
        </div>
        <div data-tab="content" v-bind:class="{active: !activeTab}"  class="message">
          <form action="">
            <div>
              <input type="text" autocomplete="off"  name="username" value="" :placeholder="getForm.message.itemArray.username.placeholder">
            </div>
            <div>
              <input type="password" autocomplete="off"  name="password" value="" :placeholder="getForm.message.itemArray.verificationCode.placeholder">
            </div>
            <div class="input-icon">
              <span>{{getForm.message.itemArray.verificationCode.label}}</span>
            </div>
            <div>
              <button type="button" @click="checkLogin()" name="button">{{getForm.message.operation.login.label}}</button>
            </div>
            <div>
              <p>
                {{getForm.message.operation.login.footer}}<a href="">《{{getForm.message.operation.login.server}}》</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Request } from '@/assets/js/tools/axios'
import { Form } from '@/assets/js/tools/form'
export default {
  data () {
    return {
      activeTab: true,
      url: '/checkLogin',
      form: {}
    }
  },
  created: function () {
    this.getI18nJson()
  },
  methods: {
    getI18nJson () {
      let json = {}
      json = require('./zh-CN.json')
      this.form = json
    },
    checkLogin () {
      const itemArray = this.form.itemArray
      const params = Form.getFormParamsObject(itemArray)
      const promise = Request.postResource({
        url: this.url,
        params: params
      })
      promise.then(function (response) {
        console.log('response', response)
      }).catch(function (err) {
        console.log('err', err)
      })
    },
    switchTab (tab) {
      if (Object.is(tab, 'common')) {
        this.activeTab = true
      } else {
        this.activeTab = false
      }
    }
  },
  computed: {
    getForm () {
      return this.form.common ? this.form : false
    }
  }
}
</script>

<style lang="scss">
/* 去除input填充的黄色 */
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    border: 1px solid #CCC!important;
  }
  *{
    font-family: sans-serif;

  }
</style>
<style lang="scss" scoped>
  /* 定义变量 */
  $margin-left:60%;
  /* 白色字体 */
  $white-color: white;
  $button-background: #409EFF;
  .tab{
    background: url('../../assets/image/login_back.jpg') no-repeat center center;
    width:100%;
    height:100%;
    background-size:100% 100%;
    position:absolute;
    filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../../assets/image/login_back.jpg',sizingMethod='scale');
  }
  .tab-form{
    margin-left: $margin-left;
    width: 30%;
    margin-top: 150px;
    padding-bottom: 10px;
    padding-top: 10px;
    background-color: rgba(249, 245, 245, 0.18);
  }
  /* 标签头样式 */
  .tab-header{
    /* 基本样式 */
    /* 建立弹性框 */
    display: -webkit-flex;
    -webkit-flex-direction: row;
    display: flex;
    flex-direction: row;
    div[data-tab='tab']{
      -webkit-flex: 1 1 auto;
      flex: 1 1 auto;
      width: 50%;
      -webkit-transition: width 0.7s ease-out;
      transition: width 0.7s ease-out;
    }
    color: #03A9F4;
    div.active{
      color: rgb(92, 238, 238);
    }
  }
  form{
    margin-top: 20px;
    div{
      margin-bottom: 15px;
      input{
        border-radius: 12px;
        border: 1px solid $button-background;
        margin: auto;
        outline: none;
        width: 80%;
        height: 25px;
        padding-left: 15px;
      }
      button{
        border-radius: 12px;
        height: 29px;
        margin-top: 30px;
        background-color: $button-background;
        width: 85%;
        border: none;
        color: $white-color;
      }
      p{
        font-size: 4px;
        a{
          text-decoration: none;
          color: $button-background;
        }
      }
    }
    div.input-icon{
      color: grey;
      width: 90%;
      text-align: right;
      span{
      }
    }
  }
  ::-webkit-input-placeholder{
    padding-left: 3px;
  }
  /* 标签内容样式 */
  .tab-content{
    margin-top: 50px;
    -webkit-flex-direction: row;
    flex-direction: row;
    color: black;

    div[data-tab="content"]{
      -webkit-flex: 1 1 auto;
      flex: 1 1 auto;
      -webkit-transition: width 0.7s ease-out;
      transition: width 0.7s ease-out;
      display: none;
    }
    div[data-tab="content"].active{
      display: block;
    }
    p{
      color: $white-color;
      a{
        color: $white-color;
      }
    }

  }
</style>
