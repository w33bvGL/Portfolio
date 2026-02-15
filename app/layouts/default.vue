<template>
  <div class="app-root">
    <Background />

    <div class="layout-container">
      <AppHeader />

      <main class="content-area">
        <slot />
      </main>

      <AppFooter />
    </div>
  </div>
</template>

<style scoped>
.app-root {
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  position: relative;
}

.layout-container {
  width: 100%;
  max-width: var(--container-width);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  background-color: var(--bg-body);
}

.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 8rem;
}

@media (max-width: 640px) {
  .layout-container {
    border: none;
  }
}
</style>
