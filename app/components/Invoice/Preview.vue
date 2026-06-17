<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  data: any
}>()

const totalAmount = computed(() => {
  return props.data.items.reduce((sum: number, item: any) => sum + (Number(item.amount) || 0), 0)
})

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
}
</script>

<template>
  <div class="a4-sheet-canvas">
    <div class="doc-header">
      <h1 class="doc-title">
        INVOICE
      </h1>
      <div class="meta-block">
        <p><strong>Invoice No:</strong> #{{ data.invoiceNo }}</p>
        <p><strong>Date:</strong> {{ data.date }}</p>
        <p><strong>Due Date:</strong> {{ data.dueDate }}</p>
      </div>
    </div>

    <div class="sides-grid">
      <div class="side-box">
        <h3>From (Contractor)</h3>
        <p class="company-name">
          IE Vahe Sargsyan
        </p>
        <p class="company-details">
          Reg No: 286.1571600 | TIN: 20218056
        </p>
        <p class="company-details">
          28 I. Hakobyan st., Vosketap, Ararat reg., 0617, Armenia
        </p>
        <p class="company-details">
          w33bv.gl@gmail.com
        </p>
      </div>

      <div class="side-box">
        <h3>To (Client)</h3>
        <p class="company-name">
          {{ data.client.name || '—' }}
        </p>
        <p class="company-address">
          {{ data.client.address || '—' }}
        </p>
        <p class="company-details">
          {{ data.client.email || '—' }}
        </p>
      </div>
    </div>

    <table class="items-table">
      <thead>
        <tr>
          <th>Description of Services</th>
          <th class="text-right">
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in data.items"
          :key="index"
        >
          <td class="desc-cell">
            {{ item.description || '—' }}
          </td>
          <td class="text-right val-cell">
            {{ formatCurrency(item.amount) }}
          </td>
        </tr>
        <tr class="summary-row">
          <td class="sum-label">
            Total Due:
          </td>
          <td class="text-right sum-value">
            {{ formatCurrency(totalAmount) }} USD
          </td>
        </tr>
      </tbody>
    </table>

    <div class="crypto-details-card">
      <h3>Cryptocurrency Payment Details</h3>
      <div class="crypto-lines">
        <p><span class="label-bold">Network:</span> {{ data.crypto.network }}</p>
        <p><span class="label-bold">Wallet Address:</span> <span class="wallet-string">{{ data.crypto.wallet }}</span></p>
      </div>
      <p class="crypto-disclaimer">
        * The payment amount in {{ data.crypto.network.split(' ')[0] || 'USDT' }} must exactly match the USD total stated above at the moment of transfer.
      </p>
    </div>

    <div class="signature-area">
      <p>Authorized Signature:</p>
      <div class="sig-line" />
      <p class="sig-author">
        IE Vahe Sargsyan
      </p>
    </div>

    <footer class="sheet-footer">
      Thank you for your business!
    </footer>
  </div>
</template>

<style scoped>
.a4-sheet-canvas {
  background: #ffffff;
  width: 210mm;
  min-height: 297mm;
  padding: 20mm;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  color: #111827;
  display: flex;
  flex-direction: column;
}

.doc-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 2px solid #f4f4f5;
  padding-bottom: 20px;
  margin-bottom: 32px;
}

.doc-title {
  font-size: 34px;
  font-weight: 800;
  letter-spacing: -1px;
  margin: 0;
  color: #0f172a;
}

.meta-block {
  text-align: right;
  font-size: 13px;
  color: #4b5563;
  line-height: 1.6;
}

.meta-block strong {
  color: #0f172a;
}

.sides-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.side-box h3 {
  font-size: 11px;
  font-weight: 700;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 10px 0;
}

.company-name {
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 4px 0;
}

.company-details {
  font-size: 13px;
  color: #374151;
  margin: 2px 0;
  line-height: 1.5;
}

.company-address {
  font-size: 13px;
  color: #374151;
  margin: 2px 0;
  line-height: 1.5;
  white-space: pre-line;
}

.items-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
}

.items-table th {
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  padding: 12px;
  font-size: 11px;
  font-weight: 700;
  color: #4b5563;
  text-transform: uppercase;
  text-align: left;
}

.items-table td {
  padding: 16px 12px;
  border-bottom: 1px solid #f3f4f6;
  font-size: 13px;
}

.text-right {
  text-align: right;
}

.val-cell {
  font-weight: 500;
}

.summary-row td {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  border-bottom: 2px solid #0f172a;
  background: #f9fafb;
  padding: 16px 12px;
}

.crypto-details-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 18px;
  margin-bottom: 40px;
  font-size: 13px;
}

.crypto-details-card h3 {
  margin: 0 0 10px 0;
  font-size: 12px;
  font-weight: 700;
  color: #0f172a;
  text-transform: uppercase;
}

.crypto-lines p {
  margin: 4px 0;
}

.label-bold {
  color: #64748b;
  font-weight: 600;
}

.wallet-string {
  font-family: monospace;
  word-break: break-all;
}

.crypto-disclaimer {
  margin: 10px 0 0 0;
  font-size: 11px;
  color: #64748b;
  font-style: italic;
}

.signature-area {
  margin-top: auto;
  padding-bottom: 20px;
}

.signature-area p {
  font-size: 13px;
  margin: 0;
}

.sig-line {
  border-bottom: 1px solid #333;
  width: 200px;
  height: 48px;
  margin-bottom: 6px;
}

.sig-author {
  color: #6b7280;
  font-size: 11px !important;
}

.sheet-footer {
  border-top: 1px solid #e5e7eb;
  padding-top: 16px;
  text-align: center;
  font-size: 11px;
  color: #9ca3af;
}

@media print {
  .a4-sheet-canvas {
    width: 100%;
    min-height: auto;
    padding: 0;
    box-shadow: none;
  }
}
</style>
