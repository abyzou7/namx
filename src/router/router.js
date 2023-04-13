import { createRouter, createWebHistory } from 'vue-router'
import carIndex from '../components/Car/CarIndex.vue'
import indexVue from '../components/Index.vue'
import paymentIndexGT from '../components/Payment/PaymentIndexGT.vue'
import paymentIndexGTH from '../components/Payment/PaymentIndexGTH.vue'
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
    path:'/paymentgt',
    name:'paymentIndexGT',
    component: paymentIndexGT
  },
  {
    path:'/paymentgth',
    name:'paymentIndexGTH',
    component: paymentIndexGTH
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
