<template>
	<div class="w-full h-full m-auto flex flex-col gap-8 items-center justify-center text-center">
		<div class="flex flex-wrap gap-4">
			<ARadio v-model="colorMode.preference" value="system" label="System" />
			<ARadio v-model="colorMode.preference" value="light" label="Light" />
			<ARadio v-model="colorMode.preference" value="dark" label="Dark" />
		</div>
		<div>
			<p>
				The theme is 
				<span v-if="$colorMode.value === 'light'">Light <span class="i-ph:sun"></span></span>
				<span v-else>Dark <span class="i-ph:moon"></span></span>
				
			</p>
			<div class="text-warm-gray-500">
				<p>colorMode.value: <span class="color-info">{{ colorMode.value }}</span> {{ typeof colorMode.value }}</p>
				<p>colorMode.preference: <span class="color-info">{{ colorMode.preference }}</span> {{ typeof colorMode.preference }}</p>
				<p>switchTheme: <span class="color-info">{{ switchTheme }}</span> {{ typeof switchTheme }}</p>
			</div>
		</div>
		<div class="justify-center">
			<p>ASwitch</p>
			<ASwitch v-model="switchTheme" off-icon="i-ph:sun" on-icon="i-ph:moon"/>
		</div>
		<div class="justify-center">
			<p>ASwitch + ClientOnly</p>
			<ClientOnly>
				<ASwitch v-model="switchTheme" off-icon="i-ph:sun" on-icon="i-ph:moon"/>
			</ClientOnly>
		</div>
		<div class="justify-center">
			<p>ASwitch + ClientOnly + fallback</p>
			<ClientOnly>
				<template #fallback>
					<ASwitch v-model="off" off-icon="i-svg-spinners:clock"/>
				</template>
				<ASwitch v-model="switchTheme" off-icon="i-ph:sun" on-icon="i-ph:moon"/>
			</ClientOnly>
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