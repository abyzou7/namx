import { createRouter, createWebHistory } from 'vue-router'
import carIndex from '../components/Car/CarIndex.vue'
import indexVue from '../components/Index.vue'


const routes = [
  {
    path: '/',
    name: 'Index',
    component: indexVue,
    default: true, 
  },
  {
    path: '/car',
    name: 'carIndex',
    component: carIndex
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
