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
      class="scroll-animate-fade"
    />

    <UiLayoutGrid :cols="2">
      <UiCard
        v-for="(item, index) in educations"
        :key="index"
        :href="item.url"
        class="scroll-animate-reveal scroll-stagger-even"
        :class="`stagger-delay-${Math.min(index + 1, 5)}`"
      >
        <UiCardHeader class="edu-header">
          <UiLayoutFlex justify="between" full align="center">
            <div class="card-icon">
              <Icon name="lucide:graduation-cap" class="icon" />
            </div>
            <div v-if="item.url" class="hover-arrow">
              <Icon name="lucide:arrow-up-right" />
            </div>
          </UiLayoutFlex>
        </UiCardHeader>

        <UiCardContent>
          <UiCardTitle as="h5">{{ item.title }}</UiCardTitle>
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
  border-radius: var(--radius-base);
  background: color-mix(in oklab, var(--text-muted) 10%, transparent);
  color: var(--text-main);
  transition: background var(--duration-fast) var(--ease-out-sine),
  color var(--duration-fast) var(--ease-out-sine);
}

.ui-card:hover .card-icon {
  background: var(--text-main);
  color: var(--bg-body);
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
}

.hover-arrow {
  color: var(--text-muted);
  opacity: 0;
  transform: translate(-10px, 10px);
  transition: opacity var(--duration-fast) var(--ease-out-expo),
  transform var(--duration-fast) var(--ease-out-expo),
  color var(--duration-fast) ease;
}

.ui-card:hover .hover-arrow {
  opacity: 1;
  transform: translate(0, 0);
  color: var(--text-main);
}
</style>
