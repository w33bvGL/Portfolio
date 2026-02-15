<script setup lang="ts">
const { vIntersection } = useScrollObserver()
const { data: techs } = await useAsyncData('technologies', () => $fetch('/api/technologies'))

// Группируем так, чтобы backend и frontend были в фокусе
const groups = computed(() => [
  { key: 'frontend', title: 'Frontend', items: techs.value?.frontend, icon: 'lucide:layout' },
  { key: 'backend', title: 'Backend', items: techs.value?.backend, icon: 'lucide:database' },
  { key: 'tools', title: 'Tools & DevOps', items: techs.value?.tools, icon: 'lucide:wrench' }
])
</script>

<template>
  <section class="stack-section">
    <UiSectionHeader
      :title="$t('stack.title')"
      :description="$t('stack.description')"
    />

    <div class="stack-container">
      <UiCard
        v-intersection
        variant="glass"
        no-hover
        class="main-stack-card scroll-reveal"
      >
        <UiCardContent class="main-content">
          <div
            v-for="(group, gIdx) in groups"
            :key="group.key"
            class="stack-group"
          >
            <div class="group-info">
              <div class="group-icon">
                <Icon :name="group.icon" />
              </div>
              <h3 class="group-label">
                {{ group.title }}
              </h3>
            </div>

            <div class="tech-cloud">
              <div
                v-for="(tech, tIdx) in group.items"
                :key="tech.name"
                class="tech-pill"
                :style="{ '--p-delay': `${(gIdx * 5 + tIdx) * 0.03}s` }"
              >
                <img
                  :src="tech.icon"
                  :alt="tech.name"
                  class="p-icon"
                >
                <span class="p-name">{{ tech.name }}</span>
                <div class="p-glow" />
              </div>
            </div>
          </div>
        </UiCardContent>
      </UiCard>
    </div>
  </section>
</template>

<style scoped>
.stack-section {
  padding: 4rem 0;
}

.stack-container {
  margin-top: 3rem;
  width: 100%;
}

.main-stack-card {
  border: 1px solid rgba(255, 255, 255, 0.03) !important;
  background: rgba(15, 15, 15, 0.2) !important;
}

.main-content {
  padding: 3rem !important;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

/* Группа (Frontend/Backend/etc) */
.stack-group {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  align-items: flex-start;
}

@media (max-width: 768px) {
  .stack-group {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .main-content { padding: 1.5rem !important; }
}

.group-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: sticky;
  top: 2rem;
}

.group-icon {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(125, 125, 125, 0.05);
  border-radius: 12px;
  color: var(--primary-color);
  font-size: 1.2rem;
}

.group-label {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.02em;
}

/* Облако технологий */
.tech-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tech-pill {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 100px;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  overflow: hidden;
  cursor: default;
  /* Анимация проявления при скролле */
  opacity: 0;
  transform: scale(0.9);
  animation: pill-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  animation-delay: var(--p-delay);
}

@keyframes pill-in {
  to { opacity: 1; transform: scale(1); }
}

.tech-pill:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: var(--primary-color);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.5);
}

.p-icon {
  width: 1.1rem;
  height: 1.1rem;
  object-fit: contain;
  filter: grayscale(1) opacity(0.7);
  transition: all 0.3s ease;
}

.tech-pill:hover .p-icon {
  filter: grayscale(0) opacity(1);
}

.p-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: color 0.3s ease;
}

.tech-pill:hover .p-name {
  color: var(--text-main);
}

.p-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, var(--primary-color) 0%, transparent 80%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-pill:hover .p-glow { opacity: 0.1; }

/* Футер с подписью */
.stack-footer {
  justify-content: center;
  padding: 2rem !important;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.01);
}

.signature-wrapper {
  opacity: 0.4;
  transition: opacity 0.5s ease, transform 0.5s ease;
  filter: brightness(0) invert(1); /* Для темной темы */
}

.main-stack-card:hover .signature-wrapper {
  opacity: 0.8;
  transform: scale(1.05) rotate(-2deg);
}

.signature-img {
  height: 50px;
  width: auto;
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
