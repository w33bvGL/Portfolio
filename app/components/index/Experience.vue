<script setup lang="ts">
import type { Experience } from '~/types/experience'

const { locale, t } = useI18n()
const { experienceString } = useExperienceString()
const { vIntersection } = useScrollObserver()

const { data: experiences } = await useAsyncData<Experience[]>(
  'experiences',
  () => $fetch('/api/experiences', { query: { lang: locale.value } })
)
</script>

<template>
  <UiLayoutContainer class="experience-section">
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

    <UiLayoutGrid class="timeline-wrapper">
      <div
        v-for="(exp, index) in experiences"
        :key="index"
        v-intersection
        class="timeline-row animate-slide-up"
        :class="[
          { 'animate-slide-up': true },
          `stagger-delay-${(index % 10) + 3}`
        ]"
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
              <UiCardTitle as="h3">
                {{ exp.title }}
              </UiCardTitle>
              <div class="company-info">
                <span class="company-name">{{ exp.company }}</span>
              </div>
            </UiCardHeader>

            <UiCardContent>
              <UiCardDescription>
                {{ exp.description }}
              </UiCardDescription>
            </UiCardContent>
          </UiCard>
        </div>
      </div>
    </UiLayoutGrid>
  </UiLayoutContainer>
</template>

<style scoped>
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

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(2.5); opacity: 0; }
}
</style>
