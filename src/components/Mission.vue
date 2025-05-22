<template>
  <section class="mission">
    <div class="mission-wrapper">
      <img src="/images/1.jpg" alt="Mission visual" class="mission-image" />

      <div class="mission-points">
        <div class="point" v-for="item in items" :key="item.title">
          <div class="icon-box">
            <component :is="item.icon" size="28" stroke-width="2" />
          </div>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckSquare, Loader, Handshake } from 'lucide-vue-next'

const items = [
  {
    title: 'Quality Assurance',
    text: 'Our main goal is to provide our Customer with the highest quality of service. Experienced team, know-how, reliable suppliers.',
    icon: CheckSquare,
  },
  {
    title: 'Flexibility',
    text: 'We ensure timely completion and quick team mobilization. We adapt to project needs and deliver fast solutions.',
    icon: Loader,
  },
  {
    title: 'Customer Satisfaction',
    text: 'We focus on long-term client relationships through efficiency, competitive pricing and professional branding.',
    icon: Handshake,
  },
]
</script>

<style scoped>
.mission {
  background: #f9f9f9;
  padding: 4rem 2rem;
}

.mission-wrapper {
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  gap: 3rem;
  flex-wrap: wrap;
  align-items: center;
}

.mission-image {
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.mission-points {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.point {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.icon-box {
  min-width: 60px;
  height: 60px;
  background: rgba(209, 60, 48, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
}

.point h3 {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  color: #1D1E2C;
}

.point p {
  margin: 0;
  color: #555;
  line-height: 1.6;
}
</style>
