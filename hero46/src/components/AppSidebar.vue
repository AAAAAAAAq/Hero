<template>
  <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            
            <router-link tag="li" to="/heroes">
              <a href="#">英雄列表</a>
              </router-link>
              <router-link tag="li" to="/wepons">
              <a href="#">装备列表</a>
              </router-link>
              <router-link tag="li" to="/equips">
              <a href="#">武器列表</a>
            </router-link>
            
          </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>


<style>

</style>

