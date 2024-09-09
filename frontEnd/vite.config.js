import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/products': {
        target: 'http://app:3000', // URL do serviço backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/products/, '/products'),
      },
    },
  },
});
