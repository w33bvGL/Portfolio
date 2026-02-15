<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

const handleError = () => clearError({ redirect: '/' })

useHead({
  title: `${props.error.statusCode} — Error`,
  htmlAttrs: { lang: 'en' }
})
</script>

<template>
  <div class="error-view">
    <Background />

    <div class="glass-container">
      <div class="content-stagger">
        <h1 class="code">
          {{ error.statusCode }}
        </h1>

        <div class="separator" />

        <h2 class="title">
          {{ error.statusCode === 404 ? 'Lost in the Void' : 'System Critical' }}
        </h2>

        <p class="description">
          {{ error.message || 'The coordinates you are looking for do not exist in this sector. They may have been moved or deleted.' }}
        </p>

        <div class="actions">
          <UiButton
            variant="ghost"
            icon="lucide:arrow-left"
            @click="handleError"
          >
            Return to Base
          </UiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-view {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-body);
  color: var(--text-main);
  overflow: hidden;
}

/* Стеклянная карточка */
.glass-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 480px;
  padding: 3.5rem 2.5rem;
  text-align: center;

  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  border-radius: 2rem;

  animation: scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: scale(0.95);
}

/* Стаггер-анимация появления */
.content-stagger > * {
  opacity: 0;
  transform: translateY(10px);
  animation: fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.content-stagger > *:nth-child(1) { animation-delay: 0.1s; } /* Code */
.content-stagger > *:nth-child(2) { animation-delay: 0.2s; } /* Separator */
.content-stagger > *:nth-child(3) { animation-delay: 0.3s; } /* Title */
.content-stagger > *:nth-child(4) { animation-delay: 0.4s; } /* Desc */
.content-stagger > *:nth-child(5) { animation-delay: 0.5s; } /* Button */

.code {
  font-size: clamp(5rem, 15vw, 8rem);
  font-weight: 800;
  line-height: 0.85;
  margin: 0;
  letter-spacing: -0.04em;
  /* Градиент из твоей Hero-секции */
  background: linear-gradient(180deg, var(--text-main) 0%, rgba(125,125,125,0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.separator {
  width: 40px;
  height: 3px;
  background: var(--text-main);
  opacity: 0.2;
  margin: 1.5rem auto;
  border-radius: 10px;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem;
}

.description {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 2rem;
}

.actions {
  display: flex;
  justify-content: center;
}

@keyframes scale-in {
  to { opacity: 1; transform: scale(1); }
}

@keyframes fade-up {
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .glass-container { padding: 2.5rem 1.5rem; }
}
</style>
