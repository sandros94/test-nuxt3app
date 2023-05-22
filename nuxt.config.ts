// https://nuxt.com/docs/api/configuration/nuxt-config
export default({
    modules: [
        '@nuxthq/ui',
        'nuxt-directus'
    ],
    nitro: {
        compressPublicAssets: true,
    },
    typescript: {
        shim: false
    },
    directus: {
        url: `http://localhost:8055/`,
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