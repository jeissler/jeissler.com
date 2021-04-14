<template>
  <div class="container" style="display: none;">
    <Logo />
    <main class="content">
      <h1 class="title">
        Jeremy Eissler
      </h1>
      <nav class="subtitle">
        <template v-for="(link, i) in links">
          <nuxt-link class="child-link" :key="link.title" :to="link.url">{{ link.title }}</nuxt-link><span v-if="i < 2" class="divider" :key="i">+</span>
        </template>
      </nav>
      <div class="intro">
        <Nuxt />
      </div>
      <button class="button--green">
        <a
          href="https://www.linkedin.com/in/jeissler/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in Touch
        </a>
      </button>
    </main>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup () {
    const links = [
      {
        title: 'human',
        url: '/human'
      },
      {
        title: 'leader',
        url: '/leader'
      },
      {
        title: 'engineer',
        url: '/'
      }
    ]

    return {
      links
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex !important;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 50px 10px 75px;
}

.mode--light,
.mode--dark {
  transition: background 0.5s ease-in-out;
}

.mode--dark {
  background: black;
}

.content {
  position: relative;
  z-index: 1;
}

.title {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #bbb;
  letter-spacing: 1px;
  line-height: 1;
  margin-bottom: 10px;
}

.subtitle {
  font-weight: 300;
  text-transform: uppercase;
  font-size: 24px;
  color: #c6c6c6;
  word-spacing: 5px;
  padding: 5px 0 20px;
}

.subtitle a {
  display: inline-block;
}

.child-link {
  transition: color 0.2s ease-in-out;
}

.child-link:hover,
.child-link.nuxt-link-exact-active {
  border-bottom: 1px dotted #00c58e;
  color: #00c58e;
}

.divider {
  color: #00c58e;
  margin: 0 10px;
}

.intro {
  max-width: 930px;
  margin: 0 auto;
  line-height: 1.7;
  color: #c6c6c6;
  padding-bottom: 40px;
  font-weight: 200;
}

/* selection */
.intro,
.subtitle,
.title {
  transition: color 0.33s ease-in-out;
}

.mode--light .intro,
.mode--light .subtitle,
.mode--light .title {
  color: #4f4f4f;
}

.links {
  padding-top: 15px;
}

/* child route transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
