<script setup lang="ts">
defineProps<{
  data: any
}>()
</script>

<template>
  <div class="sidebar-form">
    <h2 class="panel-title">
      Документ
    </h2>

    <div class="form-row-2">
      <div class="form-group">
        <label>Инвойс №</label>
        <input
          v-model="data.invoiceNo"
          type="text"
        >
      </div>
      <div class="form-group">
        <label>Дата</label>
        <input
          v-model="data.date"
          type="date"
        >
      </div>
    </div>

    <div class="form-group">
      <label>Срок оплаты</label>
      <input
        v-model="data.dueDate"
        type="date"
      >
    </div>

    <div class="form-divider" />

    <h2 class="panel-title">
      Данные клиента
    </h2>

    <div class="form-group">
      <label>Компания / Заказчик</label>
      <input
        v-model="data.client.name"
        type="text"
        placeholder="Tech Solutions LLC"
      >
    </div>

    <div class="form-group">
      <label>Юридический адрес</label>
      <textarea
        v-model="data.client.address"
        rows="3"
        placeholder="Адрес компании..."
      />
    </div>

    <div class="form-group">
      <label>Email для счетов</label>
      <input
        v-model="data.client.email"
        type="email"
        placeholder="finance@company.com"
      >
    </div>
  </div>
</template>

<style scoped>
.sidebar-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.panel-title {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #0f172a;
  letter-spacing: 0.5px;
  margin: 0;
}
.form-row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-group label {
  font-size: 11px;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
}
input, textarea {
  width: 100%;
  padding: 10px 12px;
  font-size: 13px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background-color: #fff;
  color: #1e293b;
  box-sizing: border-box;
}
input:focus, textarea:focus {
  border-color: #0f172a;
  outline: none;
}
textarea {
  resize: vertical;
}
.form-divider {
  height: 1px;
  background-color: #e2e8f0;
  margin: 4px 0;
}
</style>
