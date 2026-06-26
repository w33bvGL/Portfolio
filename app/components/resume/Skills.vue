<script setup lang="ts">
const { t } = useI18n()

const { data: techs } = await useAsyncData('technologies', () =>
  $fetch('/api/technologies')
)

const skills = computed(() => ({
  'Backend & Architecture': techs.value?.backend || [],
  'Frontend': techs.value?.frontend || [],
  'Tools & DevOps': techs.value?.tools || []
}))
</script>

<template>
  <section class="section">
    <h3 class="section-title">
      <span class="title-text">{{ $t('resume.skills') }}</span>
    </h3>

    <div
      v-for="(items, category) in skills"
      :key="category"
      class="skills-group"
    >
      <h4 class="skill-category">
        {{ category }}
      </h4>
      <div class="skill-tags">
        <span
          v-for="tag in items"
          :key="tag.name"
          class="tag"
        >{{ tag.name }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--r-ink);
  padding-bottom: 0.4rem;
  border-bottom: 1.5px solid var(--r-accent);
  margin-bottom: 0.95rem;
}

.title-text {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.title-text::before {
  content: '';
  width: 9px;
  height: 9px;
  border-radius: 2px;
  background: var(--r-accent);
}

.skills-group { margin-bottom: 0.85rem; }
.skills-group:last-child { margin-bottom: 0; }

.skill-category {
  font-size: 0.6rem;
  font-weight: 700;
  color: var(--r-accent);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.4rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.28rem;
}

.tag {
  font-size: 0.64rem;
  background: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--r-muted);
  font-weight: 500;
  border: 1px solid var(--r-line);
  line-height: 1.3;
}
</style>
