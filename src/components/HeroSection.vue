<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">{{ langState.t.main.heroTitle }}</h1>
      <p class="hero-subtitle">{{ langState.t.main.heroSubtitle }}</p>
      <RouterLink to="/zgloszenie" class="hero-button">Zgłoś sprawę</RouterLink>
    </div>

    <!-- Wave at the bottom -->
    <div class="wave-divider">
      <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#fefefe"
          d="M0,64L80,74.7C160,85,320,107,480,112C640,117,800,107,960,90.7C1120,75,1280,53,1360,42.7L1440,32V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0Z"
        ></path>
      </svg>
    </div>
  </section>
</template>


<script setup>
import { useRoute } from 'vue-router'
import langState from '@/lang/langState'
const route = useRoute()
</script>

<style scoped>
.hero {
    margin-top: -4rem;
    background: url('/images/hero.png') no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 2rem;
    text-align: center;
    
}

.hero-overlay {
    position: absolute;
    inset: 0;
   
    /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)); */
    z-index: 1;
}

.wave-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 1;
   margin-bottom: -1px; /* usuwa cienką linię */
  
}

.wave-divider svg {
  display: block;
  width: 100%;
  height: auto;
  
}
.hero-content {
    
    backdrop-filter: blur(5px);
    position: relative;
    z-index: 2;
    color: white;
    max-width: 700px;
    height: 230px;
}

.hero-title {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
}

.hero-button {
    background-color: #d63830;
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    transition: background 0.3s;
}

.hero-button:hover {
    background-color: #a7281f;
}
</style>
