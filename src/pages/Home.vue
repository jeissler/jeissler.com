<template>
  <main class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-1 min-h-screen">
    <Intro />
    <About />
  </main>
  <div
    class="bg-brand contrast:bg-white border-t border-zinc-200 min-h-screen h-full flex flex-col"
  >
    <Contact />
  </div>
</template>

<script setup lang="ts">
import Intro from '@/components/Intro.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
</script>
