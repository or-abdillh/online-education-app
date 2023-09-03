import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    name: 'courses',
    path: '/courses',
    component: () => import('@/views/Courses.vue')
  },
]

export const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})
