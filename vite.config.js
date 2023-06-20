import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { devPlugin } from './plugins/devPlugin'
import { buildPlugin } from './plugins/buildPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [devPlugin(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      plugins: [ buildPlugin() ]
    }
  }
})
