<template>
  <div>
    Post Overview
  </div>
</template>

<script>
import { isEditMode } from '@/plugins/is-edit-mode'

export default {
  mounted () {
    isEditMode(this)
  },
  async asyncData (context) {
    const { data } = await context.app.$storyapi.get(`cdn/stories/`, { version: 'draft', starts_with: `posts/` })
    return { posts: data.stories }
  }
}
</script>