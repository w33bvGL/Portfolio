<script setup lang="ts">
const appConfig = useAppConfig()

const footerData = computed(() => appConfig.footer || {})
const links = computed(() => footerData.value.links || [])
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer-wrapper">
    <div class="glass-bar">

      <div class="credits">
        <span class="copyright-symbol">©</span>
        <span class="year">{{ currentYear }}</span>
        <span class="text">Vahe Sargsyan. All rights reserved.</span>
      </div>

      <div class="spacer" />

      <div class="actions">
        <div class="socials" v-if="links.length">
          <UiButton
            v-for="(link, idx) in links"
            :key="idx"
            :href="link.to"
            target="_blank"
            variant="ghost"
            class="social-btn"
            :aria-label="link['aria-label']"
          >
            <Icon :name="link.icon.replace('i-simple-icons-', 'simple-icons:')" class="social-icon" />
          </UiButton>
        </div>

        <div class="divider-vertical" />

        <UiLanguageSwitcher />
      </div>

    </div>
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
  pointer-events: none;
  z-index: 40;
}

.glass-bar {
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0.75rem 0.5rem 1.25rem;
  border-radius: 9999px;
  max-width: 100%;

  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  box-shadow:
    var(--glass-shadow),
    0 10px 40px -10px rgba(0,0,0,0.1);
}

.credits {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--text-muted);
  font-size: 0.85rem;
  white-space: nowrap;
}

.copyright-symbol {
  font-family: sans-serif;
}

.spacer {
  flex: 1;
  min-width: 1rem;
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.socials {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

:deep(.social-btn) {
  padding: 0;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
}

.social-icon {
  width: 1.1rem;
  height: 1.1rem;
  color: var(--text-muted);
  transition: color 0.2s ease;
}

:deep(.social-btn:hover) .social-icon {
  color: var(--text-main);
}

.divider-vertical {
  width: 1px;
  height: 1.25rem;
  background: var(--border-color);
  margin: 0 0.25rem;
}

@media (max-width: 640px) {
  .footer-wrapper {
    bottom: 1rem;
  }

  .glass-bar {
    flex-direction: column-reverse;
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: 1.5rem;
    width: auto;
  }

  .spacer, .divider-vertical {
    display: none;
  }

  .credits {
    font-size: 0.75rem;
  }
}
</style>
