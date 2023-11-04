import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/socket.io':{
        target:'http://localhost:3100',
        ws:true
      }
    }
  },
  plugins: [react()],
})
