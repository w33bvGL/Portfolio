<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: boolean
  maxWidth?: string
  persistent?: boolean
}>(), {
  modelValue: false,
  maxWidth: '480px',
  persistent: false
})

const emit = defineEmits(['update:modelValue', 'close'])

const isLocked = useScrollLock(document?.body)
watch(() => props.modelValue, (val) => {
  isLocked.value = val
})

const close = () => {
  if (props.persistent) return
  emit('update:modelValue', false)
  emit('close')
}

onKeyStroke('Escape', () => close())
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-system">
      <div
        v-if="modelValue"
        class="modal-overlay"
        @click.self="close"
      >
        <UiCard
          class="modal-glass"
          :style="{ maxWidth: maxWidth }"
          variant="glass"
          no-hover
        >
          <div class="modal-stagger">
            <slot :close="close" />
          </div>
        </UiCard>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-glass {
  position: relative;
  width: 100%;
  border-radius: 2rem;
  box-shadow: var(--glass-shadow, 0 20px 40px rgba(0,0,0,0.4));
  animation: scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

:deep(.modal-stagger > *) {
  opacity: 0;
  transform: translateY(15px);
  animation: fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

:deep(.modal-stagger > *:nth-child(1)) { animation-delay: 0.1s; }
:deep(.modal-stagger > *:nth-child(2)) { animation-delay: 0.2s; }
:deep(.modal-stagger > *:nth-child(3)) { animation-delay: 0.3s; }
:deep(.modal-stagger > *:nth-child(4)) { animation-delay: 0.4s; }

@keyframes scale-in {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes fade-up {
  to { opacity: 1; transform: translateY(0); }
}

.modal-system-enter-from,
.modal-system-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
}

.modal-system-enter-from .modal-glass {
  transform: scale(0.95);
  opacity: 0;
}
</style>
