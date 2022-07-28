import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig ({
    modules: ['nuxt-directus'],
    typescript: {
        shim: false
    },
    directus: {
        url: "https://directus.digitool.media",
    }
})
