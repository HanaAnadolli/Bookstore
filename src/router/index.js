import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import LogIn from '../views/User/Login.vue'
import SignUp from '../views/User/Signup.vue'
import Blog from '../views/Blog.vue'
import Dashboard from '../views/Dashboard.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AboutUs from '@/views/AboutUs.vue'
import ListFavoriteBookComponent from '@/components/ListFavoriteBookComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs
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
  {
    path: '/listFavoriteBooks',
    name: 'ListFavoriteBookComponent',
    component: ListFavoriteBookComponent,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { 
      requiresAuth: true, 
      requiresAdmin: true 
    }
  },
  {
    path: '/signup',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  }
]

/* komponentet perbehen prej 3 pjeseve ato jane template script dhe style */

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const guestRouteNames = ['login', 'register'];

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if ((guestRouteNames.includes(to.name)) && user) {
      next({ name: 'home' });
    }
    else{
      next();
    }
  })
});

export default router
