<script setup lang="ts">
definePageMeta({ layout: 'invoice' })

const now = useNow()
const toISODate = (ms: number) => new Date(ms).toISOString().split('T')[0]

const invoiceData = reactive({
  invoiceNo: '2026-001',
  date: toISODate(now.value),
  dueDate: toISODate(now.value + 14 * 24 * 60 * 60 * 1000),
  client: {
    name: 'Tech Solutions LLC',
    address: '500 Innovation Way,\nBoston, MA, USA',
    email: 'finance@techsolutions.com'
  },
  items: [
    { description: 'Software Development Services (May 2026)', amount: 3500.00 }
  ],
  crypto: {
    network: 'USDT (TRC-20)',
    wallet: 'TYxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  }
})
</script>

<template>
  <NuxtLayout name="invoice">
    <template #left>
      <InvoiceFormLeft :data="invoiceData" />
    </template>

    <InvoicePreview :data="invoiceData" />

    <template #right>
      <InvoiceFormRight :data="invoiceData" />
    </template>
  </NuxtLayout>
</template>
