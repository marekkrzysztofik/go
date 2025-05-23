<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import CookieBaner from '@/components/CookieBaner.vue'
</script>

<template>
  <div class="app">
    <Navbar />
    <RouterView />
     <CookieBaner />
    <Footer />
  </div>

</template>
