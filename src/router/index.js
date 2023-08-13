// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '@/components/IndexPage.vue'; 
import AboutPage from '@/components/AboutPage.vue'; 

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexPage,
  },
  {
    path: '/about', 
    name: 'about',
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

