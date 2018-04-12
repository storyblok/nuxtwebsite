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
    const homeResponse = await context.app.$storyapi.get(`cdn/stories${context.route.path}`, { version: 'draft' })
    return { story: homeResponse.data.story }
  }
}
</script>