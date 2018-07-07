import vue from 'vue';
import VueRouter from 'vue-router';
import HeroList from '../views/heroes/list.vue'
import WeaponList from '../views/weapons/list.vue'
import EquipList from '../views/equips/list.vue'
import HeroAdd from '../views/heroes/add.vue'
import HeroEdit from '../views/heroes/Edit.vue'

vue.use(VueRouter);

const router = new VueRouter({
  linkExactActiveClass:'active',
  routes: [
      { name: 'home', path: '/', redirect:{name:'heroes'}},
      { name: 'heroes', path: '/heroes', component: HeroList },
      { name: 'wepons', path: '/wepons', component: WeaponList },
      { name: 'equips', path: '/equips', component: EquipList },
      { name: 'heroadd', path: '/heroes/add', component: HeroAdd },
      { name: 'heroedit', path: '/heroes/edit/:id', component: HeroEdit },

  ]
})

export default router 
