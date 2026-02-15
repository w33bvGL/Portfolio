<script setup lang="ts">
withDefaults(defineProps<{
  as?: string
  screen?: boolean
  h?: string
}>(), {
  as: 'div',
  screen: false
})
</script>

<template>
  <component
    :is="as"
    class="ui-center"
    :class="{ 'h-screen': screen }"
    :style="h ? { minHeight: h } : {}"
  >
    <slot />
  </component>
</template>

<style scoped>
.ui-center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.h-screen { min-height: 100vh; }
</style>
