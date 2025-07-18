<template>
  <header class="navbar" :class="{ hidden: isNavbarHidden }">
    <!-- GÓRNA CZĘŚĆ -->
    <div class="navbar-top">
      <RouterLink to="/" class="logo-link">
        <img src="/images/logo.png" alt="Logo" class="logo" />
      </RouterLink>
      <div class="spacer" />
      <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </button>
      <div class="contact-info" v-show="isDesktop">
        <div class="info-tile">
          <Smartphone class="icon" />
          <div>
            <strong>{{ langState.t.main.navbar.call }}</strong><br />
            <span>+48 888 293 024</span>
          </div>
        </div>
        <div class="info-tile">
          <Mail class="icon" />
          <div>
            <strong>{{ langState.t.main.navbar.write }}</strong><br />
            <span>contact@globaloffshore.pl</span>
          </div>
        </div>
        <div class="info-tile">
          <MapPin class="icon" />
          <div>
            <strong>84-240 Reda</strong><br />
            <span>ul. Gniewowska 12</span>
          </div>
        </div>
      </div>
    </div>

    <!-- DÓŁ - MENU -->
    <div class="navbar-bottom" v-show="isDesktop">
      <div class="bottom-inner">
        <nav class="nav-links">
          <RouterLink to="/about">{{ langState.t.main.navbar.about }}</RouterLink>
          <RouterLink to="/produkty">{{ langState.t.main.navbar.products }}</RouterLink>
          <RouterLink to="/kariera">{{ langState.t.main.navbar.carrers }}</RouterLink>
          <RouterLink to="/kontakt" class="nav-button"> {{ langState.t.main.navbar.contact }}</RouterLink>
          <button class="nav-button" @click="toggleLang">
            <Globe class="icon" />
            {{ langState.lang.toUpperCase() }}
          </button>
        </nav>
      </div>
    </div>

    <transition name="slide-fade">
      <div class="mobile-menu" v-if="isMenuOpen && !isDesktop" @click.self="toggleMenu">
        <nav class="mobile-nav">
          <RouterLink @click="toggleMenu" to="/about">{{ langState.t.main.navbar.about }}</RouterLink>
          <RouterLink @click="toggleMenu" to="/produkty">{{ langState.t.main.navbar.products }}</RouterLink>
          <RouterLink @click="toggleMenu" to="/kariera">{{ langState.t.main.navbar.carrers }}</RouterLink>
          <RouterLink @click="toggleMenu" to="/kontakt">{{ langState.t.main.navbar.contact }}</RouterLink>
          <button class="nav-button" @click="toggleLang">
            <Globe class="icon" />
            {{ langState.lang.toUpperCase() }}
          </button>
        </nav>
      </div>
    </transition>
  </header>
</template>


<script setup>
import { Mail, Smartphone, MapPin, Globe } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import langState from '@/lang/langState'

const route = useRoute()
const router = useRouter()
const isMenuOpen = ref(false)
const isDesktop = ref(false)
const isNavbarHidden = ref(false)

let lastScroll = 0
const goToHash = async (hash) => {
  if (route.path === '/') {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  } else {
    router.push({ path: '/', hash })
  }
}

function toggleLang() {
  langState.lang = langState.lang === 'pl' ? 'en' : 'pl'
}

function toggleMenu() {
  if (!isDesktop.value) {
    isMenuOpen.value = !isMenuOpen.value
  }
}

function handleResize() {
  if (typeof window !== 'undefined') {
    isDesktop.value = window.innerWidth > 1024
    if (isDesktop.value) {
      isMenuOpen.value = false
    }
  }
}
watchEffect(() => {
  if (isDesktop.value) isMenuOpen.value = false
})

function handleScroll() {
  const currentScroll = window.pageYOffset

  if (currentScroll <= 0) {
    isNavbarHidden.value = false
    return
  }

  if (currentScroll > lastScroll && currentScroll > 100) {
    isNavbarHidden.value = true
  } else if (currentScroll < lastScroll) {
    isNavbarHidden.value = false
  }

  lastScroll = currentScroll
}

onMounted(() => {
  handleResize()
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
.navbar {
  width: 100%;
  font-family: sans-serif;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: transform 0.3s ease;
}

.navbar.hidden {
  transform: translateY(-100%);
}

/* GÓRA */
.navbar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4vw;
  background: white;
}

.logo {
  height: 60px;
}

.contact-info {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.info-tile {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.info-tile .icon {
  width: 24px;
  height: 24px;
  color: #8b1e1e;
}

.info-tile strong {
  font-size: 0.95rem;
  color: #000;
}

.info-tile span {
  font-size: 0.9rem;
  color: #333;
}

/* DÓŁ */
.navbar-bottom {
  position: relative;
  background-color: var(--primary);
  height: 60px;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
  width: 60%;
}

.bottom-inner {
  height: 100%;
  margin-right: 7rem;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 1.5rem;
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.social-icon {
  color: white;
  width: 24px;
  height: 24px;
  transition: opacity 0.2s ease;
}

.social-icon:hover {
  opacity: 0.8;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
}


.nav-button {
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 0.5rem 1.2rem;
  background-color: var(--primary);
  text-decoration: none;
  color: var(--white);
  border-radius: 24px;
  border: solid white 1px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background: #fefefe;
  color: var(--primary);
}


.nav-button .icon {
  width: 18px;
  height: 18px;
  stroke-width: 2.5;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background: #333;
  transition: 0.4s;
}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 4px);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

@media (max-width: 1024px) {
  .hamburger {
    display: flex;
  }

  .contact-info {
    display: none;
  }

  .navbar-bottom {
    display: none;
  }
}

/* Mobile Menu Overlay */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.mobile-nav a,
.mobile-nav {
  font-size: 1.1rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: bold;
}

/* Transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}
</style>
