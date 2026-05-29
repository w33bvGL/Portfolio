<script setup lang="ts">
import type { FaqItem } from '~/types/faq'

defineProps<{
  items: FaqItem[]
}>()

const activeIndex = ref<number | null>(null)

const toggle = (idx: number) => {
  activeIndex.value = activeIndex.value === idx ? null : idx
}
</script>

<template>
  <div class="accordion-wrapper">
    <div
      v-for="(item, idx) in items"
      :key="idx"
      class="accordion-item glass-panel"
      :class="{ 'is-open': activeIndex === idx }"
      @click="toggle(idx)"
    >
      <button class="accordion-header">
        <span class="question-text">{{ item.q }}</span>

        <div class="icon-wrapper">
          <Icon
            name="lucide:plus"
            class="toggle-icon"
            mode="svg"
          />
        </div>
      </button>

      <div class="accordion-body">
        <div class="body-inner">
          <p class="answer-text">
            {{ item.a }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.accordion-item {
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.accordion-item:hover {
  background: rgba(125, 125, 125, 0.08);
  border-color: var(--text-muted);
}

.accordion-item.is-open {
  background: rgba(125, 125, 125, 0.05);
  border-color: var(--text-muted);
}

.accordion-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 1rem;
}

.question-text {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-main);
  transition: color 0.3s ease;
}

.accordion-item:hover .question-text {
  color: var(--primary-color);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: rgba(125, 125, 125, 0.1);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.toggle-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--text-muted);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.3s ease;
}

.is-open .icon-wrapper {
  background: var(--text-main);
  transform: rotate(180deg);
}

.is-open .toggle-icon {
  transform: rotate(45deg);
  color: var(--bg-body);
}

.accordion-body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.is-open .accordion-body {
  grid-template-rows: 1fr;
}

.body-inner {
  overflow: hidden;
}

.answer-text {
  padding: 0 1.25rem 1.25rem;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.is-open .answer-text {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.1s;
}
</style>
