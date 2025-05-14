<template>
  <div class="hero-container">
    <section class="hero">
      <div class="hero-text">
        <h1>Designing Your Next Chapter.</h1>
        <p>
          Global Offshore delivers trusted marine & offshore services — from hydraulic systems to project support.
        </p>
        <div class="hero-actions">
          <RouterLink to="/projects" class="btn-primary">Explore Projects</RouterLink>
          <button class="btn-secondary">Our Process</button>
        </div>
      </div>
      <img src="/images/crane.jpg" alt="Hero Image" class="hero-image" />
    </section>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>

/* Navbar */
.navbar {
  background: white;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.navbar-inner {
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 40px;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;
  margin: 0;
}

.nav-item {
  color: #1D1E2C;
  text-decoration: none;
  font-weight: 500;
  position: relative;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #D13C30;
  transition: width 0.3s;
}

.nav-item:hover::after,
.nav-item.active::after {
  width: 100%;
}

.nav-cta {
  padding: 0.5rem 1.2rem;
  background: #D13C30;
  color: white;
  border-radius: 24px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s;
}

.nav-cta:hover {
  background: #a7281f;
}

/* Hero Section */
.hero {
  max-width: 1280px;
  margin: 4rem auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: white;
  border-radius: 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

.hero-text {
  max-width: 600px;
  padding: 1rem;
}

.hero h1 {
  font-size: 2.8rem;
  color: #1D1E2C;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary {
  background-color: #D13C30;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s;
}

.btn-primary:hover {
  background-color: #a7281f;
}

.btn-secondary {
  background: transparent;
  border: 2px solid #1D1E2C;
  color: #1D1E2C;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

.btn-secondary:hover {
  background-color: #1D1E2C;
  color: white;
}

.hero-image {
  max-width: 500px;
  width: 100%;
  border-radius: 24px;
  object-fit: cover;
}
</style>
