<template>
  <div>
    <!-- 头部 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view></router-view>
        </div>
      </div>
    </div>
</div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue';
  import AppSidebar from './components/AppSidebar.vue';
// ES6 导出模块的语法
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components:{
    AppHeader,
    AppSidebar
  }
};
</script>

<style>
</style>
