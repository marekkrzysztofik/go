<script setup>
import Navbar from '@/components/Navbar.vue'
import Navbar1 from '@/components/Navbar1.vue'
import Navbar2 from '@/components/Navbar2.vue'
import Navbar3 from '@/components/Navbar3.vue'
import Footer from '@/components/Footer.vue'
import CookieBaner from '@/components/CookieBaner.vue'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
watch(() => route.fullPath, () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
})
</script>

<template>
  <div class="app">
    <Navbar />
     
    <RouterView />
     <CookieBaner />
    <Footer />
  </div>

</template>
