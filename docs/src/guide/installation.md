## Installation

### Create project

Start by creating a new Vue project using `vite`:

```bash
npm create vite@latest
```

### Add Tailwind and its configuration

Install `tailwindcss` and its peer dependencies, then generate your `tailwind.config.js` and `postcss.config.js` files:

```bash
npm install -D tailwindcss postcss autoprefixer
```

```bash
npx tailwindcss init -p
```

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

### Install devlos-ui

```bash
npm i devlos-ui@latest
```

### That's it

You can now start adding components to your project.

## Documentation

Visit https://devlos-ui.vercel.app to view the documentation.
