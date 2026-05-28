<script lang="ts">
const activeDropdownId = ref<symbol | null>(null)
</script>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  placement?: 'top' | 'bottom' | 'top-end' | 'bottom-end' | 'top-start' | 'bottom-start'
  offset?: number
}>(), {
  placement: 'bottom',
  offset: 8
})

const instanceId = Symbol('dropdown')

const isOpen = ref(false)
const triggerRef = ref<HTMLElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)

const menuStyle = ref({
  top: '0px',
  left: '0px',
  minWidth: '0px',
  transformOrigin: 'top center'
})

const toggle = () => {
  if (isOpen.value) {
    close()
  } else {
    activeDropdownId.value = instanceId
    isOpen.value = true
  }
}

const close = () => {
  isOpen.value = false
  if (activeDropdownId.value === instanceId) {
    activeDropdownId.value = null
  }
}

watch(activeDropdownId, (newId) => {
  if (newId !== instanceId && isOpen.value) {
    isOpen.value = false
  }
})

const updatePosition = () => {
  if (!isOpen.value || !triggerRef.value || !menuRef.value) return

  const triggerRect = triggerRef.value.getBoundingClientRect()
  const menuRect = menuRef.value.getBoundingClientRect()

  let top = 0
  let left = 0
  let transformOrigin = 'top center'

  if (props.placement.startsWith('top')) {
    top = triggerRect.top - menuRect.height - props.offset
    transformOrigin = 'bottom center'
  } else {
    top = triggerRect.bottom + props.offset
    transformOrigin = 'top center'
  }

  if (props.placement.endsWith('-end')) {
    left = triggerRect.right - menuRect.width
    transformOrigin = transformOrigin.replace('center', 'right')
  } else if (props.placement.endsWith('-start')) {
    left = triggerRect.left
    transformOrigin = transformOrigin.replace('center', 'left')
  } else {
    left = triggerRect.left + (triggerRect.width / 2) - (menuRect.width / 2)
  }

  menuStyle.value = {
    top: `${top}px`,
    left: `${left}px`,
    minWidth: `${triggerRect.width}px`,
    transformOrigin
  }
}

const handleClickOutside = (e: MouseEvent) => {
  if (
    isOpen.value &&
    triggerRef.value &&
    menuRef.value &&
    !triggerRef.value.contains(e.target as Node) &&
    !menuRef.value.contains(e.target as Node)
  ) {
    close()
  }
}

watch(isOpen, async (val) => {
  if (val) {
    await nextTick()
    updatePosition()
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)
    setTimeout(() => document.addEventListener('click', handleClickOutside), 0)
  } else {
    window.removeEventListener('scroll', updatePosition, true)
    window.removeEventListener('resize', updatePosition)
    document.removeEventListener('click', handleClickOutside)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', updatePosition, true)
  window.removeEventListener('resize', updatePosition)
  document.removeEventListener('click', handleClickOutside)
  if (activeDropdownId.value === instanceId) {
    activeDropdownId.value = null
  }
})

defineExpose({ toggle, close, isOpen })
</script>

<template>
  <div ref="triggerRef" class="ui-dropdown-trigger" @click.stop="toggle">
    <slot name="trigger" :is-open="isOpen" />
  </div>

  <Teleport to="body">
    <Transition name="dropdown-fade">
      <div
        v-if="isOpen"
        ref="menuRef"
        class="ui-dropdown-menu glass-panel"
        :style="menuStyle"
        @click.stop
      >
        <slot :close="close" />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.ui-dropdown-trigger {
  display: inline-block;
  cursor: pointer;
}

.ui-dropdown-menu {
  position: fixed;
  z-index: 99999;
  padding: 0.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: var(--glass-bg, rgba(20, 20, 20, 0.6));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.1));
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.4);
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-5px) scale(0.98);
}
</style>
