<script setup lang="ts">
import type { About } from '~/types/about'

const { locale } = useI18n()

const { data: about } = await useAsyncData<About[]>(`about-${locale.value}`, () => $fetch('/api/about', { query: { lang: locale.value } }))
</script>

<template>
  <section class="story">
    <div class="story-box">
      <UiSectionHeader
        :title="$t('about.story.title')"
        :description="$t('about.story.description')"
        align="center"
        class="scroll-animate-fade"
      />

      <div class="story-flow">
        <article
          v-for="(item, idx) in about"
          :key="idx"
          class="story-block scroll-animate-reveal"
          :class="`stagger-delay-${Math.min(idx + 1, 5)}`"
        >
          <h3 class="story-block-title">
            {{ item.title }}
          </h3>
          <p class="story-block-text">
            {{ item.content }}
          </p>
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
