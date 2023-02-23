<template>
	<div class="container p-6 mx-auto">
		<!-- Buttons -->
		<div class="w-full flex flex-wrap justify-between item-center mb-8">
			<div class="flex flex-wrap gap-4">
				<ABtn>Primary</ABtn>

				<ABtn color="secondary">Secondary</ABtn>

				<ABtn color="success"> Success </ABtn>

				<ABtn color="info"> Info </ABtn>

				<ABtn color="warning"> Warning </ABtn>

				<ABtn color="danger"> Danger </ABtn>
			</div>
			<div class="flex flex-wrap gap-4 my-8">
				<ARadio v-model="colorMode.preference" value="system" label="System" />
				<ARadio v-model="colorMode.preference" value="light" label="Light" />
				<ARadio v-model="colorMode.preference" value="dark" label="Dark" />
			</div>
			<ASwitch v-model="themeToggle" />
		</div>

		<h1>colorMode.value: {{ colorMode.value }}</h1>
		<h1>colorMode.preference: {{ colorMode.preference }}</h1>
		<p>Is Dark? {{ colorMode.value == 'dark' }} {{ typeof colorMode.value }}</p>
		<p>themeToggle: {{ themeToggle }} {{ typeof themeToggle }}</p>
		<p>Test: {{ test }}</p>
		<p>{{ colorMode }}</p>

		<!-- Cards -->
		<div class="grid-row sm:grid-cols-2 cards-demo-container">
			<!-- 👉 Using props -->
			<ACard title="Card title" subtitle="Chocolate cake tiramisu donut"
				text="Ice cream sweet pie pie dessert sweet danish. Jelly jelly beans cupcake jelly-o chocolate bonbon chocolate bar." />

			<ACard class="relative" color="danger" variant="fill" title="Card title"
				subtitle="Chocolate cake tiramisu donut">
				<div class="a-card-body a-card-spacer">
					<p class="text-sm">
						Ice cream sweet pie pie dessert sweet danish. Jelly jelly beans
						cupcake jelly-o chocolate bonbon chocolate bar.
					</p>
				</div>
			</ACard>
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
const themeToggle = ref(false)
const colorMode = useColorMode()

watch(themeToggle, (newValue) => {
	colorMode.preference = newValue ? 'dark' : 'light'
})
</script>