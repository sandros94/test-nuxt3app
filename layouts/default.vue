<template>
    <div class="min-h-[100svh] flex flex-col">
        <NuxtLoadingIndicator />
        <nav>
            <div class="flex justify-between items-center m-auto py-4 px-10% text-black dark:text-white">
                <ContentNavigation v-slot="{ navigation }">
                    <ul class="flex gap-x-4 text-2xl">
                        <li class="hover:underline underline-black dark:underline-white" v-for="link of navigation" :key="link._path">
                            <NuxtLink activeClass="underline underline-black dark:underline-white" :to="link._path">{{ link.title }}</NuxtLink>
                        </li>
                    </ul>
                </ContentNavigation>
                <div class="inline-flex gap-x-4 items-inherit">
                    <UnoIcon class="i-svg-spinners:clock text-white"></UnoIcon>
                    <ThemeSwitch />
                </div>
            </div>
        </nav>
        <slot />
    </div>
</template>

<script setup>
</script>

<style>
body {
    color: hsla(var(--a-base-c), 1.0);
    @apply bg-white dark:bg-#101010 font-sans;
}
h1, h2, h3, h4, h5, h6 {
    color: inherit;
    @apply font-sans;
}
</style>