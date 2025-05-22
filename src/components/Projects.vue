<template>
  <section class="projects-section">
    <h2 class="section-title">{{ langState.t.main.projectsSection.title }}</h2>
<p class="section-subtitle">{{ langState.t.main.projectsSection.subtitle }}</p>

    <div class="projects-grid">
      <div v-for="(project, i) in projects" :key="i" class="project-card" :data-index="i" v-intersect="onIntersect">
        <img :src="project.image" :alt="project.title" class="project-image" />
        <div class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-location">{{ project.location }}</p>
          <p class="project-description">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import langState from '@/lang/langState'

const projects = computed(() => langState.t.main.projectsSection.projects)

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
.projects-section {
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
  margin-bottom: 50px;
}

.projects-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
}




.project-card {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  transform: translateY(40px);
  opacity: 0;
  transition: all 0.8s ease;
}

.project-card.visible {
  transform: translateY(0);
  opacity: 1;
}

.project-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.project-content {
  padding: 16px 20px 24px;
  text-align: left;
}

.project-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--title);
}

.project-location {
  font-size: 14px;
  color: #d63830;
  margin-bottom: 10px;
}

.project-description {
  font-size: 15px;
  color: var(--subtitle);
}

@media (min-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 960px) {
  .projects-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
