<template>
    <header class="navbar" :class="{ hidden: isNavbarHidden }">
        <div class="navbar-inner">
            <RouterLink to="/" class="logo-link">
                <img src="/images/logo.png" alt="Logo" class="logo" />
            </RouterLink>

            <button class="hamburger" @click="toggleMenu" :aria-expanded="isMenuOpen">
                <span :class="{ open: isMenuOpen }"></span>
                <span :class="{ open: isMenuOpen }"></span>
                <span :class="{ open: isMenuOpen }"></span>
            </button>

            <transition name="slide-fade">
                <ul v-show="isMenuOpen || isDesktop" class="nav-menu" @click="toggleMenu"
                    :class="{ desktop: isDesktop }">
                    <li>
                        <a href="#services" class="nav-item" @click.prevent="goToHash('#services')">{{
                            langState.t.main.navbar.services }}</a>
                    </li>
                    <li>
                        <RouterLink to="/about" class="nav-item" :class="{ active: route.path === '/about' }">{{
                            langState.t.main.navbar.about }}</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/kariera" class="nav-item" :class="{ active: route.path === '/kariera' }">
                            {{
                                langState.t.main.navbar.carrers }}</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/kontakt" class="nav-item" :class="{ active: route.path === '/kontakt' }">{{
                            langState.t.main.navbar.contact }}</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/zgloszenie" class="lang-toggle"> {{ langState.t.main.heroButton }}</RouterLink>
                    </li>

                    <button class="lang-toggle" @click="toggleLang">
                        <Globe class="icon" />
                        {{ langState.lang.toUpperCase() }}
                    </button>
                </ul>
            </transition>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import langState from '@/lang/langState'
import { Globe } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const isMenuOpen = ref(false)
const isDesktop = ref(window.innerWidth > 1024)
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
    if (!isDesktop.value) isMenuOpen.value = !isMenuOpen.value
}

function handleResize() {
    isDesktop.value = window.innerWidth > 1024
    if (isDesktop.value) isMenuOpen.value = false
}

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

onMounted(async () => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.navbar {
    width: 100%;
    background: rgba(255, 255, 255, 1);
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    border-bottom: 2px solid var(--primary);
    z-index: 1000;
    transition: transform 0.3s ease;
}

.navbar.hidden {
    transform: translateY(-100%);
}

.navbar-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    height: 60px;
}

.logo-link {
    margin-left: 20px;
}

.hamburger {
    display: none;
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
    width: 30px;
    height: 3px;
    background-color: #333;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center center;
    margin: 3px auto;
}

.hamburger span.open:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.hamburger span.open:nth-child(2) {
    opacity: 0;
}

.hamburger span.open:nth-child(3) {
    transform: translateY(-10px) rotate(-45deg);
}

.nav-menu {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 1rem;
    padding: 0;
    overflow: hidden;
    max-height: 500px;
}

.nav-menu.desktop {
    flex-direction: row;
    align-items: center;
    margin: 0;
    gap: 2rem;
    max-height: none;
}

.nav-item {
    color: var(--redtitle);
    text-decoration: none;
    font-weight: 500;
    position: relative;
}

.nav-item::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0%;
    height: 1px;
    background: var(--primary);
    transition: width 0.2s;
}

.nav-item:hover::after,
.nav-item.active::after {
    width: 100%;
}

.nav-cta {
    color: white;
    text-decoration: none;
}

.nav-cta:hover {
    background: #a7281f;
}

.lang-toggle {
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 0.5rem 1.2rem;
    background-color: var(--primary);
    text-decoration: none;
    color: var(--white);
    border-radius: 24px;
    border: none;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.lang-toggle:hover {
    background: #a7281f;
}

.lang-toggle .icon {
    width: 18px;
    height: 18px;
    stroke-width: 2.5;
}

/* Animacja rozwijanego menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
    overflow: hidden;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
}

@media (max-width: 1024px) {
    .hamburger {
        display: flex;
    }

    .nav-menu {
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        padding: 1rem 2rem;
        border-top: 1px solid #eee;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    }

    .nav-item,
    .nav-cta,
    .lang-toggle {
        width: 100%;
    }
}
</style>
