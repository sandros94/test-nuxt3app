import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    modules: ['nuxt-directus', '@nuxtjs/tailwindcss'],
    ssr: true,
    tailwindcss: {
        cssPath: 'assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
    directus: {
        url: "https://directus.digitool.media",
    }
})
