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
  <div class="page-about">
    <div class="page-blobs">
      <div class="blob b-1" />
      <div class="blob b-2" />
    </div>

    <div class="container">
      <AboutIntro />
      <AboutStack />
      <AboutStory />
    </div>
  </div>
</template>

<style scoped>
.page-about {
  position: relative;
  width: 100%;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 4rem;
  position: relative;
  z-index: 1;
}

.page-blobs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;
}

.b-1 {
  top: 0;
  right: -10%;
  width: 50vw;
  height: 50vw;
  background: var(--primary-color);
  opacity: 0.1;
}

.b-2 {
  top: 40%;
  left: -20%;
  width: 60vw;
  height: 60vw;
  background: var(--text-muted);
  opacity: 0.08;
}
</style>
