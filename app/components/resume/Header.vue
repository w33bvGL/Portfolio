<script setup lang="ts">
const { global } = useAppConfig()
const { t } = useI18n()
</script>

<template>
  <header class="resume-header">
    <div class="header-left">
      <h1 class="name">{{ t('resume.name') }} {{ t('resume.surname') }}</h1>
      <h2 class="position">
        {{ t('resume.position') }}
        <span class="stack-badge">{{ t('resume.stack') }}</span>
      </h2>
      <p class="summary">{{ $t('about.intro') }}</p>
    </div>

    <div class="header-right">
      <ul class="contacts-list">
        <li>
          <span class="label">Email:</span>
          <a :href="`mailto:${global.email}`" class="value">{{ global.email }}</a>
        </li>
        <li>
          <span class="label">Phone:</span>
          <a :href="`tel:${global.phone.replace(/\D/g, '')}`" class="value">{{ global.phone }}</a>
        </li>
        <li>
          <span class="label">Telegram:</span>
          <a :href="global.telegram" target="_blank" class="value">{{ global.telegram }}</a>
        </li>
        <li>
          <span class="label">Web:</span>
          <a href="https://vahe.anidzen.com" target="_blank" class="value">vahe.anidzen.com</a>
        </li>
        <li class="location">
          <span class="label">Loc:</span>
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
  border-bottom: 2px solid #111;
  padding-bottom: 1rem;
  margin-bottom: 1.25rem;
  gap: 2rem;
}

.header-left { flex: 1; }

.name {
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: 0.25rem;
}

.position {
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.stack-badge {
  font-size: 0.7rem;
  background: #f3f4f6;
  padding: 1px 6px;
  border-radius: 4px;
  color: #4b5563;
  font-weight: 500;
}

.summary {
  font-size: 0.8rem;
  line-height: 1.3;
  color: #4b5563;
  text-align: justify;
}

.header-right {
  min-width: 170px;
  text-align: right;
}

.contacts-list {
  list-style: none;
  font-size: 0.75rem;
  line-height: 1.5;
}

.contacts-list li {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.contacts-list .label {
  color: #9ca3af;
  font-weight: 500;
}

.contacts-list .value {
  color: #111;
  font-weight: 600;
  text-decoration: none;
}
</style>
