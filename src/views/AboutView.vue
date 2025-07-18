<template>
  <section class="about-section">
    <div class="overlay"></div>
    <div class="about-content fade-in-right">
      <h2 class="section-title">{{ langState.t.main.about.title }}</h2>
      <p class="section-text">{{ langState.t.main.about.description }}</p>

      <ul class="about-list">
        <li v-for="(value, index) in langState.t.main.about.values" :key="index">
          <span class="check">✔</span> {{ value }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import langState from '@/lang/langState'
import Mission from '@/components/Mission.vue'
import Features from '@/components/Features.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'O nas | Global Offshore',
})
</script>

<style scoped>
.about-section {
  margin-top: -80px;
  width: 100%;
  height: 110vh;
  position: relative;
  padding: 100px 20px;
  background: url('/images/global.jpg') center center / cover no-repeat;
  color: white;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(24, 24, 24, 0.7);
  z-index: 1;
}

.section-title {
  font-size: 2rem;
  color: #d63830;
  margin-bottom: 1rem;
  font-weight: 600;
}

.section-text {
  font-size: 1.3rem;
  color: white;
  margin-bottom: 1.5rem;
}

.about-content {
  margin-top: 6rem;
  margin-left: 4rem;
  width: 40%;
  position: relative;
  z-index: 2;
}

@media (min-width: 768px) {
  .about-grid {
    flex-direction: row;
    align-items: center;
  }
}

.about-list {
  list-style: none;
  padding: 0;
}

.about-list li {
  font-size: 1.2rem;
  color: white;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
}

.check {
  color: #d63830;
  margin-right: 8px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .about-section {
    margin-top: 0px;
    height: 100vh;

  }

  .about-content {
    margin-top: 1rem;
    margin-left: 2rem;
    width: 80%;
  }
}
</style>
