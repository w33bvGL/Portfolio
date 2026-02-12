<script setup lang="ts">
import type { TranslatedProjects, Project } from '~/types/project'

const { t } = useI18n()

const img = useImage()
const locale = useI18n().locale.value

const { data: projectsByLang } = await useFetch<TranslatedProjects>('/api/projects')

const projects = computed<Project[]>(() => {
  if (!projectsByLang.value) return []
  if (locale in projectsByLang.value) {
    return projectsByLang.value[locale as keyof TranslatedProjects]
  }
  return []
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
<!--  <UPage>-->
<!--    <UiHeading-->
<!--      :title="$t('projects.title')"-->
<!--      :description="$t('projects.description')"-->
<!--      class="mb-4"-->
<!--    />-->

<!--    <section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">-->
<!--      <a-->
<!--        v-for="project in projects"-->
<!--        :key="project.name"-->
<!--        :href="project.url"-->
<!--        target="_blank"-->
<!--      >-->
<!--        <UCard-->
<!--          variant="subtle"-->
<!--          class="group hover:bg-elevated/70 hover:ring-primary transition-all flex flex-col h-full"-->
<!--        >-->
<!--          <div class="aspect-video border border-muted mb-3 rounded-lg bg-muted/80 overflow-hidden">-->
<!--            <NuxtImg-->
<!--              :src="project.image"-->
<!--              width="380"-->
<!--              :alt="project.name"-->
<!--              format="webp"-->
<!--              class="aspect-video object-cover w-full object-top pointer-events-none select-none"-->
<!--              :placeholder="img(project.image, createPlaceholder(380, 280))"-->
<!--            />-->
<!--          </div>-->
<!--          <h3 class="text-xl font-semibold mb-1">-->
<!--            {{ project.name }}-->
<!--          </h3>-->
<!--          <p class="text-muted text-sm mb-1 line-clamp-3 flex-1">-->
<!--            {{ project.description }}-->
<!--          </p>-->
<!--        </UCard>-->

<!--      </a>-->
<!--    </section>-->

<!--    <ProjectsCta />-->
<!--  </UPage>-->
</template>
