import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/genius": {
        target: "https://api.genius.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/api/musixmatch": {
        target: " https://api.musixmatch.com/ws/1.1/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/musixmatch/, ""),
      },
    },
  },
});
