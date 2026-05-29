<script setup lang="ts">
import type { Project } from '~/types/project'

const { t, locale } = useI18n()

const { data: projects } = await useAsyncData<Project[]>(`projects-${locale.value}`, () =>
  $fetch('/api/projects', { query: { lang: locale.value } })
)

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
useScrollReveal({ selector: '.scroll-animate-reveal, .scroll-animate-fade' })
</script>

<template>
  <UiLayoutContainer class="projects-page">
    <UiSectionHeader
      as="h1"
      variant="hero"
      align="center"
      :title="t('projects.title')"
      :description="t('projects.description')"
      class="scroll-animate-fade"
    />

    <UiLayoutGrid
      :cols-md="2"
      class="projects-grid"
    >
      <ProjectsCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
        class="scroll-animate-reveal scroll-stagger-even"
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
</style>
