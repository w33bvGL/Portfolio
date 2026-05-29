<script setup lang="ts">
</script>

<template>
  <UiLayoutContainer class="cta-section">
    <UiCard class="scroll-animate-reveal">
      <UiCardHeader>
        <UiLayoutFlex
          col
          align="center"
        >
          <UiCardTitle>
            {{ $t('index.the_connect.title') }}
          </UiCardTitle>
          <UiCardDescription align="center">
            {{ $t('index.the_connect.description') }}
          </UiCardDescription>
        </UiLayoutFlex>
      </UiCardHeader>
      <UiCardContent>
        <UiLayoutCenter>
          <UiButton
            href="https://t.me/w33bvGL"
            target="_blank"
            variant="primary"
            icon="simple-icons-telegram"
          >
            {{ $t('index.the_connect.contact_telegram') }}
          </UiButton>
        </UiLayoutCenter>
      </UiCardContent>
    </UiCard>
  </UiLayoutContainer>
</template>
