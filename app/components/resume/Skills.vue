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
    <h3 class="section-title">{{ $t('resume.skills') }}</h3>

    <div v-for="(items, category) in skills" :key="category" class="skills-group">
      <h4 class="skill-category">{{ category }}</h4>
      <div class="skill-tags">
        <span v-for="tag in items" :key="tag.name" class="tag">{{ tag.name }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.25rem;
  margin-bottom: 0.75rem;
  color: #111;
}

.skills-group { margin-bottom: 1rem; }

.skill-category {
  font-size: 0.7rem;
  font-weight: 700;
  color: #9ca3af;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.tag {
  font-size: 0.65rem;
  background: #f3f4f6;
  padding: 1px 5px;
  border-radius: 3px;
  color: #111;
  font-weight: 500;
  border: 1px solid #e5e7eb;
}
</style>
