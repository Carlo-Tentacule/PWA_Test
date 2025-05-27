import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      injectRegister: 'auto',

      manifest: {
        name: 'PWA_Test',
        short_name: 'PWA_Test',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#317EFB',
        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true
      },

      devOptions: {
        enabled: true, // ✅ le SW est actif même en dev
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module'
      }
    })
  ]
})
