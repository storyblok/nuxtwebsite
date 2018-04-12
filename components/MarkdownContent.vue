<template>
  <div class="markdown" v-html="parsed"></div>
</template>

<script>
import { markdown } from '@/plugins/helper'

export default {
  props: ['content'],
  computed: {
    parsed() {
      // Parse markdown using "marked" and add a parameter for the 
      // Storyblok Image Service: https://www.storyblok.com/docs/image-service
      return markdown(this.content, '700x0')
    }
  }
}
</script>

<style lang="scss">
.markdown {
  margin-bottom: 40px;
  h2, h3, h4, h5, h6 {
    font-weight: 300;
  }
  h2 {
    padding-bottom: 10px;
    border-bottom: 1px solid #888;
  }
  img {
    transition: transform 100ms ease;
    @media screen and (min-width: 840px) {
      width: 110%;
      max-width: 110%;
      transform: translateX(-5%); 
    }
    border-radius: 4px;
  }
  a {
    border-bottom: 0px;
    color: #42b883;
    font-weight: 600;
    text-decoration: none;
    &:hover {
      color: #42b883;
      text-decoration: underline;
    }
  }
  li {
    padding-bottom: 5px;
    ul, ol {
      padding-top:5px;
    }
  }
  p {
    line-height: 1.5;
    code {
      display: inline;
      background: #f5f5f5;
      border-radius: 4px;
      border: 1px solid #d8d8d8;
      font-family: Consolas, monospace, serif;
      font-size: 90%;
    }
  }
  pre {
    display: block;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 4px;
    border: 1px solid #d8d8d8;
    font-size: 14px;
    font-family: Consolas, monospace, serif;
    color: #444;
    tab-size: 4;
    overflow: auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    th, td {
      border: 1px solid #ddd;
      padding: 15px;
      text-align: left;
    }
  }
  iframe {
    max-width: 100%;
  }
}
</style>