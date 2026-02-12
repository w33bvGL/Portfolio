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
  title: `${props.error.statusCode} - Page not found`,
  htmlAttrs: { lang: 'en' }
})
</script>

<template>
  <div class="error-view">

    <div class="fx-background">
      <div class="orb orb-1" />
      <div class="orb orb-2" />
      <div class="grid-overlay" />
    </div>

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

.fx-background {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 20s infinite ease-in-out alternate;
  will-change: transform;
}

.orb-1 {
  width: 60vh;
  height: 60vh;
  background: var(--text-muted);
  top: -10%;
  left: -10%;
}

.orb-2 {
  width: 50vh;
  height: 50vh;
  background: var(--text-main);
  bottom: -10%;
  right: -10%;
  animation-delay: -10s;
  opacity: 0.2;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--border-color) 1px, transparent 1px),
  linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
  background-size: 4rem 4rem;
  opacity: 0.03;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
}

.glass-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 480px;
  padding: 3.5rem 2.5rem;
  text-align: center;

  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  border-radius: 2rem;

  animation: scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: scale(0.95);
}

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
  font-size: 8rem;
  font-weight: 800;
  line-height: 0.85;
  margin: 0;
  letter-spacing: -0.04em;
  background: linear-gradient(180deg, var(--text-main) 0%, rgba(125,125,125,0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.05));
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
  letter-spacing: -0.02em;
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

@keyframes float {
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -50px) rotate(10deg); }
  66% { transform: translate(-20px, 20px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

@keyframes scale-in {
  to { opacity: 1; transform: scale(1); }
}

@keyframes fade-up {
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .code { font-size: 5rem; }
  .glass-container { padding: 2.5rem 1.5rem; }
  .orb { filter: blur(60px); opacity: 0.3; }
}
</style>
