<script setup lang="ts">
const { vIntersection } = useScrollObserver()
const { data: techs } = await useAsyncData('technologies', () => $fetch('/api/technologies'))

const groups = [
  { key: 'frontend', title: 'Frontend', items: techs.value?.frontend },
  { key: 'backend', title: 'Backend', items: techs.value?.backend },
  { key: 'tools', title: 'Tools & DevOps', items: techs.value?.tools }
]
</script>

<template>
  <section class="stack-section">
    <div class="section-header scroll-reveal" v-intersection>
      <h2 class="section-title">
        Tech Stack
      </h2>
      <p class="section-desc">
        Арсенал, с которым я строю будущее.
      </p>
    </div>

    <div class="stack-grid">
      <div
        v-for="(group, index) in groups"
        :key="group.key"
        class="stack-group glass-panel scroll-reveal"
        v-intersection
        :style="{ '--delay': `${index * 0.1}s` }"
      >
        <h3 class="group-title">
          {{ group.title }}
        </h3>

        <div class="tech-list">
          <div
            v-for="tech in group.items"
            :key="tech.name"
            class="tech-item"
          >
            <div class="icon-box">
              <img
                :src="tech.icon"
                :alt="tech.name"
                class="tech-icon"
                loading="lazy"
              >
            </div>
            <span class="tech-name">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack-section {
  margin-bottom: 6rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(180deg, var(--text-main) 0%, rgba(125,125,125,0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-desc {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.stack-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .stack-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.stack-group {
  padding: 2rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.stack-group:hover {
  transform: translateY(-5px);
  border-color: var(--text-muted);
}

.group-title {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary-color);
  font-weight: 700;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.85rem;
  border-radius: 0.75rem;
  background: rgba(125, 125, 125, 0.05);
  border: 1px solid transparent;
  transition: all 0.2s ease;
  user-select: none;
}

.tech-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.icon-box {
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: grayscale(1);
  transition: filter 0.2s;
}

.tech-item:hover .tech-icon {
  filter: grayscale(0);
}

.tech-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: color 0.2s;
}

.tech-item:hover .tech-name {
  color: var(--text-main);
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
