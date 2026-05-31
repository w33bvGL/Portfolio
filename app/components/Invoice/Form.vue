<script setup lang="ts">
const props = defineProps<{
  data: any
}>()
</script>

<template>
  <div class="space-y-4">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Номер</label>
        <input v-model="data.invoiceNo" type="text" class="w-full text-sm border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900" />
      </div>
      <div>
        <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Дата</label>
        <input v-model="data.date" type="date" class="w-full text-sm border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900" />
      </div>
    </div>

    <div class="border-t border-gray-100 pt-4">
      <h3 class="text-xs font-bold text-gray-900 uppercase mb-3">Клиент</h3>
      <div class="space-y-3">
        <input v-model="data.client.name" placeholder="Название компании" type="text" class="w-full text-sm border-gray-300 rounded-md shadow-sm" />
        <input v-model="data.client.address" placeholder="Адрес" type="text" class="w-full text-sm border-gray-300 rounded-md shadow-sm" />
        <input v-model="data.client.email" placeholder="Email" type="email" class="w-full text-sm border-gray-300 rounded-md shadow-sm" />
      </div>
    </div>

    <div class="border-t border-gray-100 pt-4">
      <h3 class="text-xs font-bold text-gray-900 uppercase mb-3">Услуги</h3>
      <div v-for="(item, index) in data.items" :key="index" class="space-y-2 mb-4 p-3 bg-gray-50 rounded border border-gray-100">
        <input v-model="item.description" placeholder="Описание" type="text" class="w-full text-sm border-gray-300 rounded-md shadow-sm" />
        <div class="flex items-center gap-2">
          <span class="text-sm font-bold">$</span>
          <input v-model.number="item.amount" type="number" class="w-full text-sm border-gray-300 rounded-md shadow-sm" />
        </div>
      </div>
    </div>

    <div class="border-t border-gray-100 pt-4">
      <h3 class="text-xs font-bold text-gray-900 uppercase mb-3">Крипта</h3>
      <div class="space-y-3">
        <input v-model="data.crypto.network" placeholder="Сеть" type="text" class="w-full text-sm border-gray-300 rounded-md shadow-sm" />
        <input v-model="data.crypto.wallet" placeholder="Кошелек" type="text" class="w-full text-sm border-gray-300 rounded-md shadow-sm font-mono text-xs" />
      </div>
    </div>
  </div>
</template>
