<template lang="html">
<div class="">
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
<img src="../image/navLogo.png"  style="position:absolute;left:-10px;margin:7px">
  <el-menu-item index="1">首页</el-menu-item>
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


      <el-tooltip class="alarm1" effect="dark" content="紧急告警为0" placement="bottom">
      <img  src="../image/critical_round_fc5043.png"  >
     </el-tooltip>
     <el-tooltip class="alarm2" effect="dark" content="紧急告警为1" placement="bottom">
     <img  src="../image/major_round_ffa235.png"  >
    </el-tooltip>
    <el-tooltip class="alarm3" effect="dark" content="紧急告警为2" placement="bottom">
    <img  src="../image/warning_round_42ccef.png"  >
   </el-tooltip>
   <el-tooltip class="alarm4" effect="dark" content="紧急告警为3" placement="bottom">
   <img  src="../image/cleared_round_5ecc49.png"  >
  </el-tooltip>

  <el-tooltip class="alarm5" effect="dark" content="紧急告警为4" placement="bottom">
  <img  src="../image/minor_round_efe034.png"  >
 </el-tooltip>

 <span class="demonstration" style="float:right;padding-top:22px;margin-right:5%">
                <el-dropdown trigger="click" @command="handleCommand">
                  <span class="el-dropdown-link" style="color:white">
                    root<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item command = "a">个人信息</el-dropdown-item>
                    <el-dropdown-item command = "b">风格二</el-dropdown-item>
                    <el-dropdown-item command = "c">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </span>
    </el-menu>

    <el-tree
      :data="data"
      :props="defaultProps"
      accordion
      @node-click="handleNodeClick"
      style="width:230px;height:100%;margin-left:30px;position:absolute;margin-top:15px;background-color:DCDFE6">
    </el-tree>

    <el-button-group  >
      <el-button type="primary" icon="el-icon-location"></el-button>
      <el-button type="primary" icon="el-icon-zoom-in"></el-button>
      <el-button type="primary" icon="el-icon-zoom-in"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-more"></el-button>
    </el-button-group>

    <img src="../image/map3.png" style="margin-left:255px;">

</div>
</template>

<script>
/*eslint-disable*/

export default {
  data() {
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
        }
      };
    },
  methods: {
    handleCommand(command) {
      if (command === 'c') {
        this.$router.push({
          path: '/'
        });
      } else if(command === 'a'){
        this.$alert('用户名:root  密码:public', '个人信息', {
          confirmButtonText: '确定'
        })

      }else{
        this.$router.push({
          path:'/HomeOne'
        })
      }
    },
    handleNodeClick(data) {
        console.log(data);
      }
  }


}
</script>

<style lang="css">
body{
  margin: 0px;
}
.el-menu{
  padding-left: 120px;
   position:relative;
}
.el-button-group{
  padding-right: 550px;

}
.el-button--primary{
background-color:#545c64;
color:#fff;
border-color:#545c64
}
.alarm1{
  margin:22px;
  margin-left:0px
}
.alarm2{
  margin: 22px;
  margin-left: 30px
}
.alarm3{
  margin: 22px;
  margin-left: 33px
}
.alarm4{
    margin: 22px;
    margin-left: 30px
}
.alarm5{
    margin: 22px;
    margin-left: 30px
}
</style>
