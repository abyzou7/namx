import { createRouter, createWebHistory } from 'vue-router'
import ProductCard from './components/ProductCard.vue'

const routes = [
  {
    path: '/product',
    name: 'Product',
    component: ProductCard,
    props: {
      product: {
        name: 'Produit 1',
        description: 'Ceci est un produit.',
        price: 10,
        image: 'https://via.placeholder.com/300x200.png'
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
