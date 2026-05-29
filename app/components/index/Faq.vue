<script setup lang="ts">
import type { TranslatedFaq, FaqItem } from '~/types/faq'

const { locale, t } = useI18n()

const { data: faqByLang } = await useAsyncData<TranslatedFaq>(
  'faq',
  () => $fetch('/api/faq')
)

const faqItems = computed<FaqItem[]>(() => {
  const data = faqByLang.value
  return data?.[locale.value as keyof TranslatedFaq] ?? []
})
</script>

<template>
  <UiLayoutContainer class="faq-section">
    <UiSectionHeader
      :title="t('index.faq.title')"
      :description="t('index.faq.description')"
      align="center"
      class="scroll-animate-fade"
    />
    <div class="scroll-animate-reveal">
      <UiAccordion :items="faqItems" />
    </div>
  </UiLayoutContainer>
</template>
