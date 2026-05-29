<script setup lang="ts">
const { t } = useI18n()
const title = t('about.title')
const description = t('about.intro')

useSeoMeta({
  title, description,
  ogTitle: title, ogDescription: description,
  twitterTitle: title, twitterDescription: description
})
</script>

<template>
  <UiLayoutContainer class="about-page">
      <AboutIntro />
      <AboutStack />
      <AboutStory />
  </UiLayoutContainer>
</template>

<style scoped>
.about-page {
  position: relative;
  padding-top: 7rem;
  width: 100%;
}
</style>
