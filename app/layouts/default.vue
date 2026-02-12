<template>
  <div class="app-root">
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
  background-color: var(--bg-body);
  min-height: 100vh;
}

.layout-container {
  width: 100%;
  max-width: var(--container-width);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);

  transition: border-color 0.3s ease;
  background-color: var(--bg-body);

  overflow-x: hidden;
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

  .content-area {
    padding-bottom: 10rem;
  }
}
</style>
