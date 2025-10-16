<template>
  <div class="pt-10 pb-15 px-5 bg-brand contrast:bg-white">
    <div class="max-w-7xl mx-auto">
      <nav class="text-sm font-bold mb-6">
        <button @click="$router.back()">« Back</button> |
        <router-link :to="{ name: 'portfolio-markdown' }">View as markdown</router-link>
      </nav>
      <code v-if="$route.name === 'portfolio-markdown'" v-html="PortfolioMarkdown" />
      <Portfolio v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Portfolio from '@/portfolio/PORTFOLIO.md'
import PortfolioMarkdown from '@/portfolio/PORTFOLIO.md?raw'

onMounted(() => {
  document.querySelectorAll('a').forEach((link) => {
    if (link.hostname === window.location.hostname) return

    link.setAttribute('target', '_blank')
    link.setAttribute('rel', 'noopener noreferrer')
  })
})
</script>

<style scoped>
@reference '@/styles/main.css';

code {
  white-space: pre-wrap;
}

button {
  @apply cursor-pointer hover:underline;
}

::v-deep() {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-bold mb-3;
  }

  h1 {
    @apply text-2xl mb-4;
  }

  h2,
  h3 {
    @apply text-lg mb-3;
  }

  p:not(:first-of-type) {
    @apply mb-3 px-10;
  }

  a {
    @apply font-bold text-brand-contrast hover:underline;
  }

  strong {
    @apply font-bold;
  }

  ul {
    @apply flex flex-wrap items-center gap-2 my-6;
  }

  li ~ li,
  li:has(~ li) {
    @apply md:w-1/2 md:flex-1;
  }

  hr {
    @apply my-6 border-gray-500 contrast:border-brand-contrast;
  }
}
</style>
