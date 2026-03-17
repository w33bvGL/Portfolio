<script setup lang="ts">
import { ref } from 'vue'
const { t, locales } = useI18n()

const isDownloading = ref(false)
const dropdownRef = ref<any>(null)

async function download(code: string): Promise<void> {
  if (isDownloading.value) return

  dropdownRef.value?.close()
  isDownloading.value = true

  const url = `/resume/${code}.pdf`
  const fileName = `Vahe_Sargsyan_Resume_${code.toUpperCase()}.pdf`

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('File not found')

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
    setTimeout(() => {
      isDownloading.value = false
    }, 600)
  }
}
</script>

<template>
  <UiDropdown ref="dropdownRef" placement="bottom">
    <template #trigger="{ isOpen }">
      <UiButton
        variant="primary"
        icon="lucide:file-down"
        class="trigger-btn"
        :loading="isDownloading"
      >
        {{ t('cta.resume.download') || 'Download CV' }}
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
.trigger-btn {
  min-width: 200px;
  justify-content: space-between;
}

.chevron {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
  opacity: 0.6;
}

.chevron.is-rotated { transform: rotate(180deg); }

.menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  font-size: 0.9rem;
}

.menu-item:hover {
  background: rgba(125, 125, 125, 0.08);
  color: var(--text-main);
}

.lang-code { font-weight: 700; font-size: 0.75rem; opacity: 0.5; width: 1.5rem; }
.lang-label { flex: 1; font-weight: 500; }
.dl-icon { width: 1rem; height: 1rem; opacity: 0; transform: translateX(-5px); transition: all 0.2s; }
.menu-item:hover .dl-icon { opacity: 1; transform: translateX(0); }
</style>
