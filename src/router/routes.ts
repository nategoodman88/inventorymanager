import { RouteRecordRaw } from 'vue-router';

const isAuthenticated = localStorage.getItem('isAuthenticated');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/HomePage.vue') },
    ],
    redirect: () => {
      return isAuthenticated ? { path: '/home' } : { path: '/login' };
    },
  },

  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
