<script setup lang="ts">
const { data: techs } = await useAsyncData('technologies', () => $fetch('/api/technologies'))

const groups = computed(() => [
  { key: 'frontend', title: 'Frontend', items: techs.value?.frontend, icon: 'lucide:layout' },
  { key: 'backend', title: 'Backend', items: techs.value?.backend, icon: 'lucide:database' },
  { key: 'tools', title: 'Tools & DevOps', items: techs.value?.tools, icon: 'lucide:wrench' }
])
</script>

<template>
  <section class="stack">
    <UiSectionHeader
      :title="$t('about.stack.title')"
      :description="$t('about.stack.description')"
      align="center"
      class="scroll-animate-fade"
    />

    <div class="stack-grid">
      <div
        v-for="group in groups"
        :key="group.key"
        class="stack-box scroll-animate-reveal"
      >
        <div class="stack-box-header">
          <Icon :name="group.icon" class="stack-box-icon" />
          <h3 class="stack-box-title">{{ group.title }}</h3>
        </div>

        <div class="stack-items">
          <div
            v-for="tech in group.items"
            :key="tech.name"
            class="tech-card"
          >
            <div class="tech-icon-wrapper">
              <img :src="tech.icon" :alt="tech.name" class="tech-icon" loading="lazy">
            </div>
            <span class="tech-name">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack {
  & .stack-grid {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
    margin-top: var(--space-lg);
  }

  & .stack-box {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  & .stack-box-header {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    border-bottom: 1px solid var(--color-border);
    padding-bottom: var(--space-xs);

    & .stack-box-icon {
      width: 1.25rem;
      height: 1.25rem;
      color: var(--color-primary);
    }

    & .stack-box-title {
      font-size: var(--font-body-lg);
      font-weight: var(--weight-bold);
      color: var(--color-heading);
    }
  }

  & .stack-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: var(--space-sm);

    @media (max-width: 480px) {
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
      gap: var(--space-xs);
    }
  }

  & .tech-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: var(--space-xs);
    padding: var(--space-md) var(--space-sm);
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    border-radius: var(--radius-lg);
    transition: border-color var(--duration-fast) var(--ease-out-sine),
    transform var(--duration-fast) var(--ease-out-sine);

    & .tech-icon-wrapper {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;

      & .tech-icon {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: transform var(--duration-normal) var(--ease-out-expo);
      }
    }

    & .tech-name {
      font-size: var(--font-small);
      font-weight: var(--weight-medium);
      color: var(--color-text);
    }

    &:hover {
      border-color: var(--color-border-strong);
      transform: translateY(-2px);

      & .tech-icon {
        transform: scale(1.08);
      }
    }
  }
}
</style>
