<script setup lang="ts">
import type { TranslatedAbout, About } from '~/types/about'

const { locale, t } = useI18n()
const { vIntersection } = useScrollObserver()

const { data: aboutData } = await useAsyncData<TranslatedAbout>('about', () => $fetch('/api/about'))

const bio = computed<About[]>(() => aboutData.value?.[locale.value] ?? [])
</script>

<template>
  <section class="story scroll-reveal" v-intersection>
    <div class="story-box">
      <UiSectionHeader
        :title="t('about.title')"
        :description="t('about.description')"
        align="center"
      />

      <div class="story-flow">
        <article v-for="(item, idx) in bio" :key="idx" class="story-block">
          <h3 class="story-block-title">{{ item.title }}</h3>
          <p class="story-block-text">{{ item.content }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story {
  & .story-flow {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
    margin-top: var(--space-lg);
  }

  & .story-block {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);
    position: relative;

    padding-left: var(--space-sm);
    border-left: 2px solid var(--color-border);
    transition: border-color var(--duration-normal) var(--ease-out-expo);

    & .story-block-title {
      font-size: var(--font-body-lg);
      font-weight: var(--weight-bold);
      color: var(--color-heading);
      margin: 0;
    }

    & .story-block-text {
      font-size: var(--font-body);
      line-height: var(--leading-normal);
      color: var(--color-text-subtle);
      margin: 0;
    }

    &:hover {
      border-left-color: var(--color-primary);
    }
  }
}
</style>
