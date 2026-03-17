<script setup lang="ts">
interface Props {
  as?: string
  align?: 'left' | 'center' | 'right'
}

withDefaults(defineProps<Props>(), {
  as: 'h3',
  align: 'left'
})
</script>

<template>
  <component
    :is="as"
    class="card-title"
    :class="`text-${align}`"
  >
    <slot />
  </component>
</template>

<style scoped>
.card-title {
  font-size: var(--font-body-lg);
  font-weight: 700;
  line-height: var(--leading-normal);
  color: var(--text-main);
  margin: 0;
}

.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
</style>
