<script setup lang="ts">
import type { Education, TranslatedEducation } from '~/types/education'

const { t, locale } = useI18n()

// Получаем данные
const { data: educationByLang } = await useAsyncData<TranslatedEducation>('education', () =>
  $fetch('/api/education')
)

const educations = computed<Education[]>(() => {
  if (!educationByLang.value) return []
  if (locale.value in educationByLang.value) {
    return educationByLang.value[locale.value as keyof TranslatedEducation]
  }
  return []
})
</script>

<template>
  <section class="education-section">

    <div class="section-header">
      <h2 class="section-title">{{ t('education.title') }}</h2>
      <p class="section-desc">{{ t('education.description') }}</p>
    </div>

    <div class="grid-container">
      <a
        v-for="(item, index) in educations"
        :key="index"
        :href="item.url || '#'"
        target="_blank"
        class="edu-card glass-panel"
        :style="{ '--delay': `${index * 0.1}s` }"
      >
        <div class="card-icon">
          <Icon name="lucide:graduation-cap" class="icon" />
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
  max-width: 800px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: var(--text-main);
}

.section-desc {
  color: var(--text-muted);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Card Styles */
.edu-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1.5rem;
  text-decoration: none;

  /* Glass Styles */
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(12px);

  transition: all 0.3s ease;
  opacity: 0;
  animation: fade-up 0.6s ease forwards;
  animation-delay: var(--delay);
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.edu-card:hover {
  background: rgba(125, 125, 125, 0.08);
  border-color: var(--text-main);
  transform: translateY(-4px);
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
  transition: all 0.3s;
}

.edu-card:hover .card-icon {
  background: var(--text-main);
  color: var(--bg-body);
}

.icon { width: 1.25rem; height: 1.25rem; }

.card-content {
  flex: 1;
}

.edu-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-main);
  margin: 0 0 0.5rem;
}

.edu-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}

.hover-arrow {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: var(--text-muted);
  opacity: 0;
  transform: translate(-10px, 10px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.edu-card:hover .hover-arrow {
  opacity: 1;
  transform: translate(0, 0);
  color: var(--text-main);
}
</style>
