<template>
  <div :class="modeClass">
    <header>
      <ul>
        <li>
          <ThemeSwitcher :mode="mode" />
        </li>
        <li style="width: 100%;">
          &nbsp;
        </li>
        <li v-for="link in socialLinks" :key="link.name">
          <a :href="link.url" target="_blank" rel="noopener noreferrer" :title="link.name">
            <img :src="require(`~/assets/${link.img}`)" width="20" height="20" :alt="link.name">
          </a>
        </li>
      </ul>
    </header>
    <Nuxt />
    <footer>
      v0.2 / built with Vue / generated with Nuxt / &copy; jeissler.com {{ year }}
    </footer>
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { getMode } from '@/logic'

export default defineComponent({
  setup () {
    const mode = getMode
    const modeClass = computed(() => `mode--${mode.value}`)
    const year = new Date().getFullYear()
    const socialLinks = [
      {
        name: 'github',
        img: 'gh.svg',
        url: 'https://github.com/jeissler'
      },
      {
        name: 'linkedIn',
        img: 'in.svg',
        url: 'https://www.linkedin.com/in/jeissler/'
      }
    ]

    return {
      mode,
      socialLinks,
      modeClass,
      year
    }
  }
})
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}

.button--green {
  font-size: 1rem;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid #00c58e;
  background: #00c58e;
  text-decoration: none;
  padding: 10px 30px;
  transition: all 0.2s ease-in-out;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

header {
  position: absolute;
  width: 100%;
  background: rgba(255, 255, 255, 0.13);
  z-index: 1;
  padding: 7px 0 5px 0;
}

.mode--light header {
  background: rgb(123, 123, 123);
}

header ul {
  display: flex;
  justify-content: flex-end;
  max-width: 930px;
  margin: 0 auto;
}

header li {
  margin: 0 15px 0 0;
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
}

header li:hover {
  opacity: 1;
}

footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  font-size: 0.865rem;
  padding: 2px 10px;
  text-align: right;
  color: #28495e;
  background: #00c58e;
  z-index: 1;
}

.mode {
  background: none;
  border: none;
  display: flex;
  color: white;
  font-size: 0.865rem;
}

.mode img {
  margin: 0 5px 0 0;
}
</style>
