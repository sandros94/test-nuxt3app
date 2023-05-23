<template>
    <div class="w-full h-full">
        <UContainer class="w-full max-w-8xl px-8 prose dark:prose-invert">
            <UButton label="Refresh" :loading="pending" @click="refreshData"/>
            <ul v-for="link in links" :key="link">
                <li>
                    <a :href="link.link" target="_blank" rel="noopener noreferrer">{{ link.name }} | {{ link.date  }}</a>
                </li>
            </ul>
        </UContainer>
    </div>
</template>

<style>
</style>

<script setup scoped>
const { data: links, pending, refresh } = useAsyncData(async () => {
    const { getItems } = useDirectusItems()
    return await getItems({
        collection: 'links',
        params: {
            fields: ['id', 'name', 'link', 'date', 'status'],
            filter: {
                status: 'visible',
            },
            sort: ['-date'],
        },
    })
})

const refreshData = () => {
    refresh()
}

onNuxtReady(() => {
    refreshData()
})
</script>