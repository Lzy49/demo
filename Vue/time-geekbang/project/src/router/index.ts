import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/class6',
    component: () => import('../pages/class6.vue')
  },
  {
    path: '/class7',
    component: () => import('../pages/class7')
  },
  {
    path: '/class8',
    component: () => import('../pages/class8/index.vue')
  },
  {
    path: '/class9',
    component: () => import('../pages/class9/index.vue')
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
