<script setup lang="ts">
const { global } = useAppConfig()
const { t } = useI18n()
const isAvailable = global.available

defineProps({
  compact: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="status-indicator"
    :class="[isAvailable ? 'status-online' : 'status-offline', { 'is-compact': compact }]"
    :title="isAvailable ? t('availability.available') : t('availability.unavailable')"
  >
    <span class="dot-wrapper">
      <span class="ping-wave" />
      <span class="solid-dot" />
    </span>

    <span v-if="!compact" class="status-text">
      {{ isAvailable ? t('availability.available') : t('availability.unavailable') }}
    </span>
  </div>
</template>

<style scoped>
.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.dot-wrapper {
  position: relative;
  display: flex;
  width: 0.75rem;
  height: 0.75rem;
}

/* Пульсирующая волна */
.ping-wave {
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  border-radius: 50%;
  opacity: 0.75;
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Основная точка */
.solid-dot {
  position: relative;
  display: inline-flex;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  box-shadow: 0 0 8px currentColor;
}

/* Цвета */
.status-online {
  color: #22c55e; /* Green-500 */
}
.status-online .ping-wave { background-color: #4ade80; }
.status-online .solid-dot { background-color: #22c55e; }

.status-offline {
  color: #ef4444; /* Red-500 */
}
.status-offline .ping-wave { background-color: #f87171; }
.status-offline .solid-dot { background-color: #ef4444; }

/* Анимация */
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.is-compact .status-text {
  display: none;
}

.is-compact .dot-wrapper {
  width: 1rem;
  height: 1rem;
}
.is-compact .solid-dot {
  width: 1rem;
  height: 1rem;
  border: 2px solid var(--glass-bg);
}
</style>
