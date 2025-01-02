

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



// filepath: /c:/Users/HP/Desktop/E-M/client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

export default defineConfig({
  plugins: [
    react(),
    NodeGlobalsPolyfillPlugin({
      buffer: true,
      util: true,}),

    NodeModulesPolyfillPlugin(),
   
    
  ],
  resolve: {
    alias: {
      buffer: 'buffer',
      util: 'util'
    }
  },
  define: {
    'process.env': {}
  },
  optimizeDeps: {
    include: ['buffer', 'util']
  },
  server: {
    proxy: {
      '/api/v1': 'http://localhost:8080'
    }
  }
});