<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'
import { DragSelect } from 'devlos-ui'
import { useDark, useToggle } from '@vueuse/core'

// const items = Array.from({ length: 30 }, (_, i) => i);
const items = ref([
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
  // { id: 16, name: 'Item 16', value: 160 },
  // { id: 17, name: 'Item 17', value: 170 },
  // { id: 18, name: 'Item 18', value: 180 },
  // { id: 19, name: 'Item 19', value: 190 },
  // { id: 20, name: 'Item 20', value: 200 },
  // { id: 21, name: 'Item 21', value: 210 },
  // { id: 22, name: 'Item 22', value: 220 },
  // { id: 23, name: 'Item 23', value: 230 },
  // { id: 24, name: 'Item 24', value: 240 },
  // { id: 25, name: 'Item 25', value: 250 },
  // { id: 26, name: 'Item 26', value: 260 },
  // { id: 27, name: 'Item 27', value: 270 },
  // { id: 28, name: 'Item 28', value: 280 },
  // { id: 29, name: 'Item 29', value: 290 },
  // { id: 30, name: 'Item 30', value: 300 },
])

const selectedItems = ref([])

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-5 py-28">
    <button class="rounded bg-gray-500 px-4 py-2 text-white" type="button" @click="toggleDark()">
      Toggle Color Scheme
    </button>
    <DragSelect
      v-model="selectedItems"
      :items="items"
      class="grid grid-cols-4 gap-4 border-2 border-black p-4 dark:border-white"
      enable-escape-reset
    >
      <template #item="{ item }">
        <div
          class="flex flex-col items-center justify-center border border-black p-2 dark:border-white"
        >
          <div>ID: {{ item.id }}</div>
          <div>Name: {{ item.name }}</div>
          <div>Value: {{ item.value }}</div>
        </div>
      </template>
    </DragSelect>

    <div>
      <h2 class="pb-5 text-center font-bold uppercase">Selected Items</h2>
      <div class="mx-auto flex max-w-lg flex-wrap gap-4">
        <div
          v-for="item in selectedItems"
          :key="item"
          class="flex h-10 w-16 items-center justify-center rounded bg-gray-500 text-white"
        >
          {{ item.id }}
        </div>
      </div>
    </div>
  </div>
</template>
