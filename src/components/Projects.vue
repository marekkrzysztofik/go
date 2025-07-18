<template>
  <section class="projects-section">
    <h2 class="section-title">{{ langState.t.main.projectsSection.title }}</h2>
    <p class="section-subtitle">{{ langState.t.main.projectsSection.subtitle }}</p>

    <div class="slider-wrapper">
      <button class="slider-arrow left" @click="scrollLeft">‹</button>

      <div class="offers-scroll-container" ref="sliderRef">
        <div v-for="(project, i) in projects" :key="i" class="project-card" :data-index="i" v-intersect="onIntersect">
          <img :src="project.image" :alt="project.title" class="project-image" />
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-location">{{ project.location }}</p>
            <p class="project-description">{{ project.description }}</p>
          </div>
        </div>
      </div>

      <button class="slider-arrow right" @click="scrollRight">›</button>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import langState from '@/lang/langState'

const projects = computed(() => langState.t.main.projectsSection.projects)
const sliderRef = ref(null)
const currentIndex = ref(0)
const isScrolling = ref(false)

const scrollToIndex = (index) => {
  if (isScrolling.value) return
  const card = sliderRef.value?.querySelector('.project-card')
  if (!card) return

  const cardWidth = card.offsetWidth + 24
  const newScrollLeft = index * cardWidth

  isScrolling.value = true
  sliderRef.value.scrollTo({
    left: newScrollLeft,
    behavior: 'smooth',
  })

  setTimeout(() => {
    isScrolling.value = false
  }, 600)
}

const visibleCards = 3

const scrollLeft = () => {
  currentIndex.value = Math.max(0, currentIndex.value - visibleCards)
  scrollToIndex(currentIndex.value)
}

const scrollRight = () => {
  const maxIndex = Math.max(0, projects.value.length - visibleCards)
  currentIndex.value = Math.min(maxIndex, currentIndex.value + visibleCards)
  scrollToIndex(currentIndex.value)
}

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
* {
  box-sizing: border-box;
}

.projects-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
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

.slider-wrapper {
  position: relative;
}

.offers-scroll-container {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  align-items: stretch;
}

.offers-scroll-container::-webkit-scrollbar {
  display: none;
}

.project-card {
  flex: 0 0 calc((100% - 48px) / 3);
  scroll-snap-align: start;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
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
  display: block;
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.project-content {
  padding: 16px 20px 24px;
  text-align: left;
  flex-grow: 1;
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

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--white);
  border: 2px solid var(--secondary);
  color: var(--primary);
  font-size: 2rem;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  z-index: 10;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  /* NOWE */
  align-items: center;
  /* CENTRUJ PION */
  justify-content: center;
  /* CENTRUJ POZIOM */

}

.slider-arrow:hover {
  background-color: var(--primary);
  color: var(--white);
}

.slider-arrow.left {
  left: -20px;
}

.slider-arrow.right {
  right: -20px;
}

@media (max-width: 960px) {
  .project-card {
    flex: 0 0 calc((100% - 24px) / 2);
  }
}

@media (max-width: 600px) {
  .project-card {
    flex: 0 0 100%;
  }
}
</style>
