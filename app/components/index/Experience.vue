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
      <div class="timeline-track" />

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
          <UiCard class="exp-card">
            <UiCardHeader class="exp-header">
              <span class="mobile-period">{{ exp.period || exp.year }}</span>
              <UiCardTitle as="h3">{{ exp.title }}</UiCardTitle>
              <div class="company-info">
                <span class="company-name">{{ exp.company }}</span>
              </div>
            </UiCardHeader>

            <UiCardContent >
              <UiCardDescription class="job-desc">
                {{ exp.description }}
              </UiCardDescription>
            </UiCardContent>
          </UiCard>
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
    gap: 3.5rem;
  }
}

.timeline-track {
  position: absolute;
  left: 0;
  top: 1rem;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--border-color) 0%, transparent 100%);
  z-index: 0;
}

@media (min-width: 1024px) {
  .timeline-track {
    left: -2rem;
  }
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
  top: 2rem;
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
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  opacity: 0;
  animation: pulse 3s infinite;
}

.date-anchor {
  display: none;
}

@media (min-width: 1024px) {
  .date-anchor {
    display: block;
    position: absolute;
    left: -300px;
    top: 1.8rem;
    width: 250px;
    text-align: right;
    pointer-events: none;
  }
}

.desktop-period {
  font-size: var(--font-small);
  font-weight: 600;
  color: var(--text-muted);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.timeline-row:hover .desktop-period {
  opacity: 1;
  color: var(--text-main);
  transform: translateX(-5px);
}

.exp-card {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
}

.timeline-row:hover .exp-card {
  transform: translateX(8px);
}

:deep(.exp-header) {
  padding: 1.5rem 1.5rem 0.5rem 1.5rem !important;
}

:deep(.exp-content) {
  margin-top: 0 !important;
  padding: 0 1.5rem 1.5rem 1.5rem !important;
}

.mobile-period {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

@media (min-width: 1024px) {
  .mobile-period { display: none; }
}


.company-info {
  font-size: 0.95rem;
  color: var(--text-muted);
  font-weight: 500;
}

.job-desc {
  font-size: 0.95rem;
  line-height: 1.6;
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
  transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
  will-change: opacity, transform;
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(2.5); opacity: 0; }
}
</style>
