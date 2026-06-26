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
    <h3 class="section-title">{{ $t('languages.title') }}</h3>
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
  margin-top: 1.6rem;
}

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

.lang-list {
  list-style: none;
  font-size: 0.75rem;
}

.lang-list li {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.3rem 0;
  border-bottom: 1px solid var(--r-line-soft);
}

.lang-list li:last-child {
  border: none;
}

.lang-name {
  font-weight: 600;
  color: var(--r-ink);
}

.lang-lvl {
  font-family: var(--r-mono);
  font-size: 0.68rem;
  color: var(--r-faint);
}
</style>
