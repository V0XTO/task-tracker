import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"https://V0XTO.github.io/task-tracker",
  build: {
    chunkSizeWarningLimit: 1600
}
  })
