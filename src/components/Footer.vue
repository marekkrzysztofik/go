<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Logo i opis -->
      <div class="footer-section logo">
        <img src="/images/logo.png" alt="Global Offshore" class="footer-logo" />
        <p class="footer-description">
          {{ langState.t.main.footerAbout || 'Global Offshore – kompleksowe wsparcie projektów offshore na całym świecie.' }}
        </p>
      </div>

      <!-- Kontakt -->
      <div class="footer-section">
        <h4>{{ langState.t.main.contactTitle }}</h4>
        <p>
          <MapPin class="icon" /> Hutnicza 12<br />
          81-061 Gdynia, Poland
        </p>
        <p>
          <Mail class="icon" />
          <a href="mailto:contact@globaloffshore.pl">contact@globaloffshore.pl</a>
        </p>
      </div>

      <!-- Działy -->
      <div class="footer-section">
        <h4>{{ langState.t.main.departmentsTitle }}</h4>
        <p><Phone class="icon" /> <strong>{{ langState.t.main.production }}:</strong><br />+48 888 293 024</p>
        <p><Phone class="icon" /> <strong>{{ langState.t.main.service }}:</strong><br />+48 602 113 006</p>
      </div>

      <!-- Firma -->
      <div class="footer-section">
        <h4>{{ langState.t.main.companyTitle }}</h4>
        <p>
          <Building class="icon" /> GLOBAL Offshore Sp. z o.o.<br />
          Czechosłowacka 3, 81-336 Gdynia<br />
          NIP: 958-169-10-96<br />
          REGON: 380012684<br />
          KRS: 0000728367
        </p>
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
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #ffffff;
  color: #001120;
  border-top: 2px solid #d63830;
  padding: 3rem 2rem 1rem;
  font-size: 0.95rem;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.footer-section h4 {
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  color: #d63830;
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
  width: 160px;
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
</style>
