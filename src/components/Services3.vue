<template>
  <section class="our-offer">
    <h2 class="offer-title">Nasza oferta</h2>
    <p class="offer-subtitle">
      Kompleksowe wsparcie techniczne, serwisowe i logistyczne – z pasją do precyzji.
    </p>

    <div
      v-for="(category, i) in offerCategories"
      :key="i"
      class="category-block"
      v-intersect="onIntersect"
    >
      <h3 class="category-title">{{ category.title }}</h3>
      <div class="card-grid">
        <div
          v-for="(service, j) in category.services"
          :key="j"
          class="card"
          :style="{ transitionDelay: `${j * 100}ms` }"
        >
          <component :is="service.icon" class="icon" />
          <h4 class="card-title">{{ service.title }}</h4>
          <p class="card-description">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Settings,
  Wrench,
  Droplet,
  Cpu,
  Eye,
  AlertTriangle,
  PlayCircle,
  RefreshCcw,
  Package,
  Truck,
  FileText,
  ShoppingCart,
} from 'lucide-vue-next'

const offerCategories = [
  {
    title: 'Zarządzanie projektami',
    services: [
      {
        title: 'Koordynacja projektów',
        description: 'Pełna kontrola nad technicznymi aspektami projektów.',
        icon: Settings,
      },
    ],
  },
  {
    title: 'Montaż i instalacje',
    services: [
      {
        title: 'Montaż mechaniczny',
        description: 'Precyzyjny montaż urządzeń i struktur technicznych.',
        icon: Wrench,
      },
      {
        title: 'Instalacje hydrauliczne',
        description: 'Wysokociśnieniowe systemy hydrauliczne.',
        icon: Droplet,
      },
      {
        title: 'Jednostki sterujące (HPU)',
        description: 'Integracja zaawansowanych modułów kontrolnych.',
        icon: Cpu,
      },
    ],
  },
  {
    title: 'Serwis i naprawy',
    services: [
      {
        title: 'Inspekcje',
        description: 'Kontrola i ocena stanu technicznego urządzeń.',
        icon: Eye,
      },
      {
        title: 'Rozwiązywanie usterek',
        description: 'Szybka diagnostyka i naprawa problemów technicznych.',
        icon: AlertTriangle,
      },
      {
        title: 'Testy i uruchomienia',
        description: 'Kompleksowe testy i certyfikacja systemów.',
        icon: PlayCircle,
      },
      {
        title: 'Remonty techniczne',
        description: 'Generalne przeglądy i modernizacje urządzeń.',
        icon: RefreshCcw,
      },
    ],
  },
  {
    title: 'Sprzedaż i logistyka',
    services: [
      {
        title: 'Dostawy części',
        description: 'Komponenty OEM i zamienne dla systemów przemysłowych.',
        icon: Package,
      },
      {
        title: 'Logistyka i transport',
        description: 'Globalna obsługa dostaw i spedycji.',
        icon: Truck,
      },
      {
        title: 'Odprawy celne',
        description: 'Pełna dokumentacja i obsługa formalności.',
        icon: FileText,
      },
      {
        title: 'Zakupy techniczne',
        description: 'Dobór i sourcing komponentów specjalistycznych.',
        icon: ShoppingCart,
      },
    ],
  },
]

// dynamiczne dodawanie/odejmowanie klasy .visible
function onIntersect(entry) {
  const el = entry.target
  if (entry.isIntersecting) {
    el.classList.add('visible')
  } else {
    el.classList.remove('visible')
  }
}

// dyrektywa intersection observer
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
.our-offer {
  width: 85vw;
  margin: 0 auto;
  padding: 80px 60px;
  background-color: #f9fafb;
  border-radius: 15px;
  text-align: center;
}

.offer-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

.offer-subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 50px;
}

.category-block {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
  margin-bottom: 60px;
  text-align: left;
}

.category-block.visible {
  opacity: 1;
  transform: translateY(0);
}

.category-title {
  font-size: 24px;
  font-weight: 600;
  color: #d63830;
  margin-bottom: 20px;
}

.card-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.category-block.visible .card {
  opacity: 1;
  transform: translateY(0);
}

.icon {
  width: 40px;
  height: 40px;
  color: #d63830;
  margin-bottom: 16px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.card-description {
  font-size: 15px;
  color: #555;
}
</style>
