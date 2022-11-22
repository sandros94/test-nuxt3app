// https://nuxt.com/docs/api/configuration/nuxt-config
export default({
    buildModules: ['@nuxtjs/html-validator','@nuxtjs/google-fonts'],
    modules: ['@nuxtjs/tailwindcss','@nuxt/image-edge',],
    typescript: {
        shim: false
    },
    css: [
        '@/assets/css/main.css',
    ],
    tailwindcss: {
        // Options
    },
    directus: {
        url: 'https://directus.digitool.media/'
        // token: ''
    },
});