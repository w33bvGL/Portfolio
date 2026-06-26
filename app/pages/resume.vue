<script setup lang="ts">
const { t } = useI18n()
const { global } = useAppConfig()

definePageMeta({ layout: 'resume' })
</script>

<template>
  <div class="resume-content">
    <ResumeHeader />

    <div class="resume-body">
      <div class="main-column">
        <ResumeExperience />
        <ResumeEducation />
      </div>

      <div class="sidebar-column">
        <ResumeSkills />
        <ResumeLanguages />
      </div>
    </div>

    <footer class="resume-footer">
      <span class="f-left">
        {{ t('resume.name') }} {{ t('resume.surname') }}
        <span class="f-dot" />
        {{ t('resume.position') }}
      </span>
      <span class="f-right">{{ global.location }} · vahe-sargsyan.com</span>
    </footer>
  </div>
</template>

<style scoped>
.resume-content {
  padding: 12mm 12mm 11mm;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.resume-body {
  display: grid;
  grid-template-columns: 1.9fr 1fr;
  gap: 2.1rem;
  margin-top: 1.4rem;
}

.main-column {
  min-width: 0;
}

.sidebar-column {
  min-width: 0;
  padding-left: 1.7rem;
  border-left: 1px solid var(--r-line);
}

.resume-footer {
  margin-top: auto;
  padding-top: 0.9rem;
  border-top: 1px solid var(--r-line);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.62rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--r-faint);
  font-weight: 600;
}

.f-left {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--r-muted);
}

.f-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--r-accent);
}

.f-right {
  font-family: var(--r-mono);
  text-transform: none;
  letter-spacing: 0;
}

@media print {
  a { text-decoration: none; color: inherit; }
}
</style>
