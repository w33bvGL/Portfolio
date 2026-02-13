<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  project: Project
}>()

const img = useImage()
</script>

<template>
  <a
    :href="project.url"
    target="_blank"
    class="project-card glass-panel group"
  >
    <div class="image-wrapper">
      <div class="overlay" />
      <NuxtImg
        :src="project.image"
        :alt="project.name"
        width="600"
        height="340"
        format="webp"
        class="project-img"
        :placeholder="img(project.image, { h: 10, f: 'png', blur: 2, q: 50 })"
        loading="lazy"
      />

      <div class="hover-icon">
        <Icon
          name="lucide:arrow-up-right"
          class="icon"
        />
      </div>
    </div>

    <div class="card-content">
      <h3 class="project-title">
        {{ project.name }}
      </h3>
      <p class="project-desc">
        {{ project.description }}
      </p>
    </div>
  </a>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  height: 100%; /* Для одинаковой высоты в гриде */
}

.project-card:hover {
  transform: translateY(-5px);
  background: rgba(125, 125, 125, 0.08);
  border-color: var(--text-muted);
  box-shadow:
    0 15px 30px -5px rgba(0,0,0,0.1),
    inset 0 0 0 1px rgba(255,255,255,0.05);
}

/* --- Image Area --- */
.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.group:hover .project-img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.05), transparent);
  z-index: 1;
  pointer-events: none;
}

/* --- Hover Icon --- */
.hover-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 2;

  opacity: 0;
  transform: translate(-10px, 10px) scale(0.8);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.group:hover .hover-icon {
  opacity: 1;
  transform: translate(0, 0) scale(1);
}

.icon { width: 1.25rem; height: 1.25rem; }

/* --- Content Area --- */
.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--text-main);
  transition: color 0.3s;
}

.group:hover .project-title {
  color: var(--primary-color);
}

.project-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 640px) {
  .card-content { padding: 1.25rem; }
  .project-title { font-size: 1.1rem; }
}
</style>
