<script setup lang="ts">
import type { NuxtError } from '#app'

const { t } = useI18n()
const localeRoute = useLocaleRoute()

const props = defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

const handleError = () => clearError({ redirect: localeRoute('/') })

const errorTitle = computed(() => {
  if (props.error.statusCode === 404) return t('error.404_title')
  return t('error.default_title')
})

const errorMessage = computed(() => {
  if (props.error.statusCode === 404) return t('error.404_message')
  return props.error.message || t('error.default_message')
})

useHead({
  title: errorTitle
})
</script>

<template>
  <div class="error-view">
    <Background />

    <UiCard
      class="error-card"
      variant="glass"
    >
      <UiCardContent>
        <UiLayoutFlex
          col
          justify="center"
        >
          <span class="code animate-slide-up stagger-delay-1">
            {{ error.statusCode }}
          </span>

          <UiDivider
            variant="gradient"
            class="animate-fade stagger-delay-2"
          />

          <h1 class="title animate-slide-up stagger-delay-3">
            {{ errorTitle }}
          </h1>

          <p class="description animate-slide-up stagger-delay-4">
            {{ errorMessage }}
          </p>

          <UiLayoutFlex justify="center">
            <UiButton
              variant="ghost"
              icon="lucide:arrow-left"
              class="animate-slide-up stagger-delay-5"
              @click="handleError"
            >
              {{ t('error.return') }}
            </UiButton>
          </UiLayoutFlex>
        </UiLayoutFlex>
      </UiCardContent>
    </UiCard>
  </div>
</template>

<style scoped>
.error-view {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-card {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 480px;
  padding: 2rem;
  text-align: center;
  animation: var(--animation-scale-in);
}

.code {
  font-size: clamp(5rem, 15vw, 8rem);
  font-weight: 800;
  line-height: 0.85;
  margin: 0;
  letter-spacing: -0.04em;
  background: linear-gradient(180deg, var(--text-main) 0%, rgba(125,125,125,0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.description {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 2rem;
}

@media (max-width: 640px) {
  .error-card { padding: 2.5rem 1.5rem; }
}
</style>
