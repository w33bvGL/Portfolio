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
    class="status-pill"
    :class="[isAvailable ? 'is-online' : 'is-offline', { 'is-compact': compact }]"
  >
    <div class="indicator">
      <div class="ping-ring" />
      <div class="solid-dot" />
    </div>

    <span
      v-if="!compact"
      class="status-label"
    >
      {{ isAvailable ? t('availability.available') : t('availability.unavailable') }}
    </span>
  </div>
</template>

<style scoped>
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  background: rgba(125, 125, 125, 0.05);
  border: 1px solid rgba(125, 125, 125, 0.1);
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1;
}

.status-pill.is-compact {
  padding: 0;
  background: transparent;
  border: none;
  backdrop-filter: none;
  gap: 0;
}

.indicator {
  position: relative;
  width: 0.65rem;
  height: 0.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.solid-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  position: relative;
  z-index: 2;
}

.ping-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0.6;
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.is-online {
  color: #22c55e;
  border-color: rgba(34, 197, 94, 0.2);
  background: rgba(34, 197, 94, 0.05);
}
.is-online .solid-dot { background: #22c55e; box-shadow: 0 0 8px rgba(34, 197, 94, 0.6); }
.is-online .ping-ring { background: #4ade80; }

.is-offline {
  color: #ef4444;
  border-color: rgba(239, 68, 68, 0.2);
  background: rgba(239, 68, 68, 0.05);
}
.is-offline .solid-dot { background: #ef4444; box-shadow: 0 0 8px rgba(239, 68, 68, 0.6); }
.is-offline .ping-ring { background: #f87171; }

.status-label {
  padding-top: 1px;
  white-space: nowrap;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2.5);
    opacity: 0;
  }
}
</style>
