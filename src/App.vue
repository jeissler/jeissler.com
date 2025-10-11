<template>
  <div :class="theme === 'default' ? '' : theme">
    <Theme />
    <router-view />
    <footer
      class="p-2 pr-4 mt-auto contrast:bg-gradient-to-br contrast:from-indigo-900 contrast:to-brand-contrast transition"
    >
      <p class="text-sm text-right text-zinc-500 contrast:text-white">
        © {{ currentYear }} jeissler.com
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Theme from '@/components/Theme.vue'

import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'

const currentYear = new Date().getFullYear()
const { theme } = storeToRefs(useThemeStore())
</script>
