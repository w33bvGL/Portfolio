<script setup lang="ts">
import type { TranslatedProjects, Project } from '~/types/project'

const { t, locale } = useI18n()

// Fetch Data
const { data: projectsByLang } = await useFetch<TranslatedProjects>('/api/projects')

// Computed Projects List
const projects = computed<Project[]>(() => {
  if (!projectsByLang.value) return []
  const currentKey = locale.value as keyof TranslatedProjects
  return projectsByLang.value[currentKey] ?? []
})

// SEO
const title = t('projects.title')
const description = t('projects.description')
useSeoMeta({
  title, description,
  ogTitle: title, ogDescription: description,
  twitterTitle: title, twitterDescription: description
})
</script>

<template>
  <div class="page-projects">
    <div class="page-blobs">
      <div class="blob b-1" />
      <div class="blob b-2" />
    </div>

    <div class="container">
      <div class="header-section">
        <h1 class="page-title">
          {{ t('projects.title') }}
          <span class="dot">.</span>
        </h1>
        <p class="page-desc">
          {{ t('projects.description') }}
        </p>
      </div>

      <div class="projects-grid">
        <ProjectsCard
          v-for="(project, index) in projects"
          :key="project.name"
          :project="project"
          class="grid-item"
          :style="{ '--delay': `${index * 0.1}s` }"
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
  padding: 6rem 1.5rem 0; /* Верхний отступ учитывает хедер */
  position: relative;
  z-index: 1;
}

/* --- Header --- */
.header-section {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.page-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: var(--text-main);
}

.dot { color: var(--primary-color); }

.page-desc {
  font-size: 1.15rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* --- Grid System (Adaptive) --- */
.projects-grid {
  display: grid;
  /* Адаптивная сетка:
     - 1 колонка на мобилках
     - 2 колонки на планшетах/ноутах
     - 1fr 1fr
  */
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* --- Animation --- */
.grid-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes fade-up {
  to { opacity: 1; transform: translateY(0); }
}

.spacer { height: 6rem; }

/* --- Background Blobs --- */
.page-blobs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.2;
}

.b-1 {
  top: -10%;
  left: -10%;
  width: 60vw;
  height: 60vw;
  background: var(--text-muted);
  opacity: 0.1;
}

.b-2 {
  top: 30%;
  right: -20%;
  width: 50vw;
  height: 50vw;
  background: var(--primary-color);
  opacity: 0.15;
}
</style>
