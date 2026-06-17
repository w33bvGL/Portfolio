<script setup lang="ts">
import type { FaqItem } from '~/types/faq'

const { locale } = useI18n()

const { data: faq } = await useAsyncData<FaqItem[]>(
  `faq-${locale.value}`,
  () => $fetch('/api/faq', { query: { lang: locale.value } })
)
</script>

<template>
  <UiLayoutContainer class="faq-section">
    <UiSectionHeader
      :title="$t('index.faq.title')"
      :description="$t('index.faq.description')"
      align="center"
      class="scroll-animate-fade"
    />
    <div class="scroll-animate-reveal">
      <UiAccordion :items="faq ?? []" />
    </div>
  </UiLayoutContainer>
</template>
