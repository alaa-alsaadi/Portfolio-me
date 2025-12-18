import { defineNuxtConfig } from "nuxt/config";
import Icons from "unplugin-icons/vite";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/seo"
  ],
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
    }
  },
  site: {
    url: 'https://your-portfolio-url.com', // Update this with your actual URL
    name: 'Alaa Abdulhussein - Portfolio',
    description: 'Full Stack Developer & IT Specialist',
    defaultLocale: 'en',
  },
  routeRules: {
    '/': { isr: 3600 },
    '/projects': { isr: 3600 },
  },
  build: {
    transpile: ["radix-vue"],
  },
  vite: {
    plugins: [
      Icons({
        autoInstall: true,
      }),
    ],
  },
  nitro: {
    compatibilityDate: "2025-12-16",
    compressPublicAssets: true,
  },
  experimental: {
    payloadExtraction: true,
  }
});
