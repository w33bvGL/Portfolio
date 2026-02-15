<template>
  <div class="card-footer">
    <slot />
  </div>
</template>

<style scoped>
.card-footer {
  display: flex;
  align-items: center;
  padding: 0 1.75rem 1.75rem 1.75rem;
  margin-top: auto;
}

@media (max-width: 640px) {
  .card-footer { padding: 0 1.5rem 1.5rem 1.5rem; }
}
</style>
