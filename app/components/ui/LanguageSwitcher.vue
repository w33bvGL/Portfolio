<script setup lang="ts">
import { computed, ref } from 'vue'

const { locale, locales, setLocale } = useI18n()

const dropdownRef = ref<any>(null)

const localeLabels: Record<string, string> = {
  en: 'EN',
  ru: 'RU',
  hy: 'HY',
  uk: 'UK'
}

const currentLocaleLabel = computed(() => localeLabels[locale.value] || locale.value)

const switchLocale = (code: string) => {
  setLocale(code as Locale)
  dropdownRef.value?.close()
}
</script>

<template>
  <UiDropdown
    ref="dropdownRef"
    placement="top-end"
  >
    <template #trigger="{ isOpen }">
      <button
        class="lang-btn"
        :class="{ 'is-active': isOpen }"
        aria-label="Change language"
      >
        <Icon
          name="lucide:globe"
          class="globe-icon"
        />
        <span class="current-lang">{{ currentLocaleLabel }}</span>
        <Icon
          name="lucide:chevron-up"
          class="arrow-icon"
          :class="{ rotate: isOpen }"
        />
      </button>
    </template>

    <template #default>
      <button
        v-for="l in locales"
        :key="l.code"
        class="menu-item"
        :class="{ 'is-selected': l.code === locale }"
        @click="switchLocale(l.code)"
      >
        <span class="lang-name">{{ l.name }}</span>
        <Icon
          v-if="l.code === locale"
          name="lucide:check"
          class="check-icon"
        />
      </button>
    </template>
  </UiDropdown>
</template>

<style scoped>
.lang-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 9999px;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  font-weight: 500;
}

.lang-btn:hover, .lang-btn.is-active {
  color: var(--text-main);
  background: rgba(125, 125, 125, 0.1);
}

.globe-icon { width: 1rem; height: 1rem; opacity: 0.8; }
.arrow-icon { width: 0.875rem; height: 0.875rem; transition: transform 0.3s ease; opacity: 0.5; }
.rotate { transform: rotate(180deg); }

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.menu-item:hover {
  background: rgba(125, 125, 125, 0.1);
  color: var(--text-main);
}

.menu-item.is-selected {
  color: var(--text-main);
  font-weight: 600;
  background: rgba(125, 125, 125, 0.05);
}

.check-icon { width: 0.875rem; height: 0.875rem; }
</style>
