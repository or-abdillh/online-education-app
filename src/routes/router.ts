import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    name: 'chats',
    path: '/chats',
    component: () => import('@/views/Chats.vue'),
  },
  {
    name: 'courses',
    path: '/courses',
    component: () => import('@/views/Courses.vue')
  },
  {
    name: 'setting',
    path: '/setting',
    component: () => import('@/views/Setting.vue')
  },
]

export const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})
