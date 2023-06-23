// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about/about.html'),
        projects: resolve(__dirname, 'pages/projects/projects.html'),
        contact: resolve(__dirname, 'pages/contact/contact.html'),
      },
      },
    },
  },
)
