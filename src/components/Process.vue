<template>
  <section class="process-section">
    <h2 class="section-title">Proces współpracy</h2>
    <p class="section-subtitle">Przejrzysty przebieg każdego projektu – od zapytania po realizację i wsparcie.</p>

    <div class="steps-wrapper">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="step-box"
        :data-index="index"
        v-intersect="onIntersect"
      >
        <div class="icon-circle">
          <component :is="step.icon" class="icon" />
        </div>
        <h3 class="step-title">{{ step.title }}</h3>
        <p class="step-description">{{ step.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ClipboardList, CalendarClock, Wrench, LifeBuoy } from 'lucide-vue-next'

const steps = [
  {
    title: '1. Konsultacja',
    description: 'Zbieramy wymagania techniczne, omawiamy szczegóły projektu.',
    icon: ClipboardList
  },
  {
    title: '2. Planowanie',
    description: 'Opracowujemy harmonogram, dobieramy zasoby i zespół.',
    icon: CalendarClock
  },
  {
    title: '3. Realizacja',
    description: 'Wykonujemy montaż, testy i dostawy w ustalonych terminach.',
    icon: Wrench
  },
  {
    title: '4. Wsparcie',
    description: 'Zapewniamy serwis, pomoc i długoterminowe wsparcie techniczne.',
    icon: LifeBuoy
  }
]

function onIntersect(entry) {
  const el = entry.target
  if (entry.isIntersecting) {
    el.classList.add('visible')
  } else {
    el.classList.remove('visible')
  }
}

const vIntersect = {
  mounted(el, binding) {
    const observer = new IntersectionObserver(([entry]) => {
      if (typeof binding.value === 'function') {
        binding.value(entry)
      }
    }, { threshold: 0.1 })
    observer.observe(el)
  }
}
</script>

<script>
export default {
  directives: {
    intersect: {
      mounted(el, binding) {
        const observer = new IntersectionObserver(([entry]) => {
          if (typeof binding.value === 'function') {
            binding.value(entry)
          }
        }, { threshold: 0.1 })
        observer.observe(el)
      }
    }
  }
}
</script>

<style scoped>
.process-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  text-align: center;
}

.section-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

.section-subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 50px;
}

.steps-wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@media (min-width: 768px) {
  .steps-wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
}

.step-box {
  background-color: #ffffff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  flex: 1;
  max-width: 280px;
  margin: 0 auto;
  transition: all 0.6s ease;
  opacity: 0;
  transform: translateY(40px);
}

.step-box.visible {
  opacity: 1;
  transform: translateY(0);
}

.icon-circle {
  width: 60px;
  height: 60px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background-color: #d63830;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 28px;
  height: 28px;
  color: #fff;
}

.step-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.step-description {
  font-size: 15px;
  color: #444;
}
</style>
