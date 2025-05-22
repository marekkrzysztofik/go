<template>
  <section class="about-section">
    <div class="about-grid">
      <div class="about-image fade-in-left">
        <img src="/images/1.jpg" alt="GLOBAL Offshore Team" />
      </div>

      <div class="about-content fade-in-right">
        <h2 class="section-title">{{ langState.t.main.about.title }}</h2>
        <p class="section-text">{{ langState.t.main.about.description }}</p>

        <ul class="about-list">
          <li v-for="(value, index) in langState.t.main.about.values" :key="index">
            <span class="check">✔</span> {{ value }}
          </li>
        </ul>
      </div>
    </div>
    <Mission />
    <div class="history-section">
      <h2 class="section-title">{{ langState.t.main.about.historyTitle }}</h2>
      <div class="timeline-flex">
        <div v-for="(entry, index) in langState.t.main.about.history" :key="index" class="timeline-row">
          <div class="timeline-left">
            <div class="dot"></div>
            <div class="year">{{ entry.year }}</div>
          </div>
          <div class="timeline-right">
            <div class="event">{{ entry.event }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import langState from '@/lang/langState'
import Mission from '@/components/Mission.vue'
</script>

<style scoped>
.about-section {
  padding: 80px 20px;
  background-color: #f9f9f9;
}

.section-title {
  font-size: 2rem;
  color: #d63830;
  margin-bottom: 1rem;
  font-weight: 600;
}

.section-text {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.about-grid {
  display: flex;
  flex-direction: column-reverse;
  gap: 3rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .about-grid {
    flex-direction: row;
    align-items: center;
  }
}

.about-content {
  flex: 1;
}

.about-image img,
.history-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.about-image img:hover,
.history-image img:hover {
  transform: scale(1.03);
}

.about-list {
  list-style: none;
  padding: 0;
}

.about-list li {
  font-size: 1rem;
  color: #001120;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
}

.check {
  color: #d63830;
  margin-right: 8px;
  font-weight: bold;
}

.history-section {
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 0 20px;
}

.timeline-flex {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.timeline-row {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.timeline-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  min-width: 80px;
}

.timeline-left .dot {
  width: 14px;
  height: 14px;
  background-color: #d63830;
  border-radius: 50%;
  margin-bottom: 0.4rem;
}

.timeline-left .year {
  font-weight: bold;
  color: #d63830;
  font-size: 1rem;
  text-align: center;
}

.timeline-right {
  background: #fff;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  flex: 1;
}

.timeline-right .event {
  font-size: 1rem;
  color: #333;
}

.history-image {
  flex: 1;
  max-width: 500px;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}

.fade-in-left {
  animation: fadeInLeft 0.8s ease forwards;
}

.fade-in-right {
  animation: fadeInRight 0.8s ease forwards;
}

.fade-in {
  animation: fadeIn 1s ease forwards;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}


@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
