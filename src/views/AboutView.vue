<template>
  <section class="about-section">
    <div class="about-grid">
      <div class="about-content">
        <h2 class="section-title">{{ langState.t.main.about.title }}</h2>
        <p class="section-text">{{ langState.t.main.about.description }}</p>

        <ul class="about-list">
          <li v-for="(value, index) in langState.t.main.about.values" :key="index">
            <span class="check">✔</span> {{ value }}
          </li>
        </ul>
      </div>

      <div class="about-image">
        <img src="/images/1.jpg" alt="GLOBAL Offshore Team" />
      </div>
    </div>

    <div class="about-grid history-grid">
      <div class="about-content">
        <h2 class="section-title">{{ langState.t.main.about.historyTitle }}</h2>
        <div class="timeline">
          <div class="timeline-entry" v-for="(entry, index) in langState.t.main.about.history" :key="index">
            <div class="year">{{ entry.year }}</div>
            <div class="event">{{ entry.event }}</div>
          </div>
        </div>
      </div>

      <div class="about-image">
        <img src="/images/3.jpg" alt="Company history" />
      </div>
    </div>
  </section>
</template>

<script setup>
import langState from '@/lang/langState'
</script>

<style scoped>
.about-section {
  padding: 80px 20px;
  background-color: #f9f9f9;
}

.about-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

.section-title {
  font-size: 2rem;
  color: #d63830;
  margin-bottom: 1rem;
}

.section-text {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.about-list {
  list-style: none;
  padding: 0;
}

.about-list li {
  font-size: 1rem;
  color: #001120;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.check {
  color: #d63830;
  margin-right: 8px;
  font-weight: bold;
}

.about-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.timeline-entry {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.timeline-entry .year {
  font-weight: bold;
  color: #d63830;
  min-width: 80px;
  font-size: 1rem;
}

.timeline-entry .event {
  color: #333;
  font-size: 1rem;
}
</style>
