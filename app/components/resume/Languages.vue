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
      <span class="title-text">{{ $t('languages.title') }}</span>
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
  margin-top: 1.6rem;
}

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
