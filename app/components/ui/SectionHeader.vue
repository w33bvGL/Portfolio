<script setup lang="ts">
interface Props {
  title: string
  description?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant?: 'hero' | 'section'
  align?: 'left' | 'center' | 'right'
}

withDefaults(defineProps<Props>(), {
  as: 'h2',
  variant: 'section',
  align: 'left'
})
</script>

<template>
  <div
    class="s-hdr"
    :class="[
      `align-${align}`,
      `variant-${variant}`
    ]"
  >
    <div class="s-hdr-row">
      <component
        :is="as"
        class="s-hdr-title"
      >
        {{ title }}
      </component>

      <div
        v-if="$slots.badge"
        class="s-hdr-badge"
      >
        <slot name="badge" />
      </div>
    </div>

    <p
      v-if="description"
      class="s-hdr-desc"
    >
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.s-hdr {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 0.5rem);
  margin-bottom: var(--space-md, 2rem);
  width: 100%;
}

.s-hdr.align-left {
  text-align: left;
  align-items: flex-start;
}
.s-hdr.align-center {
  text-align: center;
  align-items: center;
}
.s-hdr.align-right {
  text-align: right;
  align-items: flex-end;
}

.s-hdr-row {
  display: flex;
  align-items: center;
  gap: var(--space-sm, 0.75rem);
  flex-wrap: wrap;
}

.s-hdr.align-center .s-hdr-row {
  justify-content: center;
}
.s-hdr.align-right .s-hdr-row {
  justify-content: flex-end;
}

.s-hdr-title {
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.03em;
  color: var(--text-main);
  background: none;
  -webkit-background-clip: initial;
  -webkit-text-fill-color: initial;
}

.variant-section .s-hdr-title {
  font-size: var(--font-h2, 1.75rem);
  line-height: var(--leading-tight, 1.2);
}

.variant-hero .s-hdr-title {
  font-size: var(--font-hero, 3rem);
  line-height: var(--leading-tight, 1.1);
  letter-spacing: -0.04em;

  background: linear-gradient(180deg, var(--text-main) 30%, rgba(125, 125, 125, 0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.s-hdr-badge {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.s-hdr-desc {
  line-height: var(--leading-normal, 1.6);
  margin: 0;
  max-width: 42rem;
}

.variant-section .s-hdr-desc {
  font-size: var(--font-body, 0.95rem);
  color: var(--text-muted);
}

.variant-hero .s-hdr-desc {
  font-size: var(--font-body-lg, 1.125rem);
  color: var(--text-muted);
  margin-top: var(--space-xxs, 0.25rem);
}
</style>
