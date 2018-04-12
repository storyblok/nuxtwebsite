<template>
  <article v-editable="post.content">
    <img :src="resize(post.content.image, '600x0')" :alt="post.content.image_alt">
    <h1>{{post.name}}</h1>
    <div>
      <img :src="resize(author.content.image, '50x0')" :alt="author.name">
      <span>{{author.name}}</span>
    </div>
    <MarkdownContent :content="post.content.content" />
  </article>
</template>

<script>
import { isEditMode, resize } from '@/plugins/helper'
import MarkdownContent from '@/components/MarkdownContent'

export default {
  mounted () {
    isEditMode(this)
  },
  components: {
    MarkdownContent
  },
  methods: {
    resize
  },
  async asyncData (context) {
    // load the content-entry at the current path - will be something like: '/posts/first-post'
    const { data } = await context.app.$storyapi.get(`cdn/stories${context.route.path}`, { version: 'draft', resolve_links:1 })
    return { post: data.story, author: data.story.content.author.story }
  }
}
</script>