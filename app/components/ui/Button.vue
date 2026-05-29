<script setup lang="ts">
import { NuxtLink } from '#components'

interface Props {
  to?: string
  href?: string
  variant?: 'primary' | 'ghost' | 'outline' | 'danger' | 'soft'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  icon?: string
  loading?: boolean
  block?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  block: false,
  disabled: false
})

const slots = useSlots()
const isOnlyIcon = computed(() => !slots.default && props.icon)

const componentTag = computed(() => {
  if (props.to) return NuxtLink
  if (props.href) return 'a'
  return 'button'
})

const linkProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href, target: '_blank', rel: 'noopener noreferrer' }
  return {}
})
</script>

<template>
  <component
    :is="componentTag"
    v-bind="linkProps"
    class="ui-btn"
    :class="[
      `variant-${variant}`,
      `size-${size}`,
      {
        'is-loading': loading,
        'is-block': block,
        'is-only-icon': isOnlyIcon,
        'is-disabled': disabled
      }
    ]"
    :disabled="componentTag === 'button' ? disabled : null"
  >
    <div
      v-if="icon && !loading"
      class="icon-wrapper"
    >
      <Icon
        :name="icon"
        class="btn-icon"
      />
    </div>

    <span
      v-if="slots.default"
      class="btn-text"
      :class="{ 'is-hidden': loading }"
    >
      <slot />
    </span>

    <div
      v-if="loading"
      class="spinner"
    >
      <Icon
        name="lucide:loader-circle"
        class="spinner-icon"
      />
    </div>
  </component>
</template>

<style scoped>
.ui-btn {
  --btn-height: 2.75rem;
  --btn-px: 1.5rem;
  --btn-font: 0.95rem;
  --btn-icon-size: 1.15rem;
  --btn-gap: 0.5rem;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--btn-gap);
  height: var(--btn-height);
  padding: 0 var(--btn-px);
  border-radius: 9999px;
  font-family: inherit;
  font-size: var(--btn-font);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  outline: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  user-select: none;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
}

/* Фикс для кастомных кнопок со space-between: заставляем всех прямых потомков выравниваться жестко по центру высоты */
.ui-btn > * {
  display: inline-flex;
  align-items: center;
  height: 100%;
}

/* Стили для текста: убираем line-height: 1, центрируем через флекс */
.btn-text {
  display: inline-flex;
  align-items: center;
  line-height: normal;
}

.size-sm  { --btn-height: 2.25rem; --btn-px: 1rem; --btn-font: 0.85rem; --btn-icon-size: 1rem; --btn-gap: 0.35rem; }
.size-md  { --btn-height: 2.75rem; }
.size-lg  { --btn-height: 3.25rem; --btn-px: 2rem; --btn-font: 1.05rem; --btn-icon-size: 1.25rem; }
.size-xl  { --btn-height: 4rem; --btn-px: 2.5rem; --btn-font: 1.25rem; --btn-icon-size: 1.5rem; --btn-gap: 0.75rem; }
.size-xxl { --btn-height: 5.5rem; --btn-px: 4rem; --btn-font: 1.75rem; --btn-icon-size: 2rem; --btn-gap: 1rem; }

.is-only-icon {
  padding: 0 !important;
  width: var(--btn-height) !important;
  min-width: var(--btn-height) !important;
  height: var(--btn-height) !important;
  justify-content: center;
  gap: 0;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.btn-icon {
  width: var(--btn-icon-size);
  height: var(--btn-icon-size);
  transition: transform 0.3s ease;
}

.ui-btn:active { transform: scale(0.96); }
.is-block { width: 100%; display: flex; }

.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.is-disabled .btn-icon {
  transform: none;
}

.variant-primary { background: var(--text-main); color: var(--bg-body); border-color: var(--text-main); }
.variant-primary:hover:not(.is-disabled) { background: transparent; color: var(--text-main); box-shadow: 0 0 20px -5px rgba(255, 255, 255, 0.1); }

.variant-ghost { background: rgba(125, 125, 125, 0.05); color: var(--text-main); border-color: rgba(125, 125, 125, 0.1); backdrop-filter: blur(8px); }
.variant-ghost:hover:not(.is-disabled) { background: rgba(125, 125, 125, 0.1); border-color: rgba(255, 255, 255, 0.1); transform: translateY(-1px); }

.variant-outline { background: transparent; border-color: var(--border-color); color: var(--text-muted); }
.variant-outline:hover:not(.is-disabled) { border-color: var(--text-main); color: var(--text-main); }

.variant-danger { background: rgba(255, 51, 51, 0.1); color: #ff3333; border-color: rgba(255, 51, 51, 0.2); }
.variant-danger:hover:not(.is-disabled) { background: #ff3333; color: #fff; box-shadow: 0 4px 15px rgba(255, 51, 51, 0.3); }

.variant-soft { background: rgba(125, 125, 125, 0.1); color: var(--text-main); border-color: transparent; }
.variant-soft:hover:not(.is-disabled) { background: rgba(125, 125, 125, 0.15); border-color: transparent; transform: translateY(-1px); }

.ui-btn:not(.is-disabled):hover .btn-icon { transform: translateX(-1px); }
.is-only-icon:not(.is-disabled):hover .btn-icon { transform: scale(1.1); }

.is-hidden { opacity: 0; pointer-events: none; }

.spinner {
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner-icon {
  width: var(--btn-icon-size);
  height: var(--btn-icon-size);
  animation: spin 0.75s linear infinite;
}
@keyframes spin-icon {
  to { transform: rotate(360deg); }
}
</style>
