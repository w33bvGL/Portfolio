<script setup lang="ts">
const { t } = useI18n()
const title = t('about.title')
const description = t('about.description')

useSeoMeta({
  title, description,
  ogTitle: title, ogDescription: description,
  twitterTitle: title, twitterDescription: description
})
</script>

<template>
  <UiLayoutContainer class="page">
    <AboutIntro />
    <AboutStack />
    <AboutStory />
  </UiLayoutContainer>
</template>

<style scoped>
.page {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: var(--space-4xl);
  gap: var(--space-xl, 4rem);
}
</style>
