<script setup lang="ts">
import type { TranslatedProjects, Project } from '~/types/project'

const { t, locale } = useI18n()
const { vIntersection } = useScrollObserver()

// Fetch Data
const { data: projectsByLang } = await useAsyncData<TranslatedProjects>('projects', () =>
  $fetch('/api/projects')
)

const projects = computed<Project[]>(() => {
  if (!projectsByLang.value) return []
  const currentKey = locale.value as keyof TranslatedProjects
  return projectsByLang.value[currentKey] ?? []
})

// SEO
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
  <div class="page-projects">
    <div class="container">
      <header class="header-section">
        <h1 class="page-title">
          {{ t('projects.title') }}<span class="dot">.</span>
        </h1>
        <p class="page-desc">
          {{ t('projects.description') }}
        </p>
      </header>

      <div class="projects-grid">
        <ProjectsCard
          v-for="(project, index) in projects"
          :key="project.name"
          v-intersection
          :project="project"
          class="scroll-reveal"
          :style="{ '--delay': `${index * 0.05}s` }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-projects {
  position: relative;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10rem 1.5rem 5rem;
  position: relative;
  z-index: 10;
}

/* --- Typography --- */
.header-section {
  text-align: center;
  margin-bottom: 5rem;
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

  /* Градиент в стиле Hero */
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

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
  transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
  will-change: transform, opacity;
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
