<template>
  <section class="report-form-section">
    <h2 class="title">Nowe zgłoszenie</h2>

    <form @submit.prevent="submitForm">
      <div class="form-grid">
        <!-- Lewa kolumna -->
        <div class="form-left">
          <label>
            Imię i nazwisko:
            <input type="text" v-model="form.name" required />
          </label>

          <label>
            Adres e-mail:
            <input type="email" v-model="form.email" required />
          </label>

          <label>
            Numer telefonu:
            <input type="tel" v-model="form.phone" required />
          </label>

          <label>
            Dodaj zdjęcia (max 3):
            <input type="file" accept="image/*" multiple @change="handleImageUpload" />
          </label>
        </div>

        <!-- Prawa kolumna -->
        <div class="form-right">
          <label>
            Typ zgłoszenia:
            <select v-model="form.type" required>
              <option disabled value="">Wybierz...</option>
              <option value="Awaria">Awaria</option>
              <option value="Zamówienie">Zamówienie</option>
              <option value="Pytanie">Pytanie</option>
            </select>
          </label>

          <label>
            Priorytet:
            <select v-model="form.priority" required>
              <option disabled value="">Wybierz...</option>
              <option value="Normalny">Normalny</option>
              <option value="Pilny">Pilny</option>
            </select>
          </label>
          <label>
            Opis sprawy:
            <textarea v-model="form.message" required rows="8" placeholder="Opisz problem lub pytanie..."></textarea>
          </label>

          <div class="image-preview" v-if="uploadedLinks.length">
            <p><strong>Załączone obrazy:</strong></p>
            <ul>
              <li v-for="(link, i) in uploadedLinks" :key="i">
                <a :href="link" target="_blank">{{ link }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <button type="submit" class="submit-btn" :disabled="isUploading">
        {{ isUploading ? 'Wysyłanie zdjęć...' : 'Wyślij zgłoszenie' }}
      </button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const CLOUD_NAME = 'dilgij9iq'
const UPLOAD_PRESET = 'globaloff'

const form = ref({
  name: '',
  email: '',
  phone: '',
  type: '',
  priority: '',
  message: ''
})

const uploadedLinks = ref([])
const isUploading = ref(false)

const handleImageUpload = async (e) => {
  const files = Array.from(e.target.files).slice(0, 3)
  uploadedLinks.value = []
  isUploading.value = true

  for (const file of files) {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', UPLOAD_PRESET)

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData
      })

      const data = await res.json()
      if (data.secure_url) {
        uploadedLinks.value.push(data.secure_url)
      }
    } catch (error) {
      console.error('Błąd uploadu:', error)
    }
  }

  isUploading.value = false
}

const submitForm = async () => {
  const url = 'https://formspree.io/f/mblobvbp' // zamień na swój ID

  const payload = {
    ...form.value,
    attachments: uploadedLinks.value
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    alert('Formularz przesłany pomyślnie.')
    form.value = {
      name: '',
      email: '',
      phone: '',
      type: '',
      priority: '',
      message: ''
    }
    uploadedLinks.value = []

  } else {
    alert('Coś poszło nie tak. Spróbuj ponownie później.')
  }
}
</script>

<style scoped>
.report-form-section {
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem 3rem;
  background: #fff;
  color: var(--title);
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.03);
}

.title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: left;
}

.form-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .form-grid {
    flex-direction: row;
  }

  .form-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-right {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .form-left label {
    margin-top: 1rem !important;
  }
}

label {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  gap: 0.5rem;
}

input,
select,
textarea {
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-family: inherit;
}

textarea {
  resize: vertical;
  min-height: 200px;
}

.image-preview {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #333;
}

.image-preview ul {
  margin: 0.5rem 0 0;
  padding-left: 1rem;
}

.image-preview a {
  color: #d13c30;
  text-decoration: underline;
}

.submit-btn {
  background-color: #d13c30;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s ease;
  width: 100%;
  margin-top: 2rem;
}

.submit-btn:disabled {
  background-color: #999;
  cursor: not-allowed;
}
</style>
