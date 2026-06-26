<script setup lang="ts">
const { global } = useAppConfig()
const { t } = useI18n()
</script>

<template>
  <header class="resume-header">
    <div class="header-left">
      <div class="name-row">
        <span class="accent-bar" />
        <div class="name-block">
          <h1 class="name">
            {{ t('resume.name') }} {{ t('resume.surname') }}
          </h1>
          <h2 class="position">
            {{ t('resume.position') }}
          </h2>
        </div>
      </div>
      <p class="summary">
        {{ $t('about.description') }}
      </p>
    </div>

    <div class="header-right">
      <ul class="contacts-list">
        <li>
          <span class="label">Email</span>
          <a
            :href="`mailto:${global.email}`"
            class="value"
          >{{ global.email }}</a>
        </li>
        <li>
          <span class="label">Telegram</span>
          <a
            :href="`https://t.me/${global.telegram}`"
            target="_blank"
            class="value"
          >{{ global.telegram }}</a>
        </li>
        <li>
          <span class="label">Web</span>
          <a
            href="https://vahe-sargsyan.com"
            target="_blank"
            class="value"
          >vahe-sargsyan.com</a>
        </li>
        <li class="location">
          <span class="label">Location</span>
          <span class="value">{{ global.location }}</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid var(--r-line);
  padding-bottom: 1.1rem;
  gap: 2.5rem;
}

.header-left {
  flex: 1;
  min-width: 0;
}

.name-row {
  display: flex;
  align-items: stretch;
  gap: 0.7rem;
  margin-bottom: 0.65rem;
}

.accent-bar {
  width: 4px;
  border-radius: 2px;
  background: var(--r-accent);
  flex-shrink: 0;
}

.name {
  font-size: 2.05rem;
  font-weight: 800;
  line-height: 0.95;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  color: var(--r-ink);
}

.position {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--r-muted);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.3rem;
}

.summary {
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--r-muted);
  max-width: 62ch;
}

.header-right {
  min-width: 178px;
  flex-shrink: 0;
  text-align: right;
}

.contacts-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.contacts-list li {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.2;
}

.contacts-list .label {
  font-size: 0.55rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--r-faint);
  margin-bottom: 1px;
}

.contacts-list .value {
  font-size: 0.76rem;
  color: var(--r-ink);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.15s ease;
}

.contacts-list a.value:hover {
  color: var(--r-accent);
}
</style>
