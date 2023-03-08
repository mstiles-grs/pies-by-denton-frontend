import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './home/home.vue';
import SignUp from './sign-up/sign-up.vue';
import Login from './log-in/login.vue'
import Dashboard from './dashboard/dashboard.vue'

const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/sign-up/',
    component: SignUp
  },
  {
    path: '/log-in/',
    component: Login
  },
  {
    path: '/dashboard/',
    component: Dashboard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;