<script setup lang="ts">
const { footer } = useAppConfig()
const { t } = useI18n()
</script>

<template>
  <section class="a-intro scroll-reveal">
    <div class="a-intro-box">
      <h1 class="a-intro-title">
        {{ t('about.title') }}
      </h1>

      <p class="a-intro-desc">
        {{ t('about.intro') }}
      </p>

      <div v-if="footer?.links" class="a-intro-socials">
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

  & .a-intro-title {
    font-size: var(--font-hero);
  }

  & .a-intro-desc {
    font-size: var(--font-body-lg);
    color: var(--color-text-subtle);
    max-width: 42rem;
    line-height: var(--leading-normal);
  }

  & .a-intro-socials {
    display: flex;
    gap: var(--space-xs, 0.5rem);
    margin-top: var(--space-sm, 1rem);
  }
}
</style>
