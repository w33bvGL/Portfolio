<script setup lang="ts">
import type { TranslatedProjects, Project } from '~/types/project'

const { t, locale } = useI18n()

const { data: projectsByLang } = await useAsyncData<TranslatedProjects>('projects', () =>
  $fetch('/api/projects')
)

const projects = computed<Project[]>(() => {
  if (!projectsByLang.value) return []
  const currentKey = locale.value as keyof TranslatedProjects
  return projectsByLang.value[currentKey] ?? []
})

const title = t('projects.title')
const description = t('projects.description')

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})
</script>

<template>
  <UiLayoutContainer class="projects-page">
    <UiSectionHeader
      as="h1"
      variant="hero"
      align="center"
      :title="t('projects.title')"
      :description="t('projects.description')"
    />

    <UiLayoutGrid :cols-md="2" class="projects-grid">
      <ProjectsCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
        class="project-reveal-card"
      />
    </UiLayoutGrid>
  </UiLayoutContainer>
</template>

<style scoped>
.projects-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: var(--space-4xl);
  gap: var(--space-xl);
}

.projects-grid {
  width: 100%;
}

.project-reveal-card {
  animation: fade-up-reveal both;
  animation-timeline: view();
  animation-range: entry 5% cover 22%;
  will-change: transform, opacity;
}

.project-reveal-card:nth-child(even) {
  animation-delay: 0.1s;
}

@keyframes fade-up-reveal {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
