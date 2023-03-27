import Main from '@/pages/Main.vue'
import UserIdPage from '@/pages/UserIdPage'
import UserPage from '@/pages/UserPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/users',
    component: UserPage
  },
  {
    path: '/users:id',
    component: UserIdPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
