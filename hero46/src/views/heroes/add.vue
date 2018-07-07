<template>
  <div>
    <h2 class="sub-header">Add Hero</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input type="text" class="form-control" id="name" placeholder="name" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="sex">英雄性别</label>
            <input type="text" class="form-control" id="sex" placeholder="sex" v-model="formData.gender">
          </div>
          <button type="submit" class="btn btn-success" @click="handleAdd">Submit</button>
        </form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data(){
      return {
        formData:{
          name:'',
          gender:''
        }
      }
    },
    methods:{
      handleAdd(){
        axios
          .post('http://localhost:3000/heroes',this.formData)
          .then((res)=>{
            const {status,data} = res;
            if(status===201){
              this.$router.push({ name: "heroes" });
            }else{
              alert('添加失败')
            }
          })
      }
    }
  }
</script>

<style>

</style>
