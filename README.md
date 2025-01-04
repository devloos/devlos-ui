# Devlos UI

### Beautifully designed components to elevate your projects effortlessly

---

Welcome to **Devlos UI**, the ultimate solution for developers seeking clean, customizable, and high-performance UI components. Whether you're building the next big thing or refining an existing project, Devlos UI provides the tools to craft exceptional user experiences.

## Why Choose Devlos UI?

### 🫣 Feature Rich

- **A curated selection**: Start with a powerful component that delivers value out of the box. More to come!

### 🚀 Seamless Integration

- **Plug-and-play**: Simplify development with components that integrate seamlessly into your project.

### ⚡ Fully Tree-Shakeable

- **Optimize your builds**: Import only the features you need. No excess baggage, just lean, efficient code.

### 🦾 Type Strong

- **Built for TypeScript**: Enjoy a type-safe experience with complete TypeScript support and full TS documentation.

### 🛠 Flexible

- **Customization at your fingertips**: Tailor components to meet your design needs, including built-in styling options.

### ▶️ Interactive Demos

- **See it in action**: Comprehensive documentation includes interactive demos to test components before using them.

## Key Benefits

- **Speed up development**: Eliminate the time-consuming process of creating components from scratch.
- **Maintainable codebase**: Fully typed and documented components ensure clarity and maintainability.
- **Future-proof your projects**: Designed with scalability and flexibility in mind.

---

## Get Involved

Devlos UI is open-source and thrives on contributions from developers like you. Found a bug or have a feature request? [Join us on GitHub](https://github.com/devloos/devlos-ui) and help make Devlos UI even better!

# Getting Started

Devlos UI is a collection of components based on [Tailwind CSS](https://tailwindcss.com). We assume you are already familiar with the basic ideas of [Tailwind CSS](https://tailwindcss.com) before you continue.

## Create project

Start by creating a new Vue project using `vite`:

```bash
npm create vite@latest
```

## Add Tailwindcss

Install `tailwindcss` and its peer dependencies, then generate your `tailwind.config.js` and `postcss.config.js` files:

```bash
npm install -D tailwindcss postcss autoprefixer
```

```bash
npx tailwindcss init -p
```

## Configure Tailwindcss

Add this import header in your main css file, `src/index.css` in our case:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ... */
```

Configure the tailwind template paths in `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Install devlos-ui

```bash
npm i devlos-ui@latest
```

## That's it

You can now start adding components to your project.

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
  import DragSelect from '../demos/DragSelect.vue'
</script>

<DragSelect />
