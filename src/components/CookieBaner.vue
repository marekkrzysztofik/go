<template>
  <div v-if="!hasDecision" class="cookie-banner">
    <p>
      Używamy plików cookies do poprawy działania strony. Więcej informacji znajdziesz w
      <a>Polityce Prywatności</a> na dole strony.
    </p>
    <div class="cookie-buttons">
      <button @click="acceptCookies">Akceptuję</button>
      <button @click="declineCookies">Odrzuć</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const hasDecision = ref(false)

onMounted(() => {
  const stored = localStorage.getItem('cookies_choice')
  hasDecision.value = stored === 'accepted' || stored === 'declined'
})

const acceptCookies = () => {
  localStorage.setItem('cookies_choice', 'accepted')
  hasDecision.value = true
  location.reload()
}

const declineCookies = () => {
  localStorage.setItem('cookies_choice', 'declined')
  hasDecision.value = true
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #001120;
  color: white;
  padding: 1rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
}

.cookie-banner a {
  color: var(--secondary);
  text-decoration: none;
}

.cookie-buttons {
  margin-top: 0.5rem;
}

.cookie-buttons button {
  margin: 0 0.5rem;
  padding: 0.4rem 0.8rem;
  background: var(--primary);
  color: var(--secondary);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
