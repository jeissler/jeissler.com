<template>
  <div :class="theme === 'default' ? '' : theme">
    <Theme />
    <main class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-1 min-h-screen">
      <Intro />
      <About />
    </main>
    <div
      class="bg-brand contrast:bg-white border-t border-zinc-200 min-h-screen h-full flex flex-col"
    >
      <Contact />
      <footer
        class="p-2 pr-4 mt-auto contrast:bg-gradient-to-br contrast:from-indigo-900 contrast:to-brand-contrast transition"
      >
        <p class="text-sm text-right text-zinc-500 contrast:text-white">
          © {{ currentYear }} jeissler.com
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import Intro from '@/components/Intro.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Theme from '@/components/Theme.vue'

import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'

const currentYear = new Date().getFullYear()
const { theme } = storeToRefs(useThemeStore())
</script>
