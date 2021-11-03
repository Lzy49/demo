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
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
