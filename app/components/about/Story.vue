<script setup lang="ts">
import type { TranslatedAbout, About } from '~/types/about'

const { locale, t } = useI18n()
const { vIntersection } = useScrollObserver()

const { data: aboutData } = await useAsyncData<TranslatedAbout>('about', () => $fetch('/api/about'))

const bio = computed<About[]>(() => aboutData.value?.[locale.value] ?? [])
</script>

<template>
  <section class="story-section">
    <div
      v-intersection
      class="bio-container scroll-reveal"
    >
      <h2 class="col-title">
        <Icon
          name="lucide:book-open"
          class="title-icon"
        />
        {{ t('about.title') }}
      </h2>

      <div class="cards-stack">
        <div
          v-for="(item, idx) in bio"
          :key="idx"
          class="story-card glass-panel"
        >
          <h3 class="card-title">
            {{ item.title }}
          </h3>
          <p class="card-text">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story-section {
  margin-bottom: 6rem;
}

.bio-container {
  max-width: 800px; /* Ограничиваем ширину, чтобы текст не разъезжался на всю ширину UltraWide мониторов */
  margin: 0 auto;
}

.col-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.title-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--primary-color);
}

/* Bio Cards */
.cards-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.story-card {
  padding: 2rem;
  border-radius: 1.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.story-card:hover {
  transform: translateY(-4px);
  border-color: var(--text-muted);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-main);
}

.card-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-muted);
}

/* Scroll Reveal */
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
