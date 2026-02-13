<script setup lang="ts">
const { global } = useAppConfig()
const { t } = useI18n()

const target = ref(null)
const { elementX, elementY } = useMouseInElement(target)

const blobStyle = computed(() => ({
  '--x': `${elementX.value}px`,
  '--y': `${elementY.value}px`
}))
</script>

<template>
  <section
    ref="target"
    class="hero-section"
    :style="blobStyle"
  >
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

        <div class="status-wrapper">
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
        <IndexResumeDropdown />
        <IndexSocials />
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
  --x: 50%;
  --y: 50%;
}

.ambient-glow {
  position: absolute;
  inset: -100px;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.glow-spot {
  position: absolute;
  border-radius: 50%;
  will-change: transform, opacity, filter;
  animation: blob-wake-up 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

.spot-1 {
  width: 600px;
  height: 600px;
  background: var(--primary-color);
  top: -10%;
  left: 50%;
  transform: translate(calc(-50% + (var(--x) / 15)), calc(var(--y) / 15));
  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  filter: blur(120px);
}

.spot-2 {
  width: 450px;
  height: 450px;
  background: var(--text-muted);
  bottom: 5%;
  right: 15%;
  transform: translate(calc(var(--x) / -25), calc(var(--y) / -25));
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
  filter: blur(100px);
  animation-delay: 0.3s;
}

@keyframes blob-wake-up {
  0% {
    opacity: 0;
    filter: blur(40px);
    transform: translate(-50%, 40px) scale(0.7);
  }
  100% {
    opacity: 0.12;
    filter: blur(120px);
  }
}

.spot-2 {
  animation-name: blob-wake-up-alt;
}

@keyframes blob-wake-up-alt {
  0% { opacity: 0; transform: scale(0.7); filter: blur(40px); }
  100% { opacity: 0.08; filter: blur(100px); }
}

.glass-container {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
}

.avatar-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
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
  background: radial-gradient(circle, var(--text-main) 0%, transparent 65%);
  opacity: 0.08;
}

.avatar-clip {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: var(--glass-bg);
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
}

.user-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-title {
  font-size: var(--font-hero);
  font-weight: 800;
  line-height: var(--leading-tight);
  letter-spacing: -0.04em;
  margin: 0 0 1rem 0;
  background: linear-gradient(180deg, var(--text-main) 30%, rgba(125,125,125,0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-desc {
  font-size: var(--font-body-lg);
  line-height: var(--leading-normal);
  color: var(--text-muted);
  max-width: 580px;
  margin: 0 auto;
}

.actions-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  justify-content: center;
  margin-top: 0.5rem;
}

@media (min-width: 640px) {
  .actions-wrapper {
    flex-direction: row;
    gap: 1.5rem;
  }
}

.stagger-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  will-change: opacity, transform;
}

.stagger-item:nth-child(1) { animation-delay: 0.3s; }
.stagger-item:nth-child(2) { animation-delay: 0.5s; }
.stagger-item:nth-child(3) { animation-delay: 0.7s; }

@keyframes fade-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
