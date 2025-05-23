import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import Services3 from '@/components/Services3.vue'
import FormView from '@/views/FormView.vue'
import CarrerView from '@/views/CarrerView.vue'
import CookieInfo from '@/views/CookieInfo.vue'
import CarrerForm from '@/views/CarrerForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/uslugi',
    name: 'uslugi',
    component: Services3,
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: ContactView,
  },
  {
    path: '/zgloszenie',
    name: 'form',
    component: FormView,
  },
  {
    path: '/aplikuj',
    name: 'carrerfrom',
    component: CarrerForm,
  },
   {
    path: '/kariera',
    name: 'kariera',
    component: CarrerView,
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: CookieInfo,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})
export default router
