<script setup lang="ts">
import type { TranslatedAbout, About } from '~/types/about'
import type { TranslatedAchievements, Achievement } from '~/types/achievements'

const { locale, t } = useI18n()
const { vIntersection } = useScrollObserver()

const { data: aboutData } = await useAsyncData<TranslatedAbout>('about', () => $fetch('/api/about'))
const { data: achData } = await useAsyncData<TranslatedAchievements>('achievement', () => $fetch('/api/achievements'))

const bio = computed<About[]>(() => aboutData.value?.[locale.value] ?? [])
const achievements = computed<Achievement[]>(() => achData.value?.[locale.value] ?? [])
</script>

<template>
  <section class="story-section">
    <div class="grid-layout">
      <div
        v-intersection
        class="column bio-col scroll-reveal"
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

      <div
        v-intersection
        class="column ach-col scroll-reveal"
        style="--delay: 0.2s"
      >
        <h2 class="col-title">
          <Icon
            name="lucide:trophy"
            class="title-icon"
          />
          {{ t('achievements.title') }}
        </h2>

        <div class="timeline-stack">
          <div class="timeline-line" />

          <div
            v-for="(item, idx) in achievements"
            :key="idx"
            class="ach-item"
          >
            <div class="ach-dot">
              <div class="dot-inner" />
            </div>

            <div class="ach-card glass-panel">
              <span class="ach-year">{{ item.year }}</span>
              <p class="ach-desc">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story-section { margin-bottom: 6rem; }

.grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}

@media (min-width: 900px) {
  .grid-layout {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 5rem;
  }
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

/* Achievement Timeline */
.timeline-stack {
  position: relative;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.timeline-line {
  position: absolute;
  left: 9px;
  top: 15px;
  bottom: 30px;
  width: 2px;
  background: linear-gradient(to bottom, var(--border-color) 0%, transparent 100%);
}

.ach-item {
  position: relative;
}

.ach-dot {
  position: absolute;
  left: -2rem;
  top: 1.25rem;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background: var(--bg-body);
}

.dot-inner {
  width: 10px;
  height: 10px;
  background: var(--primary-color);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--primary-color);
}

.ach-card {
  padding: 1.25rem 1.5rem;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  transition: all 0.3s ease;
}

.ach-card:hover {
  transform: translateX(5px);
  background: rgba(125, 125, 125, 0.05);
  border-color: var(--text-muted);
}

.ach-year {
  font-size: 0.85rem;
  font-family: var(--font-mono); /* Используем моноширинный шрифт для цифр */
  color: var(--primary-color);
  font-weight: 700;
  letter-spacing: 0.05em;
}

.ach-desc {
  font-size: 0.95rem;
  color: var(--text-main);
  line-height: 1.5;
  font-weight: 500;
}

/* Scroll Reveal */
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
