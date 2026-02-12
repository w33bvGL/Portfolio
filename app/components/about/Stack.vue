<script setup lang="ts">
const { t } = useI18n()
const { data: techs } = await useAsyncData('technologies', () => $fetch('/api/technologies'))

const groups = [
  { key: 'frontend', title: 'Frontend', items: techs.value?.frontend },
  { key: 'backend', title: 'Backend', items: techs.value?.backend },
  { key: 'tools', title: 'Tools & DevOps', items: techs.value?.tools }
]
</script>

<template>
  <section class="stack-section">
    <div class="section-header">
      <h2 class="section-title">
        Tech Stack
      </h2>
      <p class="section-desc">
        Tools used to build the future.
      </p>
    </div>

    <div class="stack-grid">
      <div
        v-for="group in groups"
        :key="group.key"
        class="stack-group glass-panel"
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
.stack-section { margin-bottom: 5rem; }

.section-header { text-align: center; margin-bottom: 3rem; }
.section-title {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--text-main), var(--text-muted));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.section-desc { color: var(--text-muted); }

.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.stack-group {
  padding: 1.5rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.group-title {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  font-weight: 600;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  background: rgba(125, 125, 125, 0.05);
  border: 1px solid transparent;
  transition: all 0.2s;
  cursor: default;
}

.tech-item:hover {
  background: rgba(125, 125, 125, 0.1);
  border-color: var(--border-color);
  transform: translateY(-2px);
}

.icon-box {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-icon { width: 100%; height: 100%; object-fit: contain; }

.tech-name { font-size: 0.85rem; font-weight: 500; color: var(--text-main); }
</style>
