<template>
    <section class="contact-section">
        <div class="contact-wrapper">
            <div class="form-card" :class="{ visible: formVisible }" v-intersect="() => (formVisible = true)">
                <h2>{{ langState.t.main.navbar.write }}</h2>
                <form @submit.prevent="submitForm">
                    <input type="text" v-model="form.name" :placeholder="langState.t.main.reportForm.name" required />
                    <input type="email" v-model="form.email" :placeholder="langState.t.main.reportForm.email" required />
                    <textarea v-model="form.message" :placeholder="langState.t.main.reportForm.message" required></textarea>

                    <label class="checkbox-container">
                        <input type="checkbox" v-model="form.accepted" required />
                        <span>
                            Twoje dane są bezpieczne. Wysyłając wiadomość, akceptujesz naszą politykę prywatności.
                        </span>
                    </label>

                    <button type="submit">SEND</button>
                </form>
            </div>
            <div class="info-card" :class="{ visible: infoVisible }" v-intersect="() => (infoVisible = true)">
                <h2><span>You can find us on</span></h2>
                <ul>
                    <li>
                        <MapPin class="icon" /> Gniewowska 12, 84-240 Reda
                    </li>
                    <li>
                        <Mail class="icon" /> contact@globaloffshore.pl
                    </li>
                    <li>
                        <Phone class="icon" /> +48 888 293 024 - {{ langState.t.main.production }}
                    </li>
                    <li>
                        <Phone class="icon" /> +48 602 113 006 - {{ langState.t.main.service }}
                    </li>
                </ul>
            </div>

            <!-- FORM CARD -->

        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Mail, Phone, MapPin } from 'lucide-vue-next'
import langState from '@/lang/langState'
// reactive states for animation
const infoVisible = ref(false)
const formVisible = ref(false)

// simple directive for IntersectionObserver
const vIntersect = {
    mounted(el, binding) {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                binding.value()
                observer.unobserve(el)
            }
        }, { threshold: 0.3 })
        observer.observe(el)
    }
}

const form = ref({
    name: '',
    email: '',
    message: '',
    accepted: false
})

const submitForm = () => {
    if (form.value.accepted) {
        alert('Message sent!')
    } else {
        alert('Please accept the privacy policy.')
    }
}
</script>

<style scoped>
.contact-section {
    background: url('/images/ship-bg.jpg') no-repeat center center/cover;
    padding: 60px 20px;
    display: flex;
    justify-content: center;
}

.contact-wrapper {
    position: relative;
    max-width: 1100px;
    width: 100%;
    display: flex;
    align-items: center;
}


.info-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 500px;
    background-color: white;
    margin-left: -50px;
    padding: 60px 90px;
    width: 60%;
    border-radius: 20px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;

    transform: scale(0.8);
    opacity: 0;
    transition: all 0.6s ease;
}

.info-card.visible {
    transform: scale(1);
    opacity: 1;
}

.info-card h2 {
    color: #d63830;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 2px;
}

.info-card ul {
    list-style: none;
    padding: 0;
    margin-top: 30px;
}

.info-card li {
    margin-bottom: 20px;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.icon {
    font-size: 18px;
}

.form-card {
    transform: translateY(-50%) scale(0.8);
    height: 400px;
    transition: all 0.6s ease;
    width: 80%;
    background-color: rgba(209, 60, 48, 1);
    padding: 60px 40px;
    border-radius: 20px;
    color: white;
    z-index: 2;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.form-card.visible {
    transform: scale(1);

}

.form-card h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.form-card input,
.form-card textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    padding: 10px 0;
    font-size: 16px;
    width: 100%;
    margin-bottom: 20px;
    outline: none;
}

.form-card input::placeholder,
.form-card textarea::placeholder {
    color: white;
}

.form-card textarea {
    resize: vertical;
    min-height: 80px;
}

.checkbox-container {
    font-size: 12px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 20px;
}

.form-card button {
    background-color: #a72c27;
    color: white;
    border: none;
    padding: 10px 24px;
    border-radius: 20px;
    cursor: pointer;
}

.icon {
    width: 2rem;
    color: #d63830;
    margin-right: 6px;
    vertical-align: middle;
}
</style>
