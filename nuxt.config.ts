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
        url: process.env.DIRECTUS_URL ? (process.env.DIRECTUS_URL.match(/^(?:http(s)?:\/\/)/) ? process.env.DIRECTUS_URL : `http://${process.env.DIRECTUS_URL}`) : 'http://localhost:8055',
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