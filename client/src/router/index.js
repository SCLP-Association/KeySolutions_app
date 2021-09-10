import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// eslint-disable-next-line no-unused-vars
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/vqtest',
    name: 'Vqtest',
    component: () => import('../views/VQTest.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: () => import('../views/TestAdministration.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/results',
    name: 'AdminPage',
    component: () => import('../views/TestResults.vue'),
    meta:{
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.getters.isLoggedIn){
      // Redirect to the login page
      next('/login');
    }else{
      next();
    }
  }else if(to.matched.some(record => record.meta.requiresGuest)){
    if(store.getters.isLoggedIn){
      // Redirect to the login page
      next('/profile');
    }else{
      next();
    }
  }else{
    next();
  }
})

export default router
