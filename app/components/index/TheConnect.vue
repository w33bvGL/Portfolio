<script setup lang="ts">
const { t } = useI18n()
const target = ref(null)

// Используем VueUse для отслеживания видимости
const isVisible = useElementVisibility(target)
const hasPlayed = ref(false)

// Фиксируем появление один раз
watch(isVisible, (val) => {
  if (val) hasPlayed.value = true
})

// Интерактив для параллакса свечения
const { elementX, elementY } = useMouseInElement(target)
</script>

<template>
  <section
    ref="target"
    class="cta-section"
  >
    <div class="ambient-glow">
      <div
        class="glow-spot spot-1"
        :style="{
          transform: `translate(calc(-50% + ${elementX / 25}px), calc(-50% + ${elementY / 25}px))`
        }"
      />
      <div class="glow-spot spot-2" />
    </div>

    <div class="cta-grid-pattern" />

    <div
      class="glass-card glass-panel"
      :class="{ 'is-visible': hasPlayed }"
    >
      <div class="content-wrapper">
        <div class="text-group">
          <h2 class="cta-title stagger-item">
            {{ t('projects.have_idea') }}
          </h2>
          <p class="cta-desc stagger-item">
            {{ t('projects.what_i_offer') }}
          </p>
        </div>

        <div class="actions-group stagger-item">
          <UiButton
            href="https://t.me/w33bvGL"
            target="_blank"
            variant="primary"
            class="telegram-btn"
          >
            <template #icon>
              <Icon
                name="simple-icons:telegram"
                class="tg-icon"
              />
            </template>
            {{ t('projects.contact_telegram') }}
          </UiButton>
        </div>
      </div>
    </div>
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

.ambient-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.glow-spot {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  will-change: transform;
}

.spot-1 {
  width: 400px;
  height: 400px;
  background: var(--primary-color);
  opacity: 0.12;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.spot-2 {
  width: 250px;
  height: 250px;
  background: var(--text-muted);
  opacity: 0.08;
  bottom: -10%;
  right: 5%;
}

.cta-grid-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--border-color) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.1;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
}

.glass-card {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 5rem 3rem;
  border-radius: 2.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(24px);
  box-shadow: var(--glass-shadow);
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.glass-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.content-wrapper {
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
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 800;
  line-height: var(--leading-tight);
  letter-spacing: -0.04em;
  margin: 0;

  background: linear-gradient(180deg, var(--text-main) 30%, rgba(125,125,125,0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-desc {
  font-size: var(--font-body-lg);
  line-height: var(--leading-normal);
  color: var(--text-muted);
  max-width: 560px;
  margin: 0 auto;
}

.telegram-btn {
  padding: 1.25rem 2.75rem;
  font-size: 1.15rem;
  font-weight: 700;
  border-radius: 999px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.telegram-btn:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 20px 40px -10px var(--primary-color);
}

.tg-icon {
  width: 1.3rem;
  height: 1.3rem;
}

.stagger-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: opacity, transform;
}

.is-visible .stagger-item {
  opacity: 1;
  transform: translateY(0);
}

.is-visible .stagger-item:nth-child(1) { transition-delay: 0.2s; }
.is-visible .stagger-item:nth-child(2) { transition-delay: 0.4s; }
.is-visible .actions-group.stagger-item { transition-delay: 0.6s; }

@media (max-width: 640px) {
  .glass-card {
    padding: 3.5rem 1.5rem;
    border-radius: 2rem;
  }
  .content-wrapper { gap: 2.5rem; }
  .cta-title { font-size: 2.25rem; }
}
</style>
