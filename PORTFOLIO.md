# Гайдлайн: как писать профессиональные тексты для резюме и портфолио

> Senior-way. Без воды, по делу, с измеримым результатом.
> Пояснения — на русском, примеры текста — на английском (стандарт для tech/senior-ролей).

---

## 0. Базовый принцип

Рекрутер тратит на резюме **6–8 секунд**, на страницу кейса в портфолио — около **3 минут**. Он не читает, он **сканирует**. Поэтому каждая строчка должна за долю секунды отвечать на один вопрос:

> **«И что? Какой от этого был результат?»**

Правило, которое отсекает 90% слабого текста:

- ❌ **Обязанности** (что тебе поручили делать) → `Responsible for…`, `Worked on…`, `Duties included…`
- ✅ **Достижения** (что ты изменил и с каким эффектом) → `Reduced…`, `Built…`, `Cut…by 40%`

Если из строки убрать имя компании и она подойдёт любому на этой должности — это обязанность, переписывай.

---

## 1. Две формулы, на которых держится всё

### 1.1. Формула XYZ (рекомендация рекрутеров Google)

> **Accomplished [X] as measured by [Y], by doing [Z]**
> Добился [X], что измеряется через [Y], сделав [Z].

- **X** — результат / impact (с сильного глагола)
- **Y** — число: %, время, размер, объём, деньги
- **Z** — как именно: технология / подход

Порядок можно менять — если метрика сильная, веди с неё.

**Примеры (frontend):**

```
Cut initial bundle size by 38% (from 410 KB to 254 KB) by code-splitting routes
and lazy-loading the Astir UI components.

Improved Lighthouse performance from 61 to 94 by replacing render-blocking fonts
with `font-display: swap` and preloading critical assets.

Reduced component-related bug reports by ~50% by building a typed, token-driven
design system with Storybook documentation as the single source of truth.
```

### 1.2. Метод STAR (когда нужно показать мышление: кейс, собес, cover letter)

- **S**ituation — контекст
- **T**ask — задача / проблема
- **A**ction — что ты сделал
- **R**esult — измеримый итог

В резюме обычно сворачивается до **A + R** (Action + Result). В кейсе портфолио раскрывается полностью.

---

## 2. Глаголы: с чего начинается каждый буллет

Каждый буллет начинается с **сильного глагола в прошедшем времени** (настоящее — только для текущей роли, но многие держат всё в прошедшем для единообразия). **Не повторяй один глагол дважды** в резюме.

**Запрещённый список (мёртвые формулировки):**
`Responsible for`, `Worked on`, `Helped with`, `Assisted`, `Duties included`, `Tasked with`, `Involved in`, `Participated in`.

**Сильные глаголы по категориям:**

| Категория | Глаголы |
|---|---|
| Создание / архитектура | Built, Architected, Designed, Engineered, Developed, Established, Implemented |
| Улучшение / оптимизация | Optimized, Reduced, Cut, Improved, Streamlined, Refactored, Migrated, Modernized |
| Лидерство / влияние | Led, Drove, Spearheaded, Mentored, Coordinated, Owned, Championed |
| Решение проблем | Resolved, Debugged, Diagnosed, Eliminated, Untangled |
| Запуск / результат | Shipped, Launched, Delivered, Released, Scaled |

> Не перебарщивай с «вау-глаголами» (`Spearheaded`, `Orchestrated`). Если за ними не стоит реальное число — звучит как пустой пафос. Сильный глагол + слабый результат = хуже, чем простой глагол + сильный результат.

---

## 3. Метрики: если кажется, что мерить нечего

Число не обязано быть процентом. Считается всё измеримое:

- **Производительность:** bundle size, LCP/FCP, Lighthouse score, время сборки, FPS, latency
- **Масштаб:** кол-во компонентов / страниц / пользователей / языков (i18n) / команд
- **Время:** «сократил онбординг разработчика с 2 дней до 3 часов», «релиз на 3 недели раньше»
- **Объём:** «12 переиспользуемых компонентов», «6 позиций тостера», «3 варианта карточки»
- **Качество:** падение числа багов, рост test coverage, снижение дублирования кода

