import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/employee-directory-with-search/' : '/',
  plugins: [react()],
})


