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
  <div class="a4-document-sheet">
    <div class="invoice-header">
      <h1 class="invoice-title">INVOICE</h1>
      <div class="invoice-meta">
        <p><strong>Invoice No:</strong> #{{ data.invoiceNo }}</p>
        <p><strong>Date:</strong> {{ data.date }}</p>
        <p><strong>Due Date:</strong> {{ data.dueDate }}</p>
      </div>
    </div>

    <div class="parties-grid">
      <div class="party-block">
        <h3>From (Contractor)</h3>
        <p class="party-name">IE Vahe Sargsyan</p>
        <p class="party-sub">Reg No: 286.1571600 | TIN: 20218056</p>
        <p class="party-sub">28 I. Hakobyan st., Vosketap, Ararat reg., 0617, Armenia</p>
        <p class="party-sub">w33bv.gl@gmail.com</p>
      </div>

      <div class="party-block">
        <h3>To (Client)</h3>
        <p class="party-name" v-p-text="data.client.name">{{ data.client.name || '—' }}</p>
        <p class="party-address">{{ data.client.address || '—' }}</p>
        <p class="party-sub">{{ data.client.email || '—' }}</p>
      </div>
    </div>

    <table class="services-table">
      <thead>
      <tr>
        <th>Description of Services</th>
        <th class="text-right">Amount</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in data.items" :key="index">
        <td class="desc-cell">{{ item.description || 'No description' }}</td>
        <td class="text-right amount-cell">{{ formatCurrency(item.amount) }}</td>
      </tr>
      <tr class="total-row">
        <td class="total-label">Total Due:</td>
        <td class="text-right total-value">{{ formatCurrency(totalAmount) }} USD</td>
      </tr>
      </tbody>
    </table>

    <div class="crypto-payment-box">
      <h3>Cryptocurrency Payment Details</h3>
      <div class="crypto-values">
        <p><span class="bold-lbl">Network:</span> {{ data.crypto.network }}</p>
        <p><span class="bold-lbl">Wallet Address:</span> <span class="mono-address">{{ data.crypto.wallet }}</span></p>
      </div>
      <p class="crypto-warning">
        * The payment amount in {{ data.crypto.network.split(' ')[0] }} must exactly match the USD total stated above at the moment of transfer.
      </p>
    </div>

    <div class="signature-block">
      <p>Authorized Signature:</p>
      <div class="signature-line"></div>
      <p class="signature-name">IE Vahe Sargsyan</p>
    </div>

    <footer class="document-footer">
      Thank you for your business!
    </footer>
  </div>
</template>

<style scoped>
.a4-document-sheet {
  background: #ffffff;
  width: 210mm;
  min-height: 297mm;
  padding: 20mm;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
}

.invoice-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 2px solid #edf2f7;
  padding-bottom: 24px;
  margin-bottom: 36px;
}

.invoice-title {
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -1.5px;
  margin: 0;
  color: #0f172a;
}

.invoice-meta {
  text-align: right;
  font-size: 13px;
  color: #4a5568;
  line-height: 1.6;
}

.invoice-meta strong {
  color: #0f172a;
}

.parties-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-bottom: 40px;
}

.party-block h3 {
  font-size: 11px;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 12px 0;
}

.party-name {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 6px 0;
}

.party-sub {
  font-size: 13px;
  color: #475569;
  margin: 2px 0;
  line-height: 1.5;
}

.party-address {
  font-size: 13px;
  color: #475569;
  margin: 2px 0;
  line-height: 1.5;
  white-space: pre-line;
}

.services-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
}

.services-table th {
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  padding: 12px 16px;
  font-size: 11px;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: left;
}

.services-table td {
  padding: 16px;
  border-bottom: 1px solid #f1f5f9;
  font-size: 14px;
}

.text-right {
  text-align: right !important;
}

.amount-cell {
  font-weight: 500;
}

.total-row td {
  background: #f8fafc;
  border-bottom: 2px solid #0f172a;
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  padding: 18px 16px;
}

.crypto-payment-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 40px;
}

.crypto-payment-box h3 {
  margin: 0 0 12px 0;
  font-size: 13px;
  font-weight: 700;
  color: #0f172a;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.crypto-values {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #334155;
}

.crypto-values p {
  margin: 6px 0;
}

.bold-lbl {
  font-family: sans-serif;
  font-weight: 600;
  color: #64748b;
}

.mono-address {
  word-break: break-all;
}

.crypto-warning {
  margin: 8px 0 0 0;
  font-size: 11px;
  color: #64748b;
  font-style: italic;
}

.signature-block {
  margin-top: auto;
  padding-bottom: 20px;
}

.signature-block p {
  font-size: 13px;
  color: #475569;
  margin: 0;
}

.signature-line {
  border-bottom: 1px solid #94a3b8;
  width: 220px;
  margin-top: 50px;
  margin-bottom: 8px;
}

.signature-name {
  font-size: 12px;
  font-weight: 600;
  color: #0f172a;
}

.document-footer {
  border-top: 1px solid #e2e8f0;
  padding-top: 16px;
  text-align: center;
  font-size: 12px;
  color: #94a3b8;
}

/* Для вывода на печать сбрасываем тени страницы */
@media print {
  .a4-document-sheet {
    width: 100%;
    min-height: auto;
    padding: 0;
    box-shadow: none;
  }
}
</style>
