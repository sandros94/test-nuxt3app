// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        
        '@anu-vue/nuxt',
    ],
    extends: [
        'github:digitoolmedia/first#stable',
        'nuxt-seo-kit',
    ],
    unocss: {
        uno: true,
        attributify: true,
        typography: true,
        include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue', './**/*.md'],
        icons: {
          cdn: 'https://esm.sh/',
          scale: 1.2,
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
            // ...
          },
        },
        webFonts: {
          fonts: {
            sans: 'DM Sans',
            serif: 'DM Serif Display',
            mono: 'DM Mono',
          },
        },
    },
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