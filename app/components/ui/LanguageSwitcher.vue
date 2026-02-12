<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const isOpen = ref(false)
const containerRef = ref(null)

const localeLabels: Record<string, string> = {
  en: 'EN',
  ru: 'RU',
  hy: 'HY',
  uk: 'UK'
}

const currentLocaleLabel = computed(() => localeLabels[locale.value] || locale.value)

const toggle = () => isOpen.value = !isOpen.value
const close = () => isOpen.value = false

const switchLocale = (code: string) => {
  setLocale(code)
  close()
}

onMounted(() => {
  document.addEventListener('click', (e) => {
    if (containerRef.value && !containerRef.value.contains(e.target)) {
      close()
    }
  })
})
</script>

<template>
  <div
    ref="containerRef"
    class="lang-switcher"
  >
    <button
      class="lang-btn"
      :class="{ 'is-active': isOpen }"
      aria-label="Change language"
      @click="toggle"
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

    <Transition name="pop-up">
      <div
        v-if="isOpen"
        class="lang-menu glass-panel"
      >
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
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.lang-switcher {
  position: relative;
  z-index: 20;
}

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

.globe-icon {
  width: 1rem;
  height: 1rem;
  opacity: 0.8;
}

.arrow-icon {
  width: 0.875rem;
  height: 0.875rem;
  transition: transform 0.3s ease;
  opacity: 0.5;
}

.rotate {
  transform: rotate(180deg);
}

.lang-menu {
  position: absolute;
  bottom: 120%;
  right: 0;
  min-width: 140px;
  padding: 0.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}

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

.check-icon {
  width: 0.875rem;
  height: 0.875rem;
}

.pop-up-enter-active,
.pop-up-leave-active {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.pop-up-enter-from,
.pop-up-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}
</style>
