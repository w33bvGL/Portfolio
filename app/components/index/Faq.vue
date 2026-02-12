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
  <section class="faq-section">
    <UiSectionHeader
      :title="t('faq.title')"
      :description="t('faq.description')"
      align="center"
    />

    <UiAccordion :items="faqItems" />
  </section>
</template>

<style scoped>
.faq-section {
  padding: 0 2rem;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: var(--font-h2);
  font-weight: 800;
  color: var(--text-main);
  line-height: var(--leading-tight);
  margin-bottom: 0.5rem;
}

.section-desc {
  font-size: var(--font-body);
  color: var(--text-muted);
}
</style>
