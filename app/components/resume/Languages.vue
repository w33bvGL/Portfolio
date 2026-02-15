<script setup lang="ts">
interface Language {
  name: string
  level: string
}

const { data: languages } = await useAsyncData<Language[]>('languages', () =>
  $fetch('/api/languages')
)
</script>

<template>
  <section
    v-if="languages?.length"
    class="section mt-section"
  >
    <h3 class="section-title">
      {{ $t('languages.title') }}
    </h3>
    <ul class="lang-list">
      <li
        v-for="lang in languages"
        :key="lang.name"
      >
        <span class="lang-name">{{ lang.name }}</span>
        <span class="lang-lvl">{{ lang.level }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.mt-section {
  margin-top: 1.25rem;
}

.section-title {
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #111;
  padding-bottom: 0.25rem;
  margin-bottom: 0.75rem;
  color: #000 !important;
}

.lang-list {
  list-style: none;
  font-size: 0.75rem;
}

.lang-list li {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0;
  border-bottom: 1px dashed #e5e7eb;
}

.lang-list li:last-child {
  border: none;
}

.lang-name {
  font-weight: 600;
  color: #000 !important;
}

.lang-lvl {
  color: #4b5563 !important;
}

@media print {
  .lang-name { color: #000 !important; }
  .lang-lvl { color: #4b5563 !important; }
}
</style>
