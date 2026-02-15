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
    :class="{ 'is-adult-card': project.isAdult }"
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
        :class="{ 'adult-blur': project.isAdult }"
        :placeholder="img(project.image, { h: 10, f: 'png', blur: 2, q: 50 })"
        loading="lazy"
      />

      <div
        v-if="project.isAdult"
        class="adult-badge-overlay"
      >
        <UiButton variant="ghost">
          <Icon
            name="lucide:eye-off"
            class="w-5 h-5"
          />
          <span>Sensitive Content</span>
        </UiButton>
      </div>

      <div
        v-if="project.url"
        class="hover-icon"
      >
        <UiButton
          icon="lucide:arrow-up-right"
          variant="outline"
        />
      </div>
    </div>

    <UiCardHeader>
      <div class="title-row">
        <UiCardTitle>{{ project.name }}</UiCardTitle>
        <span
          v-if="project.isAdult"
          class="age-limit"
        >18+</span>
      </div>

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
  </UiCard>
</template>

<style scoped>
.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: #000;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.4s ease;
  filter: brightness(0.9);
}

.adult-blur {
  filter: blur(40px) brightness(0.5) !important;
  transform: scale(1.1);
}

.group:hover .project-img:not(.adult-blur) {
  transform: scale(1.05);
  filter: brightness(1);
}

/* Плашка поверх блюра */
.adult-badge-overlay {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
}

.adult-content-warning {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 99px;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

.title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.age-limit {
  font-size: 0.7rem;
  font-weight: 800;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  background: rgba(255, 50, 50, 0.1);
  color: #ff3333;
  border: 1px solid rgba(255, 50, 50, 0.2);
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
  backdrop-filter: blur(8px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-top: 0.5rem;
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
