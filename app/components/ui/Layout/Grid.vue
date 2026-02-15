<script setup lang="ts">
interface Props {
  as?: string
  cols?: number | string
  colsMd?: number | string
  colsLg?: number | string
  gap?: number | string
  items?: 'start' | 'center' | 'end' | 'stretch'
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  cols: 1,
  gap: 1.5,
  items: 'stretch'
})

const style = computed(() => ({
  '--g-cols': props.cols,
  '--g-cols-md': props.colsMd || props.cols,
  '--g-cols-lg': props.colsLg || props.colsMd || props.cols,
  '--g-gap': typeof props.gap === 'number' ? `${props.gap}rem` : props.gap,
  '--g-items': props.items
}))
</script>

<template>
  <component :is="as" class="ui-grid" :style="style">
    <slot />
  </component>
</template>

<style scoped>
.ui-grid {
  display: grid;
  width: 100%;
  gap: var(--g-gap);
  align-items: var(--g-items);
  grid-template-columns: repeat(var(--g-cols), 1fr);
}

@media (min-width: 768px) {
  .ui-grid {
    grid-template-columns: repeat(var(--g-cols-md), 1fr);
  }
}

@media (min-width: 1024px) {
  .ui-grid {
    grid-template-columns: repeat(var(--g-cols-lg), 1fr);
  }
}
</style>
