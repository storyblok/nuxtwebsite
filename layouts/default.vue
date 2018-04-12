<template>
  <div>
    <Header v-if="$route.path != '/'"/>
    <nuxt/>
    
    <footer>
      <a href="https://github.com/storyblok/nuxtwebsite" target="_blank" rel="noopener nofollow"><img src="https://a.storyblok.com/f/39898/766x200/643e23f56d/nuxt-doc.svg" alt="Logo"></a>
    </footer>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
html, body {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

.container {
  max-width: 740px;
  margin: 0 auto;
  padding: 0px 20px;
}

img {
  max-width: 100%;
}

h1 {
  display: block;
  font-size: 2em;
  -webkit-margin-before: 0.67em;
  -webkit-margin-after: 0.67em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
}

a {
  color: #000;
  text-decoration: none;
  &.nuxt-link-exact-active, &.nuxt-link-active, &:hover {
    color: #42b883;
    border-color: #42b883;
    text-decoration: underline;
  }
}

footer {
  text-align: center;
  padding: 30px 0px;
  img {
    height: 30px;
  }
}
</style>