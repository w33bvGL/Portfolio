<script setup lang="ts">
const { t, locales } = useI18n()
const config = useRuntimeConfig()

const isOpen = ref(false)
const containerRef = ref<HTMLElement | null>(null)

const toggle = () => isOpen.value = !isOpen.value

const close = (e: MouseEvent) => {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

function download(code: string): void {
  const isStatic = config.public.appEnv === 'production'
  const url = isStatic ? `/resume/resume-${code}.pdf` : `/api/resume-pdf?lang=${code}`

  const link = document.createElement('a')
  link.href = url
  link.download = `resume-${code}.pdf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  isOpen.value = false
}

onMounted(() => document.addEventListener('click', close))
onUnmounted(() => document.removeEventListener('click', close))
</script>

<template>
  <div
    ref="containerRef"
    class="resume-wrapper"
  >
    <UiButton
      variant="primary"
      icon="lucide:file-down"
      class="trigger-btn"
      @click.stop="toggle"
    >
      {{ t('cta.resume.download') || 'Download CV' }}
      <Icon
        name="lucide:chevron-down"
        class="chevron"
        :class="{ 'is-rotated': isOpen }"
      />
    </UiButton>

    <Transition name="fade-drop">
      <div
        v-if="isOpen"
        class="dropdown-menu glass-panel"
      >
        <button
          v-for="l in locales"
          :key="l.code"
          class="menu-item"
          @click="download(l.code)"
        >
          <span class="lang-code">{{ l.code.toUpperCase() }}</span>
          <span class="lang-label">{{ l.name }}</span>
          <Icon
            name="lucide:download"
            class="dl-icon"
          />
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.resume-wrapper {
  position: relative;
}

.trigger-btn {
  min-width: 200px;
  justify-content: space-between;
}

.chevron {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
  opacity: 0.6;
}

.chevron.is-rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  padding: 0.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 50;

  /* Glass Styles inherited from global .glass-panel but refined */
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
  transform-origin: top center;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  font-size: 0.9rem;
}

.menu-item:hover {
  background: rgba(125, 125, 125, 0.08);
  color: var(--text-main);
}

.lang-code { font-weight: 700; font-size: 0.75rem; opacity: 0.5; width: 1.5rem; }
.lang-label { flex: 1; font-weight: 500; }
.dl-icon { width: 1rem; height: 1rem; opacity: 0; transform: translateX(-5px); transition: all 0.2s; }
.menu-item:hover .dl-icon { opacity: 1; transform: translateX(0); }

.fade-drop-enter-active, .fade-drop-leave-active { transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
.fade-drop-enter-from, .fade-drop-leave-to { opacity: 0; transform: translateY(-5px) scale(0.98); }
</style>
