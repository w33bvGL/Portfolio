<template>
  <p class="card-description">
    <slot />
  </p>
</template>

<style scoped>
.card-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}
</style>
