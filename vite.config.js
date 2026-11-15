import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// On GitHub Pages this is served from https://<user>.github.io/portfolio-personal/,
// so production assets need the repo name as the base path. Dev stays at '/'.
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'build' ? '/portfolio-personal/' : '/',
}))
