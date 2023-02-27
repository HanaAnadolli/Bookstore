import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import ShopView from '../views/ShopView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  },
  {
    path: '/shop',
    name: 'Shop',
    component: ShopView
  },
]

/* komponentet perbehen prej 3 pjeseve ato jane template script dhe style */

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
