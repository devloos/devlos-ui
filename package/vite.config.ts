import { resolve } from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'devlos-ui',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies ?? {}), /^playground\//],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
