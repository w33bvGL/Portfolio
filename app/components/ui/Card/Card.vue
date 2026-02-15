<script setup lang="ts">
import { NuxtLink } from '#components'

interface Props {
  to?: string
  href?: string
  noHover?: boolean
  as?: string
  variant?: 'glass' | 'ghost' | 'filled'
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  variant: 'glass',
  noHover: false
})

const componentIs = computed(() => {
  if (props.to) return NuxtLink
  if (props.href) return 'a'
  return props.as
})

const linkProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href, target: '_blank', rel: 'noopener noreferrer' }
  return {}
})
</script>

<template>
  <component
    :is="componentIs"
    v-bind="linkProps"
    class="ui-card"
    :class="[
      `variant-${variant}`,
      { 'is-interactive': (to || href) && !noHover, 'no-hover': noHover }
    ]"
  >
    <div v-if="variant === 'glass'" class="card-gradient" />

    <div class="card-inner">
      <slot />
    </div>
  </component>
</template>

<style scoped>
.ui-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  overflow: hidden;
  text-decoration: none;
  color: var(--text-main);
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  isolation: isolate;
}

.variant-glass {
  background: var(--glass-bg, rgba(20, 20, 20, 0.4));
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.variant-ghost {
  background: transparent;
  border: 1px solid transparent;
}

.variant-filled {
  background: var(--bg-body);
  border: 1px solid var(--border-color);
}

.is-interactive {
  cursor: pointer;
}

.is-interactive:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(30, 30, 30, 0.6);
  box-shadow:
    0 20px 40px -12px rgba(0, 0, 0, 0.6),
    inset 0 0 12px rgba(255, 255, 255, 0.01);
}

.card-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}

.card-gradient {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(to bottom right, rgba(255,255,255,0.03), transparent 60%);
  pointer-events: none;
}
</style>
