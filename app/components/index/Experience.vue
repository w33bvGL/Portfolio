<script setup lang="ts">
import type { TranslatedExperiences, Experience } from '~/types/experience' // Убедись, что типы существуют

const { locale, t } = useI18n()
const { experienceString } = useExperienceString() // Твой композабл

// Получаем данные
const { data: experienceByLang } = await useAsyncData<TranslatedExperiences>(
  'experiences',
  () => $fetch('/api/experiences')
)

const experiences = computed<Experience[]>(() => {
  const data = experienceByLang.value
  return data?.[locale.value as keyof TranslatedExperiences] ?? []
})
</script>

<template>
  <section class="experience-section">

    <div class="section-header">
      <h2 class="section-title">
        {{ t('experience.title') }}
        <span class="highlight">— {{ experienceString }}</span>
      </h2>
      <p class="section-desc">{{ t('experience.description') }}</p>
    </div>

    <div class="timeline-container">
      <div class="timeline-track" />

      <div
        v-for="(exp, index) in experiences"
        :key="index"
        class="timeline-item"
        :style="{ '--delay': `${index * 0.1}s` }"
      >
        <div class="timeline-dot">
          <div class="pulse-ring" />
          <div class="solid-point" />
        </div>

        <div class="glass-card">
          <div class="card-header">
            <h3 class="job-title">{{ exp.title }}</h3>
            <span class="period-badge">{{ exp.period || exp.year }}</span>
          </div>

          <div class="company-row">
            <span class="company-name">{{ exp.company }}</span>
            <div class="line-separator" />
          </div>

          <p class="job-desc">{{ exp.description }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.experience-section {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

/* --- Headers --- */
.section-header {
  margin-bottom: 3rem;
  text-align: left;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--text-main) 0%, var(--text-muted) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.highlight {
  font-weight: 400;
  opacity: 0.6;
  font-size: 0.8em;
  -webkit-text-fill-color: var(--text-muted);
}

.section-desc {
  color: var(--text-muted);
  font-size: 1.1rem;
  max-width: 500px;
}

/* --- Timeline Structure --- */
.timeline-container {
  position: relative;
  padding-left: 2rem;
}

.timeline-track {
  position: absolute;
  left: 7px; /* Центр точки */
  top: 1rem;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary-color) 0%, transparent 100%);
  opacity: 0.2;
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: slide-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes slide-in {
  to { opacity: 1; transform: translateX(0); }
}

/* --- Dot --- */
.timeline-dot {
  position: absolute;
  left: -2.05rem; /* Выравнивание по линии */
  top: 1.5rem;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.solid-point {
  width: 0.5rem;
  height: 0.5rem;
  background: var(--primary-color);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 10px var(--primary-color);
}

.pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  opacity: 0.5;
  animation: pulse 2s infinite;
}

/* --- Glass Card --- */
.glass-card {
  position: relative;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
}

/* Hover Effect */
.glass-card:hover {
  transform: translateY(-5px) scale(1.01);
  background: rgba(255, 255, 255, 0.03); /* Чуть светлее */
  border-color: var(--text-muted);
  box-shadow:
    0 10px 30px -10px rgba(0,0,0,0.1),
    inset 0 0 0 1px rgba(255,255,255,0.05);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.job-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
  line-height: 1.3;
}

.period-badge {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: rgba(125, 125, 125, 0.1);
  color: var(--text-muted);
  white-space: nowrap;
  border: 1px solid transparent;
  transition: all 0.3s;
}

.glass-card:hover .period-badge {
  background: var(--text-main);
  color: var(--bg-body);
}

.company-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.company-name {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--primary-color);
}

.line-separator {
  height: 1px;
  flex: 1;
  background: var(--border-color);
  opacity: 0.5;
}

.job-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Mobile Fixes */
@media (max-width: 640px) {
  .timeline-container { padding-left: 1.5rem; }
  .timeline-dot { left: -1.8rem; }
  .card-header { flex-direction: column; gap: 0.5rem; }
  .period-badge { align-self: flex-start; }
}

@keyframes pulse {
  0% { transform: scale(0.8); opacity: 0.8; }
  100% { transform: scale(1.8); opacity: 0; }
}
</style>
