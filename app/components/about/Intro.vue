<script setup lang="ts">
const { global, footer } = useAppConfig()
const { t } = useI18n()
</script>

<template>
  <section class="about-intro scroll-reveal">
    <div class="glass-panel content-wrapper">
      <div class="text-side">
        <h1 class="title">
          {{ t('about.title') }}
          <span class="highlight">.</span>
        </h1>

        <p class="description">
          {{ t('about.intro') }}
        </p>

        <div
          v-if="footer?.links"
          class="socials"
        >
          <UiButton
            v-for="(link, index) of footer.links"
            :key="index"
            :href="link.to"
            target="_blank"
            variant="ghost"
            class="social-btn"
            :aria-label="link['aria-label']"
          >
            <Icon
              :name="link.icon.replace('i-simple-icons-', 'simple-icons:')"
              class="icon"
            />
          </UiButton>
        </div>
      </div>

      <div class="avatar-side">
        <div class="avatar-container">
          <div class="glow-ring" />
          <div class="avatar-mask">
            <SeasonalAvatar
              :src="global.picture.src"
              :alt="global.picture.alt"
              :size="280"
              class="avatar-img"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-intro {
  margin-top: 2rem;
  margin-bottom: 5rem;
  opacity: 0;
  padding: 0 2rem;
  transform: translateY(30px);
  animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fade-up {
  to { opacity: 1; transform: translateY(0); }
}

.content-wrapper {
  display: flex;
  flex-direction: column-reverse;
  gap: 3rem;
  padding: 2.5rem;
  border-radius: 2.5rem;
  align-items: center;
  text-align: center;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(20px);
}

@media (min-width: 900px) {
  .content-wrapper {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    align-items: center;
    padding: 4rem;
  }
}

.text-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

@media (min-width: 900px) {
  .text-side { align-items: flex-start; }
}

.title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1;
  color: var(--text-main);
  letter-spacing: -0.03em;
}

.highlight {
  color: var(--primary-color);
}

.description {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-muted);
  max-width: 600px;
}

.signature-block {
  margin: 1rem 0;
  opacity: 0.8;
  filter: invert(1); /* Инверсия для темной темы, если подпись черная */
}

/* При светлой теме (если есть) инверсию надо убирать */
:root[data-theme='light'] .signature-block { filter: none; }

.signature-img {
  height: 60px;
  width: auto;
}

.socials {
  display: flex;
  gap: 1rem;
}

.social-btn {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background: rgba(125, 125, 125, 0.1);
  transition: all 0.3s ease;
}

.social-btn:hover {
  background: var(--text-main);
  color: var(--bg-body);
  transform: translateY(-3px);
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
}

/* Avatar Styling */
.avatar-side {
  position: relative;
  flex-shrink: 0;
}

.avatar-container {
  position: relative;
  width: 200px;
  height: 200px;
}

@media (min-width: 900px) {
  .avatar-container { width: 280px; height: 280px; }
}

.glow-ring {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
  opacity: 0.15;
  filter: blur(20px);
  animation: pulse 4s infinite ease-in-out;
}

.avatar-mask {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.3);
  transform: translateZ(0); /* Fix Safari border-radius bug */
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.avatar-container:hover .avatar-img {
  transform: scale(1.05);
}

@keyframes pulse {
  0%, 100% { opacity: 0.15; transform: scale(1); }
  50% { opacity: 0.25; transform: scale(1.1); }
}
</style>
