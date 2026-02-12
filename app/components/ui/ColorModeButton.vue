<script setup lang="ts">
import { computed, nextTick } from 'vue'

const colorMode = useColorMode()

// Формат для @nuxt/icon. Убедись, что модуль установлен.
const nextTheme = computed(() => colorMode.value === 'dark' ? 'light' : 'dark')
const iconName = computed(() => colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon')

const switchTheme = () => {
  colorMode.preference = nextTheme.value
}

const startViewTransition = (event: MouseEvent) => {
  console.log('Клик зафиксирован, меняем тему на:', nextTheme.value)

  // Если браузер не поддерживает View Transitions API
  if (!document.startViewTransition) {
    switchTheme()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  const transition = document.startViewTransition(async () => {
    switchTheme()
    // Ждем, пока Vue обновит DOM (добавит класс .dark)
    await nextTick()
  })

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: 450,
        easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  })
}
</script>

<template>
  <div class="theme-switch-root">
    <ClientOnly>
      <button
        type="button"
        class="theme-btn"
        @click="startViewTransition"
      >
        <Icon
          :name="iconName"
          class="theme-icon"
        />
      </button>

      <template #fallback>
        <div class="theme-btn skeleton" />
      </template>
    </ClientOnly>
  </div>
</template>

<style scoped>
.theme-switch-root {
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-btn {
  appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: all 0.2s ease;
  padding: 0;
  position: relative;
  z-index: 10;
  pointer-events: auto; /* Чтобы точно кликалось */
}

.theme-btn:hover {
  color: var(--text-main);
  background-color: rgba(125, 125, 125, 0.1);
}

.theme-icon {
  width: 1.25rem;
  height: 1.25rem;
  pointer-events: none;
}

.skeleton {
  background-color: rgba(125, 125, 125, 0.1);
}
</style>

<style>
/* Обязательно глобально для View Transition API */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}

::view-transition-new(root) {
  z-index: 9999;
}

::view-transition-old(root) {
  z-index: 1;
}
</style>
