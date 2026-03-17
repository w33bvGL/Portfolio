<script setup lang="ts">
interface Props {
  align?: 'left' | 'center' | 'right'
}

withDefaults(defineProps<Props>(), {
  align: 'left'
})
</script>

<template>
  <p
    class="card-description"
    :class="`text-${align}`"
  >
    <slot />
  </p>
</template>

<style scoped>
.card-description {
  color: var(--text-muted);
}

.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
</style>
