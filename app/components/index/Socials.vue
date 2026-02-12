<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <div class="social-group" v-if="footer?.links">
    <UiButton
      v-for="(link, index) of footer.links"
      :key="index"
      :href="link.to"
      target="_blank"
      variant="ghost"
      class="social-btn"
      :aria-label="link['aria-label']"
    >
      <Icon
        :name="link.icon.replace('i-simple-icons-', 'simple-icons:')"
        class="icon"
      />
    </UiButton>
  </div>
</template>

<style scoped>
.social-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.social-btn {
  padding: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  flex-shrink: 0;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
