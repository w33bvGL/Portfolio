<script setup lang="ts">
import type { Education } from '~/types/education'

const { t, locale } = useI18n()

const { data: educations } = await useAsyncData<Education[]>(`education-${locale.value}`, () =>
  $fetch('/api/education', { query: { lang: locale.value } })
)
</script>

<template>
  <section class="section mt-section">
    <h3 class="section-title">
      <span class="title-text">{{ t('index.education.title') }}</span>
    </h3>
    <div class="education-grid">
      <div
        v-for="(edu, i) in educations"
        :key="i"
        class="edu-item"
      >
        <div class="edu-head">
          <span class="edu-title">{{ edu.title }}</span>
        </div>
        <p class="edu-desc">
          {{ edu.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mt-section {
  margin-top: 1.6rem;
}

.section-title {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--r-ink);
  padding-bottom: 0.4rem;
  border-bottom: 1.5px solid var(--r-accent);
  margin-bottom: 0.95rem;
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

.edu-item {
  position: relative;
  padding-left: 0.85rem;
  margin-bottom: 0.7rem;
}

.edu-item:last-child {
  margin-bottom: 0;
}

.edu-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.28rem;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--r-faint);
}

.edu-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--r-ink);
  display: block;
  margin-bottom: 0.1rem;
}

.edu-desc {
  font-size: 0.72rem;
  line-height: 1.45;
  color: var(--r-muted);
}
</style>
