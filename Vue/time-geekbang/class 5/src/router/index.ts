import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/detail',
    component: () => import('../pages/detail.vue'),
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
