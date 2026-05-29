<script setup lang="ts">
import type { Experience } from '~/types/experience'

const { locale, t } = useI18n()
const { experienceString } = useExperienceString()

const { data: experiences } = await useAsyncData<Experience[]>(
  'experiences',
  () => $fetch('/api/experiences', { query: { lang: locale.value } })
)

const delayClass = (idx: number) => `scroll-delay-${Math.min(idx + 1, 5)}`
</script>

<template>
  <UiLayoutContainer class="experience-section">
    <UiSectionHeader
      :title="t('experience.title')"
      :description="t('experience.description')"
      class="scroll-animate-fade"
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
        class="timeline-row scroll-animate-reveal"
        :class="delayClass(index)"
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

            <UiCardContent>
              <UiCardDescription>{{ exp.description }}</UiCardDescription>
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
  border-radius: var(--radius-full);
  background: color-mix(in oklab, var(--text-muted) 8%, transparent);
  border: 1px solid var(--border-color);
}

.exp-count {
  font-size: var(--font-small);
  font-weight: var(--weight-semibold);
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

  @media (width >= 1024px) {
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
  border-radius: var(--radius-full);
  z-index: 2;
  box-shadow: 0 0 10px var(--primary-color);
  border: 2px solid var(--bg-body);
}

.dot-halo {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-full);
  border: 1px solid var(--primary-color);
  opacity: 0;
  animation: pulse 3s infinite;
}

.date-anchor {
  display: none;

  @media (width >= 1024px) {
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
  font-weight: var(--weight-semibold);
  color: var(--text-muted);
  opacity: 0.6;
  transition: opacity var(--duration-fast) var(--ease-out-sine),
  color var(--duration-fast) var(--ease-out-sine),
  transform var(--duration-fast) var(--ease-out-sine);
}

.timeline-row:hover .desktop-period {
  opacity: 1;
  color: var(--text-main);
  transform: translateX(-5px);
}

.exp-card {
  transition: transform var(--duration-normal) var(--ease-out-expo),
  border-color var(--duration-fast) var(--ease-out-sine);
}

.timeline-row:hover .exp-card {
  transform: translateX(8px);
}

:deep(.exp-header) {
  padding: var(--space-base) var(--space-base) var(--space-xs) !important;
}

.mobile-period {
  display: inline-block;
  font-size: var(--font-xs);
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  color: var(--primary-color);
  margin-bottom: var(--space-xs);

  @media (width >= 1024px) {
    display: none;
  }
}

.company-info {
  font-size: var(--font-body);
  color: var(--text-muted);
  font-weight: var(--weight-medium);
}

@keyframes pulse {
  0%   { transform: scale(1);   opacity: 0.5; }
  100% { transform: scale(2.5); opacity: 0;   }
}
</style>
