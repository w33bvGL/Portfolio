<script setup lang="ts">
import { computed } from 'vue'

const { t, locale } = useI18n()
const route = useRoute()

const localizedPath = (path: string) => {
  if (path === '/') return locale.value !== 'en' ? `/${locale.value}` : '/'
  return locale.value !== 'en' ? `/${locale.value}${path}` : path
}

const links = computed(() => [
  { key: 'home', icon: 'lucide:home', to: localizedPath('/') },
  { key: 'projects', icon: 'lucide:folder', to: localizedPath('/projects') },
  { key: 'blog', icon: 'lucide:pen-tool', to: localizedPath('/blog') },
  { key: 'about', icon: 'lucide:user', to: localizedPath('/about') }
])

const isActive = (path: string) => {
  if (path === localizedPath('/')) return route.path === path
  return route.path.startsWith(path)
}
</script>

<template>
  <header class="header-wrapper">
    <nav class="nav-bar">

      <NuxtLink
        v-for="link in links"
        :key="link.key"
        :to="link.to"
        class="nav-link"
        :class="{ 'is-active': isActive(link.to) }"
      >
        <div class="nav-pill" v-if="isActive(link.to)" layoutId="nav-pill" />

        <div class="nav-content">
          <Icon :name="link.icon" class="nav-icon" />

          <span class="nav-text">{{ t(`routes.${link.key}`) }}</span>
        </div>

        <div class="active-dot" :class="{ 'dot-visible': isActive(link.to) }" />
      </NuxtLink>

      <div class="divider" />

      <div class="theme-switch-wrapper">
        <UiColorModeButton />
      </div>

    </nav>
  </header>
</template>

<style scoped>
/* --- Layout & Position --- */
.header-wrapper {
  position: fixed;
  z-index: 50;
  top: 1.5rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  pointer-events: none; /* Пропускаем клики мимо обертки */

  /* Анимация появления хедера */
  animation: slide-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(-20px);
}

@keyframes slide-down {
  to { opacity: 1; transform: translateY(0); }
}

/* --- Glass Bar --- */
.nav-bar {
  pointer-events: auto; /* Включаем клики */
  border-radius: 9999px;
  padding: 0.35rem; /* Чуть компактнее */
  display: flex;
  align-items: center;
  gap: 0.25rem;

  /* Senior Glass Effect */
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  box-shadow:
    var(--glass-shadow),
    0 4px 20px -5px rgba(0,0,0,0.05);
}

/* --- Nav Link Item --- */
.nav-link {
  position: relative;
  text-decoration: none;
  color: var(--text-muted);
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
  -webkit-tap-highlight-color: transparent;
}

/* Контент ссылки */
.nav-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.nav-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  stroke-width: 2px;
}

.nav-link:hover .nav-icon {
  transform: scale(1.1);
  color: var(--text-main);
}

.nav-link.is-active .nav-icon {
  fill: currentColor;
  transform: scale(1.1);
  color: var(--text-main);
}

.nav-text {
  display: none;
  transition: font-weight 0.2s;
}

.nav-link.is-active .nav-text {
  color: var(--text-main);
  font-weight: 600;
}

.nav-pill {
  position: absolute;
  inset: 0;
  background-color: rgba(125, 125, 125, 0.08);
  border-radius: 9999px;
  z-index: 1;

  animation: scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes scale-in {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.active-dot {
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%) scale(0);
  width: 4px;
  height: 4px;
  background-color: var(--text-main);
  border-radius: 50%;
  box-shadow: 0 0 8px currentColor;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.dot-visible {
  transform: translateX(-50%) scale(1);
  opacity: 1;
}

.divider {
  width: 1px;
  height: 1.25rem;
  background-color: var(--border-color);
  margin: 0 0.25rem;
  opacity: 0.6;
}

.theme-switch-wrapper {
  padding: 0 0.25rem;
  display: flex;
  align-items: center;
}

@media (min-width: 640px) {
  .nav-text {
    display: block;
  }

  .nav-link {
    padding: 0.5rem 1.1rem;
  }
}

@media (hover: hover) {
  .nav-link:not(.is-active):hover {
    color: var(--text-main);
  }

  .nav-link:not(.is-active):hover .nav-pill {
    display: block;
    background-color: rgba(125, 125, 125, 0.04);
  }
}
</style>
