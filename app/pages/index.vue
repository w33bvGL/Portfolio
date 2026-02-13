<script setup lang="ts">
const { t } = useI18n()
const title = t('cta.title')
const description = t('cta.description')

useSeoMeta({
  title, description,
  ogTitle: title, ogDescription: description,
  twitterTitle: title, twitterDescription: description
})
</script>

<template>
  <div class="page-home">
    <IndexCta />
    <IndexExperience />
    <!--    <IndexEducation/> -->
    <IndexFaq />
    <IndexTheConnect/>
  </div>
</template>

<style scoped>
.page-home {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
