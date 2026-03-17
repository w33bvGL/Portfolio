<script setup lang="ts">
const colorMode = useColorMode()

const nextTheme = computed(() => colorMode.value === 'dark' ? 'light' : 'dark')
const iconName = computed(() => colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon')

const switchTheme = () => {
  colorMode.preference = nextTheme.value
}

const startViewTransition = (event: MouseEvent) => {
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
  <ClientOnly>
    <UiButton
      variant="soft"
      size="sm"
      :icon="iconName"
      @click="startViewTransition"
    />

    <template #fallback>
      <div class="theme-btn skeleton" />
    </template>
  </ClientOnly>
</template>

<style scoped>
.skeleton {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  background-color: rgba(125, 125, 125, 0.1);
}
</style>

<style>
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
