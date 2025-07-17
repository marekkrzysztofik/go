<template>
  <section class="our-offer">
    <h2 class="main-title">{{ langState.t.main.ourOffer.title }}</h2>
    <p class="main-subtitle">{{ langState.t.main.ourOffer.subtitle }}</p>

    <div v-for="(group, groupIndex) in groupedServices" :key="group.name"
      :class="['group-section', groupIndex % 2 === 1 ? 'reverse' : '']">
      <div :class="['image-wrapper', groupIndex % 2 === 1 ? 'reverse' : '']">
        <img :src="group.src" :alt="group.name" class="background-image" />
      </div>

      <div class="content">
        <h3 class="section-title">{{ group.name }}</h3>
        <ul class="services-list">
          <li v-for="service in group.services" :key="service.title">
            <component :is="service.icon" class="icon-circle" />
            <div class="text">
              <h4>{{ service.title }}</h4>
              <p>{{ service.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import langState from '@/lang/langState'
import { computed, ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import {
  ClipboardList, Wrench, Droplet,
  Eye, Bug, CheckCircle,
  Package, Truck, Search
} from 'lucide-vue-next'

const iconMatrix = [
  [ClipboardList, Wrench, Droplet],
  [Eye, Bug, CheckCircle],
  [Package, Truck, Search]
]

const groupedServices = computed(() =>
  langState.t.main.ourOffer.groups.map((group, groupIndex) => ({
    name: group.name,
    src: group.src,
    services: group.services.map((service, serviceIndex) => ({
      ...service,
      icon: iconMatrix[groupIndex][serviceIndex]
    }))
  }))
)
</script>

<style scoped>
.our-offer {
  padding: 5rem 2rem;
  background-color: #fefefe;
  margin: 0 auto;
}

.main-title {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #001120;
}

.main-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 4rem;
}

.group-section {
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
  margin-bottom: 6rem;
}

.group-section.reverse {
  direction: rtl;
}

.group-section.reverse .content,
.group-section.reverse .services-list li {
  direction: ltr;
}

.image-wrapper {
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  overflow: hidden;
}

.image-wrapper.reverse {
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.03);
  transition: transform 0.5s ease;
}

.image-wrapper:hover .background-image {
  transform: scale(1.05);
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #001120;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.services-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.icon-circle {
  background-color: #d63830;
  color: white;
  padding: 0.6rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
}

.text h4 {
  margin: 0;
  font-size: 1.1rem;
  color: #222;
}

.text p {
  margin: 0.3rem 0 0;
  font-size: 0.95rem;
  color: #666;
}

@media (max-width: 960px) {

  .group-section,
  .group-section.reverse {
    grid-template-columns: 1fr;
    direction: ltr;
  }

  .image-wrapper {
    clip-path: none;
    height: 250px;
  }

  .background-image {
    height: 100%;
  }
}
</style>
