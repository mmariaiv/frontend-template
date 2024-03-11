import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "node:url"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
      '@components': path.resolve(__dirname, './src/components'),
      '@scss': path.resolve(__dirname, './src/scss'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@consts': path.resolve(__dirname, './src/utils/consts'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
    }
  }
})
