<template>
  <div>
     <h2 class="sub-header">Edit Hero</h2>
        <form>
          <div class="form-group">
            <label for="name">Email address</label>
            <input type="text" class="form-control" id="name"  v-model="fromData.name">
          </div>
          <div class="form-group">
            <label for="sex">Password</label>
            <input type="type" class="form-control" id="sex" v-model="fromData.gender" >
          </div>
          <button type="submit" class="btn btn-success" @click="handleEdit">Submit</button>
        </form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        fromData:{
          name:'',
          gender:''
        },
        heroId:-1
      }
    },
    created () {
      this.heroId = this.$route.params.id;
      this.loadData(this.heroId)
    },
    methods: {
      loadData(){
        axios
          .get(`http://localhost:3000/heroes/${this.heroId}`)
          .then((res)=>{
            const {status,data} = res;
            if(status === 200){
              this.fromData = data;
            }
          })
      },
      handleEdit(){
        axios
          .put(`http://localhost:3000/heroes/${this.heroId}`,this.fromData)
          .then((res)=>{
            if(res.status === 200){
              this.$router.push({ name: "heroes" });
            }else{
              alert('添加失败');
            }
          })
      }
    }
  }
</script>

<style>

</style>
