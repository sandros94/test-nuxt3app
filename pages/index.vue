<template>
	<div class="w-full h-[100svh] flex flex-col items-center justify-center text-center">
		<div class="flex flex-wrap gap-4 m-6">
			<ARadio v-model="colorMode.preference" value="system" label="System" />
			<ARadio v-model="colorMode.preference" value="light" label="Light" />
			<ARadio v-model="colorMode.preference" value="dark" label="Dark" />
		</div>
		<div>
			<button @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'" >
				<p v-if="$colorMode.value === 'light'">il tema è chiaro <span class="i-ph:sun"></span></p>
				<p v-else>il tema è scuro <span class="i-ph:moon"></span></p>
			</button>
		</div>
		<div class="m-6 justify-center">
			<ClientOnly>
				<template #fallback>
					<ASwitch v-model="off" off-icon="i-svg-spinners:clock"/>
				</template>
				<ASwitch v-model="switchTheme" off-icon="i-ph:sun" on-icon="i-ph:moon"/>
			</ClientOnly>
			<p class="text-warm-gray-500">switchTheme: <span class="color-info">{{ switchTheme }}</span> {{ typeof switchTheme }}</p>
		</div>
		<div class="m-6 text-warm-gray-500">
			<p>colorMode.value: <span class="color-info">{{ colorMode.value }}</span> {{ typeof colorMode.value }}</p>
			<p>colorMode.preference: <span class="color-info">{{ colorMode.preference }}</span> {{ typeof colorMode.preference }}</p>
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
      set: (value) => {
        if (colorMode.preference === 'system') {
          // Set the opposite of the current system value
          colorMode.preference = value ? 'dark' : 'light';
        } else {
          // Set the preference back to 'system'
          colorMode.preference = 'system';
        }
	}
});
</script>