<script setup lang="ts">
const { footer } = useAppConfig()
const { t } = useI18n()
</script>

<template>
  <section class="a-intro">
    <div class="a-intro-box">
      <UiSectionHeader
        as="h1"
        variant="hero"
        align="center"
        :title="t('about.title')"
        :description="t('about.description')"
        class="scroll-animate-fade"
      />

      <div
        v-if="footer?.links"
        class="a-intro-socials scroll-animate-fade stagger-delay-2"
      >
        <UiButton
          v-for="(link, index) of footer.links"
          :key="index"
          :href="link.to"
          variant="ghost"
          size="lg"
          :icon="link.icon.replace('i-simple-icons-', 'simple-icons:')"
          :aria-label="link['aria-label']"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.a-intro {
  padding: 0 var(--space-md, 2rem);

  & .a-intro-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--space-md, 1rem);
  }

  & .a-intro-socials {
    display: flex;
    gap: var(--space-xs, 0.5rem);
    margin-top: var(--space-sm, 1rem);
  }
}
</style>
