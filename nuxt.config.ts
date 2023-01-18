// https://nuxt.com/docs/api/configuration/nuxt-config
export default({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-headlessui'
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
    tailwindcss: {
        // Options
    },
    headlessui: {
        // Options
    },
    app: {
        head: {
            title: 'Website',
            htmlAttrs: {
                lang: 'en'
            }
        },
    }
});