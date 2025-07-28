<template>
	<section
		id="contact"
		class="bg-[#f4efe8] px-6 py-16 border-t border-zinc-200 min-h-screen"
	>
		<div class="max-w-xl mx-auto text-center">
			<h3 class="text-xl font-semibold mb-4">Contact</h3>
			<p class="mb-6 text-zinc-700">
				Reach out about new opportunities, collaborations or to just say hello.
			</p>
			<form
				class="flex flex-col gap-4 text-left"
				data-netlify="true"
				data-netlify-honeypot="bot"
				data-netlify-recaptcha="true"
				@submit.prevent="submitForm"
			>
				<input type="hidden" name="form-name" value="contact" />
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					required
					class="border border-zinc-300 p-3 rounded-md w-full"
				/>
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					required
					class="border border-zinc-300 p-3 rounded-md w-full"
				/>
				<input
					type="text"
					name="company"
					placeholder="Company Name"
					class="border border-zinc-300 p-3 rounded-md w-full"
				/>
				<textarea
					name="message"
					rows="4"
					placeholder="Your Message"
					required
					class="border border-zinc-300 p-3 rounded-md w-full"
				></textarea>

				<div class="mt-3 flex justify-center" data-netlify-recaptcha="true" />

				<button
					type="submit"
					class="self-start px-5 py-2 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition rounded-md cursor-pointer"
				>
					Send Message
				</button>
			</form>
		</div>
	</section>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

const submitted = ref(false)
const error = ref('')

async function submitForm({ target }) {
	try {
		// encode data for netlify forms
		const formData = new FormData(target)
		const encodedData = new URLSearchParams(formData).toString()

		await axios.post('/', encodedData, {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		})

		submitted.value = true
	} catch (err) {
		console.error('Error:', err)
		error.value =
			'There was an error submitting the form. Please try again later.'
	}
}
</script>
