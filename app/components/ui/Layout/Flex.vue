<script setup lang="ts">
interface Props {
  as?: string
  col?: boolean
  wrap?: boolean
  gap?: number | string
  justify?: 'start' | 'end' | 'center' | 'between' | 'around'
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline'
  full?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  col: false,
  wrap: false,
  gap: 1,
  justify: 'start',
  align: 'stretch',
  full: false
})

const style = computed(() => ({
  '--f-gap': typeof props.gap === 'number' ? `${props.gap}rem` : props.gap,
  '--f-dir': props.col ? 'column' : 'row',
  '--f-wrap': props.wrap ? 'wrap' : 'nowrap',
  '--f-justify': mapJustify(props.justify),
  '--f-align': mapAlign(props.align)
}))

function mapJustify(v: string) {
  const map: Record<string, string> = { start: 'flex-start', end: 'flex-end', between: 'space-between', around: 'space-around', center: 'center' }
  return map[v] || v
}
function mapAlign(v: string) {
  const map: Record<string, string> = { start: 'flex-start', end: 'flex-end', center: 'center', stretch: 'stretch', baseline: 'baseline' }
  return map[v] || v
}
</script>

<template>
  <component
    :is="as"
    class="ui-flex"
    :class="{ 'w-full': full }"
    :style="style"
  >
    <slot />
  </component>
</template>

<style scoped>
.ui-flex {
  display: flex;
  flex-direction: var(--f-dir);
  flex-wrap: var(--f-wrap);
  gap: var(--f-gap);
  justify-content: var(--f-justify);
  align-items: var(--f-align);
}
.w-full { width: 100%; }
</style>
