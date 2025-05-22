<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-text">
        <h1>Designing Your Next Chapter.</h1>
        <p>
          Global Offshore delivers trusted marine & offshore services — from hydraulic systems to project support.
        </p>
      </div>
      <div class="hero-actions">
        <RouterLink to="/projects" class="btn-primary">Explore Projects</RouterLink>
        <button class="btn-secondary">Our Process</button>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.hero {
  width: 90vw;
  margin: 0 auto;
  height: 550px;
  border-radius: 30px;
  background: url('/images/crane.png');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 350px 0px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.hero-overlay {
  content: '';
  position: absolute;
  inset: 0;
 
  z-index: 0;
  border-radius: 30px;
}

.hero-content {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 20px;
  z-index: 1;
  width: 85vw;
  padding: 1rem;
  color: rgba(0, 0, 0, 0.7);
}

.hero-text {
  width: 400px;
}

.hero h1 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.5);
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary {
  background-color: var(--primary);
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
  border: 2px solid #fff;
  color: #fff;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

.btn-secondary:hover {
  background-color: white;
  color: #1D1E2C;
}
</style>