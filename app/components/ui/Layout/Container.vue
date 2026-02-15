<script setup lang="ts">
interface Props {
  as?: string
  fluid?: boolean
  size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  as: 'div',
  fluid: false,
  size: 'md'
})
</script>

<template>
  <component
    :is="as"
    class="ui-container"
    :class="[
      `size-${size}`,
      { 'is-fluid': fluid }
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.ui-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: var(--container-width, 1200px);
}

.size-sm { max-width: 768px; }
.size-md { max-width: 1200px; }
.size-lg { max-width: 1400px; }

.is-fluid { max-width: 100%; }

@media (min-width: 640px) {
  .ui-container { padding: 0 2rem; }
}
</style>
