import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from https://<user>.github.io/portfolio-personal/ on GitHub Pages,
// so production assets use the repo name as base. Dev stays at '/'.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/portfolio-personal/' : '/',
}))
