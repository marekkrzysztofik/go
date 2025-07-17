<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Contact -->
        <div class="footer-section logo-section">
        <div class="map-column" v-if="cookiesAccepted">
          <iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1518.1565689835613!2d18.34523293092634!3d54.59919028484711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdbac61a9d94ff%3A0x5bac1961ab2c72b6!2sGniewowska%2012%2C%2084-240%20Reda!5e0!3m2!1sen!2spl!4v1752755007617!5m2!1sen!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div class="footer-section"> 
        
        <h3 class="section-title">{{ langState.t.main.contactTitle }}</h3>
        <p>
          <MapPin class="icon" /> Gniewowska 12, 84-240 Reda
        </p>
        <p>
          <Mail class="icon" /> contact@globaloffshore.pl
        </p>
        <p>
          <Phone class="icon" /> +48 888 293 024
        </p>
        <p>
          <Phone class="icon" /> +48 602 113 006
        </p>
        
      </div>

      <div class="footer-section">
        <h3 class="section-title">{{ langState.t.main.companyTitle }}</h3>
        <p>GLOBAL Offshore Sp. z o.o.</p>
        <p>NIP: 958-169-10-9</p>
        <p>REGON: 380012684</p>
        <p>KRS: 0000728367</p>
      </div>
     
      <div class="footer-section">
        <img src="/images/logo.png" alt="Global Offshore" class="footer-logo" />
        <p class="center">{{ langState.t.main.contactDesc }}</p>
      </div>
    </div>

    <!-- Bottom row -->
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} GLOBAL Offshore</p>
      <RouterLink to="/cookies">Polityka cookies</RouterLink>
    </div>

    <!-- Dekoracje -->
    
    <div class="circle red-outline" />
    <div class="circle dark-red-circle" />
  </footer>
</template>

<script setup>
import langState from '@/lang/langState'
import { Mail, Phone, MapPin } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

let cookiesAccepted = false
if (typeof localStorage !== 'undefined') {
  cookiesAccepted = localStorage.getItem('cookies_choice') === 'accepted'
}
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #181818;
  color: #e6e6e6;
  padding: 4rem 2rem 2rem;
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow: hidden;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 3rem;
  max-width: 1300px;
  margin: auto;
}

.footer-section {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 1;
}

.section-title {
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.center {
  text-align: center;
}

.icon {
  width: 1rem;
  height: 1rem;
  color: #d63830;
  margin-right: 6px;
  vertical-align: middle;
}

.footer-logo {
  width: 160px;
  margin: 1rem auto 0.5rem;
  display: block;
}

.footer-bottom {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #333;
  text-align: center;
  font-size: 0.85rem;
  color: #bbb;
}

.footer-bottom a {
  color: #d63830;
  text-decoration: none;
  margin-left: 1rem;
}

.footer-bottom a:hover {
  text-decoration: underline;
}

.map-column {
  overflow: auto;
}

.map-frame {
  width: 100%;
  height: 200px;
  border-radius: 14px;
  border: none;
}

/* Dekoracje */
.circle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.red-circle {
  width: 64px;
  height: 64px;
  background-color: #d63830;
  top: 10px;
  left: 230px;
}

.dashed-circle {
  width: 90px;
  height: 90px;
  border: 4px dashed #d63830;
  bottom: 110px;
  left: 230px;
}

.red-outline {
  width: 90px;
  height: 90px;
  border: 2px dashed #d63830;
  bottom: 10px;
  right: 80px;
}

.dark-red-circle {
  width: 100px;
  height: 100px;
  background-color: #600d0d;
  top: 20px;
  right: 20px;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }

  .circle {
    display: none;
  }
}
</style>
