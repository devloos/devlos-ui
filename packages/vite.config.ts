import { resolve } from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import pkg from './package.json';

const PROJECT_ROOT_DIR = resolve(__dirname);

let currentFormat = '';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': resolve(PROJECT_ROOT_DIR, 'src'),
    },
  },
  build: {
    minify: false,
    target: 'esnext',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'devlos-ui',
      // the proper extensions will be added
      fileName: (format, name) => {
        currentFormat = format;
        return `${name}.${format === 'es' ? 'js' : 'cjs'}`;
      },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [...Object.keys(pkg.dependencies ?? {})],
      output: {
        // Don't rely on preserveModules
        // It creates a lot of unwanted files because of the multiple sections of SFC files
        manualChunks: (moduleId, meta) => {
          const info = meta.getModuleInfo(moduleId);
          if (!info?.isIncluded) {
            // Don't create empty chunks
            return null;
          }

          const [namespace, file] = moduleId.split('?')[0].split('/').slice(-2);
          return `${namespace}/${file.slice(0, file.lastIndexOf('.'))}`;
        },

        exports: 'named',
        chunkFileNames: (chunk) => `${chunk.name}.${currentFormat === 'es' ? 'js' : 'cjs'}`,
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') return 'index.css';
          return chunkInfo.name as string;
        },
      },
    },
  },
});
