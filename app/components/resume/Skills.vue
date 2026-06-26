<script setup lang="ts">
const { t } = useI18n()

const { data: techs } = await useAsyncData('technologies', () =>
  $fetch('/api/technologies')
)

const skills = computed(() => ({
  'Frontend': techs.value?.frontend || [],
  'Backend & Architecture': techs.value?.backend || [],
  'Tools & DevOps': techs.value?.tools || []
}))
</script>

<template>
  <section class="section">
    <h3 class="section-title">{{ $t('resume.skills') }}</h3>

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
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--r-faint);
  padding-bottom: 0.55rem;
  border-bottom: 1px solid var(--r-line);
  margin-bottom: 1rem;
}

.skills-group { margin-bottom: 0.9rem; }
.skills-group:last-child { margin-bottom: 0; }

.skill-category {
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--r-ink);
  margin-bottom: 0.2rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem 0.35rem;
}

.tag {
  font-size: 0.68rem;
  line-height: 1.4;
  color: var(--r-muted);
  background: var(--r-line-soft);
  padding: 2px 8px;
  border-radius: 5px;
}
</style>
