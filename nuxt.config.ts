// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        
        '@anu-vue/nuxt',
    ],
    extends: [
        'github:digitoolmedia/first#stable',
        'nuxt-seo-kit',
    ],
    css: [
        '@anu-vue/preset-theme-default/dist/style.css'
    ],
    app: {
        head: {
            title: 'Website',
            htmlAttrs: {
                lang: 'en'
            }
        },
    },
    runtimeConfig: {
        public: {
          siteUrl: `https://${process.env.PUBLIC_SITE_URL}` || 'https://example.com',
          siteName: 'Website',
          siteDescription: 'Welcome to my awesome website!',
          language: 'en', // prefer more explicit language codes like `en-AU` over `en`
        }
    },
});