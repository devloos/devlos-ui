# Usage

### Setup

Use the `import` statement to import any components needed.

```js
import { DragSelect } from "devlos-ui";
```

Simply use it as a component in any vue application.

```html
<DragSelect v-model="selectedItems" :items="items" class="...">
  <template #item="{ item }">
    <div class="...">
      <div>ID: {{ item.id }}</div>
    </div>
  </template>
</DragSelect>
```

### Demo

Drag within the container to select your items.

<script setup>
  import DragSelectDemo from '../demos/DragSelectDemo.vue'
</script>

<DragSelectDemo />
