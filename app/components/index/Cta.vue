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
    </div>

    <div class="glass-container">
      <div class="avatar-block animate-slide-up stagger-delay-1">
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

      <div class="content animate-slide-up stagger-delay-2">
        <UiSectionHeader
          as="h1"
          variant="hero"
          align="center"
          :title="t('index.cta.title')"
          :description="t('index.cta.description')"
        />
      </div>

      <div class="actions-wrapper animate-slide-up stagger-delay-3">
        <IndexResumeDropdown />
        <IndexSocials />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  padding: var(--space-4xl) var(--space-base) 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
  --x: 50%;
  --y: 50%;
}

.ambient-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.glow-spot {
  position: absolute;
  border-radius: 50%;
  will-change: transform, opacity, filter;
  opacity: 0;
  animation: blob-wake-up 2.2s var(--ease-out-expo) forwards;
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

@keyframes blob-wake-up {
  from {
    opacity: 0;
    filter: blur(40px);
    transform: translate(-50%, 40px) scale(0.7);
  }
  to {
    opacity: 0.12;
    filter: blur(120px);
  }
}
.glass-container {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-base);
}

.avatar-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-base);
}

.avatar-wrapper {
  position: relative;
  width: 130px;
  height: 130px;
  border-radius: var(--radius-full);
}

.avatar-ring {
  position: absolute;
  inset: -10px;
  border-radius: var(--radius-full);
  background: radial-gradient(circle, var(--text-main) 0%, transparent 65%);
  opacity: 0.08;
}

.avatar-clip {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-full);
  overflow: hidden;
  background: var(--glass-bg);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.user-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.actions-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-base);
  width: 100%;
  justify-content: center;
  margin-top: var(--space-xs);

  @media (width >= 640px) {
    flex-direction: row;
  }
}
</style>
