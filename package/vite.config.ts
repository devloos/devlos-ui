import { resolve } from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';

const PROJECT_ROOT_DIR = resolve(__dirname);

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(PROJECT_ROOT_DIR, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'devlos-ui',
      fileName: (format) => `devlos-ui.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies ?? {})],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
