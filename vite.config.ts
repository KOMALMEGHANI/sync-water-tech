import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Allow overriding base path via env (useful for GitHub Pages dynamic repo names)
// Set VITE_BASE to '/<repo-name>/' in CI, or '/' for custom domains
const base = process.env.VITE_BASE || '/sync-water-tech/'

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    outDir: 'dist',
  },
})
