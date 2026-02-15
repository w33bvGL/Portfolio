<template>
  <div class="card-header">
    <slot />
  </div>
</template>

<style scoped>
.card-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.75rem 1.75rem 0.5rem 1.75rem;
}

@media (max-width: 640px) {
  .card-header { padding: 1.5rem 1.5rem 0.5rem 1.5rem; }
}
</style>
