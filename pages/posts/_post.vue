<template>
  <article v-editable="story.content">
    <img :src="story.content.image" :alt="story.content.image_alt">
    <h1>{{story.name}}</h1>
    <MarkdownContent :content="story.content.content" />
  </article>
</template>

<script>
import { isEditMode } from '@/plugins/is-edit-mode'
import MarkdownContent from '@/components/MarkdownContent'

export default {
  mounted () {
    isEditMode(this)
  },
  components: {
    MarkdownContent
  },
  async asyncData (context) {
    const full_slug = `posts/${context.params.post}`
    const { data } = await context.app.$storyapi.get(`cdn/stories/${full_slug}`, { version: 'draft' })
    return { story: data.story }
  }
}
</script>