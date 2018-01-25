<template>
    <div style="background-color: #EBEBEB;min-height:570px">
        <div style="width:100%;background-color: #009999; overflow: hidden;height:50px;position:relative;">
<img src="../image/navLogo.png"  style="float:left;padding-top:2px;margin-left:1%">
<h1>{{message}}</h1>
            <span class="demonstration" style="float:right;padding-top:13px;margin-right:3%">
                           <el-dropdown trigger="click" @command="handleCommand">
                             <span class="el-dropdown-link" style="color:white">
                               root<i class="el-icon-caret-bottom el-icon--right"></i>
                             </span>
                             <el-dropdown-menu slot="dropdown" >
                               <el-dropdown-item command = "a">个人信息</el-dropdown-item>
                               <el-dropdown-item command = "b">风格一</el-dropdown-item>
                               <el-dropdown-item command = "c">退出登录</el-dropdown-item>
                             </el-dropdown-menu>
                           </el-dropdown>
                       </span>
        </div>

        <div style="margin-top:0px">
            <el-row :gutter="10">
                <el-col :xs="4" :sm="4" :md="4" :lg="3.5">
                    <div>

      <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:595px;background-color:#DCDFE6">
        <el-submenu index="1">
          <template slot="title">系统管理</template>
          <el-menu-item index="1-1">网管版本号</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">配置管理</el-menu-item>
        <el-submenu index="4">
          <template slot="title">告警管理</template>
          <el-menu-item index="4-1">当前告警</el-menu-item>
          <el-menu-item index="4-2">历史告警</el-menu-item>


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
              </div>
                </el-col>
            </el-row>
        </div>
<img src="../image/map4.png" style="position: absolute;margin-left:-460px;top:50px">
    <div class="">
      <el-tree
        :data="data"
        :props="defaultProps"
        accordion

        style="position: absolute;min-height:595px;background-color:#DCDFE6;width:230px;margin-left:1130px;top:50px">
      </el-tree>

    </div>
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
                searchCriteria: '',
                item:'导航一',
                message:'SinoTelecom',
                  messages:'Copyright © 2017-2018 SinoTelecom版本所有'
            }
        },

        methods:{

        handleCommand(command) {
          if (command === 'c') {
            this.$router.push({
              path: '/'
            });
          } else if(command === 'a') {
            this.$alert('用户名:root  密码:public', '个人信息', {
              confirmButtonText: '确定'
            })

          }else{
            this.$router.push({
              path:'/Home'
            })
          }
        }
    }
  }
</script>

<style lang="css">
body{
  margin: 0px;
}
h1{
  position:absolute;
  left:120px;
  margin:5px;
  color: #fafafa;
  font-style: italic;
letter-spacing: 0;
text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;
}
.alarm1{
  float: left;
  padding: 18px;
  margin-left: 41%;

}
.alarm2{
  float: left;
  padding: 18px;
  margin-left: 0%;
}
.alarm3{
  float: left;
  padding: 18px;
  margin-left: 0%;
}
.alarm4{
  float: left;
  padding: 18px;
  margin-left: 0%;
}
.alarm5{
  float: left;
  padding: 18px;
  margin-left: 0%;
}
.zi{
  height: 50px;
  width: 910px;
  background-color: #009999;
  position: absolute;
  left:220px;
  bottom: 2px;
  text-align: center;
}
</style>
