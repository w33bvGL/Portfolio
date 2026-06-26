<template>
  <div class="resume-viewer">
    <div
      id="resume-content"
      class="resume-page"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.resume-viewer {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 0;
  background-color: #2a2a32;
  overflow-y: auto;
}

.resume-page {
  /* Design tokens shared across resume sub-components */
  --r-ink: #18181b;
  --r-muted: #52525b;
  --r-faint: #9499a3;
  --r-line: #e6e7eb;
  --r-line-soft: #eef0f3;
  --r-accent: #4338ca;
  --r-accent-soft: #eef1ff;
  --r-panel: #fafafb;
  --r-mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace;

  background-color: white;
  width: 210mm;
  height: 297mm;
  color: var(--r-ink);
  font-family: 'Inter', 'Helvetica Neue', Arial, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
}

/* Accent hairline strip at the very top of the sheet */
.resume-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: var(--r-accent);
  z-index: 5;
}

@media print {
  .resume-viewer {
    display: block !important;
    padding: 0 !important;
    margin: 0 !important;
    background: white !important;
  }

  .resume-page {
    margin: 0 !important;
    box-shadow: none !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 210mm !important;
    height: 297mm !important;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  :deep(.nuxt-loading-indicator),
  :deep(#__nuxt_devtools__) {
    display: none !important;
  }
}
</style>
