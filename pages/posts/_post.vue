<template>
  <article v-editable="post.content">
    <img :src="resizeImages(post.content.image, '600x0')" :alt="post.content.image_alt">
    <h1>{{post.name}}</h1>
    <div>
      <img :src="author.content.image" :alt="author.content.firstname + ' ' + author.content.lastname">
      <span>{{author.content.firstname}} {{author.content.lastname}}</span>
    </div>
    <MarkdownContent :content="post.content.content" />
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
    const { data } = await context.app.$storyapi.get(`cdn/stories${context.route.path}`, { version: 'draft', resolve_links:1 })
    return { post: data.story, author: data.story.content.author.story }
  }
}
</script>