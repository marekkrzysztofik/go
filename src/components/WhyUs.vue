<template>
  <section class="stats-section">
    <h2 class="section-title">Zaufali nam</h2>
    <p class="section-subtitle">Doświadczenie, które budujemy globalnie.</p>

    <div class="stats-grid">
      <div v-for="(stat, index) in stats" :key="index" class="stat-box" :data-index="index">
        <component :is="stat.icon" class="icon" />
        <div class="value">{{ animatedValues[index] }}{{ stat.suffix }}</div>
        <div class="label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Globe, Briefcase, Wrench, Clock } from 'lucide-vue-next'

const stats = [
  { label: 'Lat na rynku', value: 12, suffix: '+', icon: Clock },
  { label: 'Kraje', value: 15, suffix: '+', icon: Globe },
  { label: 'Zrealizowane projekty', value: 200, suffix: '+', icon: Briefcase },
  { label: 'Serwisy offshore', value: 500, suffix: '+', icon: Wrench }
]

const animatedValues = ref(stats.map(() => 0))

function animateValue(index, to, duration = 1200) {
  const frames = 60
  const increment = to / frames
  let current = 0
  let frame = 0

  const interval = setInterval(() => {
    frame++
    current += increment
    animatedValues.value[index] = Math.min(Math.floor(current), to)

    if (frame >= frames) {
      clearInterval(interval)
      animatedValues.value[index] = to
    }
  }, duration / frames)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const index = Number(entry.target.getAttribute('data-index'))

        if (entry.isIntersecting) {
          animateValue(index, stats[index].value)
        } else {
          animatedValues.value[index] = 0 // opcjonalnie reset przy wyjściu
        }
      })
    },
    { threshold: 0.5 }
  )

  document.querySelectorAll('.stat-box').forEach((el, i) => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.stats-section {
  width: 80vw;
  padding: 4rem 2rem;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1.1rem;
  margin-bottom: 3rem;
  color: #bfbfbd;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 0 auto;
}

.stat-box {
  background-color: #ffffff;
  color: #001120;
  padding: 2rem;
  border-radius: 12px;
  border-top: 4px solid #d63830;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.stat-box:hover {
  transform: translateY(-4px);
}

.icon {
  width: 36px;
  height: 36px;
  color: #d63830;
  margin: 0 auto 1rem;
}

.value {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.label {
  font-size: 1rem;
  color: #333;
}
</style>
