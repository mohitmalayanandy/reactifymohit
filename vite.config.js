import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  base: '/reactifymohit/',
  plugins: [
    react(),
    {
      name: 'copy-index-to-404',
      closeBundle() {
        const indexPath = resolve(__dirname, 'dist/index.html');
        const notFoundPath = resolve(__dirname, 'dist/404.html');
        fs.copyFileSync(indexPath, notFoundPath);
      }
    }
  ]
});
