import { createRouter, createWebHistory } from 'vue-router'
import carIndex from '../components/Car/CarIndex.vue'
import indexVue from '../components/Index.vue'
import paymentIndex from '../components/Payment/PaymentIndex.vue'
import paymentSuccess from '../components/Payment/PaymentSuccess.vue'


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
  {
    path:'/payment',
    name:'paymentIndex',
    component: paymentIndex
  },
  {
    path:'/success',
    name:'paymentSuccess',
    component: paymentSuccess
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
