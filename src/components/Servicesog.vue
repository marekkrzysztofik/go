<template>
  <section id="services" class="our-offer">
    <div class="overlay"></div>
    <div class="wave-divider">
      <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fefefe"
          d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,133.3C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
        </path>
      </svg>
    </div>
    <div class="title">
      <h2 class="section-title">{{ langState.t.main.ourOffer.title }}</h2>
      <p class="section-subtitle">{{ langState.t.main.ourOffer.subtitle }}</p>
    </div>


    <div class="columns-grid">
      <div v-for="(group, index) in groupedServices" :key="index" class="offer-group">
        <!-- <h3 class="group-title">{{ group.name }}</h3> -->
        <div class="service-grid">
          <div v-for="(service, idx) in group.services" :key="idx" ref="cards" class="card"
            :class="{ 'in-view': inViewCards.includes(`${index}-${idx}`) }" :data-id="`${index}-${idx}`">
            <component :is="service.icon" class="icon" />
            <h4 class="card-title">{{ service.title }}</h4>
            <p class="card-description">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wave-divider-bt">
      <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff"
          d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,133.3C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
        </path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  meta: [
    {
      name: 'description',
      content: 'Poznaj kompleksową ofertę usług Global Offshore. Specjalizujemy się w zarządzaniu projektami, projektach hydraulicznych, instalacjach offshore i serwisie przemysłowym.'
    },
    {
      property: 'og:title',
      content: 'Usługi Offshore | Global Offshore'
    },
    {
      property: 'og:description',
      content: 'Kompleksowe usługi dla branży offshore: hydraulika, mechanika, prefabrykacja, logistyka projektowa i więcej.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://globaloffshore.pl/#services'
    }
  ]
})
import langState from '@/lang/langState'
import { computed, ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import {
  ClipboardList, Wrench, Droplet, Eye, Bug, CheckCircle,
  RotateCcw, Package, Truck, BadgeCheck, Search, Cpu
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

const cards = ref([])
const inViewCards = ref([])
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.dataset.id
        if (entry.isIntersecting) {
          if (!inViewCards.value.includes(id)) {
            inViewCards.value.push(id)
          }
        } else {
          inViewCards.value = inViewCards.value.filter((v) => v !== id)
        }
      })
    },
    { threshold: 0.3 }
  )

  nextTick(() => {
    cards.value.forEach((el) => {
      if (el) observer.observe(el)
    })
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.title {
  position: relative;
  margin-top: 10rem;
  z-index: 4;
}

.wave-divider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 1;

  /* usuwa cienką linię */

}

.wave-divider svg {
  display: block;
  width: 100%;
  height: auto;

}
.wave-divider-bt {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 1;
    margin-bottom: -1px;
    /* usuwa cienką linię */

}

.wave-divider-bt svg {
    display: block;
    width: 100%;
    height: auto;
}
.overlay {
  position: absolute;
  inset: 0;
  /* background: rgba(11, 29, 81, 0.7); */
  background: rgba(0, 17, 32, 0.6);
  z-index: 1;
}

.our-offer {
  height: 180vh;
  position: relative;
  background: url('/images/ser.jpg') center center / cover no-repeat;
  width: 100%;
  padding: 4rem 2rem;
  text-align: center;
  color: var(--title);

}

.section-title {
  font-size: 2.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--white);
}

.section-subtitle {
  font-size: 1.1rem;
  margin-bottom: 3rem;
  color: var(--white);
}

.columns-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  max-width: 1100px;
  margin: 0 auto;
  z-index: 4;
}

.offer-group {
  padding: 2rem;
  border-radius: 16px;
  /* background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); */
  z-index: 4;
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
  height: 170px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
  transform: translateY(40px);
  opacity: 0;
  text-align: left;
  transition: all 0.6s ease;
}

.card.in-view:hover {
  transform: translateY(-8px) scale(1.015);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 5);
}

.card.in-view {
  transform: translateY(0);
  opacity: 1;
}

.icon {
  height: 28px;
  width: 28px;
  color: var(--primary);
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

@media (max-width: 500px) {
  .our-offer {
    width: 90vw;
    padding: 4rem 1rem;
    text-align: center;
    color: #001120;
  }

  .offer-group {
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

}
</style>
