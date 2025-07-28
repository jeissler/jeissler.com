<template>
	<section class="p-10 flex flex-col justify-center items-start bg-white">
		<div class="max-w-xl">
			<h2 class="text-2xl font-semibold mb-4">About Me</h2>
			<p class="text-base text-zinc-700 leading-relaxed mb-8">
				Senior Frontend Engineer with 10+ years experience designing performant,
				user-centered applications and product ecosystems. My work spans AI
				tooling, SSR platforms, and user-first UI/UX systems. Currently
				transitioning into architecture-focused roles while continuing to champion
				fast feedback loops and resilient design.
			</p>

			<router-link
				to="/contact"
				class="inline-block px-5 py-2 border border-zinc-800 hover:bg-zinc-800 hover:text-white rounded-md transition"
			>
				Let's Connect
			</router-link>
		</div>
	</section>
</template>
