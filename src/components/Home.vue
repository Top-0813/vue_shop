<template>
<el-container class="home_container">
    <!-- 头部区域 -->
  <el-header>
    <div>
      <img src="../assets/heima.png" alt="">
      <span>电商后台管理系统</span>
    </div>
    <el-button type="info" @click="logout">退出</el-button>
    </el-header>
  <!-- 页面主题区域 -->
  <el-container>
      <!-- 侧边栏 -->
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <div class='toggle-button' @click="toggleCollapse">|||</div>
      <el-menu
      background-color="#333744"
      text-color="#fff"
      active-text-color="#409EFF" unique-opened :collapse="isCollapse" :collapse-transition="false" :router="true">
      <!-- 一级菜单 -->
      <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
        <!-- 一级菜单模板区域 -->
        <template slot="title">
          <!-- 图标 -->
          <i :class="iconsObj[item.id]"></i>
          <!-- 文本 -->
          <span>{{ item.authName }}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item :index="subItem.id + ''" v-for="subItem in item.children" :key="subItem.id">
          <template slot="title">
          <!-- 图标 -->
          <i class="el-icon-menu"></i>
          <!-- 文本 -->
          <span>{{ subItem.authName }}</span>
        </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    </el-aside>
    <!-- 右侧内容 -->
    <el-main>
      <!-- 路由占位符 -->
      <router-veiw></router-veiw>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  data () {
    return {
      menulist: [],
      iconsObj: {
        125: 'iconfont icon-user',
        103: 'iconfont icon-tijikongjian',
        101: 'iconfont icon-shangpin',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao'
      },
      isCollapse: false
    }
  },
  // 生命周期函数，一打开就获取到
  created () {
    this.getMenuList()
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取所有菜单
    async getMenuList () {
      // 请求路径
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      console.log(res)
    },
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style lang="less" scoped>
.home_container{
  height: 100%;
}
.el-header{
  background: #373d41;
  display: flex;
  // 左右贴边对齐
  justify-content: space-between;
  padding-left: 0px;
  // 按钮居中对齐
  align-items: center;
  color: #fff;
  // 字体大小
  font: 20px;
  // 文本纵向对齐
  > div {
    display: flex;
    align-items: center;
  }
}
.el-aside{
  background: #333744;
}
.el-main{
  background-color: #eaedf1;
}
.iconfont{
  padding-right: 10px;
}
.toggle-button{
  background-color: #4A5064;
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  color: #fff;
  letter-spacing: 0.2em;
  // 移动上去变成手势
  cursor: pointer;
}
</style>
