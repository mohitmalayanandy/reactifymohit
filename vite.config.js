import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  theme: {
    extend: {
      // ... your other extensions
      cursor: {
        'none': 'none',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      },
    },
  },
})
