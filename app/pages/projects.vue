<script setup lang="ts">
import type { TranslatedProjects, Project } from '~/types/project'

const { t, locale } = useI18n()
const { vIntersection } = useScrollObserver()

// --- Data Fetching ---
const { data: projectsByLang } = await useAsyncData<TranslatedProjects>('projects', () =>
  $fetch('/api/projects')
)

const projects = computed<Project[]>(() => {
  if (!projectsByLang.value) return []
  const currentKey = locale.value as keyof TranslatedProjects
  return projectsByLang.value[currentKey] ?? []
})

// --- SEO ---
const title = t('projects.title')
const description = t('projects.description')
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <UiLayoutContainer class="page-projects">
    <header class="header-section">
      <h1 class="page-title">
        {{ t('projects.title') }}<span class="dot">.</span>
      </h1>
      <p class="page-desc">
        {{ t('projects.description') }}
      </p>
    </header>

    <UiLayoutGrid :cols-md="2">
      <ProjectsCard
        v-for="(project, index) in projects"
        :key="project.name"
        v-intersection
        :project="project"
        class="scroll-reveal"
        :style="{ '--delay': `${index * 0.05}s` }"
      />
    </UiLayoutGrid>
  </UiLayoutContainer>
</template>

<style scoped>
.page-projects {
  position: relative;
  padding-top: 7rem;
  width: 100%;
}

.header-section {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.page-title {
  font-size: var(--font-hero);
  font-weight: 800;
  line-height: var(--leading-tight);
  letter-spacing: -0.04em;
  margin: 0 0 1rem 0;
  background: linear-gradient(180deg, var(--text-main) 30%, rgba(125,125,125,0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dot {
  color: var(--primary-color);
}

.page-desc {
  font-size: var(--font-body-lg);
  line-height: var(--leading-normal);
  color: var(--text-muted);
  max-width: 580px;
  margin: 0 auto;
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity var(--duration-slower) var(--ease-out-expo),
  transform var(--duration-slower) var(--ease-out-expo);
  transition-delay: var(--delay, 0s);
  will-change: transform, opacity;
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
