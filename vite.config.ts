import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sync-water-tech/', // 👈 repo name exactly same
  build: {
    outDir: 'dist',
  },
})
