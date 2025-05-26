<template>
  <section class="report-form-section">
    <h2 class="title">{{ langState.t.main.applicationForm.title }}</h2>

    <form @submit.prevent="submitForm">
      <div class="form-grid">
        <!-- Lewa kolumna -->
        <div class="form-left">
          <label>
            {{ langState.t.main.applicationForm.name }}:
            <input type="text" v-model="form.name" required />
          </label>

          <label>
            {{ langState.t.main.applicationForm.email }}:
            <input type="email" v-model="form.email" required />
          </label>

          <label>
            {{ langState.t.main.applicationForm.phone }}:
            <input type="tel" v-model="form.phone" required />
          </label>

          <label>
            {{ langState.t.main.applicationForm.cv }}:
            <input type="file" accept=".pdf" @change="handleCvUpload" />
          </label>
        </div>

        <!-- Prawa kolumna -->
        <div class="form-right">
          <label>
            {{ langState.t.main.applicationForm.positionLabel }}:
            <select v-model="form.position" required>
              <option disabled value="">{{ langState.t.main.applicationForm.positionOptions.default }}</option>
              <option value="Inżynier Projektu">{{ langState.t.main.applicationForm.positionOptions.engineer }}</option>
              <option value="Monter Hydrauliki">{{ langState.t.main.applicationForm.positionOptions.hydraulic }}
              </option>
              <option value="Monter Instalacji Elektrycznych">{{
                langState.t.main.applicationForm.positionOptions.electrical }}</option>
              <option value="Monter Mechaniczny">{{ langState.t.main.applicationForm.positionOptions.mechanic }}
              </option>
            </select>
          </label>

          <label>
            {{ langState.t.main.applicationForm.message }}:
            <textarea v-model="form.message" rows="6"
              :placeholder="langState.t.main.applicationForm.messagePlaceholder"></textarea>
          </label>
        </div>
      </div>

      <button type="submit" class="submit-btn" :disabled="isUploading">
        {{ isUploading ? langState.t.main.applicationForm.uploading : langState.t.main.applicationForm.submit }}
      </button>
    </form>
  </section>
</template>



<script setup>
import { ref } from 'vue'
import langState from '@/lang/langState'
const CLOUD_NAME = 'dilgij9iq'
const UPLOAD_PRESET = 'globaloff'

const form = ref({
  name: '',
  email: '',
  phone: '',
  position: '',
  message: ''
})

const uploadedCvLink = ref('')
const isUploading = ref(false)

const handleCvUpload = async (e) => {
  const file = e.target.files[0]
  if (!file || file.type !== 'application/pdf') return

  isUploading.value = true
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', UPLOAD_PRESET)

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    if (data.secure_url) {
      uploadedCvLink.value = data.secure_url
    }
  } catch (error) {
    console.error('Błąd uploadu CV:', error)
  }

  isUploading.value = false
}

const submitForm = async () => {
  const url = 'https://formspree.io/f/mblobvbp'

  const payload = {
    ...form.value,
    cv: uploadedCvLink.value
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
    alert(langState.t.main.applicationForm.success)
    form.value = {
      name: '',
      email: '',
      phone: '',
      position: '',
      message: ''
    }
    uploadedCvLink.value = ''

  } else {
    alert(langState.t.main.applicationForm.error)
  }
}
</script>

<style scoped>
.report-form-section {
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto 10rem auto;
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
