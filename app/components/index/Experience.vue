<script setup lang="ts">
import type { TranslatedExperiences, Experience } from '~/types/experience'

const { locale, t } = useI18n()
const { experienceString } = useExperienceString()
const { vIntersection } = useScrollObserver()

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
    <UiSectionHeader
      :title="t('experience.title')"
      :description="t('experience.description')"
    >
      <template #badge>
        <div class="exp-badge">
          <span class="exp-count">{{ experienceString }}</span>
        </div>
      </template>
    </UiSectionHeader>

    <div class="timeline-wrapper">
      <div class="mobile-track" />

      <div
        v-for="(exp, index) in experiences"
        :key="index"
        v-intersection
        class="timeline-row scroll-reveal"
        :style="{ '--delay': `${index * 0.1}s` }"
      >
        <div class="connector-anchor">
          <div class="connector-dot">
            <div class="dot-core" />
            <div class="dot-halo" />
          </div>
        </div>

        <div class="date-anchor">
          <span class="desktop-period">{{ exp.period || exp.year }}</span>
        </div>

        <div class="content-col">
          <div class="exp-card glass-panel">
            <div class="card-header">
              <span class="mobile-period">{{ exp.period || exp.year }}</span>

              <h3 class="job-title">
                {{ exp.title }}
              </h3>
              <div class="company-info">
                <span class="company-name">{{ exp.company }}</span>
              </div>
            </div>
            <p class="job-desc">
              {{ exp.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  max-width: var(--container-width);
  margin: 0 auto;
  position: relative;
  padding: 0 1.5rem;
}

@media (min-width: 640px) {
  .experience-section { padding: 0 2rem; }
}

.exp-badge {
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  background: rgba(125, 125, 125, 0.08);
  border: 1px solid var(--border-color);
}

.exp-count {
  font-size: var(--font-small);
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.timeline-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 1.5rem;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .timeline-wrapper {
    padding-left: 0;
    gap: 3rem;
  }
}

.mobile-track {
  position: absolute;
  left: 0;
  top: 1rem;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--border-color) 0%, transparent 100%);
  z-index: 0;
}

@media (min-width: 1024px) {
  .mobile-track { display: none; }
}

.timeline-row {
  position: relative;
  display: flex;
  flex-direction: column;
}

.connector-anchor {
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 20px;
  left: -9px;
  top: 1.5rem;
}

@media (min-width: 1024px) {
  .connector-anchor {
    left: calc(-2rem - 10px);
  }
}

.connector-dot {
  position: relative;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

.dot-core {
  width: 0.8rem;
  height: 0.8rem;
  background: var(--primary-color);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 10px var(--primary-color);
  border: 2px solid var(--bg-body);
}

.dot-halo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  opacity: 0;
  animation: pulse 3s infinite;
  z-index: 1;
}

.date-anchor {
  display: none;
}

@media (min-width: 1024px) {
  .date-anchor {
    display: block;
    position: absolute;
    left: -250px;
    top: 1.2rem;
    width: 200px;
    text-align: right;
    pointer-events: none;
    z-index: 1;
  }
}

.desktop-period {
  font-family: var(--font-sans), sans-serif;
  font-size: var(--font-small);
  font-weight: 600;
  color: var(--text-muted);
  opacity: 0.6;
  white-space: nowrap;
  transition: all 0.3s ease;
  display: inline-block;
}

.timeline-row:hover .desktop-period {
  opacity: 1;
  color: var(--text-main);
  transform: translateX(-5px);
}

.content-col {
  width: 100%;
}

.exp-card {
  padding: 1.25rem;
  border-radius: 1.25rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
  position: relative;
  z-index: 2;
}

@media (min-width: 640px) {
  .exp-card { padding: 1.5rem; }
}

.timeline-row:hover .exp-card {
  border-color: var(--text-muted);
  transform: translateX(5px);
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.mobile-period {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
}

@media (min-width: 1024px) {
  .mobile-period { display: none; }
}

.job-title {
  font-size: var(--font-h2);
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
  line-height: 1.2;
}

.company-info {
  font-size: var(--font-body);
  color: var(--text-muted);
  font-weight: 500;
}

.job-desc {
  font-size: var(--font-body);
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
  transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes pulse {
  0% { width: 100%; height: 100%; opacity: 0.5; border-width: 2px; }
  100% { width: 250%; height: 250%; opacity: 0; border-width: 0; }
}
</style>
