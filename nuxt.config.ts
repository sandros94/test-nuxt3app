// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@unocss/nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/image-edge',
        '@nuxt/content',
        '@nuxt/devtools',
        '@vueuse/nuxt',
        '@anu-vue/nuxt',
    ],
    extends: [
        'nuxt-seo-kit',
    ],
    nitro: {
        compressPublicAssets: true,
        prerender: {
            crawlLinks: true,
        },
    },
    typescript: {
        shim: false
    },
    css: [
        '@unocss/reset/tailwind.css',
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
        highlight: {
            theme: {
              // Default theme (same as single string)
              default: 'github-light',
              // Theme used if `html.dark`
              dark: 'github-dark',
            },
            prelaod: [
                'diff',
                'json',
                'js',
                'ts',
                'css',
                'shell',
                'html',
                'md',
                'yaml',
                'vue',
            ],
        },
    },
    image: {
        provider: 'ipx',
        ipx: {
            maxAge: 2592000,
        },
        // The screen sizes predefined by `@nuxt/image`:
        screens: {
            xs: 320,
            sm: 640,
            md: 1024,
            lg: 1280,
            xl: 1920,
            xxl: 2560,
        },
    },
    colorMode: {
        preference: 'system',
        fallback: 'light',
        classSuffix: '',
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