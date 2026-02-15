<script setup lang="ts">
const { t } = useI18n()
const target = ref(null)

const isVisible = useElementVisibility(target)
const hasPlayed = ref(false)

watch(isVisible, (val) => {
  if (val) hasPlayed.value = true
})
</script>

<template>
  <UiLayoutContainer ref="target" class="cta-section">
    <UiCard
      variant="glass"
      no-hover
      class="cta-card"
      :class="{ 'is-visible': hasPlayed }"
    >
      <UiCardHeader align="center">
        <UiCardTitle as="h2">
          {{ t('projects.have_idea') }}
        </UiCardTitle>
        <UiCardDescription>
          {{ t('projects.what_i_offer') }}
        </UiCardDescription>
      </UiCardHeader>
      <UiCardContent align="center">
        <div class="actions-group">
          <UiButton
            href="https://t.me/w33bvGL"
            target="_blank"
            variant="primary"
            icon="simple-icons-telegram"
          >
            {{ t('projects.contact_telegram') }}
          </UiButton>
        </div>
      </UiCardContent>
    </UiCard>
  </UiLayoutContainer>
</template>

<style scoped>
.cta-card {
  width: 100%;
  max-width: var(--container-width);
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.cta-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
