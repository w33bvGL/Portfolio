<script setup lang="ts">
import type { TranslatedAbout, About } from '~/types/about'
import type { TranslatedAchievements, Achievement } from '~/types/achievements'

const { locale, t } = useI18n()

const { data: aboutData } = await useAsyncData<TranslatedAbout>('about', () => $fetch('/api/about'))
const { data: achData } = await useAsyncData<TranslatedAchievements>('achievement', () => $fetch('/api/achievements'))

const bio = computed<About[]>(() => aboutData.value?.[locale.value] ?? [])
const achievements = computed<Achievement[]>(() => achData.value?.[locale.value] ?? [])
</script>

<template>
  <section class="story-section">
    <div class="grid-layout">

      <div class="column bio-col">
        <h2 class="col-title">{{ t('about.title') }}</h2>

        <div class="cards-stack">
          <div
            v-for="(item, idx) in bio"
            :key="idx"
            class="story-card glass-panel"
          >
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.content }}</p>
          </div>
        </div>
      </div>

      <div class="column ach-col">
        <h2 class="col-title">{{ t('achievements.title') }}</h2>

        <div class="timeline-stack">
          <div class="timeline-line" />

          <div
            v-for="(item, idx) in achievements"
            :key="idx"
            class="ach-item"
          >
            <div class="ach-dot" />
            <div class="ach-card glass-panel">
              <span class="ach-year">{{ item.year }}</span>
              <p class="ach-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.story-section { margin-bottom: 5rem; }

.grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 768px) {
  .grid-layout { grid-template-columns: 1fr 1fr; }
}

.col-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-main);
  padding-left: 0.5rem;
}

/* Bio Cards */
.cards-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.story-card {
  padding: 1.5rem;
  border-radius: 1.25rem;
  transition: transform 0.3s;
}

.story-card:hover { transform: translateY(-3px); }

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-main);
}

.card-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
}

/* Achievement Timeline */
.timeline-stack {
  position: relative;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.timeline-line {
  position: absolute;
  left: 6px;
  top: 10px;
  bottom: 20px;
  width: 2px;
  background: var(--border-color);
  opacity: 0.5;
}

.ach-item {
  position: relative;
}

.ach-dot {
  position: absolute;
  left: -1.5rem;
  top: 1rem;
  width: 0.8rem;
  height: 0.8rem;
  background: var(--bg-body);
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  z-index: 2;
}

.ach-card {
  padding: 1rem 1.25rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.ach-year {
  font-size: 0.85rem;
  font-family: monospace;
  color: var(--primary-color);
  font-weight: 600;
}

.ach-desc {
  font-size: 0.95rem;
  color: var(--text-main);
}
</style>
