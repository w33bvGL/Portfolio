<script setup lang="ts">
const target = ref<HTMLElement | null>(null)

defineProps<{
  title: string
  description?: string
  align?: 'left' | 'center' | 'right'
}>()

</script>

<template>
  <div
    ref="target"
    class="section-header animate-slide-up stagger-delay-2"
    :class="[
      `align-${align || 'left'}`,
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
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  line-height: var(--leading-tight);
  color: var(--text-main);
}

.badge-wrapper {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.section-desc {
  color: var(--text-muted);
  margin: 0;
}

</style>
