import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import router from "./router";


export const createApp  = ViteSSG(
    App,
    { routes: router.options.routes }, // potrzebujemy tylko tablicy routes
    ({ app, router }) => {
      app.use(router)
  
     
      const head = createHead()
    app.use(head)
    
    }
  )
