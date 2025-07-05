# Getting Started

Devlos UI is a collection of components based on [Tailwind CSS](https://tailwindcss.com). We assume you are already familiar with the basic ideas of [Tailwind CSS](https://tailwindcss.com) before you continue.

## Create project

Start by creating a new Vue project using `vite`:

```bash
npm create vite@latest
```

## 🛠️ Installing Tailwind CSS v4 with Vite

1. **Install the packages**

   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```

2. **Update your `vite.config.ts`**

   ```ts
   import { defineConfig } from "vite";
   import tailwindcss from "@tailwindcss/vite";

   export default defineConfig({
     plugins: [tailwindcss()],
   });
   ```

3. **Import Tailwind into your CSS**

   In your main CSS file (e.g., `src/index.css`):

   ```css
   @import "tailwindcss";
   ```

## Install devlos-ui

```bash
npm i devlos-ui@latest
```

## That's it

You can now start adding components to your project.
