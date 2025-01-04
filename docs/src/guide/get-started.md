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
