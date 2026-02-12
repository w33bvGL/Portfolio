<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const { global, footer } = useAppConfig()
const { t, locales } = useI18n()
const config = useRuntimeConfig()

const isResumeOpen = ref(false)
const resumeContainerRef = ref<HTMLElement | null>(null)

const toggleResumeMenu = () => isResumeOpen.value = !isResumeOpen.value

const closeResumeMenu = (e: MouseEvent) => {
  if (resumeContainerRef.value && !resumeContainerRef.value.contains(e.target as Node)) {
    isResumeOpen.value = false
  }
}

function downloadResume(lang: string): void {
  const isStaticHosting = config.public.appEnv === 'production'
  const url = isStaticHosting
    ? `/resume/resume-${lang}.pdf`
    : `/api/resume-pdf?lang=${lang}`

  const link = document.createElement('a')
  link.href = url
  link.download = `resume-${lang}.pdf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  isResumeOpen.value = false
}

onMounted(() => document.addEventListener('click', closeResumeMenu))
onUnmounted(() => document.removeEventListener('click', closeResumeMenu))
</script>

<template>
  <section class="hero-section">

    <div class="ambient-glow">
      <div class="glow-spot spot-1" />
      <div class="glow-spot spot-2" />
    </div>

    <div class="glass-container">

      <div class="avatar-block stagger-item">
        <div class="avatar-wrapper">
          <div class="avatar-ring" />
          <div class="avatar-clip">
            <SeasonalAvatar
              :src="global.picture.src"
              :alt="global.picture.alt"
              :size="130"
              class="user-avatar"
            />
          </div>
        </div>

        <div class="status-container">
          <UiAvailableStatus />
        </div>
      </div>

      <div class="content stagger-item">
        <h1 class="hero-title">
          {{ t('cta.title') }}
        </h1>
        <p class="hero-desc">
          {{ t('cta.description') }}
        </p>
      </div>

      <div class="actions-wrapper stagger-item">

        <div class="resume-dropdown" ref="resumeContainerRef">
          <UiButton
            variant="primary"
            icon="lucide:file-down"
            class="resume-trigger"
            @click.stop="toggleResumeMenu"
          >
            {{ t('cta.resume.download') || 'Download CV' }}
            <Icon
              name="lucide:chevron-down"
              class="chevron"
              :class="{ 'is-rotated': isResumeOpen }"
            />
          </UiButton>

          <Transition name="fade-drop">
            <div v-if="isResumeOpen" class="dropdown-menu glass-panel">
              <button
                v-for="locale in locales"
                :key="locale.code"
                class="menu-item"
                @click="downloadResume(locale.code)"
              >
                <span class="lang-code">{{ locale.code.toUpperCase() }}</span>
                <span class="lang-label">{{ locale.name }}</span>
                <Icon name="lucide:download" class="dl-icon" />
              </button>
            </div>
          </Transition>
        </div>

        <div class="social-links" v-if="footer?.links">
          <UiButton
            v-for="(link, index) of footer.links"
            :key="index"
            :href="link.to"
            target="_blank"
            variant="ghost"
            class="social-btn"
            :aria-label="link['aria-label']"
          >
            <Icon :name="link.icon.replace('i-simple-icons-', 'simple-icons:')" class="icon-size" />
          </UiButton>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  padding: 8rem 1.5rem 6rem;
  display: flex;
  justify-content: center;
}

/* --- Ambient Background --- */
.ambient-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.glow-spot {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.4;
  will-change: transform;
}

.spot-1 {
  width: 500px;
  height: 500px;
  background: var(--primary-color);
  opacity: 0.1;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
}

.spot-2 {
  width: 300px;
  height: 300px;
  background: var(--text-muted);
  opacity: 0.05;
  bottom: 10%;
  right: 15%;
}

/* --- Glass Container --- */
.glass-container {
  position: relative;
  z-index: 1;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  /* Убрали scale анимацию, чтобы кнопки не прыгали */
}

/* --- Animation Stagger --- */
.stagger-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  will-change: opacity, transform;
}

.stagger-item:nth-child(1) { animation-delay: 0.1s; } /* Avatar */
.stagger-item:nth-child(2) { animation-delay: 0.2s; } /* Text */
.stagger-item:nth-child(3) { animation-delay: 0.3s; } /* Buttons */

@keyframes fade-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* --- Avatar Block --- */
.avatar-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem; /* Отступ между авой и статусом */
}

.avatar-wrapper {
  position: relative;
  width: 130px;
  height: 130px;
  border-radius: 50%;
}

.avatar-ring {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--text-main) 0%, transparent 60%);
  opacity: 0.08;
}

.avatar-clip {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: var(--glass-bg);
  /* Легкое свечение */
  box-shadow: 0 0 30px rgba(0,0,0,0.05);
}

.user-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-container {
  /* Контейнер для статуса-таблетки */
  display: flex;
  justify-content: center;
}

/* --- Typography --- */
.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
  margin: 0 0 1rem 0;

  background: linear-gradient(180deg, var(--text-main) 20%, rgba(125,125,125,0.4) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-desc {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
}

/* --- Actions --- */
.actions-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: center;
}

@media (min-width: 640px) {
  .actions-wrapper {
    flex-direction: row;
    gap: 1.5rem;
  }
}

/* --- Dropdown Styles --- */
.resume-dropdown { position: relative; }
.resume-trigger { min-width: 200px; justify-content: space-between; }
.chevron { width: 1rem; height: 1rem; transition: transform 0.3s; opacity: 0.6; }
.chevron.is-rotated { transform: rotate(180deg); }

.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  padding: 0.5rem;
  border-radius: 1rem;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 50;
  transform-origin: top center;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}

.menu-item:hover {
  background: rgba(125, 125, 125, 0.08);
  color: var(--text-main);
}

.lang-code { font-weight: 700; font-size: 0.75rem; opacity: 0.5; width: 1.5rem; }
.lang-label { flex: 1; font-size: 0.9rem; font-weight: 500; }
.dl-icon { width: 1rem; height: 1rem; opacity: 0; transform: translateX(-5px); transition: all 0.2s; }
.menu-item:hover .dl-icon { opacity: 1; transform: translateX(0); }

.social-links { display: flex; gap: 0.5rem; align-items: center; }
.social-btn { padding: 0; width: 3rem; height: 3rem; border-radius: 50%; flex-shrink: 0; }
.icon-size { width: 1.25rem; height: 1.25rem; }

/* Transitions */
.fade-drop-enter-active, .fade-drop-leave-active { transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
.fade-drop-enter-from, .fade-drop-leave-to { opacity: 0; transform: translateY(-5px) scale(0.98); }
</style>
