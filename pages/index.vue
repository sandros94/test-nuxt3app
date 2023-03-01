<template>
	<div class="w-full h-[100svh] flex flex-col items-center justify-center text-center">
		<div class="flex flex-wrap gap-4 m-6">
			<ARadio v-model="colorMode.preference" value="system" label="System" />
			<ARadio v-model="colorMode.preference" value="light" label="Light" />
			<ARadio v-model="colorMode.preference" value="dark" label="Dark" />
		</div>
		<div class="m-6 justify-center">
			<div class="flex justify-center mb-2">
				<ASwitch v-model="val" />
			</div>
			<p class="text-warm-gray-500">val: <span class="color-info">{{ val }}</span> {{ typeof val }}</p>
		</div>
		<div class="m-6 text-warm-gray-500">
			<p>colorMode.preference: <span class="color-info">{{ colorMode.preference }}</span> {{ typeof colorMode.preference }}</p>
			<p>colorMode.value: <span class="color-info">{{ colorMode.value }}</span> {{ typeof colorMode.value }}</p>
		</div>
	</div>
</template>

<style>
/* Light mode */
body {
	background: #faf9f8;
}

/* Dark mode */
.dark body {
	background: #0f0f0f;
}
</style>

<script setup>
const colorMode = useColorMode();
const val = ref(colorMode.value === 'dark');

watch(val, (newValue) => {
	colorMode.preference = newValue ? 'dark' : 'light'
})
</script>