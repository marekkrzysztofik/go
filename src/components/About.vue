<template>
  <section class="intro-section">
    <div class="container">
      <div class="content">
        <h2>{{ langState.t.main.aboutTitle }}</h2>
        <p>
          {{ langState.t.main.aboutSubtitle }}
        </p>
      </div>
    </div>
    <Mission />
  </section>
</template>
<script setup>
import Mission from '@/components/Mission.vue'
import langState from '@/lang/langState'
</script>
<style scoped>
.wave-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 1;
  margin-bottom: -1px;
  /* usuwa cienką linię */

}

.wave-divider svg {
  display: block;
  width: 100%;
  height: auto;
}

.container {
  max-width: 1000px;
  display: flex;
}

.intro-section {
 background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: -50px;
  color: var(--title);
  text-align: center;
  padding: 0 1.5rem;
  position: relative;
  overflow: hidden;
  z-index: 3;
}

.content {
  max-width: 800px;
  margin: auto;
}

.content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.content p {
  font-size: 1.125rem;
  line-height: 1.6;
}

.wave-top,
.wave-bottom {
  position: absolute;
  left: 0;
  width: 100%;
  line-height: 0;
}

.wave-top {
  top: 0;
  transform: rotate(180deg);
}

.wave-bottom {
  bottom: 0;
}

.wave-top svg,
.wave-bottom svg {
  display: block;
  width: 100%;
  height: auto;
}

.logosm {
  width: 200px;
}

.logo {
  width: 600px;
}

@media (max-width: 768px) {
 .intro-section {
    margin-top: 1rem;
}
}
</style>
