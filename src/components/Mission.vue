<template>
  <!-- Misja i wartości -->
  <div class="mission-section fade-in">
    
    <div class="mission-cards">
      <div class="mission-card" v-for="item in langState.t.main.missionPoints" :key="item.title">
        <div>
          <component :is="iconMap[item.icon]" class="feature-icon" size="28" stroke-width="2" />
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>

</template>

<script setup>
import { CheckSquare, Loader, Handshake } from 'lucide-vue-next'
import langState from '@/lang/langState'

const iconMap = {
  CheckSquare,
  Loader,
  Handshake,
}
</script>

<style scoped>
.mission-section {
  max-width: 1100px;
  margin: 80px auto 0;
  padding: 0 20px;
}
.section-title {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 600;
}
.mission-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0rem;
  margin-top: 2rem;
}

.mission-card {
  width: 90%;
  margin-bottom: 1rem;
  background: #fff;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
}
.mission-card:hover {
  transform: translateY(-8px) scale(1.015);
  box-shadow: 0 2px 5px rgba(24, 24, 24, 0.5); 
}
.mission-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #1D1E2C;
}

.mission-card p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
}
.feature-icon {
  width: 40px;
  height: 40px;
  margin: 0 auto 16px;
  color: var(--primary);
}
</style>
