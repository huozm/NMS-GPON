<template>
    <div style="background-color: #EBEBEB;min-height:650px">
        <div style="width:100%;background-color: #009999; overflow: hidden;height:50px">
            <span class="demonstration" style="float:left;padding-top:14px;color:white;margin-left:7%">
                首页
            </span>
            <span class="demonstration" style="float:left;padding:5px;color:white;margin-left:7%;width:15%;">
              <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      >
    </el-input>
            </span>

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


            <span class="demonstration" style="float:right;padding-top:17px;margin-right:3%">
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

        <div style="margin-top:5px">
            <el-row :gutter="10">
                <el-col :xs="4" :sm="4" :md="4" :lg="4">
                    <div>

      <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:650px;background-color:#DCDFE6">
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
                <el-col :xs="20" :sm="20" :md="20" :lg="20">
                    <div>
                        <div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white;position:relative; ">
                            <el-breadcrumb separator="/">
                                <el-breadcrumb-item v-for="item in breadcrumbItems">{{item}}</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </div>
                </el-col>
            </el-row>
              <img src="../image/map1.png" style=" position:absolute;top:100px;left:220px">
        </div>
    </div>


</template>



<script>
/*eslint-disable*/
    export default {
        data(){
            return {
                searchCriteria: '',
                breadcrumbItems: ['导航一'],
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
</style>
