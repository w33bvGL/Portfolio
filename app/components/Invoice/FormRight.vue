<script setup lang="ts">
const props = defineProps<{
  data: any
}>()

const addItem = () => {
  props.data.items.push({ description: '', amount: 0 })
}

const removeItem = (index: number) => {
  if (props.data.items.length > 1) {
    props.data.items.splice(index, 1)
  }
}

const triggerPrint = () => {
  window.print()
}
</script>

<template>
  <div class="sidebar-form">
    <h2 class="panel-title">Спецификация услуг</h2>

    <div v-for="(item, index) in data.items" :key="index" class="item-card">
      <div class="form-group">
        <label>Описание работ</label>
        <input v-model="item.description" type="text" placeholder="Software development..." />
      </div>
      <div class="form-group">
        <label>Цена (USD)</label>
        <input v-model.number="item.amount" type="number" />
      </div>
      <button v-if="data.items.length > 1" @click="removeItem(index)" class="btn-remove">
        Удалить позицию
      </button>
    </div>

    <button @click="addItem" class="btn-add-row">
      + Добавить строку
    </button>

    <div class="form-divider"></div>

    <h2 class="panel-title">Крипто-реквизиты</h2>

    <div class="form-group">
      <label>Сеть (Network)</label>
      <input v-model="data.crypto.network" type="text" />
    </div>

    <div class="form-group">
      <label>Адрес кошелька</label>
      <input v-model="data.crypto.wallet" type="text" class="font-mono" />
    </div>

    <div class="form-divider"></div>

    <button @click="triggerPrint" class="btn-submit">
      Сохранить в PDF
    </button>
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
.item-card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
input {
  width: 100%;
  padding: 10px 12px;
  font-size: 13px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  box-sizing: border-box;
}
input:focus {
  border-color: #0f172a;
  outline: none;
}
.font-mono {
  font-family: monospace;
  font-size: 12px;
}
.btn-remove {
  background: none;
  border: none;
  color: #ef4444;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  padding: 0;
  width: max-content;
}
.btn-add-row {
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
.btn-add-row:hover {
  background-color: #f8fafc;
}
.form-divider {
  height: 1px;
  background-color: #e2e8f0;
  margin: 4px 0;
}
.btn-submit {
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
}
.btn-submit:hover {
  background-color: #1e293b;
}
</style>
