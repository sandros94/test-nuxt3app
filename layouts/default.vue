<template>
    <div class="min-h-[100svh] flex flex-col">
        <header class="sticky top-0 z-50 w-full backdrop-blur flex-none border-b border-gray-900/10 dark:border-gray-50/[0.06]">
            <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div class="flex items-center justify-between h-16">
                    <nav>
                        <ul class="inline-flex gap-4">
                            <li>
                                <nuxt-link to="/">Home</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/links">Links</nuxt-link>
                            </li>
                        </ul>
                    </nav>
                    <button @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'" >
                        <p v-if="$colorMode.value === 'light'">theme is light <span class="i-heroicons-sun inline-block align-middle"></span></p>
                        <p v-else>theme is dark <span class="i-heroicons-moon inline-block align-middle"></span></p>
                    </button>
                </div>
            </div>
        </header>
        <NuxtLoadingIndicator />
        <div class="flex flex-grow h-full pt-4">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>