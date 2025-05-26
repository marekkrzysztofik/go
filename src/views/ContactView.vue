<template>
  <section class="contact-section">
    <h2 class="section-title">{{ langState.t.main.contactPage.title }}</h2>
    <p class="section-subtitle">{{ langState.t.main.contactPage.subtitle }}</p>

    <div class="contact-layout">
      <div class="info-column">
        <div class="info-tile">
          <Phone class="icon" />
          <div>
            <h3>{{ langState.t.main.production }}</h3>
            <p>+48 888 293 024</p>
          </div>
        </div>
        <div class="info-tile">
          <Phone class="icon" />
          <div>
            <h3>{{ langState.t.main.service }}</h3>
            <p>+48 602 113 006</p>
          </div>
        </div>
        <div class="info-tile">
          <Mail class="icon" />
          <div>
            <h3>Email</h3>
            <a>{{ langState.t.main.contactPage.email }}</a>
          </div>
        </div>
        <div class="info-tile">
          <MapPin class="icon" />
          <div>
            <h3>{{ langState.t.main.address }}</h3>
            <p>Hutnicza 12<br />81-061 Gdynia, Poland</p>
          </div>
        </div>
      </div>
      <div class="map-column">
        <iframe v-if="cookiesAccepted" class="map-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2332.2992398628817!2d18.538839316075887!3d54.55105700385359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd7332b10e9f91%3A0xa546364763bb6c2a!2sHutnicza%2012%2C%2081-061%20Gdynia!5e0!3m2!1spl!2spl!4v1683192302859!5m2!1spl!2spl"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import langState from '@/lang/langState'
import { MapPin, Mail, Phone } from 'lucide-vue-next'

const cookiesAccepted = localStorage.getItem('cookies_choice') === 'accepted'
</script>

<style scoped>
.contact-section {
  width: 85%;
  margin-bottom: 10rem;
  padding: 80px 20px;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  color: var(--redtitle);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 2.5rem;
}

.contact-layout {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .contact-layout {
    flex-direction: column;
  }

  .map-column {
    min-width: 100%;
    height: 250px;
  }

  .contact-section {
    width: 95%;
    padding: 80px 15px;
  }
}

.info-column {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.info-tile {
  display: flex;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  text-align: left;
}

.info-tile .icon {
  width: 28px;
  height: 28px;
  color: #d63830;
  flex-shrink: 0;
  margin-top: 4px;
}

.info-tile h3 {
  font-size: 1.1rem;
  color: #001120;
  margin: 0 0 0.3rem;
}

.info-tile p {
  font-size: 0.95rem;
  color: #333;
  margin: 0.2rem 0;
}

.info-tile a {
  color: #333;
  text-decoration: none;
  margin: 0.2rem 0;
}

.map-column {
  width: 50%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.map-frame {
  width: 100%;
  min-height: 100%;
  border: none;
}
</style>
