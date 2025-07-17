<template>
  <div>
    <!-- NAVBAR -->
    <header class="navbar">
      <div class="navbar-container">
        <div class="navbar-left">
          <RouterLink to="/" class="logo">
            <img src="/images/logo.png" alt="Logo" />
          </RouterLink>
        </div>

        <nav class="navbar-links">
          <a href="#uslugi" @click.prevent="goToHash('#uslugi')">Usługi</a>
          <RouterLink to="/about">O nas</RouterLink>
          <RouterLink to="/kariera">Kariera</RouterLink>
          <RouterLink to="/kontakt">Kontakt</RouterLink>
        </nav>

        <div class="navbar-right">
          <RouterLink to="/zgloszenie" class="cta">Zgłoś sprawę</RouterLink>
        </div>
      </div>
    </header>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">Twoje bezpieczeństwo jest naszym priorytetem</h1>
        <p class="hero-subtitle">Skutecznie i niezawodnie świadczymy usługi w branży morskiej.</p>
        <RouterLink to="/zgloszenie" class="hero-button">Zgłoś sprawę</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

function goToHash(hash) {
  if (route.path === '/') {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  } else {
    router.push({ path: '/', hash })
  }
}
</script>

<style scoped>
/* Navbar */
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  padding: 1rem 4vw;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 45px;
}

.navbar-links {
  display: flex;
  gap: 2rem;
}

.navbar-links a {
  color: white;
  font-weight: 500;
  text-decoration: none;
  position: relative;
}

.navbar-links a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0%;
  height: 1px;
  background: white;
  transition: width 0.3s ease;
}

.navbar-links a:hover::after {
  width: 100%;
}

.cta {
  background-color: #d63830;
  color: white;
  padding: 0.5rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;
}

.cta:hover {
  background-color: #a7281f;
}

.hero {
  background: url('/images/hero.png') no-repeat;
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}



.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  max-width: 800px;
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
