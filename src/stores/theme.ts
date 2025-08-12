import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const themes = ['default', 'contrast']

  const theme = ref(localStorage.getItem('theme') || 'default')

  const contrastActive = computed({
    get: () => theme.value === 'contrast',
    set: (val: boolean) => {
      theme.value = val ? themes[1] : themes[0]
      localStorage.setItem('theme', theme.value)
    },
  })

  return { contrastActive, theme, themes }
})
