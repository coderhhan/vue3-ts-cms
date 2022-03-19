import { createRouter, createWebHashHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/register',
    component: () => import('@/views/register/register.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path === '/main') {
    return '/login'
  }
})
export default router
