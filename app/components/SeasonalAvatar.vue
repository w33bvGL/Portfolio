<script setup lang="ts">
interface Props {
  src: string
  alt: string
  size?: number
}

const props = defineProps<Props>()

const size = computed(() => props.size ?? 112)
</script>

<template>
  <div
    :style="{ width: size + 'px', height: size + 'px' }"
    class="relative"
  >
    <NuxtImg
      :src="props.src"
      :alt="props.alt"
      :width="size"
      :height="size"
      format="webp"
      class="rounded-full border border-muted w-full h-full"
    />
  </div>
</template>
