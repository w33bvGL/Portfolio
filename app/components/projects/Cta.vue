<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="cta-wrapper">
    <div class="cta-glow" />

    <div class="cta-card glass-panel">
      <div class="cta-content">
        <h2 class="cta-title">
          {{ t('projects.have_idea') }}
        </h2>
        <p class="cta-desc">
          {{ t('projects.what_i_offer') }}
        </p>
      </div>

      <div class="cta-action">
        <UiButton
          href="https://t.me/Vahesargsyan2005"
          target="_blank"
          variant="primary"
          icon="simple-icons:telegram"
          class="telegram-btn"
        >
          {{ t('projects.contact_telegram') }}
        </UiButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-wrapper {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 4rem auto 0;
  padding: 0 1rem;
}

.cta-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: var(--primary-color);
  filter: blur(80px);
  opacity: 0.15;
  border-radius: 50%;
  z-index: 0;
}

.cta-card {
  position: relative;
  z-index: 1;
  padding: 3rem;
  border-radius: 2rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(20px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  box-shadow: var(--glass-shadow);
}

.cta-content {
  flex: 1;
  text-align: left;
}

.cta-title {
  font-size: 1.75rem;
  font-weight: 800;
  margin: 0 0 0.75rem;
  color: var(--text-main);
}

.cta-desc {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 500px;
  margin: 0;
}

.cta-action {
  flex-shrink: 0;
}

/* Mobile Adaptation */
@media (max-width: 768px) {
  .cta-card {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    gap: 1.5rem;
  }

  .cta-content {
    text-align: center;
  }

  .telegram-btn {
    width: 100%; /* Кнопка на всю ширину на мобилке */
  }
}
</style>
