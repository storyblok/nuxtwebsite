<template>
  <article v-editable="author.content">
    <img :src="resizeImages(author.content.image, '100x0')" :alt="author.name">
    <h1>{{author.name}}</h1>
    <p>{{author.content.about}}</p>
    <ul>
      <li :key="social_link._uid" v-for="social_link in author.content.socials">
        <a :href="social_link.link.cached_url" target="_blank" rel="noopener nofollow">{{social_link.type}}</a>
      </li>
    </ul>
  </article>
</template>

<script>
import { isEditMode, resizeImages } from '@/plugins/helper'
import MarkdownContent from '@/components/MarkdownContent'

export default {
  mounted () {
    isEditMode(this)
  },
  components: {
    MarkdownContent
  },
  methods: {
    resizeImages
  },
  async asyncData (context) {
    // load the content-entry at the current path - will be something like: '/posts/first-post'
    const { data } = await context.app.$storyapi.get(`cdn/stories${context.route.path}`, { version: 'draft' })
    return { author: data.story }
  }
}
</script>