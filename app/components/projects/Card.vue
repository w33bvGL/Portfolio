<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  project: Project
}>()

const img = useImage()
</script>

<template>
  <UiCard
    :href="project.url"
    class="group"
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

    <UiCardHeader>
      <UiCardTitle>{{ project.name }}</UiCardTitle>

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
    </UiCardHeader>

    <UiCardContent>
      <UiCardDescription>
        {{ project.description }}
      </UiCardDescription>
    </UiCardContent>

    <UiCardFooter v-if="project.url">
      <span class="view-link">
        {{ $t('projects.view_project') || 'View Project' }}
      </span>
    </UiCardFooter>
  </UiCard>
</template>

<style scoped>
/* Специфичные стили только для ProjectsCard */

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
  filter: brightness(0.9);
}

.group:hover .project-img {
  transform: scale(1.05);
  filter: brightness(1);
}

.overlay {
  position: absolute;
  inset: 0;
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

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.tag {
  font-size: 0.65rem;
  padding: 0.15rem 0.5rem;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: var(--text-muted);
}

.view-link {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--primary-color);
  opacity: 0.6;
  transition: opacity 0.3s;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.group:hover .view-link {
  opacity: 1;
}
</style>
