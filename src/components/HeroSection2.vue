<template>
    <section class="hero">
        <div class="overlay"></div>
        <div class="content">
            <p class="welcome">{{ langState.t.main.heroTitle }}</p>
            <h1 class="title">GLOBAL OFFSHORE</h1>
            <p class="description">
                {{ langState.t.main.heroDesc }}
            </p>
            <RouterLink to="/kontakt" class="contact-button"> {{ langState.t.main.navbar.contact }}</RouterLink>
        </div>

        <div class="wave-divider">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path fill="#fff"
                    d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,133.3C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </path>
            </svg>
        </div>
    </section>
</template>
<script setup>
import langState from '@/lang/langState'
</script>
<style scoped>
.wave-divider {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 1;
    margin-bottom: -1px;
}

.wave-divider svg {
    display: block;
    width: 100%;
    height: auto;
}

.hero {
    margin-top: -80px;
    width: 100%;
    position: relative;
    height: 110vh;
    background: url('/images/hero.jpg');
    background-position: center -100px;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    color: white;
}

.overlay {
    position: absolute;
    inset: 0;
    background: rgba(24, 24, 24, 0.7);
    z-index: 1;
}

.content {
    position: absolute;
    left: 50px;
    top: 150px;
    max-width: 600px;
    z-index: 2;
}

.welcome {
    color: #d63830;
    font-weight: 600;
    font-size: 1.7rem;
    margin-bottom: 0.5rem;
}

.title {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
}

.description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    backdrop-filter: blur(2px);
}

.contact-button {
    background-color: #d63830;
    color: white;
    border: none;
    text-decoration: none;
    padding: 0.75rem 2rem;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.contact-button:hover {
    background-color: #b62f27;
}

@media (max-width: 768px) {
 .wave-divider {
    display: none;
}
.overlay {
    height: 86.5%;
}
}
</style>
