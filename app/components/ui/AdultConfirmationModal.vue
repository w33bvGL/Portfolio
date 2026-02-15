<script setup lang="ts">
defineProps<{
  isOpen: boolean
  projectName?: string
}>()

const emit = defineEmits(['confirm', 'cancel'])
</script>

<template>
  <UiModal :model-value="isOpen" :persistent="true" @close="emit('cancel')">
    <div class="adult-guard">
      <div class="adult-glow" />

      <div class="guard-inner">
        <div class="warning-badge">
          <span>18+</span>
        </div>

        <h2 class="guard-title">Restricted Content</h2>

        <p class="guard-text">
          Project <span>{{ projectName }}</span> contains adult material.
          Are you over 18 years of age?
        </p>

        <UiLayoutFlex full>
          <UiButton variant="ghost" block @click="emit('cancel')">
            Go Back
          </UiButton>
          <UiButton block @click="emit('confirm')" variant="danger">
            I am 18+
          </UiButton>
        </UiLayoutFlex>
      </div>
    </div>
  </UiModal>
</template>

<style scoped>
.adult-guard {
  position: relative;
  padding: 3rem 2rem;
  overflow: hidden;
}

.adult-glow {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 250px;
  background: radial-gradient(circle, rgba(255, 50, 50, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.guard-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.warning-badge {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 50, 50, 0.1);
  border: 1px solid rgba(255, 50, 50, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 900;
  color: #ff4d4d;
  box-shadow: 0 0 30px rgba(255, 50, 50, 0.1);
}

.guard-title {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(180deg, #fff 0%, #999 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.guard-text {
  color: var(--text-muted, #9ca3af);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 300px;
}

.guard-text span {
  color: #fff;
  font-weight: 600;
}

.guard-actions {
  display: flex;
  gap: 1rem;
  width: 100%;
}
</style>
