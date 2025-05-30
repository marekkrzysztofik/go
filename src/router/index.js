import { createRouter, createWebHistory, createMemoryHistory  } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import Services3 from '@/components/Services3.vue'
import FormView from '@/views/FormView.vue'
import CarrerView from '@/views/CarrerView.vue'
import CookieInfo from '@/views/CookieInfo.vue'
import CarrerForm from '@/views/CarrerForm.vue'
export const routes = [
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
    component: () => import('../views/AboutView.vue'),
  },
]
const isClient = typeof window !== 'undefined'

const router = createRouter({
    history: isClient ? createWebHistory() : createMemoryHistory(),
    routes,
    scrollBehavior() {
      return { top: 0 }
    }
  })
export default router;