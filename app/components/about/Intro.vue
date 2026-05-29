<script setup lang="ts">
const { footer } = useAppConfig()
const { t } = useI18n()
</script>

<template>
  <section class="about-intro scroll-reveal">
    <div class="content-wrapper">
      <div class="text-side">
        <h1 class="title">
          {{ t('about.title') }}
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
  align-items: center;
  text-align: center;
}

.text-side {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.title {
  font-size: var(--font-hero);
  line-height: var(--leading-tight);
  letter-spacing: -0.02em;
  margin: 0 0 1rem 0;
  background: linear-gradient(180deg, var(--text-main) 30%, rgba(125, 125, 125, 0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
