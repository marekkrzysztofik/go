<template>
  <section class="about-section">
    <div class="about-left">
      <div class="about-content">
        <h2 class="section-title">{{ langState.t.main.about.title }}</h2>
        <p class="section-text">{{ langState.t.main.about.description }}</p>

        <ul class="about-list">
          <li v-for="(value, index) in langState.t.main.about.values" :key="index">
            <span class="check">✔</span> {{ value }}
          </li>
        </ul>
      </div>
    </div>

    <div class="about-right">
      <img src="/images/global.jpg" alt="Global Offshore" class="bg-image" />
    </div>
  </section>
</template>

<script setup>
import langState from '@/lang/langState'
import { useHead } from '@vueuse/head'

useHead({
  title: 'O nas | Global Offshore',
})
</script>

<style scoped>
.about-section {
  margin-top: -80px;
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  flex-direction: row;
}

.about-left {
  flex: 0 0 40%;
  background: rgba(24, 24, 24, 1);
  color: white;
  padding: 4rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-right {
  flex: 0 0 60%;
  position: relative;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-content {
  max-width: 600px;
}

.section-title {
  font-size: 2.5rem;
  color: #d63830;
  margin-bottom: 1rem;
  font-weight: 600;
}

.section-text {
  font-size: 1.2rem;
  color: white;
  margin-bottom: 1.5rem;
}

.about-list {
  list-style: none;
  padding: 0;
}

.about-list li {
  font-size: 1.1rem;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
}

.check {
  color: #d63830;
  margin-right: 10px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .about-section {
    flex-direction: column;
    height: auto;
  }

  .about-left,
  .about-right {
    width: 100%;
    height: 50vh;
  }

  .about-left {
    padding: 2rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-text {
    font-size: 1rem;
  }

  .about-list li {
    font-size: 1rem;
  }
}
</style>
