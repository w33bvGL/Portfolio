<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  project: Project
}>()

const img = useImage()
</script>

<template>
  <component
    :is="project.url ? 'a' : 'div'"
    :href="project.url"
    :target="project.url ? '_blank' : undefined"
    class="project-card glass-panel group"
    :class="{ 'is-link': project.url }"
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

      <div
        v-if="project.url"
        class="hover-icon"
      >
        <Icon
          name="lucide:arrow-up-right"
          class="icon"
        />
      </div>
    </div>

    <div class="card-content">
      <div class="title-row">
        <h3 class="project-title">
          {{ project.name }}
        </h3>
        <div
          v-if="project.tags"
          class="project-tags"
        >
          <span
            v-for="tag in project.tags.slice(0, 3)"
            :key="tag"
            class="tag"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <p class="project-desc">
        {{ project.description }}
      </p>

      <div
        v-if="project.url"
        class="card-footer"
      >
        <span class="view-link">{{ $t('projects.view_project') || 'View Project' }}</span>
      </div>
    </div>
  </component>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  overflow: hidden;
  text-decoration: none;
  /* Приглушаем фон: меньше белого, больше прозрачности */
  background: rgba(20, 20, 20, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  height: 100%;
  position: relative;
}

.is-link:hover {
  transform: translateY(-6px);
  /* На ховере граница не должна светиться как неонка */
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(30, 30, 30, 0.6);
  box-shadow:
    0 20px 40px -12px rgba(0, 0, 0, 0.6),
    inset 0 0 12px rgba(255, 255, 255, 0.01);
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  /* Чуть притеняем картинку в базе, чтобы текст лучше читался */
  filter: brightness(0.9);
}

.group:hover .project-img {
  transform: scale(1.05);
  filter: brightness(1);
}

.overlay {
  position: absolute;
  inset: 0;
  /* Затемнение снизу вверх для читаемости заголовка */
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 60%);
  z-index: 1;
  opacity: 0.7;
}

.hover-icon {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 2.75rem;
  height: 2.75rem;
  /* Кнопка теперь не чисто белая, а стеклянная */
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-main);
  z-index: 2;
  opacity: 0;
  transform: translate(-5px, 5px) scale(0.9);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.group:hover .hover-icon {
  opacity: 1;
  transform: translate(0, 0) scale(1);
}

.card-content {
  padding: 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.title-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.02em;
}

.project-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
  opacity: 0.8; /* Чуть приглушаем описание */
}

.view-link {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--primary-color);
  opacity: 0.6;
  transition: opacity 0.3s;
}

.group:hover .view-link {
  opacity: 1;
}

.tag {
  font-size: 0.65rem;
  padding: 0.15rem 0.5rem;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: var(--text-muted);
}
</style>
