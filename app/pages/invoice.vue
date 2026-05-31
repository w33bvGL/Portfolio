<script setup lang="ts">
definePageMeta({ layout: 'invoice' })

const invoiceData = reactive({
  invoiceNo: '2026-001',
  date: new Date().toISOString().split('T')[0],
  dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
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
