<template lang="html">
<div class="">
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#009999"
    text-color="#fff"
    active-text-color="#ffd04b">
  <h1>{{message}}</h1>
  <!-- <el-menu-item index="1">首页</el-menu-item> -->
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


    </el-menu>
    <el-tree
      :data="data"
      :props="defaultProps"
      accordion

      style="min-height:600px;background-color:#DCDFE6;width:200px;">
    </el-tree>
    <img src="../image/map6.png" >
    <div class="zi">
    <p>{{messages}}</p>
    </div>

</div>
</template>

<script>
/*eslint-disable*/
export default {
  data(){
    return {
      data: [ {
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
      message:'SinoTelecom',
      messages:'Copyright © 2017-2018 SinoTelecom版本所有'
    };
  }
}
</script>

<style lang="css">
body{
  margin: 0px;
}
img{
  position: absolute;
  left: 200px;
  bottom:55px
}
.el-menu{
  padding-left:51%;
   position:relative;
}
.zi{
  height: 50px;
  width: 1165px;
  background-color: #009999;
  position: absolute;
  left:200px;
  bottom: 2px;
  text-align: center;
}
h1{
  position:absolute;
  left:10px;
  margin:7px;
  color: #fafafa;
  font-style: italic;
letter-spacing: 0;
text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;
}
</style>
