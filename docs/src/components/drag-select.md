# Drag Select

## Setup

Use the `import` statement to import any components needed.

```js
import { DragSelect } from "devlos-ui";
```

```html
<DragSelect v-model="selectedItems" :items="items" class="...">
  <template #item="{ item }">
    <div class="...">
      <div>ID: {{ item.id }}</div>
    </div>
  </template>
</DragSelect>
```

## Demo

Drag within the container to select your items.

<script setup>
  import DragSelect from '../demos/DragSelect.vue'
</script>

<DragSelect />

## Props

```ts
export interface DragSelectProps {
  /**
   * Items to be used by Drag Select
   */
  items: any[];

  /**
   * Background color of a selected element
   * @default "#008080" teal color
   */
  backgroundColor?: string;

  /**
   * Selector color background and border
   * @default "#00808050" teal color reduced 50%
   */
  selectorColor?: string;

  /**
   * Disable selected item styles
   * @default false
   */
  disableSelectedStyles?: boolean;

  /**
   * Remove all selected items
   * @default false
   */
  enableEscapeReset?: boolean;
}
```

## Slots

```ts
export interface DragSelectSlots {
  /**
   * Above but within the selected area
   */
  header(): any;

  /**
   * Allows the slot for every item in the selectable area
   */
  item(props: { item: any; index: number; isSelected: boolean }): any;

  /**
   * Belo but within the selected area
   */
  footer(): any;
}
```

## Source

[Source](https://github.com/devloos/devlos-ui/blob/main/package/src/DragSelect/DragSelect.vue) • [Demo](https://github.com/devloos/devlos-ui/blob/main/docs/src/demos/DragSelect.vue)
