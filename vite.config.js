import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets', // This specifies where to put assets like images
    rollupOptions: {
      input: './src/index.js', // Point this to your main JavaScript file
    },
  },
});