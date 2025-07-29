<template>
	<div
		class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-1 min-h-screen"
	>
		<Intro />
		<About />
	</div>
	<div class="bg-brand border-t border-zinc-200 min-h-screen">
		<Contact />
		<footer class="text-sm text-right pb-2 pr-4 text-zinc-500">
			© {{ currentYear }} jeissler.com
		</footer>
	</div>
</template>

<script setup>
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

const currentYear = new Date().getFullYear()
</script>
