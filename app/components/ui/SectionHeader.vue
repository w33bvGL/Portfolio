<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    description?: string
    align?: 'left' | 'center' | 'right'
  }>(),
  {
    align: 'left'
  }
)
</script>

<template>
  <div class="s-hdr" :style="{ '--hdr-align': align }">
    <div class="s-hdr-row">
      <h2 class="s-hdr-title">
        {{ title }}
      </h2>

      <div v-if="$slots.badge" class="s-hdr-badge">
        <slot name="badge" />
      </div>
    </div>

    <p v-if="description" class="s-hdr-desc">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.s-hdr {
  display: flex;
  flex-direction: column;
  gap: var(--space-xxs, 0.5rem);
  margin-bottom: var(--space-md, 2rem);
  text-align: var(--hdr-align);
  align-items: cubic-bezier(0, 0, 0, 0);

  &[style*="--hdr-align: left"] { align-items: flex-start; }
  &[style*="--hdr-align: center"] { align-items: center; }
  &[style*="--hdr-align: right"] { align-items: flex-end; }

  & .s-hdr-row {
    display: flex;
    align-items: center;
    gap: var(--space-sm, 1rem);
    flex-wrap: wrap;
    justify-content: inherit;
  }

  & .s-hdr-title {
    font-size: var(--font-h2);
    font-weight: var(--weight-bold);
    line-height: var(--leading-tight);
    color: var(--color-heading);
    margin: 0;
  }

  & .s-hdr-badge {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  & .s-hdr-desc {
    font-size: var(--font-body);
    line-height: var(--leading-normal);
    color: var(--color-text-subtle);
    margin: 0;
    max-width: 48rem;
  }
}
</style>
