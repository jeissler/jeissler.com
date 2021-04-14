<template>
  <button class="mode" @click="toggleMode">
    <img src="~/assets/mode.svg" width="20" height="20" alt="mode">
    {{ label }}
  </button>
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api'
import { toggleMode } from '@/logic'

export default defineComponent({
  props: {
    mode: {
      type: String,
      default: '',
      required: true
    }
  },
  setup (props) {
    const label = computed(() => props.mode)

    return {
      toggleMode,
      label
    }
  }
})
</script>
