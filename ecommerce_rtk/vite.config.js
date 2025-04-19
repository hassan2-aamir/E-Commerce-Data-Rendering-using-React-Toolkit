import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/E-Commerce-Data-Rendering-using-React-Toolkit/', // Set base path to your repo name
})
