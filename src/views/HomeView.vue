<template>
  <HeroSection />
  <WhyUs />

  <Services />
  <Process />
  <Projects />

  <OffshoreMap />
</template>

<script setup>
import { useRoute } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import Hero2 from '@/components/Hero2.vue'
import Services from '@/components/Services.vue'
import Services2 from '@/components/Services2.vue'
import Services3 from '@/components/Services3.vue'
import WhyUs from '@/components/WhyUs.vue'
import OffshoreMap from '@/components/OffshoreMap.vue'
import Projects from '@/components/Projects.vue'
import Mission from '@/components/Mission.vue'
import Process from '@/components/Process.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped></style>