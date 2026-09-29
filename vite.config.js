import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root, 'BUILD_PATH');
  return {
    plugins: [react()],
    server: { port: 3000 },
    build: { outDir: env.BUILD_PATH || 'build' },
    test: {
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.js'],
      clearMocks: true,
    },
  };
});
