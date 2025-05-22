<template>
    <section class="career-section">
        <h2 class="section-title">{{ langState.t.main.careers.sectionTitle }}</h2>
        <div class="career-layout">
            <!-- Lewa kolumna: lista stanowisk -->
            <div class="job-list">
                <div v-for="(job, index) in jobs" :key="index" class="job-tile"
                    :class="{ active: selectedIndex === index }" @click="selectJob(index)">
                    <component :is="iconComponents[job.icon]" class="job-icon" />
                    <h3>{{ job.title }}</h3>
                </div>
            </div>

            <!-- Prawa kolumna: opis stanowiska -->
            <transition name="fade-slide" mode="out-in">
                <div class="job-description" :key="selectedJob.title">
                    <div>
                        <h4>{{ langState.t.main.careers.duties }}</h4>
                        <ul>
                            <li v-for="duty in selectedJob.duties" :key="duty">{{ duty }}</li>
                        </ul>
                        <h4>{{ langState.t.main.careers.requirements }}</h4>
                        <ul>
                            <li v-for="req in selectedJob.requirements" :key="req">{{ req }}</li>
                        </ul>
                        <h4>{{ langState.t.main.careers.offer }}</h4>
                        <ul>
                            <li v-for="offer in selectedJob.offer" :key="offer">{{ offer }}</li>
                        </ul>
                        <button class="apply-button">{{ langState.t.main.careers.apply }}</button>
                    </div>

                </div>
            </transition>
        </div>
    </section>
</template>


<script setup>
import { ref, computed } from 'vue'
import langState from '@/lang/langState'
import { HardHat, Wrench, Zap, Settings } from 'lucide-vue-next'

const selectedIndex = ref(0)

const selectJob = (index) => {
    selectedIndex.value = index
}

const iconComponents = {
    HardHat,
    Wrench,
    Zap,
    Settings
}

const jobs = computed(() => langState.t.main.careers.jobs)
const selectedJob = computed(() => jobs.value[selectedIndex.value])
</script>

<style scoped>
.career-section {
    padding: 2rem;
    min-height: 110vh;
}

.section-title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
}

.career-layout {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.job-list {
    flex: 1;
    min-width: 240px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.job-tile {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    border: 1px solid #eee;
    padding: 1rem;
    cursor: pointer;
    border-radius: 8px;
    background: #fff;
    transition: background 0.3s;
}

.job-tile:hover,
.job-tile.active {
    background: #ffecec;
    border-color: #d63830;
}

.job-icon {
    color: #d63830;
    width: 28px;
    height: 28px;
}

.job-description {
    flex: 2;
    background: #fafafa;
    border-radius: 8px;
    padding: 2rem;
    border: 1px solid #eee;
    width: 50vw;
}

.job-description h3 {
    color: #d63830;
}

.job-description ul {
    margin: 0 0 1rem 1.2rem;
    list-style-type: disc;
}

.apply-button {
    background-color: #d63830;
    color: #fff;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.4s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>
