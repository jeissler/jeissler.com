<template>
  <div class="flex items-center gap-2 p-2 fixed top-2 right-5 bg-white rounded-lg">
    <label class="block text-sm font-medium" for="theme-toggle">Toggle Theme</label>
    <div
      class="group relative inline-flex h-5 w-10 shrink-0 items-center justify-center rounded-full outline-offset-2 outline-brand-contrast has-focus-visible:outline-2"
    >
      <span
        class="absolute mx-auto h-4 w-9 rounded-full bg-brand inset-ring inset-ring-gray-900/15 transition-colors duration-200 ease-in-out group-has-checked:bg-brand-contrast"
      />
      <span
        class="absolute left-0 size-5 rounded-full border border-gray-300 bg-white shadow-xs transition-transform duration-200 ease-in-out group-has-checked:translate-x-5"
      />
      <input
        v-model="contrastActive"
        type="checkbox"
        class="absolute inset-0 appearance-none focus:outline-hidden"
        aria-label="Theme toggle"
        name="theme"
        id="theme-toggle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { contrastActive } = storeToRefs(themeStore)
</script>