Если точной цифры нет — используй **диапазон** («~40%», «20–30%»), **качественный сдвиг** («from days to hours») или **специфику в Z** (детально *как*). Конкретное «как» всегда сильнее, чем голое «делал».

---

## 4. Anti-water: что вырезать беспощадно

Это и есть «вода», которую просили убрать:

- **Пустые soft-прилагательные о себе:** `hard-working`, `team player`, `detail-oriented`, `passionate`, `motivated`, `results-driven`. Их пишут все → они не значат ничего. Заменяй на **доказательство** (число/факт), а не заявление.
- **Канцелярит и баззворды:** `synergy`, `leverage`, `utilize` (= use), `dynamic`, `go-getter`.
- **Очевидное:** `Used a computer`, `Communicated with team` — это не достижение.
- **Местоимения и артикли в буллетах:** `I developed` → `Developed`. Активный залог, без «I».
- **Длинные абзацы в опыте работы:** только буллеты, 1 строка каждый (макс 2).
- **Перечисление всех технологий, которые ты трогал:** оставь те, в которых реально силён и которые релевантны вакансии.

**Было → стало:**

```
❌ Responsible for working on the UI components and helping the team with the design system.
✅ Built a from-scratch UI kit (Modal, Toast, Card) with `useModal`/`useToast` composables,
   adopted across 3 product sites and documented in Storybook.

❌ Hard-working frontend developer passionate about clean code and great user experiences.
✅ Frontend engineer specializing in Vue 3 / Nuxt 3 design systems; shipped a typed,
   token-driven component library used across multiple production sites.
```

---

## 5. Структура резюме по секциям

### 5.1. Summary (3–4 строки, опционально)
Не «objective» в стиле «ищу позицию, где смогу расти». А **позиционирование**: кто ты + специализация + 1–2 самых сильных факта.

```
Frontend engineer with N years building production Vue 3 / Nuxt 3 applications.
Specialize in design systems and performance — shipped a dependency-free UI kit
and cut load times by ~40% on high-traffic gaming sites.
```

### 5.2. Experience (ядро резюме)
- Reverse-chronological (новое сверху).
- На каждую роль: 3–6 буллетов по формуле XYZ.
- Веди с самого сильного достижения, не с самого старого.
- Глаголы не повторяются.

### 5.3. Projects (особенно важно для фронтенда и если опыта мало)
Тот же принцип. Pet-проекты и self-initiated работа — это валидный proof, если показываешь измеримый результат и ссылку (live + repo).

### 5.4. Skills
- Группируй: `Core`, `Frameworks`, `Tooling`, `Practices`.
- Не пиши уровни в духе «expert/intermediate» без причины — это субъективно. Лучше показать уровень через проекты.

### 5.5. Формат файла
- **PDF** для отправки человеку (стабильная вёрстка). Но если вакансия идёт через ATS — проверь, что текст селектится и парсится (не картинка).
- 1 страница для junior/mid; 2 страницы допустимы для senior с большим релевантным опытом.
- Один шрифт, консистентные отступы, без графики, которая ломает ATS.

---

## 6. Тексты для сайта-портфолио

### 6.1. Главная (Hero) — понятно за 3 секунды
Одна строка, кто ты и в чём силён. Без «Welcome to my portfolio».

```
Frontend engineer building fast, design-system-driven Vue 3 / Nuxt 3 interfaces.
```

### 6.2. Отбор проектов: range, не volume
**4–6 сильных кейсов** > 15 средних. Рекрутер судит тебя по **худшей** работе в портфолио — слабые проекты убирай. Показывай разные «мышцы»: design system, перф, сложная фича, архитектура.

### 6.3. Структура кейса (case study)
Каждый кейс строится по триаде **Problem → Process → Outcome** (это тот же STAR, развёрнутый):

