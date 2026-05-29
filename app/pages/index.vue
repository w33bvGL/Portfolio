<script setup lang="ts">
const { t } = useI18n()
const title = t('index.cta.title')
const description = t('index.cta.description')

useSeoMeta({
  title, description,
  ogTitle: title, ogDescription: description,
  twitterTitle: title, twitterDescription: description
})

useScrollReveal({ selector: '.scroll-animate-reveal, .scroll-animate-fade' })
</script>

<template>
  <div class="page-home">
    <IndexCta />
    <IndexExperience />
    <IndexEducation />
    <IndexFaq />
    <IndexTheConnect />
  </div>
</template>

<style scoped>
.page-home {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}
</style>
