<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
          <router-link :to="{ name: 'heroadd' }" class="btn btn-success" >Add</router-link>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>id</th>
                  <th>名称</th>
                  <th>性别</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="item.id" v-for="(item,index) in list">
                  <td>{{index+1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.gender}}</td>
                  <td>
                    <router-link :to="{name:'heroedit',params:{ id:item.id } }">edit</router-link>
                    &nbsp;&nbsp;
                    <a href="#" @click="handleDel(item.id)">delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  </div>
</template>
<script>
// 导入模块
  import axios from 'axios';
  export default {
    data(){
      return {
        list:[]
      }
    },
    created () {
      this.loadData()
    },
    methods:{
      loadData(){
        axios
          .get('http://localhost:3000/heroes')
          .then((res)=>{
            const {status,data} = res;
            if(status === 200){
              this.list = data;
            }
          })
      },
      handleDel(id){
        if(!confirm('确定要删除嘛？')){
          return;
        }
        axios
          .delete(`http://localhost:3000/heroes/${id}`)
          .then((res)=>{
            if(res.status === 200 ){
              this.loadData();
            }else{
              alert('删除失败');
            }
          })
      }
      
    }
  }
</script>
<style>

</style>
