// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '@/components/IndexPage.vue'; 
import AboutPage from '@/components/AboutPage.vue'; 
import RequestPage from '@/components/RequestPage.vue';

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
  {
    path: '/request',
    name: 'request',
    component: RequestPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

