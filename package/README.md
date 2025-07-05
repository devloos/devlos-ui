# devlos-ui

Beautifully designed components to add to your projects.

## Usage

Use the `import` statement to import any components needed.

```js
import { DragSelect } from 'devlos-ui';
```

Simply use it as a component in any vue application.

```html
<DragSelect
  v-model="selectedItems"
  :items="items"
  class="grid grid-cols-4 gap-4 border-2 border-black p-4 dark:border-white"
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
```

## Installation

### Install devlos-ui

```bash
npm i devlos-ui@latest
```

### That's it

You can now start adding components to your project.

## Documentation

Visit https://devlos-ui.vercel.app to view the documentation.
