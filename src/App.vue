<template>
	<div
		class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-1 min-h-screen"
	>
		<Intro />
		<About />
	</div>
	<Contact />
</template>

<script setup>
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
</script>
