<script setup lang="ts">
import { NuxtLink } from '#components'

interface Props {
  to?: string
  href?: string
  variant?: 'primary' | 'ghost' | 'outline'
  icon?: string
  loading?: boolean
  block?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  loading: false,
  block: false
})

const componentTag = computed(() => {
  if (props.to) return NuxtLink
  if (props.href) return 'a'
  return 'button'
})
</script>

<template>
  <component
    :is="componentTag"
    :to="to"
    :href="href"
    class="ui-btn"
    :class="[`variant-${variant}`, { 'is-loading': loading, 'is-block': block }]"
  >
    <Icon v-if="icon && !loading" :name="icon" class="btn-icon" />

    <span class="btn-text" :class="{ 'is-hidden': loading }">
      <slot />
    </span>

    <div v-if="loading" class="spinner">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.1" />
        <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1" />
      </svg>
    </div>
  </component>
</template>

<style scoped>
.ui-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  outline: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.ui-btn:active {
  transform: scale(0.96);
}

.is-block {
  width: 100%;
  display: flex;
}

.btn-icon {
  width: 1.15rem;
  height: 1.15rem;
  transition: transform 0.3s ease;
}

.variant-primary {
  background: var(--text-main);
  color: var(--bg-body);
  border-color: var(--text-main);
}

.variant-primary:hover {
  background: transparent;
  color: var(--text-main);
  box-shadow: 0 0 20px -5px rgba(0,0,0,0.1);
}

.variant-ghost {
  background: rgba(125, 125, 125, 0.05);
  color: var(--text-main);
  border-color: rgba(125, 125, 125, 0.1);
  backdrop-filter: blur(8px);
}

.variant-ghost:hover {
  background: rgba(125, 125, 125, 0.1);
  border-color: var(--text-muted);
  transform: translateY(-1px);
}

.variant-outline {
  background: transparent;
  border-color: var(--border-color);
  color: var(--text-muted);
}

.variant-outline:hover {
  border-color: var(--text-main);
  color: var(--text-main);
}

.ui-btn:hover .btn-icon {
  transform: translateX(-2px);
}

.is-hidden {
  opacity: 0;
  pointer-events: none;
}

.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1.25rem;
  height: 1.25rem;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
</style>
