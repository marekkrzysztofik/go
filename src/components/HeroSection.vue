<template>
    <div class="hero-container">
        <section class="hero">
            <div class="hero-text">
                <h1>{{ langState.t.main.heroTitle }}</h1>
                <p>
                    {{ langState.t.main.heroSubtitle }}
                </p>
                <div class="hero-actions">
                    <RouterLink to="/zgloszenie" class="btn-primary"> {{ langState.t.main.heroButton }}</RouterLink>
                </div>
            </div>
            <div class="hero-image">
                <img src="/images/crane.png" alt="Hero Image" class="image" />
            </div>
        </section>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import langState from '@/lang/langState'
const route = useRoute()
</script>

<style scoped>
.hero {
    width: 90vw;
    height: 550px;
    display: grid;
    grid-template-columns: 1.25fr 1.75fr;
    align-items: center;
    margin: 2rem auto;
    flex-wrap: wrap;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
}



.hero-text {
    padding: 1rem 3rem;
}

.hero h1 {
    font-size: 2.8rem;
    font-weight: 600;
    color: var(--redtitle);
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.1rem;
    color: var(--subtitle);
    margin-bottom: 2rem;
}

.hero-actions {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;

}

.btn-primary {
    background-color: var(--primary);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
    transition: background 0.3s;
}

.btn-primary:hover {
    background-color: #a7281f;
}

.btn-secondary {
    background: transparent;
    border: 2px solid var(--title);
    color: var(--title);
    text-decoration: none;
    padding: 0.7rem 1.4rem;
    border-radius: 999px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
}

.btn-secondary:hover {
    background-color: var(--title);
    color: white;
}

.hero-image {
    padding-right: 48px;
}

.image {
    width: 100%;
    border-radius: 15px;
    object-fit: cover;
}


@media (max-width: 1024px) {
    .hero {
        display: flex;
    }

    .hero-image {
        display: none;
    }

    .hero h1 {
        font-size: 2rem;
    }

    .hero p {
        font-size: 1.1rem;
    }
}
@keyframes slideInLeft {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    0% {
        opacity: 0;
        transform: translateX(50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.hero-text {
    padding: 1rem 3rem;
    animation: slideInLeft 0.8s ease-out forwards;
}

.hero-actions {
    animation: slideInLeft 1s ease-out forwards;
}

.hero-image {
    padding-right: 48px;
    animation: slideInRight 0.8s ease-out forwards;
}
</style>
