<script setup lang="ts">
import { ref } from 'vue'

// Данные FAQ (упростил структуру для примера)
const faq = [
  { q: 'Сколько лет вы занимаетесь разработкой?', a: 'Я начал коммерчески работать в 2020 году. До этого писал pet-проекты и контрибьютил в open source.' },
  { q: 'Какие технологии вы используете?', a: 'Основной стек: Nuxt.js, Vue 3, Laravel, PHP, TypeScript, Docker, MySQL/PostgreSQL.' },
  { q: 'Вы работаете под ключ?', a: 'Да. От идеи и архитектуры до запуска и поддержки в продакшене.' },
  { q: 'Как проходит оплата?', a: 'Гибко: предоплата 30–50%, далее — milestone или спринтами.' }
]

const activeIndex = ref<number | null>(null)

const toggle = (idx: number) => {
  activeIndex.value = activeIndex.value === idx ? null : idx
}
</script>

<template>
  <section class="faq-section">
    <div class="section-header">
      <h2 class="section-title">FAQ</h2>
    </div>

    <div class="faq-grid">
      <div
        v-for="(item, idx) in faq"
        :key="idx"
        class="faq-item glass-panel"
        :class="{ 'is-open': activeIndex === idx }"
        @click="toggle(idx)"
      >
        <div class="question">
          <span>{{ item.q }}</span>
          <Icon
            name="lucide:plus"
            class="toggle-icon"
          />
        </div>

        <div class="answer-wrapper">
          <div class="answer-content">
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section { max-width: 800px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 2rem; }
.section-title { font-size: 2rem; font-weight: 800; color: var(--text-main); }

.faq-grid { display: flex; flex-direction: column; gap: 1rem; }

.faq-item {
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-item:hover {
  background: rgba(125, 125, 125, 0.08);
}

.question {
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: var(--text-main);
}

.toggle-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s;
  color: var(--text-muted);
}

.is-open .toggle-icon { transform: rotate(45deg); color: var(--text-main); }

.answer-wrapper {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0, 1, 0, 1);
}

.is-open .answer-wrapper {
  max-height: 200px; /* Достаточно для текста */
  transition: max-height 0.4s ease-out;
}

.answer-content {
  padding: 0 1.25rem 1.25rem;
}

.answer-content p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>
