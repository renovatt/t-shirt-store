import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/view-home.vue'

const lazyLoad = (view: string) => {
  return () => import(`../views/${view}.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: lazyLoad('view-cart')
    }
  ]
})

export default router
