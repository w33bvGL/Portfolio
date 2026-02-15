<script setup lang="ts">
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

  </div>
</template>

<style scoped>
.resume-content {
  padding: 10mm 12mm;
  height: 100%;
  display: flex;
  flex-direction: column;

}

.resume-body {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  flex: 1;
}

@media print {
  a { text-decoration: none; color: inherit; }
}
</style>
