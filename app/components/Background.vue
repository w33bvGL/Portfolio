<script setup lang="ts">
const route = useRoute()
const target = ref(null)

// Слежка за мышью через VueUse
const { elementX, elementY } = useMouseInElement(target)

// Базовые позиции блобов
const blobA = ref({ x: -10, y: -10 })
const blobB = ref({ x: 80, y: 70 })

const randomizeBlobs = () => {
  blobA.value = {
    x: Math.floor(Math.random() * 30) - 15,
    y: Math.floor(Math.random() * 30) - 15
  }
  blobB.value = {
    x: Math.floor(Math.random() * 40) + 50,
    y: Math.floor(Math.random() * 40) + 40
  }
}

// Рандомим при каждом переходе
watch(() => route.path, () => {
  randomizeBlobs()
}, { immediate: true })

const dynamicStyle = computed(() => ({
  '--mx': `${elementX.value}px`,
  '--my': `${elementY.value}px`,
  '--ax': `${blobA.value.x}%`,
  '--ay': `${blobA.value.y}%`,
  '--bx': `${blobB.value.x}%`,
  '--by': `${blobB.value.y}%`
}))
</script>

<template>
  <div
    ref="target"
    class="app-background"
    :style="dynamicStyle"
  >
    <div class="layout-fx">
      <div class="blob b-1" />
      <div class="blob b-2" />
      <div class="grid-overlay" />
    </div>
  </div>
</template>

<style scoped>
.app-background {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-color: var(--bg-body);
  /* Дефолты для SSR */
  --mx: 50%;
  --my: 50%;
}

.layout-fx {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--border-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
  background-size: 4rem 4rem;
  opacity: 0.03;
  mask-image: radial-gradient(circle at center, black, transparent 85%);
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  will-change: transform, top, left;
  transition:
    top 1.5s cubic-bezier(0.2, 0.8, 0.2, 1),
    left 1.5s cubic-bezier(0.2, 0.8, 0.2, 1),
    transform 0.8s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 1s ease;
}

.b-1 {
  width: 60vh;
  height: 60vh;
  background: var(--primary-color);
  opacity: 0.04;
  left: var(--ax);
  top: var(--ay);
  transform: translate(calc(var(--mx) / 30), calc(var(--my) / 30));
}

.b-2 {
  width: 50vh;
  height: 50vh;
  background: var(--text-muted);
  opacity: 0.03;
  left: var(--bx);
  top: var(--by);
  transform: translate(calc(var(--mx) / -40), calc(var(--my) / -40));
}

@media (max-width: 640px) {
  .blob {
    filter: blur(80px);
  }
}
</style>
