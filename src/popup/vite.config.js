import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: '/popup/',
  build: {
    outDir: '../../build/popup/',
    watch: {
      exclude: 'node_modules/**',
      include: 'src/**'
    }
  }
})
