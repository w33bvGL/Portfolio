<script setup lang="ts">
import { ref, watch, onUnmounted, nextTick } from 'vue'

const props = withDefaults(defineProps<{
  placement?: 'top' | 'bottom' | 'top-end' | 'bottom-end'
  offset?: number
}>(), {
  placement: 'bottom',
  offset: 8
})

const isOpen = ref(false)
const triggerRef = ref<HTMLElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)

// Сюда будем писать динамические координаты
const menuStyle = ref({ top: '0px', left: '0px', minWidth: '0px' })

const toggle = () => { isOpen.value = !isOpen.value }
const close = () => { isOpen.value = false }

// Математика позиционирования
const updatePosition = () => {
  if (!isOpen.value || !triggerRef.value || !menuRef.value) return

  const triggerRect = triggerRef.value.getBoundingClientRect()
  const menuRect = menuRef.value.getBoundingClientRect()

  let top = 0
  let left = 0

  // Вертикаль
  if (props.placement.startsWith('top')) {
    top = triggerRect.top - menuRect.height - props.offset
  } else {
    top = triggerRect.bottom + props.offset
  }

  // Горизонталь
  if (props.placement.endsWith('-end')) {
    left = triggerRect.right - menuRect.width
  } else {
    left = triggerRect.left
  }

  menuStyle.value = {
    top: `${top}px`,
    left: `${left}px`,
    minWidth: `${triggerRect.width}px` // Меню не будет уже, чем кнопка
  }
}

// Закрытие по клику вне
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

// Следим за состоянием: открыли — посчитали позицию и повесили слушатели
watch(isOpen, async (val) => {
  if (val) {
    await nextTick() // Ждем рендера меню в DOM
    updatePosition()
    // true в слушателе скролла нужен, чтобы ловить скролл ЛЮБОГО контейнера
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)
    document.addEventListener('click', handleClickOutside)
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
})

// Прокидываем методы наружу, если родитель захочет дернуть их через ref
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
  z-index: 99999; /* Поверх всего */
  padding: 0.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: var(--glass-bg, rgba(20, 20, 20, 0.6));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.1));
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.2);
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-5px) scale(0.98);
}
</style>
