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
  background-color: #afacac;
  overflow-y: auto;
}

.resume-page {
  background-color: white;
  width: 210mm;
  height: 297mm;
  color: #000000 ;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
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
