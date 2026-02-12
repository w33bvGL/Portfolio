<script setup lang="ts">
const { global, footer } = useAppConfig()
const { t } = useI18n()
</script>

<template>
  <section class="about-intro">
    <div class="glass-panel content-wrapper">

      <div class="text-side">
        <h1 class="title">
          {{ t('about.title') }}
          <span class="highlight">.</span>
        </h1>

        <p class="description">
          {{ t('about.intro') }}
        </p>

        <div class="socials" v-if="footer?.links">
          <UiButton
            v-for="(link, index) of footer.links"
            :key="index"
            :href="link.to"
            target="_blank"
            variant="ghost"
            class="social-btn"
            :aria-label="link['aria-label']"
          >
            <Icon :name="link.icon.replace('i-simple-icons-', 'simple-icons:')" class="icon" />
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
              :size="180"
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
  margin-bottom: 4rem;
}

.content-wrapper {
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 2rem;
  align-items: center;
  text-align: center;
}

@media (min-width: 768px) {
  .content-wrapper {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    align-items: center;
  }
}

.text-side {
  flex: 1;
}

.title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: var(--text-main);
}

.highlight {
  color: var(--primary-color);
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 2rem;
  max-width: 600px;
}

.socials {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
}

@media (min-width: 768px) {
  .socials { justify-content: flex-start; }
}

.social-btn {
  padding: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Avatar Styling */
.avatar-side {
  position: relative;
}

.avatar-container {
  position: relative;
  width: 180px;
  height: 180px;
}

.glow-ring {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--text-main) 0%, transparent 70%);
  opacity: 0.1;
  animation: pulse 4s infinite;
}

.avatar-mask {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.2);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes pulse {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.05); }
}
</style>
