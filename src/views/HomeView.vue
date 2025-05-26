<template>
  <HeroSection />
  <WhyUs />
  <Services />
  <Process />
  
  <OffshoreMap />
</template>
<script>
export const prerender = true
</script>
<script setup>
import HeroSection from '@/components/HeroSection.vue'
import Services from '@/components/Services.vue'
import WhyUs from '@/components/WhyUs.vue'
import OffshoreMap from '@/components/OffshoreMap.vue'
import Projects from '@/components/Projects.vue'
import Process from '@/components/Process.vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { onMounted, nextTick } from 'vue'

const route = useRoute()
onMounted(async () => {
  if (route.hash) {
    await nextTick()
    setTimeout(() => {
      const el = document.querySelector(route.hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
})

useHead({
  title: 'Global Offshore – wsparcie projektów offshore',
  meta: [
    { name: 'description', content: 'Kompleksowe instalacje i serwis offshore – poznaj naszą ofertę.' },
    { name: 'keywords', content: 'offshore, serwis, instalacje, projekty, global offshore' },
    { property: 'og:title', content: 'Global Offshore – wsparcie projektów offshore' },
    { property: 'og:description', content: 'Kompleksowe instalacje i serwis offshore – poznaj naszą ofertę.' },
    { property: 'og:image', content: '/images/og-image.jpg' },
    { property: 'og:url', content: 'https://globaloffshore.pl/' }
  ]
})
</script>