1. **Context / Role** — что за продукт, твоя роль, стек, что было до тебя.
2. **Problem** — какую конкретную проблему решал (бизнес или техническую).
3. **Process** — как думал и что сделал: ключевые решения, тех. развилки, *почему* так. Здесь и видно senior-уровень — не «что», а «почему именно так».
4. **Outcome** — результат с цифрами + скриншоты/демо **в контексте** (не голые ссылки).
5. **CTA** — в конце призыв связаться.

> Правило: **trust the work, don't over-explain.** Кейс должен быть плотным. Длинные простыни никто не читает.

### 6.4. About / Bio — самая недооценённая страница
Не вакуумное «I'm a passionate developer». Структура:
- кто ты профессионально + специализация (1 предложение),
- чем именно занимаешься и что любишь в инженерии (конкретика: «design systems from scratch, no third-party UI deps»),
- 1 человеческая деталь (необязательно, но добавляет живости),
- контакт.

Тон — профессиональный, но не роботизированный. Пиши как живой человек, а не как набор ключевых слов.

### 6.5. Общие правила копирайта на сайте
- Скриншоты/демо вместо текстовых описаний результата — **показывай, а не рассказывай**.
- Чистая типографика, читаемые блоки, воздух.
- Указывай со-авторов (дизайнер, бэкендер), если работал не один — это про честность и зрелость.
- Обновляй портфолио раз в несколько месяцев. Старый стек = плохой сигнал.

---

## 7. Тон голоса (voice) для senior-уровня

- **Уверенно, но без бахвальства.** Факты и числа говорят за тебя — не нужны прилагательные-усилители.
- **Ownership.** `Led`, `Owned`, `Drove` — но только там, где это правда.
- **Конкретика > абстракция.** «Improved performance» — слабо. «Cut LCP from 3.1s to 1.4s» — сильно.
- **Активный залог.** `Migrated the i18n layer`, не `the i18n layer was migrated`.
- **Консистентность.** Одно время глаголов, один стиль пунктуации в буллетах (либо везде точка, либо нигде).

---

## 8. Финальный чек-лист (прогони каждый текст)

- [ ] Каждый буллет начинается с сильного глагола (не `Responsible for`)?
- [ ] В каждом ключевом буллете есть число / измеримый результат?
- [ ] Глаголы не повторяются?
- [ ] Нет пустых прилагательных о себе (`hard-working`, `passionate`)?
- [ ] Нет баззвордов и канцелярита (`leverage`, `synergy`, `utilize`)?
- [ ] Активный залог, без `I` в начале буллетов?
- [ ] Это достижение, а не описание обязанности? (тест: «и что?»)
- [ ] Текст можно понять за секунды при сканировании?
- [ ] Стек и формулировки совпадают с языком целевой вакансии (ATS keywords)?
- [ ] Ноль опечаток? (перечитай вслух / прогони через проверку)
- [ ] В портфолио: 4–6 кейсов, каждый по схеме Problem → Process → Outcome?
- [ ] Убраны слабые проекты, которые тянут восприятие вниз?

---

## 9. Мини-шпаргалка «было → стало»

```
❌ Worked on the i18n system.
✅ Migrated the i18n layer from @nuxtjs/i18n to nuxt-i18n-micro across 4 sites,
   resolving API incompatibilities in composables and shipping zero-downtime.

❌ Made a notification component.
✅ Built a Toast/Toaster system with a reactive store, 6 positions, 3 variants,
   swipe-to-dismiss and a promise helper — exposed as a single composable API.

❌ Helped improve the card component.
✅ Re-engineered the Card component with auto-computed accent-color stepping and
   configurable corner symbols, unifying shadow architecture across all variants.

❌ Built homepage.
✅ Designed and shipped the MMORPG homepage (server status, top players, features)
   on a shared BaseCard architecture, reused across 8+ sections.
```

---

*Принцип одной строкой: показывай impact с числом, начинай с глагола, режь воду, доверяй работе.*
