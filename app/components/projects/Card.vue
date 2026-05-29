<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <a
    :href="project.url"
    target="_blank"
    rel="noopener noreferrer"
    class="p-card"
    :class="{ 'is-adult': project.isAdult }"
  >
    <UiCard class="p-inner" variant="glass">
      <div class="p-img-box">
        <div class="p-overlay" />

        <NuxtImg
          :src="project.image"
          :alt="project.name"
          width="600"
          height="340"
          format="webp"
          class="p-img"
          :class="{ 'p-blur': project.isAdult }"
          loading="lazy"
        />

        <div v-if="project.isAdult" class="p-adult-mask">
          <UiButton variant="ghost" icon="lucide:eye-off" size="sm">
            {{ $t('projects.sensitive_content')}}
          </UiButton>
        </div>

        <div v-if="project.url" class="p-icon">
          <UiButton
            icon="lucide:arrow-up-right"
            variant="ghost"
            size="sm"
            class="p-btn"
          />
        </div>
      </div>

      <UiCardHeader>
        <div class="p-row">
          <UiCardTitle class="p-title">{{ project.name }}</UiCardTitle>
          <span v-if="project.isAdult" class="p-badge">18+</span>
        </div>

        <div v-if="project.tags?.length" class="p-tags">
          <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="p-tag">
            {{ tag }}
          </span>
        </div>
      </UiCardHeader>

      <UiCardContent>
        <UiCardDescription class="p-desc">
          {{ project.description }}
        </UiCardDescription>
      </UiCardContent>
    </UiCard>
  </a>
</template>

<style scoped>
.p-card {
  display: block;
  text-decoration: none;
  color: inherit;
  height: 100%;

  & .p-inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    transition: all var(--duration-fast) var(--ease-out-sine);
  }

  &:hover .p-inner {
    border-color: var(--color-border-strong);
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);

    @media (prefers-color-scheme: dark) {
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    }

    .dark & {
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    }

    & .p-img:not(.p-blur) {
      transform: scale(1.03);
    }

    & .p-icon {
      opacity: 1;
      transform: translate(0, 0) scale(1);
    }

    & .p-title {
      color: var(--color-primary-hover);
    }

    & .p-tag {
      border-color: var(--color-text-muted);
    }
  }
}

.p-img-box {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-bottom: 1px solid var(--glass-border);
  background: var(--color-surface-raised);
}

.p-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-out-expo), filter var(--duration-normal) ease;

  &.p-blur {
    filter: blur(30px) scale(1.1);
  }
}

.p-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.15) 0%, transparent 60%);

  .dark &, @media (prefers-color-scheme: dark) {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 60%);
}
}

.p-adult-mask {
  position: absolute;
  inset: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(4px);

  .dark &, @media (prefers-color-scheme: dark) {
  background: rgba(0, 0, 0, 0.3);
}
}

.p-badge {
  font-size: var(--font-xs);
  font-weight: var(--weight-bold);
  padding: 0.15rem 0.4rem;
  border-radius: var(--radius-sm);
  background: rgba(255, 50, 50, 0.08);
  color: #ff3333;
  border: 1px solid rgba(255, 50, 50, 0.15);
  flex-shrink: 0;
}

.p-icon {
  position: absolute;
  top: var(--space-sm);
  right: var(--space-sm);
  z-index: 2;
  opacity: 0;
  transform: translate(-4px, 4px) scale(0.9);
  transition: all var(--duration-fast) var(--ease-out-expo);
}

.p-btn {
  background: var(--color-surface-overlay) !important;
  border: 1px solid var(--glass-border) !important;
  color: var(--color-text) !important;
  box-shadow: var(--glass-shadow);
}

.p-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  width: 100%;
}

.p-title {
  font-size: var(--font-body-lg);
  font-weight: var(--weight-bold);
  color: var(--color-heading);
  transition: color var(--duration-fast) ease;
}

.p-desc {
  font-size: var(--font-body);
  line-height: var(--leading-normal);
  color: var(--color-text-subtle);
}

.p-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xxs);
  margin-top: var(--space-xs);
}

.p-tag {
  font-size: var(--font-xs);
  font-weight: var(--weight-medium);
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-full);
  background: var(--color-primary-subtle);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  transition: all var(--duration-fast) ease;
}
</style>
