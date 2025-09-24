<template>
  <section id="contact" class="px-6 py-16">
    <div class="max-w-xl mx-auto text-center">
      <template v-if="!submitted">
        <h3 class="text-xl font-semibold mb-4">Contact</h3>
        <p class="mb-6 text-zinc-700">
          Reach out about new opportunities, collaborations or to just say hello.
        </p>

        <Form
          :validation-schema="schema"
          class="flex flex-col gap-4 text-left"
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot"
          @submit="submitForm"
        >
          <label class="hidden">
            <input name="bot" />
          </label>

          <div>
            <label for="name" class="sr-only">Your Name (Required)</label>
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              class="border border-zinc-300 p-3 rounded-md w-full"
            />
            <ErrorMessage name="name" class="mt-1 text-red-600 text-sm" />
          </div>

          <div>
            <label for="email" class="sr-only">Your Email (Required)</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              class="border border-zinc-300 p-3 rounded-md w-full"
            />
            <ErrorMessage name="email" class="mt-1 text-red-600 text-sm" />
          </div>

          <div>
            <label for="company" class="sr-only">Company Name (Optional)</label>
            <Field
              id="company"
              name="company"
              type="text"
              placeholder="Company Name (Optional)"
              class="border border-zinc-300 p-3 rounded-md w-full"
            />
          </div>

          <div>
            <label for="message" class="sr-only">Your Message (Required)</label>
            <Field
              id="message"
              name="message"
              as="textarea"
              rows="4"
              placeholder="Your Message"
              class="border border-zinc-300 p-3 rounded-md w-full"
            />
            <ErrorMessage name="message" class="mt-1 text-red-600 text-sm" />
          </div>

          <div
            v-if="serverError"
            class="mt-3 flex flex-col items-center justify-center"
            role="alert"
            aria-live="polite"
          >
            <span class="text-red-600 text-lg mb-2"> *{{ serverError }} </span>
          </div>

          <button
            type="submit"
            class="self-start px-5 py-2 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition rounded-md cursor-pointer"
          >
            Send Message
          </button>
        </Form>
      </template>
      <template v-else>
        <div class="py-16 flex flex-col items-center justify-center">
          <h4 class="text-2xl font-semibold mb-4">Thank you!</h4>
          <p class="text-lg text-zinc-700">
            Your message has been sent. I'll get back to you soon.
          </p>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

// Validation schema with custom messages
const schema = yup.object({
  name: yup.string().required('The name field is required'),
  email: yup.string().required('The email field is required').email('The email field is invalid'),
  company: yup.string(), // Optional field
  message: yup
    .string()
    .required('The message field is required')
    .min(10, 'The message field must be at least 10 characters long'),
})

const submitted = ref(false)
const serverError = ref('')

async function submitForm(values: Record<string, string>): Promise<void> {
  try {
    // Encode data for netlify forms
    const params = new URLSearchParams()
    params.append('form-name', 'contact')

    for (const [key, value] of Object.entries(values)) {
      params.append(key, value)
    }

    await axios.post('/', params.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })

    submitted.value = true
  } catch (err) {
    console.error('Error:', err)
    serverError.value = 'There was an error submitting the form. Please try again later.'
  }
}
</script>
