import { defineNuxtConfig } from "nuxt/config";
import Icons from "unplugin-icons/vite";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap'
        }
      ]
    }
  },
  build: {
    transpile: ["radix-vue"],
  },
  vite: {
    plugins: [
      Icons({
        // Options
        autoInstall: true,
      }),
    ],
  },
  nitro: {
    compatibilityDate: "2025-12-16",
  },
});
