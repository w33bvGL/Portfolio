<script setup lang="ts">
interface Props {
  as?: string
  noPad?: boolean
  dense?: boolean
}

withDefaults(defineProps<Props>(), {
  as: 'section',
  noPad: false,
  dense: false
})
</script>

<template>
  <component
    :is="as"
    class="ui-section"
    :class="{ 'no-pad': noPad, 'is-dense': dense }"
  >
    <slot />
  </component>
</template>

<style scoped>
.ui-section {
  position: relative;
  width: 100%;
  padding: 5rem 0;
}

.is-dense { padding: 2.5rem 0; }
.no-pad { padding: 0; }

@media (max-width: 768px) {
  .ui-section { padding: 3.5rem 0; }
  .is-dense { padding: 2rem 0; }
}
</style>
