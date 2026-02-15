<template>
  <div class="card-content">
    <slot />
  </div>
</template>

<style scoped>
.card-content {
  padding: 0 1.75rem 1.75rem 1.75rem;
  margin-top: 0.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--text-muted);
}

@media (max-width: 640px) {
  .card-content { padding: 0 1.5rem 1.5rem 1.5rem; }
}
</style>
