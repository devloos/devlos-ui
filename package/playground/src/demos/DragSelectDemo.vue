<script setup lang="ts">
import DragSelect from '@/DragSelect/DragSelect.vue';
import { ref } from 'vue';

const items = [
  { id: 1, name: 'Item 1', value: 10 },
  { id: 2, name: 'Item 2', value: 20 },
  { id: 3, name: 'Item 3', value: 30 },
  { id: 4, name: 'Item 4', value: 40 },
  { id: 5, name: 'Item 5', value: 50 },
  { id: 6, name: 'Item 6', value: 60 },
  { id: 7, name: 'Item 7', value: 70 },
  { id: 8, name: 'Item 8', value: 80 },
  { id: 9, name: 'Item 9', value: 90 },
  { id: 10, name: 'Item 10', value: 100 },
  { id: 11, name: 'Item 11', value: 110 },
  { id: 12, name: 'Item 12', value: 120 },
  { id: 13, name: 'Item 13', value: 130 },
  { id: 14, name: 'Item 14', value: 140 },
  { id: 15, name: 'Item 15', value: 150 },
  { id: 16, name: 'Item 16', value: 160 },
  { id: 17, name: 'Item 17', value: 170 },
  { id: 18, name: 'Item 18', value: 180 },
  { id: 19, name: 'Item 19', value: 190 },
  { id: 20, name: 'Item 20', value: 200 },
];

const selectedItems = ref([]);
</script>

<template>
  <div>
    <div
      class="dui:flex dui:w-full dui:translate-y-[1px] dui:justify-between dui:border dui:border-amber-800 dui:p-2 dui:dark:border-white"
    >
      <div>Selectable Area</div>
      <div class="dui:flex dui:gap-2">
        <span>Selected Count:</span>
        <span>{{ selectedItems.length }}</span>
      </div>
    </div>
    <DragSelect
      v-model="selectedItems"
      :items="items"
      class="dui:grid dui:grid-cols-2 dui:gap-4 dui:border dui:border-black dui:p-4 dui:sm:grid-cols-4 dui:md:grid-cols-7 dui:xl:grid-cols-8 dui:dark:border-white"
    >
      <template #item="{ item }">
        <div
          class="dui:flex dui:flex-col dui:items-center dui:justify-center dui:border dui:border-black dui:p-2 dui:dark:border-white"
        >
          <div>ID: {{ item.id }}</div>
        </div>
      </template>
    </DragSelect>
  </div>
</template>
