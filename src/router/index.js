import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'Shop',
    component: ShopView
  }, 
  {
    path: '/create',
    name: 'create',
    component: () => import('../components/CreateComponent'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/ListComponent'),
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditComponent'),
  },
  {
    path: '/listContacts',
    name: 'listContacts',
    component: () => import('../components/ListContactComponent'),
  },
  {
    path: '/createContacts',
    name: 'createContacts',
    component: () => import('../components/CreateContactComponent'),
  },
]

/* komponentet perbehen prej 3 pjeseve ato jane template script dhe style */

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
