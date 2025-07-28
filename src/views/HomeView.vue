<template>
  <HeroSection2 />
  <About />
  <Services1 />
  <ContactForm />
  <WhyUs />
  <OffshoreMap />
</template>
<script>
export const prerender = true
</script>
<script setup>
import HeroSection2 from '@/components/HeroSection2.vue'
import Services1 from '@/components/Services1.vue'
import WhyUs from '@/components/WhyUs.vue'
import OffshoreMap from '@/components/OffshoreMap.vue'
import ContactForm from '@/components/ContactForm.vue'
import Mission from '@/components/Mission.vue'
import Projects from '@/components/Projects.vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { onMounted, nextTick } from 'vue'
import About from '@/components/About.vue'

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
  title: 'Global Offshore – hydraulika siłowa i wsparcie projektów offshore',
  meta: [
    { name: 'description', content: "Specjalizujemy się w instalacjach offshore, hydraulice siłowej oraz sprzedaży części i komponentów. Kompleksowe wsparcie projektów – sprawdź naszą ofertę." },
    { name: 'keywords', content: 'hydraulika siłowa, offshore, serwis, instalacje, projekty, global offshore' },
    { property: 'og:title', content: 'Global Offshore – wsparcie projektów offshore' },
    { property: 'og:description', content: 'Kompleksowe instalacje i serwis offshore – poznaj naszą ofertę.' },
    { property: 'og:image', content: '/images/og-image.jpg' },
    { property: 'og:url', content: 'https://globaloffshore.pl/' }
  ]
})
</script>
