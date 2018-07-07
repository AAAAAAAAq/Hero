
//ES6中的导入模块
import Vue from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../src/assets/css/index.css';
import router from './routers/router';

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
