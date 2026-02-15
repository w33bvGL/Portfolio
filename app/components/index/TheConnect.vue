<script setup lang="ts">
const { t } = useI18n()
const target = ref(null)

// Слежка за видимостью для стаггер-анимации
const isVisible = useElementVisibility(target)
const hasPlayed = ref(false)

watch(isVisible, (val) => {
  if (val) hasPlayed.value = true
})
</script>

<template>
  <section ref="target" class="cta-section">
    <div class="cta-grid-pattern" />

    <UiCard
      variant="glass"
      no-hover
      class="cta-card"
      :class="{ 'is-visible': hasPlayed }"
    >
      <UiCardContent class="content-wrapper">
        <div class="text-group">
          <UiCardTitle as="h2" class="cta-title stagger-item">
            {{ t('projects.have_idea') }}
          </UiCardTitle>
          <UiCardDescription class="cta-desc stagger-item">
            {{ t('projects.what_i_offer') }}
          </UiCardDescription>
        </div>

        <div class="actions-group stagger-item">
          <UiButton
            href="https://t.me/w33bvGL"
            target="_blank"
            variant="primary"
            class="telegram-btn"
          >
            <template #icon>
              <Icon name="simple-icons:telegram" class="tg-icon" />
            </template>
            {{ t('projects.contact_telegram') }}
          </UiButton>
        </div>
      </UiCardContent>
    </UiCard>
  </section>
</template>

<style scoped>
.cta-section {
  position: relative;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
}

.cta-grid-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--border-color) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.1;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
}

/* --- Настройка нашей UiCard под CTA --- */
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

.content-wrapper {
  padding: 5rem 3rem !important; /* Перебиваем дефолтный паддинг контента для CTA */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3.5rem;
}

.text-group {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cta-title {
  font-size: clamp(2.25rem, 6vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  background: linear-gradient(180deg, var(--text-main) 30%, rgba(125,125,125,0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-desc {
  font-size: var(--font-body-lg);
  max-width: 560px;
  margin: 0 auto;
}

.tg-icon { width: 1.3rem; height: 1.3rem; }

.stagger-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.is-visible .stagger-item {
  opacity: 1;
  transform: translateY(0);
}

.is-visible .stagger-item:nth-child(1) { transition-delay: 0.2s; }
.is-visible .stagger-item:nth-child(2) { transition-delay: 0.4s; }
.is-visible .actions-group.stagger-item { transition-delay: 0.6s; }

@media (max-width: 640px) {
  .content-wrapper { padding: 3.5rem 1.5rem !important; }
  .cta-title { font-size: 2.25rem; }
}
</style>
