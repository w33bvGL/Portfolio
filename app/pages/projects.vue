<script setup lang="ts">
import type { TranslatedProjects, Project } from '~/types/project'
// Импортируем модалку
import AdultConfirmationModal from '~/components/ui/AdultConfirmationModal.vue'

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

// --- Adult Logic ---
const showAdultModal = ref(false)
const pendingProject = ref<Project | null>(null)

// Функция обработки клика по проекту
const handleProjectClick = (project: Project) => {
  if (!project.url) return

  // Если проект 18+, стопаем и открываем модалку
  if (project.isAdult) {
    pendingProject.value = project
    showAdultModal.value = true
    return
  }

  // Иначе открываем сразу
  window.open(project.url, '_blank')
}

// Подтверждение возраста
const onAdultConfirm = () => {
  if (pendingProject.value?.url) {
    window.open(pendingProject.value.url, '_blank')
  }
  closeModal()
}

const closeModal = () => {
  showAdultModal.value = false
  pendingProject.value = null
}

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
          @click.prevent="handleProjectClick(project)"
        />
      </UiLayoutGrid>

    <AdultConfirmationModal
      :is-open="showAdultModal"
      :project-name="pendingProject?.name"
      @confirm="onAdultConfirm"
      @cancel="closeModal"
    />
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
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
  transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
  will-change: transform, opacity;
  cursor: pointer;
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
