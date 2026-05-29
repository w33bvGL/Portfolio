<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()

const localizedPath = (path: string) => {
  if (path === '/') return locale.value !== 'en' ? `/${locale.value}` : '/'
  return locale.value !== 'en' ? `/${locale.value}${path}` : path
}

const links = computed(() => [
  { key: 'home', icon: 'lucide:home', to: localizedPath('/') },
  { key: 'projects', icon: 'lucide:pen-tool', to: localizedPath('/projects') },
  { key: 'about', icon: 'lucide:user', to: localizedPath('/about') }
])

const isActive = (path: string) => {
  if (path === localizedPath('/')) return route.path === path
  return route.path.startsWith(path)
}
</script>

<template>
  <header class="header-wrapper">
    <UiCard
      variant="glass"
      class="nav-bar"
    >
      <template #default>
        <UiLayoutFlex
          :gap="0.5"
          align="center"
        >
          <NuxtLink
            v-for="link in links"
            :key="link.key"
            :to="link.to"
            class="nav-link"
            :class="{ 'is-active': isActive(link.to) }"
          >
            <div
              v-if="isActive(link.to)"
              class="nav-pill"
            />

            <div class="nav-content">
              <Icon
                :name="link.icon"
                class="nav-icon"
              />

              <span class="nav-text">{{ t(`routes.${link.key}`) }}</span>
            </div>
          </NuxtLink>

          <div class="divider" />

          <div class="theme-switch-wrapper">
            <UiColorModeButton />
          </div>
        </UiLayoutFlex>
      </template>
    </UiCard>
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
  animation: var(--animation-slide-down);
}

.nav-bar {
  pointer-events: auto;
  border-radius: 9999px;
  padding: 0.35rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: fit-content;
  margin: 0 auto;
  backdrop-filter: blur(40px) !important;
  -webkit-backdrop-filter: blur(40px) !important;
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: var(--text-muted);
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
  -webkit-tap-highlight-color: transparent;
}

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
