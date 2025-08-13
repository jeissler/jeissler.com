<template>
  <section
    class="bg-brand p-10 flex flex-col justify-between transition contrast:bg-gradient-to-br contrast:from-indigo-900 contrast:to-brand-contrast"
  >
    <div class="mt-3">
      <h1 class="text-4xl md:text-6xl font-semibold mb-6 contrast:text-white">Jeremy Eissler</h1>
      <p class="text-lg md:text-xl text-zinc-700 leading-relaxed max-w-md contrast:text-indigo-100">
        I am a maker, doer and way-finding engineer. Focused on building accessable interfaces,
        scalable systems and delightful tools.
      </p>
    </div>
    <nav class="mt-12 text-sm font-medium flex gap-6">
      <a
        href="https://github.com/jeissler"
        target="_blank"
        class="hover:underline contrast:text-indigo-200 contrast:hover:text-white"
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/jeissler"
        target="_blank"
        class="hover:underline contrast:text-indigo-200 contrast:hover:text-white"
      >
        LinkedIn
      </a>
      <router-link
        :to="{ name: 'contact' }"
        class="hover:underline contrast:text-indigo-200 contrast:hover:text-white"
      >
        Contact
      </router-link>
    </nav>
  </section>
</template>
