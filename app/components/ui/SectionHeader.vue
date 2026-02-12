<script setup lang="ts">
const target = ref<HTMLElement | null>(null)
const isVisible = ref(false)

defineProps<{
  title: string
  description?: string
  align?: 'left' | 'center' | 'right'
}>()

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      observer.disconnect()
    }
  }, { threshold: 0.1 })

  if (target.value) observer.observe(target.value)
})
</script>

<template>
  <div
    ref="target"
    class="section-header scroll-reveal"
    :class="[
      `align-${align || 'left'}`,
      { 'is-visible': isVisible }
    ]"
  >
    <div class="title-row">
      <h2 class="section-title">
        {{ title }}
      </h2>

      <div
        v-if="$slots.badge"
        class="badge-wrapper"
      >
        <slot name="badge" />
      </div>
    </div>

    <p
      v-if="description"
      class="section-desc"
    >
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.section-header {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.align-left { text-align: left; align-items: flex-start; }
.align-center { text-align: center; align-items: center; }
.align-right { text-align: right; align-items: flex-end; }

.title-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.align-center .title-row {
  justify-content: center;
}

.section-title {
  font-size: var(--font-h2);
  font-weight: 800;
  line-height: var(--leading-tight);
  color: var(--text-main);
  margin: 0;
}

.badge-wrapper {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.section-desc {
  font-size: var(--font-body-lg);
  color: var(--text-muted);
  max-width: 600px;
  margin: 0;
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
  transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
