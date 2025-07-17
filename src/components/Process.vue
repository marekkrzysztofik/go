<template>
  <section class="process-section">
    <h2 class="section-title">{{ langState.t.main.processSection.title }}</h2>
    <p class="section-subtitle">{{ langState.t.main.processSection.subtitle }}</p>

    <div class="steps-wrapper">
      <div v-for="(step, index) in steps" :key="index" class="step-box" :data-index="index" v-intersect="onIntersect">
        <div class="circle-wrapper">{{ index + 1 }}</div>
        <div class="step-content">
          <component :is="step.icon" class="icon" />
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-description">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { ClipboardList, CalendarClock, Wrench, LifeBuoy } from 'lucide-vue-next'
import langState from '@/lang/langState'

const icons = [ClipboardList, CalendarClock, Wrench, LifeBuoy]
const steps = computed(() =>
  langState.t.main.processSection.steps.map((step, index) => ({
    ...step,
    icon: icons[index]
  }))
)

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
  font-size: 2.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--redtitle);
}

.section-subtitle {
  font-size: 18px;
  color: var(--subtitle);
  margin-bottom: 60px;
}

.steps-wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  position: relative;
  padding-top: 40px;
}

@media (min-width: 768px) {
  .steps-wrapper {
    flex-direction: row;
    justify-content: space-between;
  }

  .steps-wrapper::before {
    content: '';
    position: absolute;
    top: 64px;
    left: 110px;
    right: 110px;
    height: 2px;
    background-color: #d63830;
    z-index: 0;
  }
}

.step-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  position: relative;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s ease;
}

.step-box.visible {
  opacity: 1;
  transform: translateY(0);
}

.circle-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #d63830;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.step-content {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  width: 100%;
  height: 200px; 
  transition: all 0.3s;
}
.step-content:hover {
  transform: translateY(-4px);
}
.icon {
  width: 28px;
  height: 28px;
  color: #d63830;
  margin-bottom: 10px;
}

.step-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--title);
}

.step-description {
  font-size: 15px;
  color: var(--subtitle);
}
</style>
