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
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
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
  background-color: var(--bg-body);
  transition: border-color 0.3s ease;
}

.content-area {
  flex: 1;
  padding: 2.5rem 1.5rem;
}

@media (max-width: 640px) {
  .layout-container {
    border-left: none;
    border-right: none;
  }
  .content-area {
    padding: 1.5rem 1rem;
  }
}
</style>
