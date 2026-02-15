<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UiLayoutFlex
    v-if="footer?.links"
    :gap="0.5"
    class="social-group"
  >
    <UiButton
      v-for="(link, index) of footer.links"
      :key="index"
      :href="link.to"
      target="_blank"
      variant="ghost"
      :icon="link.icon.replace('i-simple-icons-', 'simple-icons:')"
      :aria-label="link['aria-label']"
    />
  </UiLayoutFlex>
</template>
