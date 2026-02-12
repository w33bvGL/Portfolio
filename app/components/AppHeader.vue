<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()

const localizedPath = (path: string) => {
  return locale.value !== 'en' ? `/${locale.value}${path}` : path
}

const links = computed(() => [
  { key: 'home', icon: 'i-lucide-home', to: localizedPath('/') },
  { key: 'projects', icon: 'i-lucide-folder', to: localizedPath('/projects') },
  { key: 'about', icon: 'i-lucide-user', to: localizedPath('/about') }
])

const isActive = (path: string) => route.path === path || route.path.startsWith(path + '/')
</script>

<template>
  <header class="header-wrapper">
    <nav class="nav-bar glass-effect">

      <NuxtLink
        v-for="link in links"
        :key="link.key"
        :to="link.to"
        class="nav-link"
        :class="{ 'is-active': isActive(link.to) }"
      >
        <span class="nav-item">
          <Icon :name="link.icon" class="nav-icon" />
          <span class="nav-text">{{ t(`routes.${link.key}`) }}</span>
        </span>

        <span v-if="isActive(link.to)" class="active-dot" />
      </NuxtLink>

      <div class="divider" />

      <div class="theme-switch-wrapper">
        <UiColorModeButton />
      </div>

    </nav>
  </header>
</template>

<style scoped>
.header-wrapper {
  position: fixed;
  z-index: 50;
  top: 1.5rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.nav-bar {
  pointer-events: auto;
  border-radius: 9999px;
  padding: 0.375rem 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  box-shadow:
    var(--glass-shadow),
    inset 0 1px 0 0 var(--glass-highlight);
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--text-muted);
  font-size: 0.875rem;
  font-weight: 500;
}

.nav-link:hover .nav-item {
  color: var(--text-main);
  background-color: rgba(0, 0, 0, 0.04);
}

.dark .nav-link:hover .nav-item {
  background-color: rgba(255, 255, 255, 0.05);
}

.nav-link.is-active .nav-item {
  color: var(--primary-color);
  background-color: rgba(125, 125, 125, 0.08);
  box-shadow: inset 0 0 0 1px rgba(125, 125, 125, 0.1);
}

.nav-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.nav-text {
  display: none;
}

@media (min-width: 640px) {
  .nav-text {
    display: block;
  }
}

.active-dot {
  position: absolute;
  bottom: -4px;
  width: 4px;
  height: 4px;
  background-color: var(--primary-color);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--primary-color);
}

.divider {
  width: 1px;
  height: 1.5rem;
  background-color: var(--border-color);
  margin: 0 0.25rem;
}

.theme-switch-wrapper {
  padding: 0 0.25rem;
  display: flex;
  align-items: center;
}
</style>
