<script setup lang="ts">
interface Props {
  as?: string
  variant?: 'glass' | 'ghost' | 'filled'
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  variant: 'glass',
})
</script>

<template>
  <component
    :is="as"
    class="ui-card"
    :class="[
      `variant-${variant}`,
    ]"
  >
    <div
      v-if="variant === 'glass'"
      class="card-gradient"
    />

    <div class="card-inner">
      <slot />
    </div>
  </component>
</template>

<style scoped>
.ui-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  overflow: hidden;
  text-decoration: none;
  color: var(--text-main);
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  isolation: isolate;
}

.variant-glass {
  background: var(--glass-bg, rgba(20, 20, 20, 0.4));
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.variant-ghost {
  background: transparent;
  border: 1px solid transparent;
}

.variant-filled {
  background: var(--bg-body);
  border: 1px solid var(--border-color);
}

.card-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}

.card-gradient {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(to bottom right, rgba(255,255,255,0.03), transparent 60%);
  pointer-events: none;
}
</style>
