<template>
  <div>
    <component v-if="story.content.component" :key="story.content._uid" :story="story" :blok="story.content" :is="story.content.component"></component>
  </div>
</template>

<script>
import { isEditMode } from '@/plugins/helper'

export default {
  mounted () {
    isEditMode(this)
  },
  async asyncData (context) {
    const full_slug = `${context.params.folder}/${context.params.slug}`
    const { data } = await context.app.$storyapi.get(`cdn/stories/${full_slug}`, { version: 'draft' })
    return { story: data.story }
  }
}
</script>