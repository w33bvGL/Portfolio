<script setup lang="ts">
import type { Education, TranslatedEducation } from '~/types/education'

const { t, locale } = useI18n()
const { vIntersection } = useScrollObserver()

const { data: educationByLang } = await useAsyncData<TranslatedEducation>('education', () =>
  $fetch('/api/education')
)

const educations = computed<Education[]>(() => {
  if (!educationByLang.value) return []
  const lang = locale.value as keyof TranslatedEducation
  return educationByLang.value[lang] || []
})
</script>

<template>
  <section class="education-section">
    <UiSectionHeader
      :title="t('education.title')"
      :description="t('education.description')"
    />

    <div class="grid-container">
      <a
        v-for="(item, index) in educations"
        :key="index"
        v-intersection
        :href="item.url || '#'"
        target="_blank"
        class="edu-card glass-panel scroll-reveal"
        :style="{ '--delay': `${index * 0.15}s` }"
      >
        <div class="card-icon">
          <Icon
            name="lucide:graduation-cap"
            class="icon"
          />
        </div>

        <div class="card-content">
          <h5 class="edu-title">{{ item.title }}</h5>
          <p class="edu-desc">{{ item.description }}</p>
        </div>

        <div class="hover-arrow">
          <Icon name="lucide:arrow-up-right" />
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.education-section {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (min-width: 640px) {
  .education-section { padding: 0 2rem; }
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
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

.edu-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1.5rem;
  text-decoration: none;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(12px);
  transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
}

.edu-card:hover {
  background: rgba(125, 125, 125, 0.08);
  border-color: var(--text-muted);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
}

.card-icon {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(125, 125, 125, 0.1);
  color: var(--text-main);
  transition: all 0.3s ease;
}

.edu-card:hover .card-icon {
  background: var(--text-main);
  color: var(--bg-body);
}

.icon { width: 1.25rem; height: 1.25rem; }

.card-content { flex: 1; }

.edu-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 0.5rem;
}

.edu-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

.hover-arrow {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: var(--text-muted);
  opacity: 0;
  transform: translate(-10px, 10px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.edu-card:hover .hover-arrow {
  opacity: 1;
  transform: translate(0, 0);
  color: var(--text-main);
}
</style>
