<template>
  <section class="our-offer">
   <h2 class="section-title">{{ langState.t.main.ourOffer.title }}</h2>
<p class="section-subtitle">{{ langState.t.main.ourOffer.subtitle }}</p>

    <div class="columns-grid">
      <div v-for="(group, index) in groupedServices" :key="index" class="offer-group">
        <h3 class="group-title">{{ group.name }}</h3>
        <div class="service-grid">
          <div v-for="(service, idx) in group.services" :key="idx" class="card">
            <component :is="service.icon" class="icon" />
            <h4 class="card-title">{{ service.title }}</h4>
            <p class="card-description">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import langState from '@/lang/langState'
import { computed } from 'vue'
import {
  ClipboardList,
  Wrench,
  Droplet,
  Cpu,
  Eye,
  Bug,
  CheckCircle,
  RotateCcw,
  Package,
  Truck,
  BadgeCheck,
  Search
} from 'lucide-vue-next'

const iconMatrix = [
  [ClipboardList, Wrench, Droplet],
  [Eye, Bug, CheckCircle],
  [Package, Truck, Search]
]

const groupedServices = computed(() =>
  langState.t.main.ourOffer.groups.map((group, groupIndex) => ({
    name: group.name,
    services: group.services.map((service, serviceIndex) => ({
      ...service,
      icon: iconMatrix[groupIndex][serviceIndex]
    }))
  }))
)
</script>

<style scoped>
.our-offer {
  width: 90vw;
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
  color: #001120;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1.1rem;
  margin-bottom: 3rem;
  color: #555;
}

.columns-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.offer-group {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.group-title {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  color: #d63830;
  font-weight: 600;
}

.service-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
}

.card {
  height: 150px;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease;
  text-align: left;
}

.card:hover {
  transform: translateY(-4px);
}

.icon {
  height: 28px;
  width: 28px;
  color: #d63830;
  margin-bottom: 0.75rem;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.card-description {
  font-size: 0.9rem;
  color: #333;
}
</style>
