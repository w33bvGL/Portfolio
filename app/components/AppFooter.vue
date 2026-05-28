<script setup lang="ts">
const appConfig = useAppConfig()
const { t } = useI18n()

const footerData = computed(() => appConfig.footer || {})
const links = computed(() => footerData.value.links || [])
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer-wrapper">
    <UiCard class="footer-bar">
      <template #default>
        <UiLayoutFlex
          :gap="0.5"
          align="center"
          justify="between"
          class="footer-content"
        >
          <div class="credits">
            <span class="copyright-symbol">©</span>
            <span class="year">{{ currentYear }}</span>
            <span class="text mobile-hidden">{{ t('footer.copyright') }}</span>
          </div>

          <UiLayoutFlex
            v-if="links.length"
            :gap="0.3"
            align="center"
            class="mobile-hidden"
          >
            <UiButton
              v-for="(link, idx) in links"
              :key="idx"
              :href="link.to"
              target="_blank"
              variant="ghost"
              :icon="link.icon.replace('i-simple-icons-', 'simple-icons:')"
              :aria-label="link['aria-label']"
            />
          </UiLayoutFlex>

          <UiLanguageSwitcher />
        </UiLayoutFlex>
      </template>
    </UiCard>
  </footer>
</template>

<style scoped>
.footer-wrapper {
  position: fixed;
  bottom: 1.5rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  z-index: 40;
}

.footer-bar {
  pointer-events: auto;
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  width: 100%;
  max-width: 48rem;
  display: flex;
  align-items: center;
  backdrop-filter: blur(40px) !important;
  -webkit-backdrop-filter: blur(40px) !important;
}

.footer-content {
  width: 100%;
}

.credits {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--text-muted);
  font-size: 0.85rem;
  white-space: nowrap;
  font-weight: 500;
}

@media (max-width: 640px) {
  .footer-wrapper {
    bottom: 1rem;
    padding: 0 0.75rem;
  }

  .footer-bar {
    padding: 0.45rem 0.85rem;
  }

  .credits {
    font-size: 0.8rem;
  }

  .mobile-hidden {
    display: none;
  }
}
</style>
