<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UFooter
    :ui="{ left: 'text-xs mt-0', container: 'px-0 md:px-0 lg:px-0 flex flex-row-reverse lg:flex-row w-full justify-between' }"
  >
    <template #left>
      <p class="text-primary">
        {{ footer.credits }}
      </p>
    </template>

    <template #right>
      <div
        v-if="footer?.links"
        class="flex items-center gap-1"
      >
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          class="hidden md:flex items-center"
          v-bind="{ size: 'xs', variant: 'soft', ...link }"
        />
      </div>

      <div>
        <CommonLanguageSwitcher />
      </div>
    </template>
  </UFooter>
</template>
