<template>
  <section class="why-us-section">
    <div class="section-header">
      
    </div>

    <div class="features-grid">
      <div v-for="(feature, index) in features" :key="index" class="feature-card" data-aos="fade-up" :data-aos-delay="index * 150">
        <component :is="feature.icon" class="feature-icon" />
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-description">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Globe, Wrench, ShieldCheck, Users } from 'lucide-vue-next'
import langState from '@/lang/langState'

const features = [
  {
    title: 'Działamy globalnie',
    description: 'Realizujemy zlecenia w Norwegii, Holandii, ZEA i wielu innych krajach.',
    icon: Globe,
  },
  {
    title: 'Własny sprzęt i narzędzia',
    description: 'Wyposażenie serwisowe, kontrola jakości i szybki czas reakcji.',
    icon: Wrench,
  },
  {
    title: 'Certyfikowane zespoły',
    description: 'Nasi pracownicy posiadają uprawnienia DNV, TÜV i offshore BOSIET.',
    icon: ShieldCheck,
  },
  {
    title: 'Doświadczony zespół',
    description: '20+ monterów i inżynierów gotowych na najtrudniejsze projekty.',
    icon: Users,
  },
]
</script>

<style scoped>
.why-us-section {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-header {
  margin-bottom: 40px;
}

.section-title {
  font-size: 2.4rem;
  color: var(--redtitle);
  font-weight: 600;
}

.section-subtitle {
  font-size: 18px;
  color: var(--subtitle);
  margin-top: 8px;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.feature-card {
  background-color: white;
  border-radius: 16px;
  padding: 30px 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  cursor: default;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.feature-icon {
  width: 40px;
  height: 40px;
  margin: 0 auto 16px;
  color: var(--primary);
}

.feature-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--title);
}

.feature-description {
  font-size: 14px;
  color: var(--subtitle);
  line-height: 1.5;
}
</style>
