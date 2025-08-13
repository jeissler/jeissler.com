import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const themes = ['default', 'contrast']

  // Check if we're in a browser environment
  const isClient = typeof window !== 'undefined'

  const theme = ref(isClient ? localStorage.getItem('theme') || themes[0] : themes[0])

  const contrastActive = computed({
    get: () => theme.value === 'contrast',
    set: (val: boolean) => {
      theme.value = val ? themes[1] : themes[0]
      if (isClient) {
        localStorage.setItem('theme', theme.value)
      }
    },
  })

  return { contrastActive, theme, themes }
})
