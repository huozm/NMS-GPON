<template lang="html">
  <div class="all">
    <el-row>
      <el-col :span="6">
      <div class="pp">
    <span> {{message}}</span>
      </div>
      </el-col>
      <el-col :span="18">
        <div class="route">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#009999"
            text-color="#fff"
            active-text-color="#ffd04b">

          <!-- <el-menu-item index="1">首页</el-menu-item> -->
          <div class="ro">
            <el-submenu index="2">
              <template slot="title">系统管理</template>
              <el-menu-item index="2-1">网管版本号</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">配置管理</el-menu-item>
            <el-submenu index="4">
              <template slot="title">告警管理</template>
              <el-menu-item index="4-1">当前告警</el-menu-item>
              <el-menu-item index="4-2">历史告警</el-menu-item>
              <el-menu-item index="4-3">告警配置</el-menu-item>
              <el-menu-item index="4-4">告警通知配置</el-menu-item>
              <el-menu-item index="4-5">告警邮件服务器配置</el-menu-item>
              <el-menu-item index="4-6">开启声音</el-menu-item>

            </el-submenu>
            <el-submenu index="5">
              <template slot="title">性能统计</template>
           <el-submenu index="5-1" >
                <template slot="title">历史性能统计</template>
              </el-submenu>
              <el-submenu index="5-2" >
                   <template slot="title">当前性能统计</template>
                 </el-submenu>
               </el-submenu>

            <el-submenu index="6">
              <template slot="title">安全管理</template>
              <el-menu-item index="6-1">用户管理</el-menu-item>
              <el-menu-item index="6-2">用户组管理</el-menu-item>
            </el-submenu>
            <el-menu-item index="7">日志管理</el-menu-item>
          </div>
            </el-menu>
        </div>
      </el-col>
    </el-row>

<el-row>
  <el-col :span="4">
    <div class="tree">
      <el-tree
        :data="data"
        :props="defaultProps"
        accordion>
      </el-tree>
    </div>
  </el-col>

  <el-col :span="20">
    <div class="img">
      <img class="img" v-bind:height="size.height" width="100%" src="../image/map6.png" >
    </div>
    <div class="zi" v-bind:style="">
      <span>{{messages}}</span>
    </div>
  </el-col>
</el-row>
  </div>

</template>

<script>
/*eslint-disable*/

export default {
  data() {
    return {
      data: [{
        label: '全局视图',
        children: [{
          label: '150(192.168.17.150)',
          children: [{
            label: 'Shelfs'
          }]
        }, {
          label: '147(192.168.17.147)',
          children: [{
            label: 'PON Management'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      message: 'SinoTelecom',
      messages: 'Copyright © 2017-2018 SinoTelecom版本所有',
      size: {
        height: this.getContentHeigth() - 125,
      }
    };
  },
  methods: {
    getContentHeigth: function () {
      var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      console.log(clientHeight);
      return clientHeight;
    }
  }
}
</script>

<style lang="css">
body{
  margin: 0px;
  /* padding: 0px;
  height: 100%; */
}
.all{
  /* height: 100%;
  width: 100%;
  margin:0;
  padding:0; */

  background-color: #DCDFE6;
}
.ro{
/* float: right; */
position: relative;
padding-left: 32%;

}
.pp{
padding-right: 25%;
  line-height: 50px;
  background-color:#009999;
  font-size: 35px;
  height: 60px;
   margin: 0px;
  color: #fafafa;
  font-style: italic;
letter-spacing: 0;
text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;
}

.el-tree{
  /* height: 600px; */
  background-color:#DCDFE6;
}
/* img{
  max-width: 100%;
  overflow: hidden;
  width: 100%;
 height: 100%;
} */
.zi{
/* position:fixed;
left: 20px;
right:5px;
bottom: 0px; */
  line-height: 60px;
  height: 60px;
  background-color: #009999;
  font-size: 18px;
  /* position: absolute;
  width: 83%;
  bottom: 0px; */
}
</style>
