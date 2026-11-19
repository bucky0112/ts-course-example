import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// npm run dev 開的是參考專案
export default defineConfig({
  root: 'reference-project',
  plugins: [react()],
})
