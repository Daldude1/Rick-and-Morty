import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://daldude1.github.io/Rick-and-Morty/",
  plugins: [react()],
})
