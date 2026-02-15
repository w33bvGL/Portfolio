<script setup lang="ts">
import type { Education, TranslatedEducation } from '~/types/education'

const { t, locale } = useI18n()

const { data: educationByLang } = await useAsyncData<TranslatedEducation>('education', () =>
  $fetch('/api/education')
)

const educations = computed(() => {
  const data = educationByLang.value
  return data?.[locale.value as keyof typeof data] || []
})
</script>

<template>
  <section class="section mt-section">
    <h3 class="section-title">
      {{ t('education.title') }}
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
  margin-top: 1.25rem;
}

.section-title {
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.25rem;
  margin-bottom: 0.75rem;
  color: #111;
}

.edu-item { margin-bottom: 0.75rem; }
.edu-title {
  font-size: 0.85rem;
  font-weight: 700;
  display: block;
}
.edu-desc {
  font-size: 0.75rem;
  color: #4b5563;
}
</style>
