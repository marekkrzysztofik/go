<template>
    <header class="navbar">
        <div class="navbar-inner">
            <img src="@/assets/logo.png" alt="Logo" class="logo" />

            <ul class="nav-menu">
                <li>
                    <RouterLink to="/" class="nav-item" :class="{ active: route.path === '/' }">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about" class="nav-item">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/services" class="nav-item">Services</RouterLink>
                </li>
                <li>
                    <RouterLink to="/projects" class="nav-item">Projects</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact" class="nav-cta">Let’s Talk</RouterLink>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
/* Navbar */
.navbar {
    width: 98vw;
    background: white;
    padding: 1.2rem 2rem;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 10;
    position: sticky;
    top: 0;
    border-style: solid;
    border-color: var(--primary);
    border-width: 0 0 2px 0;
    
    z-index: 1000;
}

.navbar-inner {
    width: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    height: 70px;
}

.nav-menu {
    display: flex;
    gap: 2rem;
    list-style: none;
    align-items: center;
    margin: 0;
}

.nav-item {
    color: #1D1E2C;
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
    height: 2px;
    background: #D13C30;
    transition: width 0.3s;
}

.nav-item:hover::after,
.nav-item.active::after {
    width: 100%;
}

.nav-cta {
    padding: 0.5rem 1.2rem;
    background: #D13C30;
    color: white;
    border-radius: 24px;
    font-weight: 600;
    text-decoration: none;
    transition: background 0.3s;
}

.nav-cta:hover {
    background: #a7281f;
}
</style>