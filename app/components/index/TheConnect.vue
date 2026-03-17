<script setup lang="ts">
</script>

<template>
  <UiLayoutContainer class="cta-section">
    <UiCard>
      <UiCardHeader>
        <UiLayoutFlex col align="center">
          <UiCardTitle>
            {{ $t('projects.have_idea') }}
          </UiCardTitle>
          <UiCardDescription align="center">
            {{ $t('projects.what_i_offer') }}
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
              {{ $t('projects.contact_telegram') }}
            </UiButton>
          </UiLayoutCenter>
      </UiCardContent>
    </UiCard>
  </UiLayoutContainer>
</template>
