<template>
  <div class="relative">
    <UContainer class="sm:border-x border-default max-w-4xl relative min-h-screen flex flex-col justify-between bg-elevated/10">
      <AppHeader />
      <div class="py-10 flex-1">
        <slot />
      </div>
      <AppFooter />
    </UContainer>
  </div>
</template>
