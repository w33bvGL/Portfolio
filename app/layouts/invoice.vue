<template>
  <div class="invoice-layout-wrapper">
    <aside class="layout-sidebar left-bar">
      <slot name="left" />
    </aside>

    <main class="layout-center-stage">
      <slot />
    </main>

    <aside class="layout-sidebar right-bar">
      <slot name="right" />
    </aside>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f1f3f5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.invoice-layout-wrapper {
  display: grid;
  grid-template-columns: 340px 1fr 340px;
  height: 100vh;
  overflow: hidden;
}

.layout-sidebar {
  background-color: #ffffff;
  border-right: 1px solid #e2e8f0;
  padding: 24px;
  box-sizing: border-box;
  overflow-y: auto;
  height: 100vh;
}

.right-bar {
  border-right: none;
  border-left: 1px solid #e2e8f0;
}

.layout-center-stage {
  padding: 40px;
  overflow-y: auto;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

/* Стили для печати: гасим боковые панели, растягиваем центр */
@media print {
  .invoice-layout-wrapper {
    display: block;
    height: auto;
    background: #fff;
  }
  .layout-sidebar {
    display: none !important;
  }
  .layout-center-stage {
    padding: 0 !important;
    overflow: visible !important;
    height: auto !important;
    display: block;
  }
}
</style>
