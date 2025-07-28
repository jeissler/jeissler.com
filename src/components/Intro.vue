<template>
	<section class="bg-brand p-10 flex flex-col justify-between">
		<div class="mt-3">
			<h1 class="text-4xl md:text-6xl font-semibold mb-6">Jeremy Eissler</h1>
			<p class="text-lg md:text-xl text-zinc-700 leading-relaxed max-w-md">
				I am a Maker, Doer, and Way-Finding Engineer.<br />
				Focused on building smart interfaces, scalable systems, and delightful
				tools.
			</p>
		</div>
		<nav class="mt-12 text-sm font-medium flex gap-6">
			<a
				href="https://github.com/jeissler"
				target="_blank"
				class="hover:underline"
			>
				GitHub
			</a>
			<a
				href="https://linkedin.com/in/jeissler"
				target="_blank"
				class="hover:underline"
			>
				LinkedIn
			</a>
			<router-link to="/contact" class="hover:underline">Contact</router-link>
		</nav>
	</section>
</template>
