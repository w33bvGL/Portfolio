<script setup lang="ts">
import type { Experience } from '~/types/experience'

const { t, locale } = useI18n()
const { experienceString } = useExperienceString()

const { data: experiences } = await useAsyncData<Experience[]>(
  `experiences-${locale.value}`,
  () => $fetch('/api/experiences', { query: { lang: locale.value } })
)
</script>

<template>
  <section class="section">
    <h3 class="section-title">
      <span class="title-text">{{ t('index.experience.title') }}</span>
      <span class="exp-total">{{ experienceString }}</span>
    </h3>

    <div class="timeline">
      <div
        v-for="(exp, i) in experiences"
        :key="i"
        class="experience-item"
      >
        <div class="exp-head">
          <span class="company">{{ exp.company }}</span>
          <span class="period">{{ exp.period }}</span>
        </div>
        <div class="role">
          {{ exp.title }}
        </div>
        <p class="description">
          {{ exp.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--r-ink);
  padding-bottom: 0.4rem;
  border-bottom: 1.5px solid var(--r-accent);
  margin-bottom: 1rem;
}

.title-text {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.title-text::before {
  content: '';
  width: 9px;
  height: 9px;
  border-radius: 2px;
  background: var(--r-accent);
}

.exp-total {
  font-family: var(--r-mono);
  font-size: 0.66rem;
  color: var(--r-accent);
  background: var(--r-accent-soft);
  padding: 2px 7px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0;
}

.timeline {
  position: relative;
}

.experience-item {
  position: relative;
  padding-left: 1.15rem;
  padding-bottom: 1.05rem;
}

.experience-item:last-child {
  padding-bottom: 0;
}

/* node dot */
.experience-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.32rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--r-accent);
  box-shadow: 0 0 0 2px #fff;
  z-index: 1;
}

/* connecting rail */
.experience-item::after {
  content: '';
  position: absolute;
  left: 3.25px;
  top: 0.55rem;
  bottom: -0.2rem;
  width: 1.5px;
  background: var(--r-line);
}

.experience-item:last-child::after {
  display: none;
}

.exp-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.05rem;
}

.company {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--r-ink);
  letter-spacing: -0.01em;
}

.period {
  font-size: 0.7rem;
  font-family: var(--r-mono);
  color: var(--r-faint);
  font-weight: 500;
  white-space: nowrap;
}

.role {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--r-accent);
  margin-bottom: 0.3rem;
}

.description {
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--r-muted);
  white-space: pre-line;
  text-align: left;
}
</style>
