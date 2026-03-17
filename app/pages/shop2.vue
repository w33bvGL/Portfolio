<script setup lang="ts">
import type { TranslatedShopItems, ShopItem } from '~/types/shop'

const locale = useI18n().locale.value
const img = useImage()
const { t } = useI18n()

const { data: shopItemsByLang } = await useFetch<TranslatedShopItems>('/api/shop')

const shopItems = computed<ShopItem[]>(() => {
  if (!shopItemsByLang.value) return []
  if (locale in shopItemsByLang.value) {
    return shopItemsByLang.value[locale as keyof TranslatedShopItems]
  }
  return []
})

const title = t('shop.title')
const description = t('shop.description')

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,

  twitterTitle: title,
  twitterDescription: description
})
</script>

<template>
<!--  <UPage> -->
<!--    <UiHeading -->
<!--      :title="$t('shop.title')" -->
<!--      :description="$t('shop.description')" -->
<!--      class="mb-4" -->
<!--    /> -->

<!--    <section class="grid gap-4"> -->
<!--      <UCard -->
<!--        v-for="project in shopItems" -->
<!--        :key="project.name" -->
<!--        variant="subtle" -->
<!--        class="group hover:bg-elevated/70 hover:ring-primary transition-all flex flex-col h-full" -->
<!--      > -->
<!--        <div class="flex gap-4 flex-col md:flex-row relative overflow-hidden"> -->
<!--          <div -->
<!--            v-if="project.discount" -->
<!--            class="px-10 text-center absolute py-1 bg-error -rotate-50 -left-10 top-7 text-xs" -->
<!--          > -->
<!--            {{ $t('shop.discount') }} / {{ project.discount }}% -->
<!--          </div> -->
<!--          <div class="w-full md:w-1/3 aspect-video border border-muted rounded-lg bg-muted/80 overflow-hidden"> -->
<!--            <NuxtImg -->
<!--              :src="project.image" -->
<!--              width="270" -->
<!--              :alt="project.name" -->
<!--              format="webp" -->
<!--              class="w-full h-full object-cover aspect-video pointer-events-none select-none" -->
<!--              :placeholder="img(project.image, createPlaceholder(270, 170))" -->
<!--            /> -->
<!--          </div> -->
<!--          <div class="w-full md:w-1/2 flex justify-center flex-col"> -->
<!--            <h3 class="text-xl font-semibold mb-1"> -->
<!--              {{ project.name }} -->
<!--            </h3> -->
<!--            <p class="text-muted text-sm line-clamp-3"> -->
<!--              {{ project.description }} -->
<!--            </p> -->
<!--            <div class="flex items-center gap-3 mt-3"> -->
<!--              <div> -->
<!--                <span -->
<!--                  v-if="project.price === 0" -->
<!--                  class="text-success font-semibold" -->
<!--                >{{ t('shop.free') }}</span> -->
<!--                <span -->
<!--                  v-else -->
<!--                  class="font-semibold" -->
<!--                > -->
<!--                  <span v-if="project.discount"> $ {{ (project.price * (1 - project.discount / 100)).toFixed(1) }} / -->
<!--                    <span class="text-xs text-muted italic underline">$ {{ project.price }}</span> -->
<!--                  </span> -->
<!--                  <span v-else>$ {{ project.price }}</span> -->
<!--                </span> -->
<!--              </div> -->
<!--              <UButton -->
<!--                v-if="project.url" -->
<!--                :href="project.url" -->
<!--                target="_blank" -->
<!--                icon="i-lucide-link" -->
<!--              > -->
<!--                {{ t('shop.watch') }} -->
<!--              </UButton> -->

<!--              <UButton -->
<!--                v-if="project.github" -->
<!--                :href="project.github" -->
<!--                target="_blank" -->
<!--                icon="i-simple-icons-github" -->
<!--                variant="subtle" -->
<!--              /> -->

<!--              &lt;!&ndash;            <UButton &ndash;&gt; -->
<!--              &lt;!&ndash;              v-if="project.repository" &ndash;&gt; -->
<!--              &lt;!&ndash;              :href="project.repository" &ndash;&gt; -->
<!--              &lt;!&ndash;              target="_blank" &ndash;&gt; -->
<!--              &lt;!&ndash;              icon="i-simple-icons-github" &ndash;&gt; -->
<!--              &lt;!&ndash;              color="neutral" &ndash;&gt; -->
<!--              &lt;!&ndash;            > &ndash;&gt; -->
<!--              &lt;!&ndash;              {{ t('shop.download') }} &ndash;&gt; -->
<!--              &lt;!&ndash;            </UButton> &ndash;&gt; -->
<!--            </div> -->
<!--          </div> -->
<!--        </div> -->
<!--      </UCard> -->
<!--    </section> -->
<!--  </UPage> -->
</template>
