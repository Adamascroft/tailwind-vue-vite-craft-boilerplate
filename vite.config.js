import ViteRestart from 'vite-plugin-restart';
import vue from '@vitejs/plugin-vue'
import path from 'path';
import * as fs from 'fs';

// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    outDir: path.resolve('./web/dist/'),
    rollupOptions: {
      input: {
        app: path.resolve('./src/main.js'),
      },
    },
  },
  plugins: [
    ViteRestart({
      reload: [
        path.resolve('./templates/**/*'),
      ], 
    }),
    vue()
  ],
  publicDir: path.resolve('./src/public'),
  resolve: {
    alias: {
        'vue': path.resolve('node_modules/vue/dist/vue.esm-bundler.js'),
      '@': path.resolve('./src'),
        '@js': path.resolve('./src/js'),
      '@css': path.resolve('./src/css'),
    },
  },
   server: {
    https: {
      key: fs.readFileSync('localhost-key.pem'),
      cert: fs.readFileSync('localhost.pem'),
    },
    hmr: {
      host: 'localhost',
    },
  },
});
