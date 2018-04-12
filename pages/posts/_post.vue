<template>
  <div>
    <h1>{{story.name}}</h1>
    <HTMLContent :content="blok.content" />
  </div>
</template>

<script>
import { isEditMode } from '@/plugins/is-edit-mode'

export default {
  mounted () {
    isEditMode(this)
  },
  async asyncData (context) {
    const full_slug = `posts/${context.params.post}`
    const { data } = await context.app.$storyapi.get(`cdn/stories/${full_slug}`, { version: 'draft' })
    return { story: data.story }
  }
}
</script>