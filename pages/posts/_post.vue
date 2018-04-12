<template>
  <article v-editable="story.content">
    <img :src="resizeImages(story.content.image, '600x0')" :alt="story.content.image_alt">
    <h1>{{story.name}}</h1>
    <MarkdownContent :content="story.content.content" />
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
    return { story: data.story }
  }
}
</script>