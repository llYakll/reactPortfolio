import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets', 
    rollupOptions: {
      input: {
        main: './src/index.html',
        nested: './src/nested/index.html'
      }
    }
  }
});