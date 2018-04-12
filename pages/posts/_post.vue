<template>
  <article v-editable="story.content">
    <h1>{{story.name}}</h1>

    <HTMLContent :content="story.content.content" />
  </article>
</template>

<script>
import { isEditMode } from '@/plugins/is-edit-mode'
import HTMLContent from '@/components/HTMLContent'

export default {
  mounted () {
    isEditMode(this)
  },
  components: {
    HTMLContent
  },
  async asyncData (context) {
    const full_slug = `posts/${context.params.post}`
    const { data } = await context.app.$storyapi.get(`cdn/stories/${full_slug}`, { version: 'draft' })
    return { story: data.story }
  }
}
</script>