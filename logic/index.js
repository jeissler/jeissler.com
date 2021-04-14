/**
 * Simple state logic using vue 3 composition api
 * Ie functionally similar to vuex patterns
 */

import { ref, computed } from '@nuxtjs/composition-api'

const state = ref({ mode: 'dark' })

// Mutations
function setMode (mode) {
  state.value.mode = mode
}

// Actions
function toggleMode () {
  const toggleMode = state.value.mode === 'dark' ? 'light' : 'dark'
  setMode(toggleMode)
}

// Getters
const getMode = computed(() => state.value.mode)

export {
  getMode,
  toggleMode
}
