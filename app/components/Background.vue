<script setup lang="ts">
const route = useRoute()
const target = ref(null)

// VueUse — слежка за мышью
const { elementX, elementY } = useMouseInElement(target)

// Жесткие дефолты для SSR, чтобы сервер и клиент совпали в первый миг
const blobA = ref({ x: 5, y: 5 })
const blobB = ref({ x: 75, y: 65 })
const isMounted = ref(false)

const randomizeBlobs = () => {
  // На сервере Math.random() не вызовется, так как функция сработает только в watch на клиенте
  blobA.value = {
    x: Math.floor(Math.random() * 40) - 10,
    y: Math.floor(Math.random() * 40) - 10
  }
  blobB.value = {
    x: Math.floor(Math.random() * 40) + 50,
    y: Math.floor(Math.random() * 40) + 30
  }
}

// Рандомим только на клиенте
onMounted(() => {
  isMounted.value = true
  randomizeBlobs()
})

// Следим за роутом, но пропускаем первый запуск на сервере
watch(() => route.path, () => {
  if (process.client) {
    randomizeBlobs()
  }
})

const dynamicStyle = computed(() => {
  // Если мы еще не на клиенте, отдаем пустые значения или дефолты
  // Это предотвращает Hydration Mismatch
  return {
    '--mx': isMounted.value ? `${elementX.value}px` : '50%',
    '--my': isMounted.value ? `${elementY.value}px` : '50%',
    '--ax': `${blobA.value.x}%`,
    '--ay': `${blobA.value.y}%`,
    '--bx': `${blobB.value.x}%`,
    '--by': `${blobB.value.y}%`
  }
})
</script>

<template>
  <div
    ref="target"
    class="app-background"
    :style="dynamicStyle"
  >
    <div class="layout-fx">
      <div class="blob b-1" :class="{ 'is-visible': isMounted }" />
      <div class="blob b-2" :class="{ 'is-visible': isMounted }" />
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
