<template>
  <section class="stats-section">
    <h2 class="section-title">{{ langState.t.main.statsSection.title }}</h2>
    <p class="section-subtitle">{{ langState.t.main.statsSection.subtitle }}</p>

    <div class="stats-grid">
      <div v-for="(stat, index) in stats" :key="index" class="stat-box" :data-index="index">
        <component :is="stat.icon" class="icon" :class="{ drawn: drawnIcons.includes(index) }" />
        <div class="value" :class="{ bounce: bouncingValues.includes(index) }">
          {{ animatedValues[index] }}{{ stat.suffix }}
        </div>
        <div class="label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { Clock, Globe, Briefcase, Wrench } from 'lucide-vue-next'
import langState from '@/lang/langState'

const stats = computed(() => [
  { label: langState.t.main.statsSection.labels.years, value: 12, suffix: '+', icon: Clock },
  { label: langState.t.main.statsSection.labels.countries, value: 15, suffix: '+', icon: Globe },
  { label: langState.t.main.statsSection.labels.projects, value: 200, suffix: '+', icon: Briefcase },
  { label: langState.t.main.statsSection.labels.services, value: 500, suffix: '+', icon: Wrench }
])

const animatedValues = ref([])
const bouncingValues = ref([])
const drawnIcons = ref([])

watch(stats, (newStats) => {
  animatedValues.value = newStats.map(() => 0)
}, { immediate: true })

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
      bouncingValues.value.push(index)

      setTimeout(() => {
        bouncingValues.value = bouncingValues.value.filter(i => i !== index)
      }, 300)
    }
  }, duration / frames)
}

onMounted(async () => {
  await nextTick()

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const index = Number(entry.target.getAttribute('data-index'))

      if (entry.isIntersecting) {
        animateValue(index, stats.value[index].value)
        if (!drawnIcons.value.includes(index)) {
          drawnIcons.value.push(index)
        }
      } else {
        animatedValues.value[index] = 0
        drawnIcons.value = drawnIcons.value.filter(i => i !== index)
      }
    })
  }, { threshold: 0.5 })

  document.querySelectorAll('.stat-box').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.stats-section {
  width: 90vw;
  padding: 4rem 2rem;
  text-align: center;
}

.section-title {
  font-size: 2.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--redtitle);
}

.section-subtitle {
  font-size: 1.1rem;
  margin-bottom: 3rem;
  color: var(--subtitle);
}

.stats-grid {
  width: 70vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 0 auto;
}

.stat-box {
  background-color: #ffffff;
  color: var(--title);
  padding: 2rem;
  border-radius: 12px;
  border-top: 4px solid #d63830;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.stat-box:hover {
  transform: translateY(-4px);
}

/* Bounce effect */
.value {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

.value.bounce {
  animation: bounceScale 0.3s ease;
}

@keyframes bounceScale {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

/* Draw icons – ALL SVG elements */
::v-deep(.icon path),
::v-deep(.icon line),
::v-deep(.icon polyline),
::v-deep(.icon circle),
::v-deep(.icon rect) {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: none;
}

.icon.drawn ::v-deep(path),
.icon.drawn ::v-deep(line),
.icon.drawn ::v-deep(polyline),
.icon.drawn ::v-deep(circle),
.icon.drawn ::v-deep(rect) {
  animation: drawIcon 3s ease-out forwards;
}

@keyframes drawIcon {
  to {
    stroke-dashoffset: 0;
  }
}

.icon {
  width: 36px;
  height: 36px;
  margin: 0 auto 1rem;
  stroke: #d63830;
}

.label {
  font-size: 1rem;
  color: var(--subtitle);
}

/* Responsive */
@media (max-width: 1024px) {
  .stats-section {
    width: 90%;
    padding: 4rem 1.5rem;
  }

  .section-title {
    text-align: left;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 3rem;
    color: #bfbfbd;
  }
}
</style>
