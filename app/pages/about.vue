<script setup lang="ts">
const { t } = useI18n()
const age = useAge()
const title = t('about.title')
const description = t('about.intro', { age })

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,

  twitterTitle: title,
  twitterDescription: description
})
</script>

<template>
<!--  <UPage>-->
<!--    <AboutHeading />-->
<!--    <AboutStack />-->

<!--    <section class="grid md:grid-cols-2 md:gap-5">-->
<!--      <div>-->
<!--        <About />-->
<!--      </div>-->
<!--      <div>-->
<!--        <AboutAchievements />-->
<!--      </div>-->
<!--    </section>-->

<!--    <ProjectsCta />-->
<!--  </UPage>-->
</template>
