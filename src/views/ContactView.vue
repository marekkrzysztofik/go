<template>
  <section class="contact-section">
    <div class="contact-grid">
      <div class="contact-info">
        <h2 class="section-title">{{ langState.t.main.contactPage.title }}</h2>
        <p class="section-subtitle">{{ langState.t.main.contactPage.subtitle }}</p>

        <div class="contact-details">
          <p><strong>{{ langState.t.main.contactTitle }}:</strong></p>
          <p>Hutnicza 12<br />81-061 Gdynia, Poland</p>
          <p><a :href="'mailto:' + langState.t.main.contactPage.email">{{ langState.t.main.contactPage.email }}</a></p>

          <p><strong>{{ langState.t.main.departmentsTitle }}:</strong></p>
          <p>{{ langState.t.main.production }}: +48 888 293 024</p>
          <p>{{ langState.t.main.service }}: +48 602 113 006</p>
        </div>
      </div>

      <div class="map-wrapper">
        <iframe
          class="map-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2332.2992398628817!2d18.538839316075887!3d54.55105700385359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd7332b10e9f91%3A0xa546364763bb6c2a!2sHutnicza%2012%2C%2081-061%20Gdynia!5e0!3m2!1spl!2spl!4v1683192302859!5m2!1spl!2spl"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import langState from '@/lang/langState'
</script>

<style scoped>
.contact-section {
  padding: 80px 20px;
  background-color: #f9f9f9;
}

.contact-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .contact-grid {
    flex-direction: row;
    align-items: flex-start;
  }
}

.contact-info {
  flex: 1;
}

.section-title {
  font-size: 2rem;
  color: #d63830;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.contact-details p {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #001120;
}

.contact-details a {
  color: #d63830;
  text-decoration: none;
  font-weight: 500;
}

.contact-details a:hover {
  text-decoration: underline;
}

.map-wrapper {
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.map-frame {
  width: 100%;
  height: 400px;
  border: none;
}
</style>
