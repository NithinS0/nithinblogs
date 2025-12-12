import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for username.github.io, or '/repository-name/' for project repos
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});