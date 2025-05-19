<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="flex items-center gap-24 mobile">
        <a @click="openModal" class="link attention"><i class="pi pi-envelope"></i> {{ langState.t.main.navbar.email
        }}</a>
        <a class="link"><i class="pi pi-phone"></i> {{ langState.t.main.navbar.phone }}</a>
      </div>

      <div @click="logoClick" class="logo-wrapper">
        <img src="/public/images/logo.png" alt="GlobalProperty" class="logo-image" />
      </div>

      <div class="flex items-center gap-24 mobile">
        <RouterLink class="link" to="/oferty">{{ langState.t.main.navbar.offers }}</RouterLink>
        <RouterLink class="link" to="/uslugi">{{ langState.t.main.navbar.services }}</RouterLink>
        <RouterLink class="link" to="/zespol">{{ langState.t.main.navbar.team }}</RouterLink>
        <RouterLink class="link" to="/kontakt">{{ langState.t.main.navbar.contact }}</RouterLink>
        <FavouritePreview />
        <button class="lang-toggle" @click="toggleLang">
          <Globe class="icon" />
          {{ langState.lang.toUpperCase() }}
        </button>
      </div>

      <div class="hamburger" :class="{ open: isOpen }" @click="toggleMobileMenu">
        <span></span><span></span><span></span>
      </div>

    </div>

    <Transition name="slide">
      <div v-if="isOpen" class="mobile-menu" @click="toggleMobileMenu">
        <RouterLink to="/oferty">{{ langState.t.main.navbar.offers }}</RouterLink>
        <RouterLink to="/uslugi">{{ langState.t.main.navbar.services }}</RouterLink>
        <RouterLink to="/zespol">{{ langState.t.main.navbar.team }}</RouterLink>
        <RouterLink to="/kontakt">{{ langState.t.main.navbar.contact }}</RouterLink>
      </div>
    </Transition>
  </nav>

  <Modal v-model:visible="formVisible" :style="{ backgroundColor: 'var(--primary)' }">
    <h2>{{ langState.t.main.contactus }}</h2>
    <ContactForm @close-modal="formVisible = false" />
  </Modal>


</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ContactForm from '@/components/ContactForm.vue'
import FavouritePreview from '@/components/FavouritePreview.vue'
import Modal from '@/components/Modal.vue'
import langState from '@/lang/langState'
import { useRouter, useRoute } from 'vue-router'
import { Globe } from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()
const isOpen = ref(false)
const formVisible = ref(false)

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

function toggleLang() {
  langState.lang = langState.lang === 'pl' ? 'en' : 'pl'
}

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value
}

function openModal() {
  formVisible.value = true
}

function logoClick() {
  if (route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push('/')
  }
}

const handleResize = () => {
  if (window.innerWidth > 768) {
    isOpen.value = false
  }
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--primary);
  border-bottom: 1px solid var(--secondary);
  box-shadow: 0 2px 6px rgba(212, 175, 55, 0.3);
  z-index: 1000;
}

.navbar-container {
  max-width: 90vw;
  height: 80px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo-wrapper {
  height: 92px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1001;
  background-color: var(--primary);
  padding: 5px 16px;
  border-left: 2px solid var(--secondary);
  border-right: 2px solid var(--secondary);
  border-bottom: 3px solid var(--secondary);
  cursor: pointer;
}

.logo-image {
  width: 200px;
}

.attention {
  animation: glow 1.8s infinite;
}

.link {
  color: var(--secondary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0%;
  height: 1px;
  background: var(--secondary);
  transition: width 0.3s;
}

.link:hover::after,
.link.active::after {
  width: 100%;
}

.favourites {
  display: flex;
  align-items: center;
  gap: 6px;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background-color: transparent;
  border: 1px solid var(--secondary);
  border-radius: 8px;
  color: var(--secondary);
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lang-toggle:hover {
  background-color: var(--secondary);
  color: var(--primary);
}

.lang-toggle .icon {
  width: 18px;
  height: 18px;
  stroke-width: 2;
}

/* Hamburger */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 999;
  padding: 0;
}

.hamburger span {
  display: block;
  width: 28px;
  height: 3px;
  background-color: #333;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center center;
  margin: 4px 0;
}

.hamburger span.open:nth-child(1) {
  transform: rotate(0deg);
  position: relative;
  top: 7px;
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg);
  position: relative;
  bottom: 7px;
}


/* Mobile menu */
.mobile-menu {
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  background-color: var(--primary);
  transition: max-height 0.4s ease;
  z-index: 1000;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.mobile-menu a {
  color: var(--secondary);
  text-decoration: none;
  font-weight: 500;
  padding: 10px 0;
  border-bottom: 1px solid #333;
}

.mobile-menu a:hover {
  color: var(--sec-hover);
}

/* Vue Transition: slide-down/up */
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.4s ease, opacity 0.4s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 300px;
  opacity: 1;
}

@keyframes glow {
  0% {
    text-shadow: 0 0 5px var(--secondary);
  }

  50% {
    text-shadow: 0 0 15px var(--sec-hover);
  }

  100% {
    text-shadow: 0 0 5px var(--secondary);
  }
}

@media (max-width: 1100px) {
  .navbar-container {
    justify-content: end;
  }
  .mobile {
    display: none;
  }

  .hamburger {
    display: flex;
    justify-content: flex-end;
  }

  .fav-label {
    display: none;
  }
}
@media (max-width: 500px) {
  .logo-wrapper {
    height: 100%;
    padding: 5px 5px;
  }
  .logo-image {
  width: 160px;
}
}
</style>
