<script setup lang="ts">
import type { Experience, TranslatedExperiences } from '~/types/experience'

const { t, locale } = useI18n()
const { experienceString } = useExperienceString()

const { data: experienceByLang } = await useAsyncData<TranslatedExperiences>('experiences', () =>
  $fetch('/api/experiences')
)

const experiences = computed(() => {
  const data = experienceByLang.value
  return data?.[locale.value as keyof typeof data] || []
})
</script>

<template>
  <section class="section">
    <h3 class="section-title">
      {{ t('experience.title') }}
      <span class="exp-total">({{ experienceString }})</span>
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
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.25rem;
  margin-bottom: 0.75rem;
  color: #111;
  display: flex;
  justify-content: space-between;
}

.exp-total {
  font-size: 0.7rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: none;
}

.experience-item {
  margin-bottom: 1rem;
}
.experience-item:last-child { margin-bottom: 0; }

.exp-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.1rem;
}

.company {
  font-weight: 700;
  font-size: 0.95rem;
  color: #111;
}

.period {
  font-size: 0.75rem;
  font-family: monospace;
  color: #6b7280;
  font-weight: 500;
}

.role {
  font-size: 0.85rem;
  font-style: italic;
  color: #374151;
  margin-bottom: 0.25rem;
}

.description {
  font-size: 0.75rem;
  line-height: 1.35;
  color: #4b5563;
  white-space: pre-line;
  text-align: justify;
}
</style>
