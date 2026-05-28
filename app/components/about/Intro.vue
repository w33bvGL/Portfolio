<script setup lang="ts">
const { footer } = useAppConfig()
const { t } = useI18n()
</script>

<template>
  <section class="about-intro scroll-reveal">
    <div class="glass-panel content-wrapper">
      <div class="text-side">
        <h1 class="title">
          {{ t('about.title') }}
          <span class="highlight">.</span>
        </h1>

        <p class="description">
          {{ t('about.intro') }}
        </p>

        <div
          v-if="footer?.links"
          class="socials"
        >
          <UiButton
            v-for="(link, index) of footer.links"
            :key="index"
            :href="link.to"
            variant="ghost"
            size="lg"
            :icon="link.icon.replace('i-simple-icons-', 'simple-icons:')"
            :aria-label="link['aria-label']"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-intro {
  margin-top: 2rem;
  margin-bottom: 5rem;
  opacity: 0;
  padding: 0 2rem;
  transform: translateY(30px);
  animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fade-up {
  to { opacity: 1; transform: translateY(0); }
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 2.5rem;
  border-radius: 2.5rem;
  align-items: center;
  text-align: center;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(20px);
  max-width: 800px;
  margin: 0 auto;
}

@media (min-width: 900px) {
  .content-wrapper {
    padding: 4rem;
  }
}

.text-side {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1;
  color: var(--text-main);
  letter-spacing: -0.03em;
}

.highlight {
  color: var(--primary-color);
}

.description {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-muted);
  max-width: 600px;
}

.socials {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}


</style>
