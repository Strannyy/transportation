import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '../views/page/MainPage.vue'
import About from '../views/page/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
