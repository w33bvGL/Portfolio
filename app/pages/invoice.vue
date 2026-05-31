<script setup lang="ts">
import { reactive } from 'vue'

// Жестко инициализируем твои валидные бизнес-данные из реестра Армении
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
    { description: 'Software Development & IT Consulting Services', amount: 3500.00 }
  ],
  crypto: {
    network: 'USDT (TRC-20)',
    wallet: 'TYourWalletAddressHere...'
  }
})

const addItem = () => {
  invoiceData.items.push({ description: '', amount: 0 })
}

const removeItem = (index: number) => {
  if (invoiceData.items.length > 1) {
    invoiceData.items.splice(index, 1)
  }
}

const triggerPrint = () => {
  window.print()
}
</script>

<template>
  <NuxtLayout name="invoice">
    <template #left>
      <div class="control-panel">
        <h2 class="panel-title">Параметры</h2>

        <div class="input-field">
          <label>Номер документа</label>
          <input v-model="invoiceData.invoiceNo" type="text" />
        </div>

        <div class="input-field">
          <label>Дата выставления</label>
          <input v-model="invoiceData.date" type="date" />
        </div>

        <div class="input-field">
          <label>Срок оплаты (Due Date)</label>
          <input v-model="invoiceData.dueDate" type="date" />
        </div>

        <div class="ui-divider"></div>

        <h2 class="panel-title">Данные клиента</h2>

        <div class="input-field">
          <label>Компания</label>
          <input v-model="invoiceData.client.name" type="text" placeholder="Client company name" />
        </div>

        <div class="input-field">
          <label>Адрес</label>
          <textarea v-model="invoiceData.client.address" rows="3" placeholder="Client physical address"></textarea>
        </div>

        <div class="input-field">
          <label>Email</label>
          <input v-model="invoiceData.client.email" type="email" placeholder="finance@client.com" />
        </div>
      </div>
    </template>

    <InvoicePreview :data="invoiceData" />

    <template #right>
      <div class="control-panel">
        <h2 class="panel-title">Услуги / Позиции</h2>

        <div v-for="(item, index) in invoiceData.items" :key="index" class="item-manager-card">
          <div class="input-field">
            <label>Описание работы</label>
            <input v-model="item.description" type="text" placeholder="Development services..." />
          </div>
          <div class="input-field">
            <label>Стоимость (USD)</label>
            <div class="currency-input-wrapper">
              <span class="currency-symbol">$</span>
              <input v-model.number="item.amount" type="number" />
            </div>
          </div>
          <button v-if="invoiceData.items.length > 1" @click="removeItem(index)" class="btn-delete-item">
            Удалить позицию
          </button>
        </div>

        <button @click="addItem" class="btn-add-item">
          + Добавить услугу
        </button>

        <div class="ui-divider"></div>

        <h2 class="panel-title">Реквизиты крипты</h2>

        <div class="input-field">
          <label>Сеть платежа</label>
          <input v-model="invoiceData.crypto.network" type="text" />
        </div>

        <div class="input-field">
          <label>Адрес кошелька</label>
          <input v-model="invoiceData.crypto.wallet" type="text" class="mono-input" />
        </div>

        <div class="ui-divider"></div>

        <button @click="triggerPrint" class="btn-primary-action">
          Экспорт в PDF / Печать
        </button>
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped>
.control-panel {
  display: flex;
  flex-direction: column;
}

.panel-title {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  color: #0f172a;
  letter-spacing: 0.5px;
  margin: 0 0 16px 0;
}

.input-field {
  margin-bottom: 14px;
}

.input-field label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  margin-bottom: 6px;
}

input[type="text"],
input[type="date"],
input[type="number"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px 12px;
  font-size: 13px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background-color: #fff;
  color: #1e293b;
  box-sizing: border-box;
  font-family: inherit;
}

input:focus, textarea:focus {
  border-color: #0f172a;
  outline: none;
}

textarea {
  resize: vertical;
}

.ui-divider {
  height: 1px;
  background-color: #e2e8f0;
  margin: 20px 0;
}

.item-manager-card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 12px;
}

.currency-input-wrapper {
  display: flex;
  align-items: center;
}

.currency-symbol {
  font-weight: bold;
  margin-right: 8px;
  color: #475569;
}

.mono-input {
  font-family: monospace;
  font-size: 12px !important;
}

.btn-add-item {
  width: 100%;
  background: none;
  border: 1px dashed #cbd5e1;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  color: #475569;
}

.btn-add-item:hover {
  background-color: #f8fafc;
  border-color: #94a3b8;
}

.btn-delete-item {
  background: none;
  border: none;
  color: #ef4444;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  margin-top: 4px;
}

.btn-primary-action {
  background-color: #0f172a;
  color: #ffffff;
  border: none;
  padding: 14px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background 0.15s ease;
}

.btn-primary-action:hover {
  background-color: #1e293b;
}
</style>
