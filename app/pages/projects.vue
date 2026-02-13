<script setup lang="ts">
import type { TranslatedProjects, Project } from '~/types/project'

const { t, locale } = useI18n()
const { vIntersection } = useScrollObserver()

const { data: projectsByLang } = await useAsyncData<TranslatedProjects>('projects', () =>
  $fetch('/api/projects')
)

const projects = computed<Project[]>(() => {
  if (!projectsByLang.value) return []
  const currentKey = locale.value as keyof TranslatedProjects
  return projectsByLang.value[currentKey] ?? []
})

const target = ref(null)
const { elementX, elementY, isOutside } = useMouseInElement(target)

const isReady = ref(false)
onMounted(() => {
  setTimeout(() => {
    isReady.value = true
  }, 50)
})

const blobPos = computed(() => {
  if (isOutside.value && !isReady.value) return {}
  return {
    '--x': `${elementX.value}px`,
    '--y': `${elementY.value}px`
  }
})

const title = t('projects.title')
const description = t('projects.description')
useSeoMeta({
  title, description,
  ogTitle: title, ogDescription: description
})
</script>

<template>
  <div
    ref="target"
    class="page-projects"
    :style="blobPos"
    :class="{ 'js-ready': isReady }"
  >
    <div class="page-fx">
      <div class="blob b-1" />
      <div class="blob b-2" />
      <div class="grid-overlay" />
    </div>

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
  min-height: 100vh;
  --x: 500px;
  --y: 400px;
  background-color: var(--bg-body);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10rem 1.5rem 0;
  position: relative;
  z-index: 10;
}

.page-fx {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--border-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
  background-size: 4rem 4rem;
  opacity: 0.03;
  mask-image: radial-gradient(circle at center, black, transparent 85%);
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  will-change: transform;
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 1.5s ease-in-out;
}

.js-ready .blob {
  opacity: 0.12;
}

.b-1 {
  top: -10%;
  left: -5%;
  width: 60vh;
  height: 60vh;
  background: var(--primary-color);
  opacity: 0.05;
  transform: translate(calc(var(--x) / 25), calc(var(--y) / 25));
}

.b-2 {
  bottom: 5%;
  right: -5%;
  width: 50vh;
  height: 50vh;
  background: var(--text-muted);
  opacity: 0.03;
  transform: translate(calc(var(--x) / -35), calc(var(--y) / -35));
}

.header-section {
  text-align: center;
  margin-bottom: 5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.page-title {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.05em;
  margin-bottom: 1.5rem;
  background: linear-gradient(180deg, var(--text-main) 30%, rgba(125,125,125,0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dot { color: var(--primary-color); }

.page-desc {
  font-size: var(--font-body-lg);
  color: var(--text-muted);
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1),
  transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  transition-delay: var(--delay, 0s);
  will-change: transform, opacity;
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
