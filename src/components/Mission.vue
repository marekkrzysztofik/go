<template>
  <!-- Misja i wartości -->
  <div class="mission-section fade-in">
    <h2 class="section-title">{{ langState.t.main.missionTitle }}</h2>
    <div class="mission-cards">
      <div class="mission-card" v-for="item in langState.t.main.missionPoints" :key="item.title">
        <div class="icon-wrapper">
          <component :is="iconMap[item.icon]" size="28" stroke-width="2" />
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
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 0 20px;
}
.section-title {
  font-size: 2rem;
  color: #d63830;
  margin-bottom: 1rem;
  font-weight: 600;
}
.mission-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.mission-card {
  background: #fff;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(209, 60, 48, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d63830;
  margin-bottom: 1rem;
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
</style>
