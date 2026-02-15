<script setup lang="ts">
defineProps<{
  as?: string
}>()
</script>

<template>
  <component :is="as || 'h3'" class="card-title">
    <slot />
  </component>
</template>

<style scoped>
.card-title {
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--text-main);
  margin: 0;
}
</style>
