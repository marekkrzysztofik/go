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
            <p>Gniewowska 12<br />84-240 Reda</p>
          </div>
        </div>
      </div>
      <div class="map-column">
        <iframe v-if="cookiesAccepted" class="map-frame" src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d586.7139946208991!2d18.345530750137065!3d54.599088617689276!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdbac61a9d94ff%3A0x5bac1961ab2c72b6!2sGniewowska%2012%2C%2084-240%20Reda!5e1!3m2!1sen!2spl!4v1752754899535!5m2!1sen!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <FormView />
  </section>
</template>

<script setup>
import langState from '@/lang/langState'
import { MapPin, Mail, Phone } from 'lucide-vue-next'
import FormView from '@/views/FormView.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Kontakt | Global Offshore',
  meta: [
    {
      name: 'description',
      content: 'Skontatuj się z nami!',
    },
    {
      property: 'og:title',
      content: 'Kontakt | GLOBAL Offshore',
    },
    {
      property: 'og:description',
      content: 'Skontatuj się z nami!',
    },
  ],
})

let cookiesAccepted = false

if (typeof localStorage !== 'undefined') {
  cookiesAccepted = localStorage.getItem('cookies_choice') === 'accepted'
}
</script>

<style scoped>
.contact-section {
  width: 75%;
  margin-bottom: 10rem;
  padding: 80px 0;
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



.info-column {
  width: 40%;
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
  width: 60%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.map-frame {
  width: 100%;
  min-height: 100%;
  border: none;
}

@media (max-width: 1024px) {
  .contact-layout {
    flex-direction: column;
  }

  .map-column {
    display: none;
  }

  .info-column {
    width: 100%;

  }
}
</style>
