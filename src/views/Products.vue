<template>
    <section class="product-page">
        <div class="header-section">
            <div class="overlay" />
            <div class="header-content">
                <h1>{{ langState.t.main.products.title }}</h1>
                <p>{{ langState.t.main.products.subtitle }}</p>
            </div>
        </div>
 
        <div class="product-grid">
            <div v-for="(item, index) in langState.t.main.products.productCategories" :key="index" class="product-card">
                <img :src="item.image" :alt="item.name" />
                <h3>{{ item.name }}</h3>
            </div>
        </div>
    </section>
</template>

<script setup>
import langState from '@/lang/langState'
</script>

<style scoped>
.product-page {
    margin: 3rem auto 6rem;
    width: 80%;
    font-family: 'Inter', sans-serif;
    background-image: url('/images/products/ship.webp');
    background-size: cover;
    background-position: center;
}

.header-section {
    position: relative;
    background-image: url('/images/products/ship.webp');
    /* <- Zamień na właściwą nazwę */
    background-size: cover;
    background-position: center;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
}

.overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
}

.header-content {
    position: relative;
    z-index: 1;
}

.header-content h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

.header-content p {
    font-size: 1.25rem;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    padding: 3rem 2rem;
    background: white;
}

.product-card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 1rem;
    text-align: center;
    transition: transform 0.3s ease;
}

.product-card img {
    max-width: 80px;
    margin-bottom: 1rem;
}

.product-card h3 {
    color: #7a1312;
    font-size: 1.1rem;
}

.product-card:hover {
    transform: scale(1.05);
}
</style>
