<script setup lang="ts">
import type { Education, TranslatedEducation } from '~/types/education'

const { t, locale } = useI18n()

const { data: educationByLang } = await useAsyncData<TranslatedEducation>('education', () =>
  $fetch('/api/education')
)

const educations = computed<Education[]>(() => {
  if (!educationByLang.value) return []
  const lang = locale.value as keyof TranslatedEducation
  return educationByLang.value[lang] || []
})
</script>

<template>
  <UiLayoutContainer class="education-section">
    <UiSectionHeader
      :title="t('education.title')"
      :description="t('education.description')"
      align="center"
    />

    <UiLayoutGrid :cols="2">
      <UiCard
        v-for="(item, index) in educations"
        :key="index"
        :href="item.url"
        :class="[
          { 'animate-slide-up': true },
          `stagger-delay-${(index % 10) + 3}`
        ]"
      >
        <UiCardHeader class="edu-header">
          <UiLayoutFlex
            justify="between"
            full
            align="center"
          >
            <div class="card-icon">
              <Icon
                name="lucide:graduation-cap"
                class="icon"
              />
            </div>

            <div
              v-if="item.url"
              class="hover-arrow"
            >
              <Icon name="lucide:arrow-up-right" />
            </div>
          </UiLayoutFlex>
        </UiCardHeader>

        <UiCardContent>
          <UiCardTitle as="h5">
            {{ item.title }}
          </UiCardTitle>
          <UiCardDescription>{{ item.description }}</UiCardDescription>
        </UiCardContent>
      </UiCard>
    </UiLayoutGrid>
  </UiLayoutContainer>
</template>

<style scoped>
.card-icon {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(125, 125, 125, 0.1);
  color: var(--text-main);
  transition: all 0.3s ease;
}

.ui-card:hover .card-icon {
  background: var(--text-main);
  color: var(--bg-body);
}

.icon { width: 1.25rem; height: 1.25rem; }

.hover-arrow {
  color: var(--text-muted);
  opacity: 0;
  transform: translate(-10px, 10px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.ui-card:hover .hover-arrow {
  opacity: 1;
  transform: translate(0, 0);
  color: var(--text-main);
}
</style>
