<script setup lang="ts">
const { locale } = useI18n()

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ]
})

useSeoMeta({
  ogImage: '/avatar-og.jpg',
  twitterImage: '/avatar-og.jpg',
  twitterCard: 'summary'
})
</script>

<template>
  <NuxtLoadingIndicator
    :height="2"
  />
  <NuxtLayout>
    <main class="relative">
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
