// https://nuxt.com/docs/api/configuration/nuxt-config
export default({
    modules: [
        '@anu-vue/nuxt',
        '@unocss/nuxt'
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
        '@anu-vue/preset-theme-default/dist/style.css'
    ],
    app: {
        head: {
            title: 'Website',
            htmlAttrs: {
                lang: 'en'
            }
        },
    }
});