<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <div class="map-column">
          <iframe v-if="cookiesAccepted" class="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.3609802263877!2d18.476735476360208!3d54.54476178438526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda69bf55d3751%3A0x33107e8d0c815bcf!2sHutnicza%2012%2C%2081-061%20Gdynia!5e0!3m2!1spl!2spl!4v1748006537689!5m2!1spl!2spl"
            height="200" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
      <div class="footer-section">
        <h4>{{ langState.t.main.companyTitle }}</h4>
        <div>
          <p>GLOBAL Offshore Sp. z o.o.</p>
          <p> NIP: 958-169-10-9</p>
          <p>REGON: 380012684</p>
          <p>KRS: 0000728367</p>
        </div>

      </div>

      <div class="footer-section">
        <h4>{{ langState.t.main.contactTitle }}</h4>
        <div>
          <p>
            <MapPin class="icon" /> Hutnicza 12
            81-061 Gdynia, Poland
          </p>
          <p>
            <Mail class="icon" />
            contact@globaloffshore.pl
          </p>
          <p>
            <Phone class="icon" />+48 888 293 024
          </p>
          <p>
            <Phone class="icon" />+48 602 113 006
          </p>
        </div>

      </div>
      <div class="footer-section">
        <img src="/images/logo.png" alt="Global Offshore" class="footer-logo" />
        <p class="center">{{ langState.t.main.contactDesc }}</p>
      </div>

    </div>

    <!-- Dolna część -->
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} GLOBAL Offshore</p>
      <div class="footer-links">
        <RouterLink to="/cookies">Polityka cookies</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import langState from '@/lang/langState'
import { Mail, Phone, MapPin, Building } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
let cookiesAccepted = false

if (typeof localStorage !== 'undefined') {
  cookiesAccepted = localStorage.getItem('cookies_choice') === 'accepted'
}
</script>

<style scoped>
.footer {
  width: 100%;
  color: #001120;
  border-top: 2px solid #d63830;
  padding: 3rem 2rem 1rem;
  font-size: 0.95rem;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 90%;
  margin: 0 auto;
}

.footer-section h4 {
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  color: #d63830;
}

.footer-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.center {
  text-align: center;
}

.footer-section p {
  margin: 0.4rem 0;
  line-height: 1.6;
}

.footer-section a {
  color: #001120;
  text-decoration: none;
}

.footer-section a:hover {
  text-decoration: underline;
}

.footer-logo {
  width: 200px;
  margin-bottom: 1rem;
}

.footer-description {
  color: #444;
  font-size: 0.95rem;
  line-height: 1.5;
}

.icon {
  width: 1rem;
  height: 1rem;
  margin-right: 6px;
  vertical-align: middle;
  color: #d63830;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;
  color: #666;
  font-size: 0.85rem;
}

.footer-links {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer-links a {
  color: #001120;
  text-decoration: none;
  font-weight: 500;
}

.footer-links a:hover {
  text-decoration: underline;
}

.map-column {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.map-frame {
  width: 100%;
  min-height: 100%;
  border: none;
}

@media (max-width: 600px) {
  .footer-container {
    display: flex;
    flex-direction: column-reverse;
  }

  .footer-section {
    margin-bottom: 2rem;
  }
}
</style>
