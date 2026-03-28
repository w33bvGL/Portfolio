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
        <UiLayoutFlex :gap="1" align="center">
          <div class="credits">
            <span class="copyright-symbol">©</span>
            <span class="year">{{ currentYear }}</span>
            <span class="text">{{ t('footer.copyright') }}</span>
          </div>

          <UiLayoutFlex align="center">
            <UiLayoutFlex
              v-if="links.length"
              :gap="0.3"
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
  padding: 0.35rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: fit-content;
  margin: 0 auto;
  backdrop-filter: blur(40px) !important;
  -webkit-backdrop-filter: blur(40px) !important;
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


</style>
