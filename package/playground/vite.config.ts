import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '@playground': resolve(__dirname, 'src'),
    },
  },
  root: resolve(__dirname),
});
