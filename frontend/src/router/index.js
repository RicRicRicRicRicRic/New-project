//index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/HomePage/Home.vue';
import Login from '@/components/LoginPage/Login.vue';
import Register from '@/components/RegisterPage/Register.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });
  

export default router;
