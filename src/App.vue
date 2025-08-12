<template>
  <div :class="theme === 'default' ? '' : theme">
    <Theme />
    <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-1 min-h-screen">
      <Intro />
      <About />
    </div>
    <div class="bg-brand border-t border-zinc-200 min-h-screen">
      <Contact />
      <footer
        class="text-sm text-right p-2 pr-4 text-zinc-500 contrast:bg-gradient-to-br contrast:from-indigo-900 contrast:to-brand-contrast contrast:text-white transition"
      >
        © {{ currentYear }} jeissler.com
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
