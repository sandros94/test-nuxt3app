<template>
    <ClientOnly>
        <template #fallback>
            <ASwitch v-model="off" off-icon="i-svg-spinners:clock"/>
        </template>
        <ASwitch v-model="switchTheme" off-icon="i-ph:sun" on-icon="i-ph:moon"/>
    </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode();
const off = ref(false)
const switchTheme = computed({
    get: () => colorMode.value === 'dark',
    set: () => {
        if (colorMode.preference === 'system' && colorMode.value === 'light') {
            // If current system is light, set to dark
            colorMode.preference = 'dark';
        } else if (colorMode.preference === 'system' && colorMode.value === 'dark') {
	        // If current system is dark, set to light
	        colorMode.preference = 'light';
	    } else {
            // Else, set back to system
            colorMode.preference = 'system';
        }
    }
});
</script>