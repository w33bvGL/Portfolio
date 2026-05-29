<script setup lang="ts">
const { t, locales } = useI18n()
const runtimeConfig = useRuntimeConfig()

const isDownloading = ref(false)
const dropdownRef = ref<any>(null)

async function download(code: string): Promise<void> {
  if (isDownloading.value) return

  dropdownRef.value?.close()
  isDownloading.value = true

  const isDev = runtimeConfig.public.appEnv === 'development'
  // In dev: hit the Nitro API route that runs Puppeteer on-demand
  // In SSG/prod: fetch the pre-generated static file
  const url = isDev ? `/api/resume-pdf?lang=${code}` : `/resume/${code}.pdf`
  const fileName = `Vahe_Sargsyan_Resume_${code.toUpperCase()}.pdf`

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Failed to fetch PDF: ${response.status}`)

    const blob = await response.blob()
    const blobUrl = window.URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = blobUrl
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(blobUrl)
  } catch (error) {
    console.error('Download failed:', error)
  } finally {
    setTimeout(() => { isDownloading.value = false }, 600)
  }
}
</script>

<template>
  <UiDropdown ref="dropdownRef" placement="bottom-start">
    <template #trigger="{ isOpen }">
      <UiButton
        variant="primary"
        icon="lucide:file-down"
        class="trigger-btn"
        :loading="isDownloading"
      >
        {{ t('index.cta.resume.download') || 'Download CV' }}
        <Icon
          name="lucide:chevron-down"
          class="chevron"
          :class="{ 'is-rotated': isOpen }"
        />
      </UiButton>
    </template>

    <template #default>
      <button
        v-for="l in locales"
        :key="l.code"
        class="menu-item"
        @click="download(l.code)"
      >
        <span class="lang-code">{{ l.code.toUpperCase() }}</span>
        <span class="lang-label">{{ l.name }}</span>
        <Icon name="lucide:download" class="dl-icon" />
      </button>
    </template>
  </UiDropdown>
</template>

<style scoped>
.chevron {
  width: 1rem;
  height: 1rem;
  margin-left: var(--space-xxs);
  opacity: 0.6;
  transition: transform var(--duration-fast) var(--ease-out-sine);
}

.chevron.is-rotated {
  transform: rotate(180deg);
}

.menu-item {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: background var(--duration-fast) ease,
  color var(--duration-fast) ease;
  text-align: left;
  font-size: var(--font-small);

  &:hover {
    background: color-mix(in oklab, var(--text-muted) 8%, transparent);
    color: var(--text-main);

    & .dl-icon {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

.lang-code {
  font-weight: var(--weight-bold);
  font-size: var(--font-xs);
  opacity: 0.5;
  width: 1.5rem;
}

.lang-label {
  flex: 1;
  font-weight: var(--weight-medium);
}

.dl-icon {
  width: 1rem;
  height: 1rem;
  opacity: 0;
  transform: translateX(-5px);
  transition: opacity var(--duration-fast) ease,
  transform var(--duration-fast) var(--ease-out-expo);
}
</style>
