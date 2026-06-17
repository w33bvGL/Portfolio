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

const adultConfirmed = useState<boolean>('adult-confirmed', () => false)
const confirmingProject = ref<Project | null>(null)

const onAdultClick = (project: Project) => {
  confirmingProject.value = project
}

const onConfirm = () => {
  adultConfirmed.value = true
  if (confirmingProject.value?.url) {
    window.open(confirmingProject.value.url, '_blank', 'noopener,noreferrer')
  }
  confirmingProject.value = null
}

const onCancel = () => {
  confirmingProject.value = null
}
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
        @adult-click="onAdultClick"
      />
    </UiLayoutGrid>
  </UiLayoutContainer>

  <UiAdultConfirmationModal
    :is-open="!!confirmingProject"
    :project-name="confirmingProject?.name"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
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
