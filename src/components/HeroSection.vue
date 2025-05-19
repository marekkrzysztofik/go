<template>
    <div class="hero-container">
        <section class="hero">
            <div class="hero-text">
                <h1>{{ langState.t.main.heroTitle }}</h1>
                <p>
                    {{ langState.t.main.heroSubtitle }}
                </p>
                <div class="hero-actions">
                    <RouterLink to="/projects" class="btn-primary"> {{ langState.t.main.heroButton }}</RouterLink>
                    <button class="btn-secondary">{{ langState.t.main.heroProcessTitle }}</button>
                </div>
            </div>
            <div class="hero-image">
                <img src="/images/crane.jpg" alt="Hero Image" class="image" />
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
    margin: 1rem auto;

    flex-wrap: wrap;
    background: white;
    border-radius: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.hero-text {

    padding: 1rem 3rem;
}

.hero h1 {
    font-size: 2.8rem;
    color: #1D1E2C;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.1rem;
    color: #444;
    margin-bottom: 2rem;
}

.hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.btn-primary {
    background-color: #D13C30;
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
    border: 2px solid #1D1E2C;
    color: #1D1E2C;
    padding: 0.7rem 1.4rem;
    border-radius: 999px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
}

.btn-secondary:hover {
    background-color: #1D1E2C;
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
</style>
